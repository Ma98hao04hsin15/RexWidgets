var WidgetMetadata = {
  "id": "douban_tiff_awards",
  "title": "多倫多國際電影節獲獎",
  "icon": "https://cdn.phototourl.com/member/2026-10-01-5c46dc35-d742-4a73-bf59-51d0ca542aef.png",
  "description": "豆瓣電影・多倫多國際電影節（TIFF）歷屆獲獎與提名片單，詳情以 TMDB 識別",
  "author": "Forward User",
  "site": "https://movie.douban.com/awards/tiff/",
  "version": "3.0.1",
  "requiredVersion": "0.0.1",
  "detailCacheDuration": 60,
  "modules": [
    {
      "title": "多倫多影展 獲獎片單",
      "description": "豆瓣多倫多影展獲獎名單（TMDB 識別）",
      "requiresWebView": false,
      "functionName": "loadTiff",
      "cacheDuration": 86400,
      "params": [
        {
          "name": "edition",
          "title": "屆數",
          "type": "enumeration",
          "value": "50",
          "enumOptions": [
            {
              "title": "第50屆 (2025)",
              "value": "50"
            },
            {
              "title": "第49屆 (2024)",
              "value": "49"
            },
            {
              "title": "第48屆 (2023)",
              "value": "48"
            },
            {
              "title": "第47屆 (2022)",
              "value": "47"
            },
            {
              "title": "第46屆 (2021)",
              "value": "46"
            },
            {
              "title": "第45屆 (2020)",
              "value": "45"
            },
            {
              "title": "第44屆 (2019)",
              "value": "44"
            },
            {
              "title": "第43屆 (2018)",
              "value": "43"
            },
            {
              "title": "第42屆 (2017)",
              "value": "42"
            },
            {
              "title": "第41屆 (2016)",
              "value": "41"
            },
            {
              "title": "第40屆 (2015)",
              "value": "40"
            },
            {
              "title": "第39屆 (2014)",
              "value": "39"
            },
            {
              "title": "第38屆 (2013)",
              "value": "38"
            },
            {
              "title": "第37屆 (2012)",
              "value": "37"
            }
          ]
        },
        {
          "name": "listType",
          "title": "名單類型",
          "type": "enumeration",
          "value": "winners",
          "enumOptions": [
            {
              "title": "獲獎名單",
              "value": "winners"
            },
            {
              "title": "全部提名",
              "value": "nominees"
            }
          ]
        }
      ]
    }
  ]
};

// 以豆瓣屆數對應年份（頁面標題抓不到年份時使用）
var FEST_YEARS = {"tiff":{"37":2012,"38":2013,"39":2014,"40":2015,"41":2016,"42":2017,"43":2018,"44":2019,"45":2020,"46":2021,"47":2022,"48":2023,"49":2024,"50":2025}};

// 豆瓣請求全部失敗時的內建備份：[豆瓣ID, 片名, 獎項]
var FALLBACK = { tiff: {
  "50": [
    ["35618471","哈姆奈特 Hamnet","觀眾選擇獎"],
    ["37479033","終極救援：我們之間的路 The Road Between Us: The Ultimate Rescue","紀錄片單元"],
    ["37213494","尼瓦那樂隊秀：電影版 Nirvanna the Band the Show the Movie","午夜瘋狂單元"],
    ["37204578","錯配的丈夫 Uiksaringitara","最佳加拿大電影"],
    ["36394662","淚珠成珍的女孩 La jeune fille qui pleurait des perles","最佳加拿大短片"],
    ["37332052","與我對話 Talk Me","最佳國際短片"],
    ["36471282","外人 Forastera","國際影評人聯盟獎"],
    ["37467631","尋找天空 In Search of The Sky","亞洲電影促進聯盟獎"],
    ["4092781","無可奈何 어쩔수가없다","國際觀眾選擇獎"],
    ["36129472","致敬勝利！ За Перемогу!","站台獎"],
    ["36990045","藍鷺 Blue Heron","最佳加拿大發現獎"],
    ["37327780","出走記 Une Fugue","最佳動畫短片"]
  ]
} };

// 手動指定：豆瓣ID -> TMDB 電影ID（自動對應不到或對錯時補在這裡）
var TMDB_OVERRIDES = {};

