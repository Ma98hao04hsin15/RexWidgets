// streama_nmin.js - 农民影视 (Streama Native Contract)
var SITE = "https://vip.wwgz.cn:5200";
var PLAYER_SITE = "https://api.nmvod.me:520";
var UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.1 Mobile/15E148 Safari/604.1";
var PLAY_API = PLAYER_SITE + "/player/?url=";
var CACHE_TTL = 300; // 5 minutes in seconds for Widget.storage

var WidgetMetadata = {
  id: "streama.nongmin.vod",
  title: "农民影视",
  icon: "https://cdn.phototourl.com/member/2026-09-30-d216afb7-cc9b-4e7c-b2c3-0307b7e5a3d2.png",
  description: "农民影视分类浏览与搜索播放源（Streama原生契约）",
  version: "2.0.0",
  requiredVersion: "1.0.0",
  modules: [
    {
      id: "movies",
      title: "电影",
      description: "农民影视电影分类",
      functionName: "loadCategory",
      type: "video",
      params: [
        { name: "categoryId", title: "分类", type: "constant", value: "1" },
        {
          name: "type", title: "类型", type: "enumeration", value: "1",
          enumOptions: [
            { title: "全部", value: "1" }, { title: "动作片", value: "5" },
            { title: "喜剧片", value: "6" }, { title: "爱情片", value: "7" },
            { title: "科幻片", value: "8" }, { title: "恐怖片", value: "9" },
            { title: "剧情片", value: "10" }, { title: "战争片", value: "11" },
            { title: "惊悚片", value: "12" }, { title: "奇幻片", value: "13" }
          ]
        },
        {
          name: "area", title: "地区", type: "enumeration", value: "",
          enumOptions: [
            { title: "全部", value: "" }, { title: "大陆", value: "大陆" },
            { title: "香港", value: "香港" }, { title: "台湾", value: "台湾" },
            { title: "美国", value: "美国" }, { title: "日本", value: "日本" },
            { title: "韩国", value: "韩国" }, { title: "印度", value: "印度" },
            { title: "泰国", value: "泰国" }, { title: "英国", value: "英国" },
            { title: "法国", value: "法国" }, { title: "加拿大", value: "加拿大" },
            { title: "西班牙", value: "西班牙" }, { title: "俄罗斯", value: "俄罗斯" },
            { title: "其他", value: "其他" }
          ]
        },
        {
          name: "year", title: "年份", type: "enumeration", value: "0",
          enumOptions: [
            { title: "全部", value: "0" }, { title: "2026", value: "2026" },
            { title: "2025", value: "2025" }, { title: "2024", value: "2024" },
            { title: "2023", value: "2023" }, { title: "2022", value: "2022" },
            { title: "2021", value: "2021" }, { title: "2020", value: "2020" },
            { title: "2019", value: "2019" }, { title: "2018", value: "2018" },
            { title: "2017", value: "2017" }, { title: "2016", value: "2016" },
            { title: "2015", value: "2015" }, { title: "2014", value: "2014" },
            { title: "2013", value: "2013" }, { title: "2012", value: "2012" },
            { title: "2011", value: "2011" }, { title: "2010", value: "2010" },
            { title: "2009~2000", value: "2009~2000" }
          ]
        },
        {
          name: "sort", title: "排序", type: "enumeration", value: "time",
          enumOptions: [
            { title: "时间", value: "time" },
            { title: "人气", value: "hits" },
            { title: "评分", value: "score" }
          ]
        },
        { name: "page", title: "页码", type: "page", value: "1", startPage: 1 }
      ]
    },
    {
      id: "series",
      title: "连续剧",
      description: "农民影视连续剧分类",
      functionName: "loadCategory",
      type: "video",
      params: [
        { name: "categoryId", title: "分类", type: "constant", value: "2" },
        {
          name: "type", title: "类型", type: "enumeration", value: "2",
          enumOptions: [
            { title: "全部", value: "2" }, { title: "国产剧", value: "12" },
            { title: "港台泰", value: "13" }, { title: "日韩剧", value: "14" },
            { title: "欧美剧", value: "15" }
          ]
        },
        {
          name: "area", title: "地区", type: "enumeration", value: "",
          enumOptions: [
            { title: "全部", value: "" }, { title: "大陆", value: "大陆" },
            { title: "香港", value: "香港" }, { title: "台湾", value: "台湾" },
            { title: "美国", value: "美国" }, { title: "日本", value: "日本" },
            { title: "韩国", value: "韩国" }, { title: "印度", value: "印度" },
            { title: "泰国", value: "泰国" }, { title: "英国", value: "英国" },
            { title: "法国", value: "法国" }, { title: "加拿大", value: "加拿大" },
            { title: "西班牙", value: "西班牙" }, { title: "俄罗斯", value: "俄罗斯" },
            { title: "其他", value: "其他" }
          ]
        },
        {
          name: "year", title: "年份", type: "enumeration", value: "0",
          enumOptions: [
            { title: "全部", value: "0" }, { title: "2026", value: "2026" },
            { title: "2025", value: "2025" }, { title: "2024", value: "2024" },
            { title: "2023", value: "2023" }, { title: "2022", value: "2022" },
            { title: "2021", value: "2021" }, { title: "2020", value: "2020" },
            { title: "2019", value: "2019" }, { title: "2018", value: "2018" },
            { title: "2017", value: "2017" }, { title: "2016", value: "2016" },
            { title: "2015", value: "2015" }, { title: "2014", value: "2014" },
            { title: "2013", value: "2013" }, { title: "2012", value: "2012" },
            { title: "2011", value: "2011" }, { title: "2010", value: "2010" }
          ]
        },
        {
          name: "sort", title: "排序", type: "enumeration", value: "time",
          enumOptions: [
            { title: "时间", value: "time" },
            { title: "人气", value: "hits" },
            { title: "评分", value: "score" }
          ]
        },
        { name: "page", title: "页码", type: "page", value: "1", startPage: 1 }
      ]
    },
    {
      id: "variety",
      title: "综艺",
      description: "农民影视综艺分类",
      functionName: "loadCategory",
      type: "video",
      params: [
        { name: "categoryId", title: "分类", type: "constant", value: "3" },
        {
          name: "area", title: "地区", type: "enumeration", value: "",
          enumOptions: [
            { title: "全部", value: "" }, { title: "大陆", value: "大陆" },
            { title: "香港", value: "香港" }, { title: "台湾", value: "台湾" },
            { title: "美国", value: "美国" }, { title: "日本", value: "日本" },
            { title: "韩国", value: "韩国" }, { title: "印度", value: "印度" },
            { title: "泰国", value: "泰国" }, { title: "英国", value: "英国" },
            { title: "法国", value: "法国" }, { title: "加拿大", value: "加拿大" },
            { title: "西班牙", value: "西班牙" }, { title: "俄罗斯", value: "俄罗斯" },
            { title: "其他", value: "其他" }
          ]
        },
        {
          name: "year", title: "年份", type: "enumeration", value: "0",
          enumOptions: [
            { title: "全部", value: "0" }, { title: "2026", value: "2026" },
            { title: "2025", value: "2025" }, { title: "2024", value: "2024" },
            { title: "2023", value: "2023" }, { title: "2022", value: "2022" },
            { title: "2021", value: "2021" }, { title: "2020", value: "2020" },
            { title: "2019", value: "2019" }, { title: "2018", value: "2018" },
            { title: "2017", value: "2017" }, { title: "2016", value: "2016" },
            { title: "2015", value: "2015" }, { title: "2014", value: "2014" },
            { title: "2013", value: "2013" }, { title: "2012", value: "2012" },
            { title: "2011", value: "2011" }, { title: "2010", value: "2010" }
          ]
        },
        {
          name: "sort", title: "排序", type: "enumeration", value: "time",
          enumOptions: [
            { title: "时间", value: "time" },
            { title: "人气", value: "hits" },
            { title: "评分", value: "score" }
          ]
        },
        { name: "page", title: "页码", type: "page", value: "1", startPage: 1 }
      ]
    },
    {
      id: "anime",
      title: "动漫",
      description: "农民影视动漫分类",
      functionName: "loadCategory",
      type: "video",
      params: [
        { name: "categoryId", title: "分类", type: "constant", value: "4" },
        {
          name: "area", title: "地区", type: "enumeration", value: "",
          enumOptions: [
            { title: "全部", value: "" }, { title: "大陆", value: "大陆" },
            { title: "香港", value: "香港" }, { title: "台湾", value: "台湾" },
            { title: "美国", value: "美国" }, { title: "日本", value: "日本" },
            { title: "韩国", value: "韩国" }, { title: "印度", value: "印度" },
            { title: "泰国", value: "泰国" }, { title: "英国", value: "英国" },
            { title: "法国", value: "法国" }, { title: "加拿大", value: "加拿大" },
            { title: "西班牙", value: "西班牙" }, { title: "俄罗斯", value: "俄罗斯" },
            { title: "其他", value: "其他" }
          ]
        },
        {
          name: "year", title: "年份", type: "enumeration", value: "0",
          enumOptions: [
            { title: "全部", value: "0" }, { title: "2026", value: "2026" },
            { title: "2025", value: "2025" }, { title: "2024", value: "2024" },
            { title: "2023", value: "2023" }, { title: "2022", value: "2022" },
            { title: "2021", value: "2021" }, { title: "2020", value: "2020" },
            { title: "2019", value: "2019" }, { title: "2018", value: "2018" },
            { title: "2017", value: "2017" }, { title: "2016", value: "2016" },
            { title: "2015", value: "2015" }, { title: "2014", value: "2014" },
            { title: "2013", value: "2013" }, { title: "2012", value: "2012" },
            { title: "2011", value: "2011" }, { title: "2010", value: "2010" }
          ]
        },
        {
          name: "sort", title: "排序", type: "enumeration", value: "time",
          enumOptions: [
            { title: "时间", value: "time" },
            { title: "人气", value: "hits" },
            { title: "评分", value: "score" }
          ]
        },
        { name: "page", title: "页码", type: "page", value: "1", startPage: 1 }
      ]
    },
    {
      id: "short_drama",
      title: "短剧",
      description: "农民影视短剧分类",
      functionName: "loadCategory",
      type: "video",
      params: [
        { name: "categoryId", title: "分类", type: "constant", value: "26" },
        { name: "page", title: "页码", type: "page", value: "1", startPage: 1 }
      ]
    },
    {
      id: "streams",
      title: "农民影视播放源",
      description: "根据当前影片返回农民影视播放源",
      functionName: "loadStreams",
      type: "stream"
    }
  ],
  search: {
    title: "搜索农民影视",
    functionName: "searchVideos",
    params: []
  }
};

