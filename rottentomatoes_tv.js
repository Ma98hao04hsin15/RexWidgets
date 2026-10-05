// Rotten Tomatoes - ForwardWidgets 模塊 v1.2.0
// 劇集: https://www.rottentomatoes.com/browse/tv_series_browse/sort:newest
// 電影: https://www.rottentomatoes.com/browse/movies_at_home/sort:popular

var SORT_OPTIONS = function (def) {
  var opts = [
    { title: "熱門", value: "popular" },
    { title: "最新", value: "newest" },
    { title: "番茄指數最高", value: "critic_highest" },
    { title: "爆米花指數最高", value: "audience_highest" },
    { title: "A-Z", value: "a_z" }
  ];
  return { name: "sort", title: "排序", type: "enumeration", value: def, enumOptions: opts };
};

var AFFILIATE_OPTIONS = {
  name: "affiliate", title: "平台", type: "enumeration", value: "all",
  enumOptions: [
    { title: "全部", value: "all" },
    { title: "Netflix", value: "netflix" },
    { title: "Prime Video", value: "prime-video" },
    { title: "Apple TV", value: "apple-tv-plus" },
    { title: "Disney+", value: "disney-plus" },
    { title: "Max", value: "max" },
    { title: "Hulu", value: "hulu" },
    { title: "Paramount+", value: "paramount-plus" },
    { title: "Peacock", value: "peacock" },
    { title: "Fandango at Home", value: "fandango" }
  ]
};

var GENRE_OPTIONS = {
  name: "genre", title: "類型", type: "enumeration", value: "all",
  enumOptions: [
    { title: "全部", value: "all" },
    { title: "動作", value: "action" },
    { title: "冒險", value: "adventure" },
    { title: "動畫", value: "animation" },
    { title: "喜劇", value: "comedy" },
    { title: "犯罪", value: "crime" },
    { title: "紀錄片", value: "documentary" },
    { title: "劇情", value: "drama" },
    { title: "奇幻", value: "fantasy" },
    { title: "恐怖", value: "horror" },
    { title: "懸疑驚悚", value: "mystery_and_thriller" },
    { title: "愛情", value: "romance" },
    { title: "科幻", value: "sci_fi" }
  ]
};

var MATCH_OPTIONS = {
  name: "matchTmdb", title: "匹配 TMDB", type: "enumeration", value: "true",
  enumOptions: [
    { title: "是（可看詳情）", value: "true" },
    { title: "否（更快）", value: "false" }
  ]
};

var PAGE_PARAM = { name: "page", title: "頁碼", type: "page" };

var WidgetMetadata = {
  id: "rottentomatoes_tv",
  title: "爛番茄",
  icon: "https://raw.githubusercontent.com/Ma98hao04hsin15/RexWidgets/refs/heads/main/rotten-tomatoes.png",
  description: "Rotten Tomatoes 劇集與在家看電影：熱門、最新、評分排序，可按平台與類型篩選",
  author: "Claude",
  site: "https://www.rottentomatoes.com",
  version: "1.2.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 3600,
  modules: [
    {
      title: "爛番茄劇集",
      description: "Rotten Tomatoes TV Shows",
      requiresWebView: false,
      functionName: "loadRTTV",
      sectionMode: false,
      cacheDuration: 3600,
      params: [SORT_OPTIONS("newest"), AFFILIATE_OPTIONS, GENRE_OPTIONS, MATCH_OPTIONS, PAGE_PARAM]
    },
    {
      title: "爛番茄電影（在家看）",
      description: "Rotten Tomatoes Movies at Home",
      requiresWebView: false,
      functionName: "loadRTMovies",
      sectionMode: false,
      cacheDuration: 3600,
      params: [SORT_OPTIONS("popular"), AFFILIATE_OPTIONS, GENRE_OPTIONS, MATCH_OPTIONS, PAGE_PARAM]
    }
  ]
};

var RT_BASE = "https://www.rottentomatoes.com";
var PAGE_SIZE = 30;
var HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36",
  "Accept": "text/html,application/xhtml+xml",
  "Accept-Language": "en-US,en;q=0.9",
  "Referer": RT_BASE + "/"
};

var CONFIGS = {
  tv: { browse: "tv_series_browse", prefix: "tv", mediaType: "tv", tmdbPath: "/search/tv" },
  movie: { browse: "movies_at_home", prefix: "m", mediaType: "movie", tmdbPath: "/search/movie" }
};

// ---------- 入口 ----------
async function loadRTTV(params) { return await loadRT(CONFIGS.tv, params, "newest"); }
async function loadRTMovies(params) { return await loadRT(CONFIGS.movie, params, "popular"); }

async function loadRT(cfg, params, defSort) {
  params = params || {};
  var page = parseInt(params.page || 1, 10) || 1;
  var list = await fetchFromHtml(cfg, buildFilterPath(params, defSort), page);
  console.log("解析到 " + list.length + " 條");
  if (!list.length) return [];

  if (params.matchTmdb === "false") return list.map(function (it) { return toUrlItem(cfg, it); });

  return await Promise.all(list.map(async function (it) {
    try {
      var t = await matchTmdb(cfg, it.title);
      return t ? toTmdbItem(cfg, it, t) : toUrlItem(cfg, it);
    } catch (e) {
      return toUrlItem(cfg, it);
    }
  }));
}

function buildFilterPath(params, defSort) {
  var parts = [];
  if (params.affiliate && params.affiliate !== "all") parts.push("affiliates:" + params.affiliate);
  if (params.genre && params.genre !== "all") parts.push("genres:" + params.genre);
  parts.push("sort:" + (params.sort || defSort));
  return parts.join("~");
}