// 內建備份（依片名到 TMDB 搜尋）：[搜尋片名, 獎項, 年份(選填), "tv"(劇集時填), 豆瓣ID(選填)]
// 第37–49屆來源：TIFF 官方得獎公告、維基百科及影視媒體報導；第50屆：豆瓣
var FALLBACK_Q = { tiff: {
  "49": [
    ["The Life of Chuck","觀眾選擇獎"],
    ["Emilia Pérez","觀眾選擇獎・亞軍"],
    ["Anora","觀眾選擇獎・季軍"],
    ["The Tragically Hip: No Dress Rehearsal","紀錄片單元・觀眾選擇獎",2024,"tv"],
    ["The Substance","午夜瘋狂單元・觀眾選擇獎"],
    ["Polvo serán","站台獎"],
    ["Berger","最佳加拿大電影"],
    ["Une langue universelle","最佳加拿大發現獎"],
    ["Mother Mother","國際影評人聯盟獎"],
    ["The Last of the Sea Women","亞洲電影促進聯盟獎"],
    ["Deck 5B","最佳國際短片"],
    ["Are You Scared to Be Yourself Because You Think That You Might Fail?","最佳加拿大短片"]
  ],
  "48": [
    ["American Fiction","觀眾選擇獎"],
    ["The Holdovers","觀眾選擇獎・亞軍"],
    ["The Boy and the Heron","觀眾選擇獎・季軍"],
    ["Mr. Dressup: The Magic of Make-Believe","紀錄片單元・觀眾選擇獎"],
    ["Dicks: The Musical","午夜瘋狂單元・觀眾選擇獎"],
    ["Dear Jassi","站台獎"],
    ["Solo","最佳加拿大電影",2023],
    ["Seagrass","國際影評人聯盟獎"],
    ["Sthal","亞洲電影促進聯盟獎"],
    ["Kanaval","最佳加拿大 BIPOC 電影"],
    ["Tautuktavuk (What We See)","最佳加拿大 BIPOC 處女作"],
    ["We Grown Now","改變者獎"],
    ["Elektra","最佳短片",2023],
    ["Motherland","最佳加拿大短片",2023],
    ["Shé (Snake)","Share Her Journey 獎"]
  ],
  "47": [
    ["The Fabelmans","觀眾選擇獎"],
    ["Women Talking","觀眾選擇獎・亞軍"],
    ["Glass Onion: A Knives Out Mystery","觀眾選擇獎・季軍"],
    ["Black Ice","紀錄片單元・觀眾選擇獎",2022],
    ["Weird: The Al Yankovic Story","午夜瘋狂單元・觀眾選擇獎"],
    ["Riceboy Sleeps","站台獎"],
    ["To Kill a Tiger","最佳加拿大電影"],
    ["A Gaza Weekend","國際影評人聯盟獎"],
    ["Sweet As","亞洲電影促進聯盟獎"],
    ["Leonor Will Never Die","Amplify Voices 獎"],
    ["While We Watched","Amplify Voices 獎"],
    ["Something You Said Last Night","改變者獎"],
    ["Simo","最佳加拿大短片",2022],
    ["Snow in September","最佳國際短片",2022],
    ["Nanitic","Share Her Journey 獎"]
  ],
  "46": [
    ["Belfast","觀眾選擇獎"],
    ["Scarborough","觀眾選擇獎・亞軍",2021],
    ["Scarborough","改變者獎",2021],
    ["The Power of the Dog","觀眾選擇獎・季軍"],
    ["The Rescue","紀錄片單元・觀眾選擇獎",2021],
    ["Titane","午夜瘋狂單元・觀眾選擇獎"],
    ["Yuni","站台獎"],
    ["Ste. Anne","最佳加拿大電影"],
    ["Anadolu Leoparı","國際影評人聯盟獎"],
    ["Costa Brava, Lebanon","亞洲電影促進聯盟獎"],
    ["The Gravedigger's Wife","Amplify Voices 獎"],
    ["A Night of Knowing Nothing","Amplify Voices 獎"],
    ["Angakusajaujuq: The Shaman's Apprentice","最佳加拿大短片"],
    ["Pa vend","最佳國際短片"],
    ["Astel","Share Her Journey 獎",2021]
  ],
  "45": [
    ["Nomadland","觀眾選擇獎"],
    ["One Night in Miami...","觀眾選擇獎・亞軍"],
    ["Beans","觀眾選擇獎・季軍",2020],
    ["Inconvenient Indian","紀錄片單元・觀眾選擇獎"],
    ["Inconvenient Indian","最佳加拿大電影"],
    ["Shadow in the Cloud","午夜瘋狂單元・觀眾選擇獎"],
    ["Dasatskisi","國際影評人聯盟獎"],
    ["Gaza mon amour","亞洲電影促進聯盟獎"],
    ["The Disciple","Amplify Voices 獎",2020],
    ["La Nuit des rois","Amplify Voices 獎"],
    ["Black Bodies","改變者獎",2020],
    ["Benjamin, Benny, Ben","最佳加拿大短片"],
    ["Dustin","最佳國際短片",2020],
    ["Sing Me a Lullaby","Share Her Journey 獎",2020]
  ],
  "44": [
    ["Jojo Rabbit","觀眾選擇獎"],
    ["Marriage Story","觀眾選擇獎・亞軍"],
    ["기생충","觀眾選擇獎・季軍"],
    ["The Cave","紀錄片單元・觀眾選擇獎",2019],
    ["El hoyo","午夜瘋狂單元・觀眾選擇獎"],
    ["Martin Eden","站台獎",2019],
    ["Antigone","最佳加拿大電影",2019],
    ["The Twentieth Century","最佳加拿大處女作",2019],
    ["Murmur","國際影評人聯盟獎・發現單元",2019],
    ["How to Build a Girl","國際影評人聯盟獎・特別放映"],
    ["1982","亞洲電影促進聯盟獎",2019],
    ["Delphine","最佳加拿大短片",2019],
    ["Nachts sind alle Katzen grau","最佳國際短片"]
  ],
  "43": [
    ["Green Book","觀眾選擇獎"],
    ["If Beale Street Could Talk","觀眾選擇獎・亞軍"],
    ["Roma","觀眾選擇獎・季軍",2018],
    ["Free Solo","紀錄片單元・觀眾選擇獎"],
    ["Mard Ko Dard Nahi Hota","午夜瘋狂單元・觀眾選擇獎"],
    ["幸福城市","站台獎"],
    ["La disparition des lucioles","最佳加拿大電影"],
    ["Les routes en février","最佳加拿大處女作"],
    ["Float Like a Butterfly","國際影評人聯盟獎・發現單元",2018],
    ["Skin","國際影評人聯盟獎・特別放映",2018],
    ["Người vợ ba","亞洲電影促進聯盟獎"],
    ["Ikhwène","最佳加拿大短片"],
    ["The Field","最佳國際短片",2018]
  ],
  "42": [
    ["Three Billboards Outside Ebbing, Missouri","觀眾選擇獎"],
    ["I, Tonya","觀眾選擇獎・亞軍"],
    ["Call Me by Your Name","觀眾選擇獎・季軍"],
    ["Visages villages","紀錄片單元・觀眾選擇獎"],
    ["Bodied","午夜瘋狂單元・觀眾選擇獎"],
    ["Sweet Country","站台獎",2017],
    ["Les Affamés","最佳加拿大電影"],
    ["Luk'Luk'I","最佳加拿大處女作"],
    ["Ava","國際影評人聯盟獎・發現單元",2017],
    ["El autor","國際影評人聯盟獎・特別放映"],
    ["大佛普拉斯","亞洲電影促進聯盟獎"],
    ["Pre-Drink","最佳加拿大短片"],
    ["Min börda","最佳國際短片"]
  ],
  "41": [
    ["La La Land","觀眾選擇獎"],
    ["Lion","觀眾選擇獎・亞軍",2016],
    ["Queen of Katwe","觀眾選擇獎・季軍"],
    ["I Am Not Your Negro","紀錄片單元・觀眾選擇獎"],
    ["Free Fire","午夜瘋狂單元・觀眾選擇獎"],
    ["Jackie","站台獎",2016],
    ["Ceux qui font les révolutions à moitié n'ont fait que se creuser un tombeau","最佳加拿大電影"],
    ["Old Stone","最佳加拿大處女作",2016],
    ["Kati Kati","國際影評人聯盟獎・發現單元"],
    ["我不是潘金莲","國際影評人聯盟獎・特別放映"],
    ["Bar Bahar","亞洲電影促進聯盟獎"],
    ["Mutants","最佳加拿大短片",2016],
    ["Imago","最佳國際短片",2016],
    ["Jeffrey","發現單元導演獎",2016]
  ],
  "40": [
    ["Room","觀眾選擇獎",2015],
    ["Angry Indian Goddesses","觀眾選擇獎・亞軍"],
    ["Spotlight","觀眾選擇獎・季軍",2015],
    ["Winter on Fire: Ukraine's Fight for Freedom","紀錄片單元・觀眾選擇獎"],
    ["Hardcore Henry","午夜瘋狂單元・觀眾選擇獎"],
    ["Hurt","站台獎",2015],
    ["Closet Monster","最佳加拿大電影"],
    ["Sleeping Giant","最佳加拿大處女作",2015],
    ["Eva Nová","國際影評人聯盟獎・發現單元"],
    ["Desierto","國際影評人聯盟獎・特別放映"],
    ["ひそひそ星","亞洲電影促進聯盟獎"],
    ["Overpass","最佳加拿大短片",2015],
    ["Maman(s)","最佳國際短片"],
    ["Black","發現單元導演獎",2015]
  ],
  "39": [
    ["The Imitation Game","觀眾選擇獎"],
    ["Learning to Drive","觀眾選擇獎・亞軍",2014],
    ["St. Vincent","觀眾選擇獎・季軍"],
    ["Beats of the Antonov","紀錄片單元・觀眾選擇獎"],
    ["What We Do in the Shadows","午夜瘋狂單元・觀眾選擇獎",2014],
    ["Félix et Meira","最佳加拿大電影"],
    ["Bang Bang Baby","最佳加拿大處女作",2014],
    ["Qu'Allah bénisse la France !","國際影評人聯盟獎・發現單元"],
    ["Time Out of Mind","國際影評人聯盟獎・特別放映",2014],
    ["Margarita with a Straw","亞洲電影促進聯盟獎"],
    ["The Weatherman and the Shadowboxer","最佳加拿大短片"],
    ["A Single Body","最佳國際短片"]
  ],
  "38": [
    ["12 Years a Slave","觀眾選擇獎"],
    ["Philomena","觀眾選擇獎・亞軍"],
    ["Prisoners","觀眾選擇獎・季軍",2013],
    ["The Square","紀錄片單元・觀眾選擇獎",2013],
    ["地獄でなぜ悪い","午夜瘋狂單元・觀眾選擇獎"],
    ["When Jews Were Funny","最佳加拿大電影"],
    ["Asphalt Watches","最佳加拿大處女作"],
    ["Ida","國際影評人聯盟獎・特別放映",2013],
    ["Los insólitos peces gato","國際影評人聯盟獎・發現單元"],
    ["Qissa","亞洲電影促進聯盟獎"],
    ["Noah","最佳加拿大短片",2013]
  ],
  "37": [
    ["Silver Linings Playbook","觀眾選擇獎"],
    ["Argo","觀眾選擇獎・亞軍",2012],
    ["Zaytoun","觀眾選擇獎・季軍"],
    ["Artifact","紀錄片單元・觀眾選擇獎",2012],
    ["Seven Psychopaths","午夜瘋狂單元・觀眾選擇獎"],
    ["Laurence Anyways","最佳加拿大電影"],
    ["Antiviral","最佳加拿大處女作",2012],
    ["Blackbird","最佳加拿大處女作",2012],
    ["Call Girl","國際影評人聯盟獎・發現單元",2012],
    ["Dans la maison","國際影評人聯盟獎・特別放映"],
    ["希望の国","亞洲電影促進聯盟獎"],
    ["Ne crâne pas sois modeste","最佳加拿大短片"]
  ]
} };