// ==================== Utility Functions ====================

function toInt(v, d) {
  var n = parseInt(v, 10);
  return isNaN(n) ? (d || 0) : n;
}

function pad2(n) {
  n = parseInt(n, 10);
  if (isNaN(n)) return "";
  return n < 10 ? "0" + n : String(n);
}

function cacheGet(key) {
  try {
    return Widget.storage.get("nmin_" + key, undefined);
  } catch (e) {
    return undefined;
  }
}

function cacheSet(key, value) {
  try {
    Widget.storage.set("nmin_" + key, value, CACHE_TTL);
  } catch (e) {}
  return value;
}

function htmlDecode(text) {
  return String(text || "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#34;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
}

function stripTags(text) {
  return String(text || "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeName(text) {
  return String(text || "")
    .replace(/\s+/g, "")
    .replace(/[：:·・,，.。!！?？\-—_'’"“”()（）\[\]【】]/g, "")
    .toLowerCase();
}

function stripTitleMeta(text) {
  return String(text || "")
    .replace(/[\(（][^\)）]*[\)）]/g, "")
    .replace(/第[0-9一二两三四五六七八九十百零〇]+季/g, "")
    .replace(/season\s*\d+/ig, "")
    .replace(/\bs\d{1,2}\b/ig, "")
    .trim();
}

function isBadHref(url) {
  url = String(url || "").trim();
  if (!url) return true;
  if (url === "#") return true;
  if (/^javascript:/i.test(url)) return true;
  if (/^void/i.test(url)) return true;
  return false;
}

function absoluteUrl(url) {
  url = String(url || "").trim();
  if (isBadHref(url)) return "";
  if (/^https?:\/\//i.test(url)) return url;
  if (!url.startsWith("/")) url = "/" + url;
  return SITE + url;
}

var CN_NUM_MAP = {
  "零": 0, "〇": 0, "一": 1, "二": 2, "两": 2,
  "三": 3, "四": 4, "五": 5, "六": 6, "七": 7, "八": 8, "九": 9
};

function cnToNum(s) {
  s = String(s || "").trim();
  if (!s) return 0;
  if (/^\d+$/.test(s)) return parseInt(s, 10);
  if (s === "十") return 10;
  var total = 0;
  s = s.replace(/^[零〇]+/, "");
  if (!s) return total;
  if (s.indexOf("百") >= 0) {
    var arr = s.split("百");
    var h = CN_NUM_MAP[arr[0]] || 1;
    total += h * 100;
    s = (arr[1] || "").replace(/^[零〇]+/, "");
  }
  if (s.indexOf("十") >= 0) {
    var arr2 = s.split("十");
    var t = arr2[0] ? CN_NUM_MAP[arr2[0]] || 0 : 1;
    var u = arr2[1] ? CN_NUM_MAP[arr2[1]] || 0 : 0;
    total += t * 10 + u;
    return total;
  }
  if (s && CN_NUM_MAP[s] != null) return total + CN_NUM_MAP[s];
  return total;
}

function extractEpisodeNumber(text) {
  var s = String(text || "");
  var m = s.match(/第\s*([0-9一二两三四五六七八九十百零〇]+)\s*[集话期]/);
  if (m) return cnToNum(m[1]);
  m = s.match(/(?:EP|E|episode)\s*0*(\d{1,4})/i);
  if (m) return parseInt(m[1], 10);
  m = s.match(/(?:^|[^\d])0*(\d{1,4})(?:$|[^\d])/);
  if (m) return parseInt(m[1], 10);
  return 0;
}

function getWantedEpisode(params) {
  params = params || {};
  var n = toInt(params.episode, 0) || toInt(params.episodeNumber, 0) ||
    toInt(params.episodeNo, 0) || toInt(params.episodeNum, 0) ||
    toInt(params.ep, 0) || toInt(params.epNumber, 0) ||
    toInt(params.number, 0) || toInt(params.currentEpisode, 0);
  if (n > 0) return n;
  if (params.episodeIndex !== undefined && params.episodeIndex !== null) {
    var idx = toInt(params.episodeIndex, -1);
    if (idx >= 0) return idx + 1;
  }
  if (params.epIndex !== undefined && params.epIndex !== null) {
    var idx2 = toInt(params.epIndex, -1);
    if (idx2 >= 0) return idx2 + 1;
  }
  n = extractEpisodeNumber(params.episodeName) ||
    extractEpisodeNumber(params.episodeTitle) ||
    extractEpisodeNumber(params.name) ||
    extractEpisodeNumber(params.subtitle);
  if (n > 0) return n;
  return 0;
}

// ==================== HTTP Helpers ====================

async function httpGet(url, extraHeaders) {
  var headers = Object.assign({ "User-Agent": UA }, extraHeaders || {});
  var resp = await Widget.http.get(url, { headers: headers, timeout: 15000 });
  if (!resp || !resp.ok) {
    throw new Error("httpGet: HTTP " + (resp ? resp.status : 0) + " " + url);
  }
  return resp;
}

async function httpPost(url, body, extraHeaders) {
  var headers = Object.assign(
    { "User-Agent": UA, "Content-Type": "application/x-www-form-urlencoded" },
    extraHeaders || {}
  );
  var resp = await Widget.http.post(url, body, { headers: headers, timeout: 15000 });
  if (!resp || !resp.ok) {
    throw new Error("httpPost: HTTP " + (resp ? resp.status : 0) + " " + url);
  }
  return resp;
}

// ==================== HTML Parsing ====================

function parseSearchResults(html) {
  html = String(html || "");
  var listMarker = html.indexOf("globalPicList");
  if (listMarker >= 0) {
    var listStart = html.indexOf("<ul", listMarker);
    var listEnd = html.indexOf("</ul>", listStart);
    if (listStart >= 0 && listEnd > listStart) {
      html = html.slice(listStart, listEnd + 5);
    }
  }
  var out = [];
  var liReg = /<li[\s\S]*?<\/li>/gi;
  var li;
  while ((li = liReg.exec(html))) {
    var item = li[0];
    var href = "", title = "", cover = "", remark = "";
    var m;
    m = item.match(/<a[^>]+href=["']([^"']+)["'][^>]*>/i);
    if (m) href = htmlDecode(m[1]);
    m = item.match(/<[^>]+class=["'][^"']*sTit[^"']*["'][^>]*>([\s\S]*?)<\/[^>]+>/i);
    if (m) title = stripTags(htmlDecode(m[1]));
    if (!title) {
      m = item.match(/title=["']([^"']+)["']/i);
      if (m) title = htmlDecode(m[1]).trim();
    }
    if (!title) {
      m = item.match(/alt=["']([^"']+)["']/i);
      if (m) title = htmlDecode(m[1]).trim();
    }
    m = item.match(/data-src=["']([^"']+)["']/i);
    if (!m) m = item.match(/src=["']([^"']+)["']/i);
    if (m) cover = htmlDecode(m[1]);
    m = item.match(/<[^>]+class=["'][^"']*sStyle[^"']*["'][^>]*>([\s\S]*?)<\/[^>]+>/i);
    if (!m) m = item.match(/<[^>]+class=["'][^"']*sDes[^"']*["'][^>]*>([\s\S]*?)<\/[^>]+>/i);
    if (m) remark = stripTags(htmlDecode(m[1]));
    var abs = absoluteUrl(href);
    if (abs && title) {
      out.push({ url: abs, rawTitle: title, cover: absoluteUrl(cover), remark: remark });
    }
  }
  if (!out.length) {
    var re = /<a[^>]+href=["']([^"']+)["'][^>]*title=["']([^"']+)["'][^>]*>/ig;
    var m2;
    while ((m2 = re.exec(html))) {
      var h = htmlDecode(m2[1]);
      var t = htmlDecode(m2[2]).trim();
      var a = absoluteUrl(h);
      if (a && t && /vod|detail/i.test(a)) {
        out.push({ url: a, rawTitle: t, cover: "", remark: "" });
      }
    }
  }
  return out;
}

function parseMapResults(html) {
  html = String(html || "");
  var out = [];
  var seen = {};
  var re = /<a[^>]+href=["']([^"']*vod-detail-id-\d+\.html)["'][^>]*>([\s\S]*?)<\/a>/gi;
  var m;
  while ((m = re.exec(html))) {
    var url = absoluteUrl(htmlDecode(m[1]));
    var title = stripTags(htmlDecode(m[2])).trim();
    if (!url || !title || seen[url]) continue;
    seen[url] = true;
    out.push({ url: url, rawTitle: title, cover: "", remark: "" });
  }
  return out;
}

function parsePlayPageUrls(html) {
  html = String(html || "");
  var urls = [];
  var re = /<a[^>]+href=["']([^"']+)["'][^>]*>/ig;
  var m;
  while ((m = re.exec(html))) {
    var href = htmlDecode(m[1]).trim();
    if (isBadHref(href)) continue;
    if (!/vod[-_]?play|play/i.test(href)) continue;
    var abs = absoluteUrl(href);
    if (abs && urls.indexOf(abs) < 0) urls.push(abs);
  }
  return urls;
}

function parseMacVars(html) {
  var text = String(html || "");
  var fromMatch = text.match(/mac_from\s*=\s*'([^']*)'/) || text.match(/mac_from\s*=\s*"([^"]*)"/);
  var urlMatch = text.match(/mac_url\s*=\s*'([^']+)'/) || text.match(/mac_url\s*=\s*"([^"]+)"/);
  if (!fromMatch || !urlMatch) return [];
  var fromList = fromMatch[1].split("$$$");
  var urlList = urlMatch[1].split("$$$");
  var groups = [];
  for (var i = 0; i < fromList.length; i++) {
    var sourceName = fromList[i] || "默认线路";
    var eps = String(urlList[i] || "").split("#").filter(Boolean);
    var tracks = [];
    for (var j = 0; j < eps.length; j++) {
      var parts = eps[j].split("$");
      var name = htmlDecode(parts[0] || "第" + (j + 1) + "集");
      var rawUrl = htmlDecode(parts[1] || "");
      if (!rawUrl || isBadHref(rawUrl)) continue;
      var ep = extractEpisodeNumber(name) || j + 1;
      tracks.push({ name: name, episode: ep, index: j + 1, source: sourceName, url: rawUrl });
    }
    if (tracks.length) groups.push({ title: sourceName, tracks: tracks });
  }
  return groups;
}

function normalizePlayUrl(url) {
  url = String(url || "").trim();
  if (!url) return "";
  url = htmlDecode(url).replace(/\\\//g, "/").replace(/\\\\/g, "\\");
  try {
    if (/^https?%3A%2F%2F/i.test(url)) url = decodeURIComponent(url);
  } catch (e) {}
  if (url.startsWith("//")) url = "https:" + url;
  if (!/^https?:\/\//i.test(url)) return "";
  if (isBadHref(url)) return "";
  return url;
}

function parsePlayerUrl(html) {
  var text = String(html || "");
  var m;
  m = text.match(/var\s+config\s*=\s*(\{[\s\S]*?\})\s*[,;]?/);
  if (m && m[1]) {
    var configString = m[1];
    var urlMatch = configString.match(/["']url["']\s*:\s*["']([^"']+)["']/) ||
      configString.match(/url\s*:\s*["']([^"']+)["']/);
    if (urlMatch && urlMatch[1]) {
      var u = normalizePlayUrl(urlMatch[1]);
      if (u) return u;
    }
  }
  m = text.match(/https?:\\?\/\\?\/[^"'<>]+?\.m3u8[^"'<>]*/i);
  if (m && m[0]) {
    var u2 = normalizePlayUrl(m[0]);
    if (u2) return u2;
  }
  m = text.match(/["']url["']\s*:\s*["']([^"']+)["']/) || text.match(/url\s*:\s*["']([^"']+)["']/);
  if (m && m[1]) {
    var u3 = normalizePlayUrl(m[1]);
    if (u3) return u3;
  }
  return "";
}

// ==================== Data Loading ====================

async function loadPlaylist(detailUrl) {
  var cached = cacheGet("playlist_" + detailUrl);
  if (cached !== undefined) return cached;
  try {
    var detailRes = await httpGet(detailUrl);
    var detailHtml = (detailRes && detailRes.body) || "";
    var groups = parseMacVars(detailHtml);
    if (groups && groups.length) return cacheSet("playlist_" + detailUrl, groups);
    var playUrls = parsePlayPageUrls(detailHtml);
    if (!playUrls.length) return [];
    var maxTry = Math.min(playUrls.length, 5);
    for (var i = 0; i < maxTry; i++) {
      try {
        var epRes = await httpGet(playUrls[i]);
        var epHtml = (epRes && epRes.body) || "";
        groups = parseMacVars(epHtml);
        if (groups && groups.length) return cacheSet("playlist_" + detailUrl, groups);
      } catch (e) {}
    }
  } catch (e) {
    console.log("loadPlaylist: error=" + String(e && e.message || e));
  }
  return [];
}

async function searchSite(keyword) {
  var cacheKey = "search_" + keyword;
  var cached = cacheGet(cacheKey);
  if (cached !== undefined) return cached;
  try {
    var url = SITE + "/index.php?m=vod-search";
    var body = "wd=" + encodeURIComponent(keyword);
    var res = await httpPost(url, body);
    var results = parseSearchResults((res && res.body) || "");
    if (results.length) return cacheSet(cacheKey, results);
  } catch (e) {}
  var mapCacheKey = "vod_map_all";
  var all = cacheGet(mapCacheKey);
  if (all === undefined) {
    try {
      var mapRes = await httpGet(SITE + "/vod-map.html");
      all = cacheSet(mapCacheKey, parseMapResults((mapRes && mapRes.body) || ""));
    } catch (e) {
      all = [];
    }
  }
  var wantBaseNorm = normalizeName(stripTitleMeta(keyword));
  var filtered = (all || []).filter(function (item) {
    return scoreResult(item, wantBaseNorm) >= 0;
  });
  return cacheSet(cacheKey, filtered);
}

function scoreResult(item, wantBaseNorm) {
  var rawBase = stripTitleMeta(item.rawTitle);
  var baseNorm = normalizeName(rawBase);
  if (!baseNorm || !wantBaseNorm) return -1;
  if (baseNorm === wantBaseNorm) return 320;
  if (baseNorm.indexOf(wantBaseNorm) >= 0) return 180;
  if (wantBaseNorm.indexOf(baseNorm) >= 0) return 150;
  return -1;
}

function pickBestResult(results, wantBaseNorm) {
  var best = null;
  var bestScore = -Infinity;
  for (var i = 0; i < results.length; i++) {
    var sc = scoreResult(results[i], wantBaseNorm);
    if (sc > bestScore) {
      bestScore = sc;
      best = results[i];
    }
  }
  return bestScore >= 0 ? best : null;
}

function pickBestGroup(groups) {
  if (!groups || !groups.length) return null;
  var best = groups[0];
  var bestCount = best.tracks ? best.tracks.length : 0;
  for (var i = 1; i < groups.length; i++) {
    var count = groups[i].tracks ? groups[i].tracks.length : 0;
    if (count > bestCount) {
      best = groups[i];
      bestCount = count;
    }
  }
  return best;
}

function looksLikeSeriesGroup(group) {
  return !!(group && group.tracks && group.tracks.length > 1 &&
    group.tracks.some(function (track) {
      return /第[0-9一二两三四五六七八九十百零〇]+集|S\d{1,2}E\d{1,3}/i.test(String(track.name || ""));
    }));
}

async function resolveDirectUrl(rawUrl) {
  rawUrl = String(rawUrl || "").trim();
  if (!rawUrl || isBadHref(rawUrl)) return "";
  var cacheKey = "direct_" + rawUrl;
  var cached = cacheGet(cacheKey);
  if (cached !== undefined) return cached;
  var normalizedDirect = normalizePlayUrl(rawUrl);
  if (normalizedDirect && /\.m3u8(?:[?#]|$)/i.test(normalizedDirect)) {
    return cacheSet(cacheKey, normalizedDirect);
  }
  try {
    var playerUrl = PLAY_API + encodeURIComponent(rawUrl);
    var res = await httpGet(playerUrl, {
      "Referer": SITE + "/",
      "sec-fetch-site": "cross-site",
      "sec-fetch-mode": "navigate",
      "sec-fetch-dest": "iframe"
    });
    var html = (res && res.body) || "";
    var directUrl = parsePlayerUrl(html);
    return directUrl ? cacheSet(cacheKey, directUrl) : "";
  } catch (e) {
    return "";
  }
}

// ==================== HLS Inspection ====================

var NONGMIN_HLS_TIMEOUT_MS = 3200;
var NONGMIN_SEGMENT_TIMEOUT_MS = 2800;
var NONGMIN_EPISODE_TIMEOUT_MS = 2200;
var NONGMIN_EPISODE_BUDGET_MS = 8000;
var NONGMIN_PROBE_CONCURRENCY = 6;

function positiveNongminNumber(value) {
  var number = parseInt(String(value || ""), 10);
  return isFinite(number) && number > 0 ? number : 0;
}

function parseNongminHlsAttributes(attributeText) {
  var attributes = {};
  var source = String(attributeText || "");
  var token = "";
  var quoted = false;
  for (var i = 0; i <= source.length; i++) {
    var ch = i < source.length ? source.charAt(i) : ",";
    if (ch === '"' && source.charAt(i - 1) !== "\\") {
      quoted = !quoted;
      token += ch;
      continue;
    }
    if (ch === "," && !quoted) {
      var part = token.trim();
      token = "";
      if (!part) continue;
      var equalsIndex = part.indexOf("=");
      if (equalsIndex <= 0) continue;
      var key = part.slice(0, equalsIndex).trim().toUpperCase();
      var value = part.slice(equalsIndex + 1).trim();
      if (value.length >= 2 && value.charAt(0) === '"' && value.charAt(value.length - 1) === '"') {
        value = value.slice(1, -1).replace(/\\"/g, '"');
      }
      attributes[key] = value;
      continue;
    }
    token += ch;
  }
  return attributes;
}

function parseNongminHlsResolution(value, uri) {
  var width = 0, height = 0;
  var declared = String(value || "").match(/(\d{2,5})\s*x\s*(\d{2,5})/i);
  if (declared) {
    width = positiveNongminNumber(declared[1]);
    height = positiveNongminNumber(declared[2]);
  }
  var pathText = String(uri || "");
  if (!width || !height) {
    var pathResolution = pathText.match(/(?:^|[\/_\-.])(\d{2,5})x(\d{2,5})(?:[\/_\-.]|$)/i);
    if (pathResolution) {
      width = positiveNongminNumber(pathResolution[1]);
      height = positiveNongminNumber(pathResolution[2]);
    }
  }
  if (!height) {
    var heightOnly = pathText.match(/(?:^|[\/_\-.])(\d{3,4})p(?:[\/_\-.]|$)/i);
    if (heightOnly) {
      height = positiveNongminNumber(heightOnly[1]);
      width = height ? Math.round(height * 16 / 9) : 0;
    }
  }
  return { width: width, height: height, pixels: width && height ? width * height : 0 };
}

function resolveNongminHlsUrl(uri, playlistUrl) {
  var value = String(uri || "").trim();
  var base = String(playlistUrl || "").trim();
  if (!value) return "";
  if (/^https?:\/\//i.test(value)) return normalizePlayUrl(value);
  if (/^\/\//.test(value)) return normalizePlayUrl("https:" + value);
  try {
    if (typeof URL !== "undefined") return normalizePlayUrl(new URL(value, base).toString());
  } catch (e) {}
  var cleanBase = base.replace(/[?#].*$/, "");
  var originMatch = cleanBase.match(/^(https?:\/\/[^/]+)/i);
  if (value.charAt(0) === "/" && originMatch) return normalizePlayUrl(originMatch[1] + value);
  var slashIndex = cleanBase.lastIndexOf("/");
  var directory = slashIndex >= 0 ? cleanBase.slice(0, slashIndex + 1) : cleanBase + "/";
  return normalizePlayUrl(directory + value.replace(/^\.\//, ""));
}

function parseNongminMasterVariants(masterText, playlistUrl) {
  var lines = String(masterText || "").split(/\r?\n/);
  var variants = [];
  for (var i = 0; i < lines.length; i++) {
    var line = String(lines[i] || "").trim();
    if (!/^#EXT-X-STREAM-INF\s*:/i.test(line)) continue;
    var attributes = parseNongminHlsAttributes(line.slice(line.indexOf(":") + 1));
    var uri = "";
    var uriIndex = i + 1;
    while (uriIndex < lines.length) {
      var candidate = String(lines[uriIndex] || "").trim();
      if (!candidate || candidate.charAt(0) === "#") { uriIndex++; continue; }
      uri = candidate;
      break;
    }
    if (!uri) continue;
    var resolution = parseNongminHlsResolution(attributes.RESOLUTION, uri);
    var averageBandwidth = positiveNongminNumber(attributes["AVERAGE-BANDWIDTH"]);
    var peakBandwidth = positiveNongminNumber(attributes.BANDWIDTH);
    variants.push({
      url: resolveNongminHlsUrl(uri, playlistUrl), uri: uri,
      codecs: String(attributes.CODECS || ""),
      resolution: String(attributes.RESOLUTION || ""),
      width: resolution.width, height: resolution.height, pixels: resolution.pixels,
      bandwidth: averageBandwidth || peakBandwidth,
      peakBandwidth: peakBandwidth,
      frameRate: parseFloat(String(attributes["FRAME-RATE"] || "0")) || 0,
      order: variants.length
    });
    i = uriIndex;
  }
  return variants;
}

function compareNongminQuality(left, right) {
  left = left || {}; right = right || {};
  var fields = ["verified", "pixels", "height", "width", "bandwidth", "peakBandwidth", "frameRate"];
  for (var i = 0; i < fields.length; i++) {
    var field = fields[i];
    var lv = field === "verified" ? (left[field] ? 1 : 0) : Number(left[field] || 0);
    var rv = field === "verified" ? (right[field] ? 1 : 0) : Number(right[field] || 0);
    var diff = rv - lv;
    if (diff) return diff;
  }
  return 0;
}

function selectNongminHighestVariant(masterText, playlistUrl) {
  var variants = parseNongminMasterVariants(masterText, playlistUrl);
  if (!variants.length) return null;
  variants.sort(function (a, b) {
    var q = compareNongminQuality(Object.assign({ verified: true }, a), Object.assign({ verified: true }, b));
    if (q) return q;
    return a.order - b.order;
  });
  return variants[0];
}

function classifyNongminCodec(codecs) {
  var value = String(codecs || "").toLowerCase();
  if (/(^|[,\s])(hvc1|hev1|hevc|h265|av01|av1|vp09|vp9|dvhe|dvh1)(?:\.|[,\s]|$)/i.test(value)) return "modern";
  if (/(^|[,\s])(avc1|avc3|h264)(?:\.|[,\s]|$)/i.test(value)) return "avc";
  return "unknown";
}

function chooseNongminPlayerType(codecFamily) {
  return codecFamily === "avc" ? "ijk" : "system";
}

function firstNongminMediaSegmentUrl(playlist, playlistUrl) {
  var lines = String(playlist || "").split(/\r?\n/);
  var expectSegment = false;
  for (var i = 0; i < lines.length; i++) {
    var line = String(lines[i] || "").trim();
    if (/^#EXTINF:/i.test(line)) { expectSegment = true; continue; }
    if (!line || line.charAt(0) === "#") continue;
    if (expectSegment) return resolveNongminHlsUrl(line, playlistUrl);
    expectSegment = false;
  }
  return "";
}

function nongminResponseBytes(data) {
  if (data == null) return [];
  if (Array.isArray(data)) return data;
  if (typeof Uint8Array !== "undefined" && data instanceof Uint8Array) return data;
  if (typeof ArrayBuffer !== "undefined" && data instanceof ArrayBuffer) return new Uint8Array(data);
  if (data && data.buffer && typeof Uint8Array !== "undefined") {
    try { return new Uint8Array(data.buffer, data.byteOffset || 0, data.byteLength || data.length); } catch (e) {}
  }
  var source = String(data || "");
  var bytes = [];
  var limit = Math.min(source.length, 131072);
  for (var i = 0; i < limit; i++) bytes.push(source.charCodeAt(i) & 255);
  return bytes;
}

function inspectNongminTsCodec(bytes) {
  bytes = nongminResponseBytes(bytes);
  var syncOffset = -1;
  for (var offset = 0; offset < 188 && offset + 376 < bytes.length; offset++) {
    if (bytes[offset] === 71 && bytes[offset + 188] === 71 && bytes[offset + 376] === 71) {
      syncOffset = offset; break;
    }
  }
  if (syncOffset < 0) return { family: "unknown", streamTypes: [] };
  var pmtPid = -1;
  var streamTypes = [];
  for (var packet = syncOffset; packet + 188 <= bytes.length; packet += 188) {
    if (bytes[packet] !== 71) continue;
    var payloadStart = (bytes[packet + 1] & 64) !== 0;
    var pid = ((bytes[packet + 1] & 31) << 8) | bytes[packet + 2];
    var adaptation = (bytes[packet + 3] >> 4) & 3;
    if (adaptation === 0 || adaptation === 2) continue;
    var cursor = packet + 4;
    if (adaptation === 3) cursor += 1 + bytes[cursor];
    if (cursor >= packet + 188) continue;
    if (payloadStart) cursor += 1 + bytes[cursor];
    if (cursor + 12 >= packet + 188) continue;
    if (pid === 0 && bytes[cursor] === 0) {
      var patLength = ((bytes[cursor + 1] & 15) << 8) | bytes[cursor + 2];
      var patEnd = Math.min(cursor + 3 + patLength - 4, packet + 188);
      for (var pat = cursor + 8; pat + 3 < patEnd; pat += 4) {
        var program = (bytes[pat] << 8) | bytes[pat + 1];
        if (program) { pmtPid = ((bytes[pat + 2] & 31) << 8) | bytes[pat + 3]; break; }
      }
    } else if (pid === pmtPid && bytes[cursor] === 2) {
      var pmtLength = ((bytes[cursor + 1] & 15) << 8) | bytes[cursor + 2];
      var programInfoLength = ((bytes[cursor + 10] & 15) << 8) | bytes[cursor + 11];
      var pmtEnd = Math.min(cursor + 3 + pmtLength - 4, packet + 188);
      for (var stream = cursor + 12 + programInfoLength; stream + 4 < pmtEnd;) {
        var streamType = bytes[stream];
        var infoLength = ((bytes[stream + 3] & 15) << 8) | bytes[stream + 4];
        if (streamTypes.indexOf(streamType) < 0) streamTypes.push(streamType);
        stream += 5 + infoLength;
      }
      if (streamTypes.length) break;
    }
  }
  if (streamTypes.indexOf(36) >= 0) return { family: "modern", streamTypes: streamTypes };
  if (streamTypes.indexOf(27) >= 0) return { family: "avc", streamTypes: streamTypes };
  return { family: "unknown", streamTypes: streamTypes };
}

function decodeNongminResponseText(data) {
  if (typeof data === "string") return data;
  var bytes = nongminResponseBytes(data);
  if (!bytes.length) return String(data || "");
  if (typeof TextDecoder !== "undefined") {
    try { return new TextDecoder("utf-8").decode(bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes)); } catch (e) {}
  }
  var text = "";
  for (var i = 0; i < bytes.length; i++) text += String.fromCharCode(bytes[i]);
  return text;
}

function getNongminPlaybackHeaders(extra) {
  return Object.assign({
    "User-Agent": UA,
    "Accept": "application/vnd.apple.mpegurl,application/x-mpegURL,video/mp2t,video/*,*/*",
    "Referer": PLAYER_SITE + "/"
  }, extra || {});
}

async function boundedNongminPlaybackGet(url, headers, timeoutMs, binary) {
  var timeout = Math.max(800, Math.min(Number(timeoutMs || NONGMIN_HLS_TIMEOUT_MS), 5000));
  var resp = await Widget.http.get(url, {
    headers: headers || {},
    allow_redirects: true,
    timeout: timeout
  });
  var status = Number(resp && resp.status || 0);
  if (!resp || !resp.ok || status >= 400) {
    throw new Error("playback HTTP " + status + ": " + url);
  }
  return resp;
}

async function fetchNongminHlsText(url, timeoutMs) {
  var response = await boundedNongminPlaybackGet(url, getNongminPlaybackHeaders(), timeoutMs, false);
  var body = decodeNongminResponseText(response && response.body);
  if (!/^\s*#EXTM3U/i.test(body)) throw new Error("not an HLS playlist: " + url);
  return { body: body, url: String(response && response.url || url) };
}

async function probeNongminSegmentCodec(segmentUrl, timeoutMs) {
  var response = await boundedNongminPlaybackGet(
    segmentUrl,
    getNongminPlaybackHeaders({ "Range": "bytes=0-65535" }),
    Math.min(Number(timeoutMs || NONGMIN_SEGMENT_TIMEOUT_MS), NONGMIN_SEGMENT_TIMEOUT_MS),
    true
  );
  return inspectNongminTsCodec(response && response.body);
}

async function inspectNongminHlsPlan(directUrl, probeCodec, timeoutMs) {
  var timeout = Math.max(900, Math.min(Number(timeoutMs || NONGMIN_HLS_TIMEOUT_MS), NONGMIN_HLS_TIMEOUT_MS));
  var current = await fetchNongminHlsText(directUrl, timeout);
  var finalUrl = current.url || directUrl;
  var mediaBody = current.body;
  var mediaUrl = finalUrl;
  var codecs = "";
  var codecFamily = "unknown";
  var quality = { width: 0, height: 0, pixels: 0, bandwidth: 0, peakBandwidth: 0, frameRate: 0, resolution: "" };
  for (var depth = 0; depth < 3; depth++) {
    var selected = selectNongminHighestVariant(current.body, current.url || finalUrl);
    if (!selected || !selected.url) { mediaBody = current.body; mediaUrl = current.url || finalUrl; break; }
    finalUrl = selected.url;
    if (selected.width) quality.width = selected.width;
    if (selected.height) quality.height = selected.height;
    if (selected.pixels) quality.pixels = selected.pixels;
    if (selected.bandwidth) quality.bandwidth = selected.bandwidth;
    if (selected.peakBandwidth) quality.peakBandwidth = selected.peakBandwidth;
    if (selected.frameRate) quality.frameRate = selected.frameRate;
    if (selected.resolution) quality.resolution = selected.resolution;
    var selectedFamily = classifyNongminCodec(selected.codecs);
    if (selected.codecs) codecs = selected.codecs;
    if (selectedFamily !== "unknown") codecFamily = selectedFamily;
    current = await fetchNongminHlsText(finalUrl, timeout);
    mediaBody = current.body;
    mediaUrl = current.url || finalUrl;
  }
  var streamTypes = [];
  if (codecFamily === "unknown" && probeCodec) {
    var segmentUrl = firstNongminMediaSegmentUrl(mediaBody, mediaUrl);
    if (segmentUrl) {
      var codecProbe = await probeNongminSegmentCodec(segmentUrl, timeout);
      codecFamily = codecProbe.family;
      streamTypes = codecProbe.streamTypes || [];
    }
  }
  return {
    url: finalUrl, verified: true,
    playerType: chooseNongminPlayerType(codecFamily),
    codecFamily: codecFamily, codecs: codecs, streamTypes: streamTypes,
    width: quality.width, height: quality.height, pixels: quality.pixels,
    bandwidth: quality.bandwidth, peakBandwidth: quality.peakBandwidth,
    frameRate: quality.frameRate, resolution: quality.resolution
  };
}

function applyNongminProfileFallback(plan, profile) {
  var result = Object.assign({}, plan || {});
  var profilePlan = profile && profile.plan ? profile.plan : null;
  if ((!result.codecFamily || result.codecFamily === "unknown") && profilePlan && profilePlan.codecFamily) {
    result.codecFamily = profilePlan.codecFamily;
    result.codecs = result.codecs || profilePlan.codecs || "";
    result.streamTypes = result.streamTypes && result.streamTypes.length ? result.streamTypes : (profilePlan.streamTypes || []);
  }
  var qualityFields = ["width", "height", "pixels", "bandwidth", "peakBandwidth", "frameRate", "resolution"];
  for (var i = 0; i < qualityFields.length; i++) {
    var field = qualityFields[i];
    if (!result[field] && profilePlan && profilePlan[field]) result[field] = profilePlan[field];
  }
  result.playerType = chooseNongminPlayerType(result.codecFamily || "unknown");
  result.sourceName = result.sourceName || (profile && profile.group && profile.group.title) || "";
  return result;
}

async function resolveNongminTrackPlan(rawUrl, detailUrl, profile, probeCodec, timeoutMs) {
  var directUrl = await resolveDirectUrl(rawUrl);
  if (!directUrl) return null;
  var fullKey = "hls_plan_full_" + directUrl;
  var basicKey = "hls_plan_basic_" + directUrl;
  var fullCached = cacheGet(fullKey);
  if (fullCached !== undefined) return applyNongminProfileFallback(fullCached, profile);
  if (!probeCodec) {
    var basicCached = cacheGet(basicKey);
    if (basicCached !== undefined) return applyNongminProfileFallback(basicCached, profile);
  }
  if (Number(timeoutMs || 0) <= 0) {
    return applyNongminProfileFallback({
      url: directUrl, verified: false, playerType: "system", codecFamily: "unknown",
      codecs: "", streamTypes: [], width: 0, height: 0, pixels: 0,
      bandwidth: 0, peakBandwidth: 0, frameRate: 0, resolution: ""
    }, profile);
  }
  try {
    var plan = await inspectNongminHlsPlan(directUrl, !!probeCodec, timeoutMs);
    plan.sourceName = profile && profile.group ? profile.group.title : "";
    cacheSet(basicKey, plan);
    if (probeCodec) cacheSet(fullKey, plan);
    return applyNongminProfileFallback(plan, profile);
  } catch (error) {
    console.log("resolveNongminTrackPlan: inspect failed source=" +
      String(profile && profile.group && profile.group.title || "") +
      " error=" + String(error && error.message || error));
    return applyNongminProfileFallback({
      url: directUrl, verified: false, playerType: "system", codecFamily: "unknown",
      codecs: "", streamTypes: [], width: 0, height: 0, pixels: 0,
      bandwidth: 0, peakBandwidth: 0, frameRate: 0, resolution: ""
    }, profile);
  }
}

async function mapNongminWithLimit(items, limit, iterator) {
  var source = Array.isArray(items) ? items : [];
  var results = new Array(source.length);
  var cursor = 0;
  var workerCount = Math.max(1, Math.min(toInt(limit, 1), source.length || 1));
  async function worker() {
    while (true) {
      var index = cursor++;
      if (index >= source.length) return;
      results[index] = await iterator(source[index], index);
    }
  }
  var workers = [];
  for (var i = 0; i < workerCount; i++) workers.push(worker());
  await Promise.all(workers);
  return results;
}

async function buildNongminPlaybackProfiles(groups, detailUrl) {
  var list = (Array.isArray(groups) ? groups : []).filter(function (group) {
    return group && Array.isArray(group.tracks) && group.tracks.length;
  });
  var profiles = await mapNongminWithLimit(list, 3, async function (group, index) {
    var sampleTrack = group.tracks[0];
    var profile = { index: index, group: group, trackCount: group.tracks.length, plan: null };
    profile.plan = await resolveNongminTrackPlan(
      sampleTrack && sampleTrack.url, detailUrl, profile, true, NONGMIN_HLS_TIMEOUT_MS
    );
    return profile;
  });
  return profiles.filter(function (profile) {
    return profile && profile.plan && profile.plan.url;
  }).sort(function (left, right) {
    var quality = compareNongminQuality(left.plan, right.plan);
    if (quality) return quality;
    var countDiff = Number(right.trackCount || 0) - Number(left.trackCount || 0);
    if (countDiff) return countDiff;
    return Number(left.index || 0) - Number(right.index || 0);
  });
}

function nongminTrackEpisodeNumber(track, index) {
  return toInt(track && track.episode, 0) ||
    extractEpisodeNumber(track && track.name) ||
    toInt(track && track.index, 0) || index + 1;
}

function findNongminEpisodeTrack(profile, episodeNumber, referenceIndex) {
  if (!profile || !profile.group || !profile.group.tracks) return null;
  var tracks = profile.group.tracks;
  var track = tracks.find(function (item, index) {
    return nongminTrackEpisodeNumber(item, index) === episodeNumber;
  });
  if (track) return track;
  track = tracks.find(function (item) { return toInt(item && item.index, 0) === episodeNumber; });
  if (track) return track;
  return referenceIndex >= 0 && referenceIndex < tracks.length ? tracks[referenceIndex] : null;
}

function getNongminReferenceProfile(profiles) {
  var best = null;
  for (var i = 0; i < profiles.length; i++) {
    var profile = profiles[i];
    if (!best || Number(profile.trackCount || 0) > Number(best.trackCount || 0)) best = profile;
  }
  return best;
}

function formatNongminQuality(plan) {
  plan = plan || {};
  if (plan.resolution) return String(plan.resolution);
  if (plan.width && plan.height) return String(plan.width) + "x" + String(plan.height);
  if (plan.height) return String(plan.height) + "p";
  if (plan.bandwidth) return Math.round(Number(plan.bandwidth) / 1000) + "kbps";
  return "未知";
}

function nongminEngineLabel(plan) {
  return plan && plan.playerType === "ijk" ? "MDK" : "Auto";
}

function buildNongminEpisodeItem(detailUrl, track, index, plan) {
  var episodeNumber = nongminTrackEpisodeNumber(track, index);
  var episodeTitle = track && (track.name || track.episode) || ("第" + pad2(episodeNumber) + "集");
  return {
    id: detailUrl + "#e" + episodeNumber + "-" + (index + 1),
    seasonNumber: 1, episodeNumber: episodeNumber, episode: episodeNumber,
    title: episodeTitle, name: episodeTitle,
    videoUrl: plan.url, video_url: plan.url, url: plan.url, playUrl: plan.url,
    playerType: plan.playerType || "system",
    sourceName: plan.sourceName || "",
    quality: formatNongminQuality(plan),
    codecFamily: plan.codecFamily || "unknown"
  };
}

async function resolveNongminSeriesEpisodes(detailUrl, profiles) {
  var reference = getNongminReferenceProfile(profiles);
  var referenceTracks = reference && reference.group && reference.group.tracks ? reference.group.tracks : [];
  var deadline = Date.now() + NONGMIN_EPISODE_BUDGET_MS;
  var episodes = await mapNongminWithLimit(referenceTracks, NONGMIN_PROBE_CONCURRENCY,
    async function (referenceTrack, referenceIndex) {
      var episodeNumber = nongminTrackEpisodeNumber(referenceTrack, referenceIndex);
      var candidates = [];
      for (var i = 0; i < profiles.length; i++) {
        var profile = profiles[i];
        var track = findNongminEpisodeTrack(profile, episodeNumber, referenceIndex);
        if (track && track.url) candidates.push({ profile: profile, track: track });
      }
      var fallback = null;
      for (var j = 0; j < candidates.length; j++) {
        var candidate = candidates[j];
        var remaining = deadline - Date.now();
        var timeout = remaining > 500 ? Math.max(900, Math.min(NONGMIN_EPISODE_TIMEOUT_MS, remaining)) : 0;
        var plan = await resolveNongminTrackPlan(candidate.track.url, detailUrl, candidate.profile, false, timeout);
        if (!plan || !plan.url) continue;
        var item = buildNongminEpisodeItem(detailUrl, candidate.track, referenceIndex, plan);
        if (!fallback) fallback = item;
        if (plan.verified) return item;
        if (Date.now() >= deadline) return fallback;
      }
      return fallback;
    }
  );
  return episodes.filter(Boolean);
}

async function resolveNongminMoviePlan(detailUrl, profiles) {
  var fallback = null;
  for (var i = 0; i < profiles.length; i++) {
    var profile = profiles[i];
    var track = profile && profile.group && profile.group.tracks && profile.group.tracks[0];
    if (!track || !track.url) continue;
    var plan = profile.plan || await resolveNongminTrackPlan(track.url, detailUrl, profile, true, NONGMIN_HLS_TIMEOUT_MS);
    if (!plan || !plan.url) continue;
    if (!fallback) fallback = plan;
    if (plan.verified) return plan;
  }
  return fallback;
}

// ==================== Category URL Builder ====================

function categoryValue(value, fallback) {
  var text = String(value == null ? "" : value).trim();
  return text || fallback;
}

function categoryUrl(params) {
  params = params || {};
  var categoryId = categoryValue(params.categoryId, "1");
  var listId = categoryValue(params.type, categoryId);
  var page = Math.max(1, toInt(params.page, 1));
  var year = categoryValue(params.year, "0");
  var sort = categoryValue(params.sort, "time");
  var area = String(params.area == null ? "" : params.area);
  return SITE + "/vod-list-id-" + encodeURIComponent(listId)
    + "-pg-" + page
    + "-order--by-" + encodeURIComponent(sort)
    + "-class-0"
    + "-year-" + encodeURIComponent(year)
    + "-letter--area-" + encodeURIComponent(area)
    + "-lang-.html";
}

// ==================== Module Entry Points ====================

async function loadCategory(params) {
  params = params || {};
  var page = Number(params.page || 1);
  if (!Number.isFinite(page) || page < 1) {
    throw new Error("loadCategory: page 必须是正整数");
  }
  var url = categoryUrl(params);
  console.log("[nongmin] category request: " + url);
  try {
    var res = await httpGet(url);
    var cards = parseSearchResults((res && res.body) || "");
    console.log("[nongmin] category parsed items=" + cards.length);
    return cards.map(function (item) {
      var mediaType = String(params && params.categoryId) === "1" ? "movie" : "tv";
      return {
        id: item.url,
        type: "url",
        title: item.rawTitle,
        posterPath: item.cover || "",
        description: item.remark || "",
        mediaType: mediaType,
        link: item.url
      };
    });
  } catch (e) {
    console.log("loadCategory: error=" + String(e && e.message || e));
    return [];
  }
}

async function searchVideos(params) {
  params = params || {};
  var page = Number(params.page || 1);
  var keyword = String(params.keyword || params.query || params.wd || params.search || "").trim();
  if (!Number.isFinite(page) || page < 1) {
    throw new Error("searchVideos: page 必须是正整数");
  }
  if (page !== 1 || keyword.length === 0) return [];
  try {
    var results = await searchSite(keyword);
    var typedResults = await Promise.all(results.map(async function (item) {
      var mediaType = "movie";
      var episodeCount = 0;
      try {
        var playlist = await loadPlaylist(item.url);
        var group = pickBestGroup(playlist || []);
        if (looksLikeSeriesGroup(group)) {
          mediaType = "tv";
          episodeCount = group.tracks.length;
        }
      } catch (error) {
        console.log("searchVideos: classify error=" + String(error && error.message || error));
      }
      return { item: item, mediaType: mediaType, episodeCount: episodeCount };
    }));
    return typedResults.map(function (entry) {
      var item = entry.item;
      var mediaType = entry.mediaType;
      return {
        id: item.url,
        type: "url",
        title: item.rawTitle,
        posterPath: item.cover || "",
        description: item.remark || "",
        mediaType: mediaType,
        link: item.url
      };
    });
  } catch (e) {
    console.log("searchVideos: error=" + String(e && e.message || e));
    return [];
  }
}

async function loadDetail(link, extraParams) {
  if (typeof link !== "string" || link.length === 0) {
    throw new Error("loadDetail: link 不能为空");
  }
  var url = String(link).trim();
  try {
    var playlist = await loadPlaylist(url);
    var profiles = await buildNongminPlaybackProfiles(playlist || [], url);
    if (!profiles.length) throw new Error("loadDetail: 未找到播放列表");
    var maxTrackCount = profiles.reduce(function (count, profile) {
      return Math.max(count, profile && profile.group && profile.group.tracks ? profile.group.tracks.length : 0);
    }, 0);
    var isSeries = maxTrackCount > 1 || profiles.some(function (profile) {
      return looksLikeSeriesGroup(profile.group);
    });
    if (isSeries) {
      var episodeItems = await resolveNongminSeriesEpisodes(url, profiles);
      if (!episodeItems.length) throw new Error("loadDetail: 未解析到剧集");
      return {
        id: url, type: "url", title: "", mediaType: "tv",
        currentSeason: 1, currentEpisode: 1,
        currentSeasonId: url + "#s1",
        currentEpisodeId: episodeItems[0].id,
        currentEpisodeName: episodeItems[0].title,
        seasons: [{
          id: url + "#s1", seasonNumber: 1, title: "第1季",
          episodeCount: episodeItems.length, episodes: episodeItems
        }],
        link: url
      };
    }
    var movie = await resolveNongminMoviePlan(url, profiles);
    if (!movie || !movie.url) throw new Error("loadDetail: 未解析到可播放的 videoUrl");
    return {
      id: url, type: "url", title: "", mediaType: "movie",
      videoUrl: movie.url,
      headers: { "User-Agent": UA, "Referer": PLAYER_SITE + "/" },
      playerType: movie.playerType || "system",
      link: url
    };
  } catch (e) {
    throw new Error("loadDetail: " + String(e && e.message || e));
  }
}

async function loadStreams(params, context) {
  params = params || {};
  var rawSeries = String(params.seriesName || params.title || "").trim();
  var rawEpisodeName = String(params.episodeName || params.name || "").trim();
  var baseTitle = stripTitleMeta(rawSeries) || rawSeries || rawEpisodeName;
  if (!baseTitle) return [];
  console.log("[nongmin-streams] start title=" + baseTitle + " type=" + String(params.type || ""));
  try {
    var wantBaseNorm = normalizeName(baseTitle);
    var wantEpisode = getWantedEpisode(params);
    var results = await searchSite(baseTitle);
    if (!results.length && rawSeries && rawSeries !== baseTitle) {
      results = await searchSite(rawSeries);
    }
    if (!results.length) return [];
    var best = pickBestResult(results, wantBaseNorm);
    if (!best || !best.url) return [];
    var playlist = await loadPlaylist(best.url);
    if (!playlist || !playlist.length) return [];
    var profiles = await buildNongminPlaybackProfiles(playlist, best.url);
    if (!profiles.length) return [];
    var maxTrackCount = profiles.reduce(function (count, profile) {
      return Math.max(count, profile.trackCount || 0);
    }, 0);
    var playlistLooksSeries = maxTrackCount > 1 || profiles.some(function (profile) {
      return looksLikeSeriesGroup(profile.group);
    });
    var resources = [];
    var seen = {};
    function addResource(name, description, plan) {
      if (!plan || !plan.url || seen[plan.url]) return;
      seen[plan.url] = true;
      resources.push({
        name: name, description: description, url: plan.url,
        headers: { "User-Agent": UA, "Referer": PLAYER_SITE + "/" }
      });
    }
    if (!playlistLooksSeries) {
      for (var i = 0; i < profiles.length; i++) {
        var profile = profiles[i];
        var track = profile.group.tracks[0];
        var plan = profile.plan || await resolveNongminTrackPlan(track.url, best.url, profile, true, NONGMIN_HLS_TIMEOUT_MS);
        addResource(
          "农民影视 " + (profile.group.title || ("线路" + (i + 1))),
          ["匹配：" + best.rawTitle, "线路：" + (profile.group.title || "默认线路"),
            "画质：" + formatNongminQuality(plan), "引擎：" + nongminEngineLabel(plan)].join("\n"),
          plan
        );
      }
    } else if (wantEpisode > 0) {
      for (var j = 0; j < profiles.length; j++) {
        var p = profiles[j];
        var t = findNongminEpisodeTrack(p, wantEpisode, Math.max(0, wantEpisode - 1));
        if (!t || !t.url) continue;
        var pl = await resolveNongminTrackPlan(t.url, best.url, p, false, NONGMIN_EPISODE_TIMEOUT_MS);
        addResource(
          "农民影视 E" + pad2(wantEpisode) + " " + (p.group.title || ("线路" + (j + 1))),
          ["匹配：" + best.rawTitle, "线路：" + (p.group.title || "默认线路"),
            "集数：" + (t.name || ("E" + pad2(wantEpisode))),
            "画质：" + formatNongminQuality(pl), "引擎：" + nongminEngineLabel(pl)].join("\n"),
          pl
        );
      }
    } else {
      var episodes = await resolveNongminSeriesEpisodes(best.url, profiles);
      for (var k = 0; k < episodes.length; k++) {
        var episode = episodes[k];
        var ep = toInt(episode.episodeNumber, k + 1);
        addResource(
          "农民影视 E" + pad2(ep) + " " + (episode.sourceName || "最佳线路"),
          ["匹配：" + best.rawTitle, "集数：" + (episode.title || ("E" + pad2(ep))),
            "线路：" + (episode.sourceName || "最佳线路"),
            "画质：" + (episode.quality || "未知"),
            "引擎：" + (episode.playerType === "ijk" ? "MDK" : "Auto")].join("\n"),
          { url: episode.videoUrl, playerType: episode.playerType }
        );
      }
    }
    // Use context.emit for incremental push if available
    if (context && typeof context.emit === "function") {
      for (var r = 0; r < resources.length; r++) {
        context.emit(resources[r]);
      }
      return [];
    }
    return resources;
  } catch (error) {
    console.log("loadStreams: error=" + String(error && error.message || error));
    return [];
  }
}