// ---------- 解析網頁 ----------
async function fetchFromHtml(cfg, filter, page) {
  // ?page=N 會一次返回前 N 頁的累積結果
  var url = RT_BASE + "/browse/" + cfg.browse + "/" + filter + (page > 1 ? "?page=" + page : "");
  console.log("請求: " + url);
  var res = await Widget.http.get(url, { headers: HEADERS });
  var $ = Widget.html.load(res.data || "");

  var $scope = $('[data-qa="discovery-media-list"], .discovery-tiles, .discovery-grids-container').first();
  if (!$scope.length) $scope = $("body");

  // 只接受 /tv/slug 或 /m/slug（排除 /tv/slug/s01 之類的子頁）
  var linkRe = new RegExp("^/" + cfg.prefix + "/[^/]+$");
  var map = {};
  var order = [];

  $scope.find("a[href]").each(function (_, a) {
    var href = ($(a).attr("href") || "").replace(RT_BASE, "").split("?")[0].replace(/\/$/, "");
    if (!linkRe.test(href)) return;
    // 排除頂部導航欄裡的推薦連結
    if ($(a).closest("header, nav, rt-header, #header-main, [data-qa*='header'], [data-qa*='masthead']").length) return;

    var $box = $(a).closest("[data-ems-id], .flex-container, tile-dynamic");
    if (!$box.length) $box = $(a).parent();

    var item = map[href];
    if (!item) {
      item = { title: "", link: RT_BASE + href, poster: "", dateText: "", critics: "", audience: "" };
      map[href] = item;
      order.push(href);
    }

    item.title = item.title || cleanText($box.find('[data-qa="discovery-media-list-item-title"]').first().text());

    if (!item.poster) {
      $box.find("rt-img, img").each(function (_, img) {
        var src = $(img).attr("src") || $(img).attr("data-src") || "";
        if (src && !/\.svg/.test(src)) {
          item.poster = src;
          if (!item.title) item.title = cleanText($(img).attr("alt"));
          return false;
        }
      });
    }

    item.dateText = item.dateText ||
      cleanText($box.find('[data-qa="discovery-media-list-item-start-date"]').first().text());

    item.critics = item.critics ||
      digits($box.find('[slot="criticsScore"]').first().text()) ||
      digits($box.find("[criticsscore]").attr("criticsscore"));
    item.audience = item.audience ||
      digits($box.find('[slot="audienceScore"]').first().text()) ||
      digits($box.find("[audiencescore]").attr("audiencescore"));

    // 兜底：從連結文字解析，如 "92% 73% Lanterns Latest Episode: Sep 27" / "85% Movie Streaming Sep 26"
    if (!item.title) {
      var txt = cleanText($(a).text()).replace(/\s*Watchlist$/i, "").replace(/^(\d+%\s*)+/, "");
      var m = txt.match(/^(.*?)\s*((Latest Episode|Premiere[sd]?|First Aired|Streaming|Opened|Released)[^]*)$/i);
      if (m) { item.title = m[1]; item.dateText = item.dateText || m[2]; }
      else item.title = txt;
    }
  });

  var out = order.map(function (h) { return map[h]; }).filter(function (x) { return x.title; });
  return page > 1 ? out.slice((page - 1) * PAGE_SIZE) : out;
}

// ---------- TMDB 匹配 ----------
async function matchTmdb(cfg, title) {
  var q = title.replace(/\s*\(\d{4}\)\s*$/, "").trim();
  var res = await Widget.tmdb.get(cfg.tmdbPath, { params: { query: q, language: "zh-CN" } });
  var results = (res && res.results) || (res && res.data && res.data.results) || [];
  if (!results.length) return null;
  var lower = q.toLowerCase();
  var exact = results.find(function (r) {
    var names = [r.original_name, r.name, r.original_title, r.title];
    return names.some(function (n) { return (n || "").toLowerCase() === lower; });
  });
  return exact || results[0];
}

// ---------- 輸出 ----------
function scoreLine(it) {
  var s = [];
  if (it.critics) s.push("🍅 " + it.critics + "%");
  if (it.audience) s.push("🍿 " + it.audience + "%");
  if (it.dateText) s.push(it.dateText);
  return s.join(" · ");
}

function toTmdbItem(cfg, it, t) {
  return {
    id: String(t.id),
    type: "tmdb",
    mediaType: cfg.mediaType,
    title: t.name || t.title || it.title,
    posterPath: t.poster_path ? "https://image.tmdb.org/t/p/w500" + t.poster_path : it.poster,
    backdropPath: t.backdrop_path ? "https://image.tmdb.org/t/p/w780" + t.backdrop_path : "",
    releaseDate: t.first_air_date || t.release_date || "",
    rating: it.critics ? Number(it.critics) / 10 : t.vote_average || 0,
    description: scoreLine(it) + (t.overview ? "\n" + t.overview : ""),
    link: it.link
  };
}

function toUrlItem(cfg, it) {
  return {
    id: it.link,
    type: "url",
    mediaType: cfg.mediaType,
    title: it.title,
    posterPath: it.poster,
    rating: it.critics ? Number(it.critics) / 10 : 0,
    description: scoreLine(it),
    link: it.link
  };
}

// ---------- 工具 ----------
function cleanText(s) { return (s || "").replace(/\s+/g, " ").trim(); }
function digits(s) { return (s || "").replace(/[^\d]/g, ""); }