// 「全部提名」用：入圍片 [搜尋片名, 年份(選填), 標籤(選填，預設「主競賽・入圍」), 豆瓣ID(選填)]
var FALLBACK_NOM = { tiff: {} };

var doubanBlocked = false;

function randomBid() {
  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var s = "";
  for (var i = 0; i < 11; i++) s += chars.charAt(Math.floor(Math.random() * chars.length));
  return s;
}

// 取得豆瓣頁面：先直連，失敗再走代理
// 回傳 { text, format: "html" | "md" }，失敗回傳 null
async function fetchDouban(url, quiet) {
  var desktopUA =
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";
  var log = function (m) { if (!quiet) console.log(m); };

  var routes = [
    {
      name: "直連",
      url: url,
      headers: {
        "User-Agent": desktopUA,
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        Referer: "https://movie.douban.com/",
        Cookie: "bid=" + randomBid()
      }
    },
    {
      name: "AllOrigins 代理",
      url: "https://api.allorigins.win/raw?url=" + encodeURIComponent(url),
      headers: { "User-Agent": desktopUA }
    },
    {
      name: "Jina 代理",
      url: "https://r.jina.ai/" + url,
      headers: { "User-Agent": desktopUA, "X-Return-Format": "markdown" }
    }
  ];

  for (var i = 0; i < routes.length; i++) {
    try {
      var res = await Widget.http.get(routes[i].url, { headers: routes[i].headers });
      var text = res && typeof res.data === "string" ? res.data : "";
      if (text && text.indexOf("/subject/") !== -1) {
        var format = /<\/(html|ul|div)>/i.test(text) ? "html" : "md";
        log("豆瓣請求成功：" + routes[i].name + "（" + format + "）");
        return { text: text, format: format };
      }
      log(routes[i].name + "：回應內容無片單");
    } catch (e) {
      log(routes[i].name + " 失敗：" + (e && e.message ? e.message : e));
    }
  }
  return null;
}

function clean(t) {
  return (t || "").replace(/\s+/g, " ").trim();
}

function parseHtml(html) {
  var $ = Widget.html.load(html);

  var posterMap = {};
  $('a[href*="/subject/"] img').each(function (i, img) {
    var href = $(img).closest("a").attr("href") || "";
    var m = href.match(/subject\/(\d+)/);
    var src = $(img).attr("src") || $(img).attr("data-src") || "";
    if (m && src && src.indexOf("movie_default") === -1 && !posterMap[m[1]]) {
      posterMap[m[1]] = src.replace("s_ratio_poster", "m_ratio_poster");
    }
  });

  var list = [];
  var seen = {};
  function add(id, title, cat) {
    if (seen[id] !== undefined) {
      var it = list[seen[id]];
      if (cat && it.cats.indexOf(cat) === -1) it.cats.push(cat);
      // 同一部片若另一處有「中文 原名」完整片名，改用較完整的
      if (title.length > it.title.length) it.title = title;
      return;
    }
    seen[id] = list.length;
    list.push({ id: id, title: title, cats: cat ? [cat] : [], poster: posterMap[id] || "" });
  }

  $("ul.award").each(function (i, ul) {
    var lis = $(ul).find("li");
    var award = lis.length ? clean($(lis[0]).text()) : "";
    // 所屬單元，例如「- 银狮奖 Silver Lion -」取中文部分
    var section = clean($(ul).closest(".awards").find("h2").first().text())
      .replace(/^[-\s]+|[-\s]+$/g, "")
      .split(" ")[0];
    var cat = section && section !== award ? section + "・" + award : award;
    $(ul)
      .find('a[href*="/subject/"]')
      .each(function (j, a) {
        var m = ($(a).attr("href") || "").match(/subject\/(\d+)/);
        var t = clean($(a).text());
        if (m && t) add(m[1], t, cat);
      });
  });

  if (list.length === 0) {
    $('a[href*="/subject/"]').each(function (i, a) {
      var m = ($(a).attr("href") || "").match(/subject\/(\d+)/);
      var t = clean($(a).attr("title") || $(a).text());
      if (m && t) add(m[1], t, "");
    });
  }

  var ym = html.match(/<title>[^<]*\((\d{4})\)/);
  return { list: list, year: ym ? parseInt(ym[1], 10) : null };
}

// 解析 Jina 代理回傳的 Markdown
function parseMarkdown(md) {
  var lines = md.split(/\r?\n/);
  var startIdx = 0;
  for (var k = 0; k < lines.length; k++) {
    if (/获奖名单|獲獎名單|提名名单|全部名单/.test(lines[k]) && /^#/.test(lines[k].trim())) {
      startIdx = k;
      break;
    }
  }

  var list = [];
  var seen = {};
  function add(id, title, cat) {
    if (seen[id] !== undefined) {
      var it = list[seen[id]];
      if (cat && it.cats.indexOf(cat) === -1) it.cats.push(cat);
      if (title.length > it.title.length) it.title = title;
      return;
    }
    seen[id] = list.length;
    list.push({ id: id, title: title, cats: cat ? [cat] : [], poster: "" });
  }

  var section = "";
  var award = "";
  var linkRe = /\[([^\]]+)\]\((https?:\/\/movie\.douban\.com\/subject\/(\d+)\/?)(?:\s+"([^"]*)")?\)/g;
  for (var i = startIdx; i < lines.length; i++) {
    var line = lines[i].trim();
    if (!line || line === "-") continue;
    if (/查看全部名单|的图片|历届/.test(line)) break;
    var h = line.match(/^#{3,5}\s*-?\s*(.+?)\s*-?\s*$/);
    if (h) {
      if (!/获奖名单|提名名单/.test(h[1])) section = h[1].split(" ")[0];
      award = "";
      continue;
    }
    var found = false;
    var m;
    linkRe.lastIndex = 0;
    while ((m = linkRe.exec(line)) !== null) {
      found = true;
      var title = clean(m[4] || m[1]);
      var cat = section && award && section !== award ? section + "・" + award : award || section;
      add(m[3], title, cat);
    }
    if (!found && !/^[\[!《]/.test(line)) award = clean(line.replace(/^[-*]\s*/, ""));
  }

  var ym = md.match(/[届屆][^\n(]*\((\d{4})\)/);
  return { list: list, year: ym ? parseInt(ym[1], 10) : null };
}

// ---------- TMDB 對應 ----------

function splitTitle(full) {
  // 豆瓣格式：「中文名 原名」；只有中文時 orig 為空
  var idx = full.indexOf(" ");
  if (idx === -1) {
    var hasCJK = /[\u4e00-\u9fff]/.test(full);
    return { cn: full, orig: hasCJK ? "" : full };
  }
  return { cn: full.slice(0, idx).trim(), orig: full.slice(idx + 1).trim() };
}

function unwrap(res) {
  if (!res) return null;
  if (res.results || res.movie_results) return res;
  return res.data || null;
}

async function tmdbSearch(query, year, lang, kind) {
  if (!query) return [];
  var p = { query: query, language: lang || "zh-CN" };
  if (year) {
    if (kind === "tv") p.first_air_date_year = year;
    else p.year = year;
  }
  try {
    var data = unwrap(await Widget.tmdb.get(kind === "tv" ? "/search/tv" : "/search/movie", { params: p }));
    return (data && data.results) || [];
  } catch (e) {
    console.log("TMDB 搜尋失敗 [" + query + "]：" + (e && e.message ? e.message : e));
    return [];
  }
}

async function tmdbFindImdb(imdbId) {
  try {
    var data = unwrap(
      await Widget.tmdb.get("/find/" + imdbId, {
        params: { external_source: "imdb_id", language: "zh-CN" }
      })
    );
    if (!data) return null;
    if (data.movie_results && data.movie_results.length) return { r: data.movie_results[0], type: "movie" };
    if (data.tv_results && data.tv_results.length) return { r: data.tv_results[0], type: "tv" };
  } catch (e) {
    console.log("TMDB find 失敗 [" + imdbId + "]：" + (e && e.message ? e.message : e));
  }
  return null;
}

function pickNearYear(results, year) {
  for (var i = 0; i < results.length; i++) {
    var y = parseInt((results[i].release_date || results[i].first_air_date || "").slice(0, 4), 10);
    if (y && Math.abs(y - year) <= 1) return results[i];
  }
  return null;
}

// 讀豆瓣條目頁：完整片名、年份、IMDb 編號
async function fetchSubjectInfo(id) {
  if (doubanBlocked) return null;
  var got = await fetchDouban("https://movie.douban.com/subject/" + id + "/", true);
  if (!got) return null;
  var text = got.text;
  var t = text.match(/property="v:itemreviewed">([^<]+)</) || text.match(/^#\s+(.+?)\s*\(\d{4}\)\s*$/m);
  var y = text.match(/class="year">\((\d{4})\)/) || text.match(/^#\s+.+?\((\d{4})\)\s*$/m);
  var imdb = text.match(/IMDb:\s*(?:<\/span>)?\s*(tt\d+)/);
  return {
    title: t ? clean(t[1]) : "",
    year: y ? parseInt(y[1], 10) : null,
    imdb: imdb ? imdb[1] : ""
  };
}

async function searchByTitle(title, year) {
  var t = splitTitle(title);
  if (t.orig) {
    var tries = [year, year - 1, null];
    for (var i = 0; i < tries.length; i++) {
      var r = await tmdbSearch(t.orig, tries[i]);
      var best = pickNearYear(r, year) || (tries[i] && r[0]) || null;
      if (best) return best;
    }
  }
  var rc = await tmdbSearch(t.cn, null);
  return pickNearYear(rc, year);
}

async function tmdbMovieById(tmdbId) {
  try {
    var data = await Widget.tmdb.get("/movie/" + tmdbId, { params: { language: "zh-CN" } });
    if (data && !data.id && data.data) data = data.data;
    if (data && data.id) return { r: data, type: "movie" };
  } catch (e) {
    console.log("TMDB 詳情失敗 [" + tmdbId + "]：" + (e && e.message ? e.message : e));
  }
  // 詳情抓不到時仍回傳 ID，讓詳情頁照樣以 TMDB 識別
  return { r: { id: tmdbId }, type: "movie" };
}

function normTitle(t) {
  return (t || "").toLowerCase().replace(/[\s\-_:：·・,，.。!！?？'"“”‘’()（）《》]/g, "");
}

async function searchByQuery(q, year, kind, strict) {
  var tries = [year, year - 1, year + 1, null];
  for (var i = 0; i < tries.length; i++) {
    var r = await tmdbSearch(q, tries[i], "zh-CN", kind);
    // 嚴格模式：片名或原名必須完全相同，避免新片對到同名舊片
    if (strict) {
      var nq = normTitle(q);
      r = r.filter(function (x) {
        var y = parseInt((x.release_date || x.first_air_date || "").slice(0, 4), 10);
        var nearYear = !y || Math.abs(y - year) <= 1;
        return [x.title, x.original_title, x.name, x.original_name].some(function (t) {
          var nt = normTitle(t);
          if (!nt) return false;
          if (nt === nq) return true;
          // 片名互相包含（如副標題差異）且年份相近也算
          return nearYear && nq.length >= 4 && nt.length >= 4 && (nt.indexOf(nq) !== -1 || nq.indexOf(nt) !== -1);
        });
      });
    }
    var best = pickNearYear(r, year) || (tries[i] && r[0]) || null;
    if (best) return best;
  }
  return null;
}

async function matchTmdb(row, festYear) {
  // 內建備份：直接依片名搜尋
  if (row.query) {
    var type = row.kind === "tv" ? "tv" : "movie";
    var hq = await searchByQuery(row.query, row.qyear || festYear, row.kind, row.strict);
    if (hq) return { r: hq, type: type };
    // 有豆瓣 ID：讀豆瓣條目頁，用 IMDb 編號或完整片名再對一次 TMDB
    if (row.doubanId) {
      var info = await fetchSubjectInfo(row.doubanId);
      if (info) {
        if (info.imdb) {
          var f = await tmdbFindImdb(info.imdb);
          if (f) return f;
        }
        if (info.title) {
          var t2 = splitTitle(info.title);
          var q2 = t2.orig || t2.cn;
          if (q2 && q2 !== row.query) {
            var h2 = await searchByQuery(q2, info.year || row.qyear || festYear, row.kind, row.strict);
            if (h2) return { r: h2, type: type };
          }
        }
      }
    }
    return null;
  }
  // 0. 手動指定
  if (TMDB_OVERRIDES[row.id]) return await tmdbMovieById(TMDB_OVERRIDES[row.id]);
  // 1. 標題本身有原名：直接搜尋
  var t = splitTitle(row.title);
  if (t.orig) {
    var hit = await searchByTitle(row.title, festYear);
    if (hit) return { r: hit, type: "movie" };
  }
  // 2. 讀豆瓣條目頁，優先用 IMDb 精確對應
  var info = await fetchSubjectInfo(row.id);
  if (info) {
    if (info.imdb) {
      var f = await tmdbFindImdb(info.imdb);
      if (f) return f;
    }
    if (info.title) {
      var hit2 = await searchByTitle(info.title, info.year || festYear);
      if (hit2) return { r: hit2, type: "movie" };
    }
  }
  // 3. 最後用中文片名
  if (!t.orig) {
    var hit3 = await searchByTitle(row.title, festYear);
    if (hit3) return { r: hit3, type: "movie" };
  }
  return null;
}

async function toItem(row, festYear) {
  var cat = row.cats.join(" / ");
  var m = await matchTmdb(row, festYear);
  if (!m && !row.id && row.doubanId) {
    // TMDB 對不到但有豆瓣 ID：以豆瓣條目顯示
    console.log("TMDB 找不到：" + row.title + "（以豆瓣識別顯示）");
    return {
      id: row.doubanId, type: "douban", title: row.title, mediaType: "movie",
      posterPath: "", description: cat, genreTitle: cat,
      link: "https://movie.douban.com/subject/" + row.doubanId + "/"
    };
  }
  if (!m && !row.id) {
    // TMDB 對不到仍顯示，點開連到豆瓣搜尋
    console.log("TMDB 找不到：" + row.title + "（以一般條目顯示）");
    return {
      id: "q:" + row.title,
      type: "url",
      title: row.title,
      mediaType: row.kind === "tv" ? "tv" : "movie",
      posterPath: "",
      description: cat,
      genreTitle: cat,
      link: "https://search.douban.com/movie/subject_search?search_text=" + encodeURIComponent(row.title)
    };
  }
  if (!m) {
    console.log("TMDB 找不到：" + row.title + "（保留豆瓣識別）");
    return {
      id: row.id, type: "douban", title: row.title, mediaType: "movie",
      posterPath: row.poster || "", description: cat, genreTitle: cat,
      link: "https://movie.douban.com/subject/" + row.id + "/"
    };
  }
  var r = m.r;
  return {
    id: String(r.id),
    type: "tmdb",
    mediaType: m.type,
    title: r.title || r.name || row.title,
    posterPath: r.poster_path || "",
    backdropPath: r.backdrop_path || "",
    releaseDate: r.release_date || r.first_air_date || "",
    rating: r.vote_average || 0,
    genreTitle: cat,
    description: cat + (r.overview ? "｜" + r.overview : "")
  };
}

async function mapInBatches(rows, size, fn) {
  var out = [];
  for (var i = 0; i < rows.length; i += size) {
    out = out.concat(await Promise.all(rows.slice(i, i + size).map(fn)));
  }
  return out;
}

async function loadFestival(fest, params) {
  var editions = Object.keys(FEST_YEARS[fest]).map(Number);
  var edition = String((params && params.edition) || Math.max.apply(null, editions));
  var listType = (params && params.listType) || "winners";
  var base = "https://movie.douban.com/awards/" + fest + "/" + edition + "/";
  var url = listType === "nominees" ? base + "nominees?k=a" : base;

  doubanBlocked = false;
  var rows = null;
  var festYear = FEST_YEARS[fest][edition] || new Date().getFullYear();

  var got = await fetchDouban(url);
  if (got) {
    var parsed = got.format === "html" ? parseHtml(got.text) : parseMarkdown(got.text);
    if (!parsed.list.length && got.format === "html") parsed = parseMarkdown(got.text);
    if (parsed.year) festYear = parsed.year;
    if (parsed.list.length) rows = parsed.list;
  } else {
    doubanBlocked = true;
  }

  if (!rows && FALLBACK[fest] && FALLBACK[fest][edition]) {
    console.log("豆瓣請求失敗，改用內建第" + edition + "屆資料");
    rows = FALLBACK[fest][edition].map(function (r) {
      return { id: r[0], title: r[1], cats: [r[2]], poster: "" };
    });
  }
  if (!rows && FALLBACK_Q[fest] && FALLBACK_Q[fest][edition]) {
    console.log("豆瓣請求失敗，改用內建第" + edition + "屆獲獎名單（依片名比對 TMDB）");
    var byQ = {};
    rows = [];
    FALLBACK_Q[fest][edition].forEach(function (r) {
      if (byQ[r[0]]) { byQ[r[0]].cats.push(r[1]); return; }
      byQ[r[0]] = { id: null, doubanId: r[4] || null, query: r[0], qyear: r[2] || null, kind: r[3] || "movie", title: r[0], cats: [r[1]], poster: "", strict: fest === "siff" };
      rows.push(byQ[r[0]]);
    });
  }
  // 全部提名：在獲獎名單後補上主競賽入圍片
  if (listType === "nominees" && FALLBACK_NOM[fest] && FALLBACK_NOM[fest][edition] && (!rows || rows[0].id === null)) {
    rows = rows || [];
    var seenQ = {};
    rows.forEach(function (r) { if (r.query) seenQ[r.query] = true; });
    FALLBACK_NOM[fest][edition].forEach(function (n) {
      if (seenQ[n[0]]) return;
      seenQ[n[0]] = true;
      rows.push({ id: null, doubanId: n[3] || null, query: n[0], qyear: n[1] || null, kind: "movie", title: n[0], cats: [n[2] || "主競賽・入圍"], poster: "", strict: fest === "siff" });
    });
    console.log("加入內建主競賽入圍名單");
  }
  if (!rows) throw new Error("豆瓣拒絕請求（可能是反爬），請到「運行日誌」查看各方案的錯誤");

  var items = await mapInBatches(rows, 4, function (r) { return toItem(r, festYear); });
  return items.filter(function (it) { return !!it; });
}

async function loadTiff(params) {
  return loadFestival("tiff", params);
}
