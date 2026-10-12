// 上海國際電影節・金爵獎歷屆得主 — ForwardWidget 模塊
// 資料：1993–2026 主競賽單元五大獎；海報與詳情由 TMDB 比對取得，比對不到則以連結條目呈現。

var WidgetMetadata = {
  id: "siff.jinjue.winners",
  title: "金爵獎歷屆得主",
  icon: "https://raw.githubusercontent.com/Ma98hao04hsin15/RexWidgets/refs/heads/main/shanghai-international-film-festival-logo-vector%20(1).png",
  description: "上海國際電影節金爵獎 1993–2026 主競賽單元得主：最佳影片、評委會大獎、最佳導演、最佳男女演員",
  author: "Claude",
  site: "https://www.siff.com",
  version: "1.0.4",
  requiredVersion: "0.0.1",
  detailCacheDuration: 86400,
  modules: [
    {
      title: "按獎項瀏覽",
      description: "選擇獎項，依年份列出歷屆得獎影片",
      requiresWebView: false,
      functionName: "loadByAward",
      cacheDuration: 3600,
      params: [
        {
          name: "award",
          title: "獎項",
          type: "enumeration",
          value: "film",
          enumOptions: [
            { title: "最佳影片", value: "film" },
            { title: "評委會大獎", value: "jury" },
            { title: "最佳導演", value: "dir" },
            { title: "最佳男演員", value: "actor" },
            { title: "最佳女演員", value: "actress" }
          ]
        },
        {
          name: "region",
          title: "地區",
          type: "enumeration",
          value: "all",
          enumOptions: [
            { title: "全部", value: "all" },
            { title: "僅華語作品", value: "cn" },
            { title: "僅外語作品", value: "foreign" }
          ]
        },
        {
          name: "sort",
          title: "排序",
          type: "enumeration",
          value: "desc",
          enumOptions: [
            { title: "由新到舊", value: "desc" },
            { title: "由舊到新", value: "asc" }
          ]
        },
        { name: "page", title: "頁碼", type: "page" }
      ]
    },
    {
      title: "按屆次瀏覽",
      description: "選擇年份，列出該屆所有得獎影片",
      requiresWebView: false,
      functionName: "loadByYear",
      cacheDuration: 3600,
      params: [
        {
          name: "year",
          title: "年份",
          type: "enumeration",
          value: "2026",
          enumOptions: [] // 由下方自動填入
        }
      ]
    },
    {
      title: "華語得獎作品",
      description: "歷屆所有獎項中的華語得獎影片",
      requiresWebView: false,
      functionName: "loadChinese",
      cacheDuration: 3600,
      params: [{ name: "page", title: "頁碼", type: "page" }]
    }
  ]
};

// ---------------------------------------------------------------------------
// 資料
// 每筆：[年份, 屆次, 獎項, 中文片名, 原文/英文片名(供TMDB比對), 得主, 國家/地區, 華語?]
// ---------------------------------------------------------------------------
var AWARD_NAME = { film: "最佳影片", jury: "評委會大獎", dir: "最佳導演", actor: "最佳男演員", actress: "最佳女演員" };

var ROWS = [
  [1993,1,"film","無言的山丘","Hill of No Return","王童","台灣",1],
  [1993,1,"jury","籠民","Cageman","張之亮","香港",1],
  [1993,1,"dir","西便制","Sopyonje","林權澤","韓國",0],
  [1993,1,"actor","戴恩斯神父","Daens","揚·德克萊爾","比利時",0],
  [1993,1,"actress","西便制","Sopyonje","吳貞孩","韓國",0],

  [1995,2,"film","沉默的誓言","Broken Silence","沃夫岡·潘澤","瑞士",0],
  [1995,2,"jury","火之屋","House of Fire","Juan Bautista Stagnaro","阿根廷",0],
  [1995,2,"jury","美國女兒","American Daughter","卡倫·沙赫納扎羅夫","俄羅斯",0],
  [1995,2,"dir","我的童年","Min fynske barndom","艾瑞克·克勞森","丹麥",0],
  [1995,2,"actor","Les Milles","Les Milles","尚-皮耶·馬利耶","法國",0],
  [1995,2,"actress","紅櫻桃","Red Cherry","郭柯宇","中國",1],

  [1997,3,"film","林地居民","The Woodlanders","菲爾·阿格蘭","英國",0],
  [1997,3,"jury","安居","Live at Peace","胡炳榴","中國",1],
  [1997,3,"jury","Mendel","Mendel","Alexander Røsler","挪威",0],
  [1997,3,"dir","林地居民","The Woodlanders","菲爾·阿格蘭","英國",0],
  [1997,3,"actor","旅伴","Compagna di viaggio","米歇爾·皮寇利","法國",0],
  [1997,3,"actress","安居","Live at Peace","Pan Yu","中國",1],
  [1997,3,"actress","Sur un air de mambo","Sur un air de mambo","凱薩琳·雅各","法國",0],

  [1999,4,"film","Propaganda","Propaganda","錫南·切廷","土耳其",0],
  [1999,4,"jury","The Lunatics' Ball","The Lunatics' Ball","Michael Thorp","紐西蘭",0],
  [1999,4,"dir","學校III","A Class to Remember 3","山田洋次","日本",0],
  [1999,4,"actor","Laugh, So The Photo Will Be Beautiful","Edhak el sora tetlaa helwa","艾哈邁德·扎基","埃及",0],
  [1999,4,"actress","一代天驕成吉思汗","Genghis Khan","艾麗婭","中國",1],

  [2001,5,"film","Antitrust","Antitrust","彼得·哈維特","美國",0],
  [2001,5,"dir","Antitrust","Antitrust","彼得·哈維特","美國",0],
  [2001,5,"actor","The Closet","Le Placard","丹尼爾·奧圖","法國",0],
  [2001,5,"actress","Money Is Not Everything","Pieniądze to nie wszystko","Stanisława Celińska","波蘭",0],
  [2001,5,"actress","The Full Moon","The Full Moon","彭玉","中國",1],

  [2002,6,"film","生活秀","Life Show","霍建起","中國",1],
  [2002,6,"jury","青春電幻物語","All About Lily Chou-Chou","岩井俊二","日本",0],
  [2002,6,"dir","Mullet","Mullet","大衛·凱薩","澳洲",0],
  [2002,6,"actor","哈特戰爭","Hart's War","柯林·法洛","愛爾蘭",0],
  [2002,6,"actress","生活秀","Life Show","陶紅","中國",1],

  [2004,7,"film","Tradition of Lover Killing","Tradition of Lover Killing","霍斯洛·馬蘇米","伊朗",0],
  [2004,7,"jury","茉莉花開","Jasmine Women","侯詠","中國",1],
  [2004,7,"dir","醜聞","Untold Scandal","李在容","韓國",0],
  [2004,7,"actor","Evil","Ondskan","安德烈亞斯·威爾森","瑞典",0],
  [2004,7,"actress","美麗上海","Shanghai Story","顧美華","香港",1],

  [2005,8,"film","村之寫真集","Village Photobook","三原光尋","日本",0],
  [2005,8,"jury","求求你表揚我","Gimme Kudos","黃建新","中國",1],
  [2005,8,"dir","Young Andersen","Young Andersen","魯姆勒·哈默里希","丹麥",0],
  [2005,8,"actor","村之寫真集","Village Photobook","藤龍也","日本",0],
  [2005,8,"actress","情人結","A Time to Love","趙薇","中國",1],

  [2006,9,"film","四分鐘","Four Minutes","克里斯·克勞斯","德國",0],
  [2006,9,"jury","天狗","The Forest Ranger","戚健","中國",1],
  [2006,9,"dir","心力交瘁","Burn Out","法比安娜·戈代","法國",0],
  [2006,9,"actor","心力交瘁","Burn Out","奧利維耶·古爾梅","法國",0],
  [2006,9,"actress","愛無專屬","Love Belongs to Everyone","艾爾絲·多特曼斯","比利時",0],

  [2007,10,"film","According to Plan","Ganz nach Plan","Franziska Meletzky","德國",0],
  [2007,10,"jury","新人","The New Man","克勞斯·哈魯","瑞典",0],
  [2007,10,"dir","吳清源","The Go Master","田壯壯","中國",1],
  [2007,10,"actor","Cabeza de perro","Cabeza de perro","胡安·荷西·巴耶斯塔","西班牙",0],
  [2007,10,"actress","According to Plan","Ganz nach Plan","Corinna Harfouch 等四人","德國",0],

  [2008,11,"film","The Fly","The Fly","弗拉基米爾·科特","俄羅斯",0],
  [2008,11,"jury","老魚","Old Fish","高群書","中國",1],
  [2008,11,"dir","Loss","Loss","Māris Martinsons","立陶宛",0],
  [2008,11,"actor","老魚","Old Fish","馬國偉","中國",1],
  [2008,11,"actress","Václav","Václav","艾米莉亞·瓦沙里約娃","斯洛伐克",0],

  [2009,12,"film","Original","Original","Alexander Brøndsted、Antonio Tublen","瑞典／丹麥",0],
  [2009,12,"jury","尋找智美更登","The Search","萬瑪才旦","中國",1],
  [2009,12,"dir","Normal","Normal","尤利烏斯·謝夫契克","捷克",0],
  [2009,12,"actor","Original","Original","斯韋里爾·古德納松","丹麥",0],
  [2009,12,"actress","愛之傷痕","Aching Hearts","西蒙娜·唐","丹麥",0],

  [2010,13,"film","再吻我一次","Kiss Me Again","加布里埃萊·穆奇諾","義大利",0],
  [2010,13,"jury","碧羅雪山","Deep in the Clouds","劉杰","中國",1],
  [2010,13,"dir","碧羅雪山","Deep in the Clouds","劉杰","中國",1],
  [2010,13,"actor","Wedding Fever in Campobello","Wedding Fever in Campobello","克里斯蒂安·烏爾門","德國",0],
  [2010,13,"actress","再吻我一次","Kiss Me Again","維多利亞·普奇尼","義大利",0],

  [2011,14,"film","Hayde Bre","Hayde Bre","奧罕·奧烏茲","土耳其",0],
  [2011,14,"jury","Hello！樹先生","Mr. Tree","韓杰","中國",1],
  [2011,14,"dir","Hello！樹先生","Mr. Tree","韓杰","中國",1],
  [2011,14,"actor","Hayde Bre","Hayde Bre","謝夫凱特·埃姆魯拉","土耳其",0],
  [2011,14,"actress","郎在對門唱山歌","Folk Songs Singing","呂星辰","中國",1],

  [2012,15,"film","熊","The Bear","霍斯洛·馬蘇米","伊朗",0],
  [2012,15,"jury","For the Love of God","For the Love of God","米舍琳·朗克托","加拿大",0],
  [2012,15,"dir","神探亨特張","Beijing Blues","高群書","中國",1],
  [2012,15,"actor","The Conductor","The Conductor","弗拉達斯·巴格多納斯","俄羅斯",0],
  [2012,15,"actress","悲傷成夢","Lu's Dream","烏蘇拉·普魯內達","墨西哥",0],

  [2013,16,"film","少校","The Major","尤里·貝科夫","俄羅斯",0],
  [2013,16,"jury","Reliance","Reliance","William Olsson","瑞典",0],
  [2013,16,"dir","少校","The Major","尤里·貝科夫","俄羅斯",0],
  [2013,16,"actor","激戰","Unbeatable","張家輝","香港",1],
  [2013,16,"actress","激戰","Unbeatable","李馨巧","馬來西亞",1],

  [2014,17,"film","小英格蘭","Little England","潘特里斯·沃爾加里斯","希臘",0],
  [2014,17,"jury","勝利","Uncle Victory","張猛","中國",1],
  [2014,17,"dir","小英格蘭","Little England","潘特里斯·沃爾加里斯","希臘",0],
  [2014,17,"actor","最後的劊子手","The Last Executioner","維塔亞·潘斯林加姆","泰國",0],
  [2014,17,"actress","小英格蘭","Little England","佩內洛普·齊利卡","希臘",0],

  [2015,18,"film","守夜","Jamais de la vie","皮埃爾·若利韋","法國／比利時",0],
  [2015,18,"jury","Carte Blanche","Carte Blanche","亞采克·魯辛斯基","波蘭",0],
  [2015,18,"dir","烈日灼心","The Dead End","曹保平","中國",1],
  [2015,18,"actor","烈日灼心","The Dead End","鄧超、段奕宏、郭濤","中國",1],
  [2015,18,"actress","助產士","Wildeye","克莉絲塔·科索寧","芬蘭",0],

  [2016,19,"film","德蘭","De Lan","劉杰","中國",1],
  [2016,19,"jury","德州見","See You in Texas","維托·帕爾米耶里","義大利",0],
  [2016,19,"dir","惡之花","Flowers of Evil","安提·喬金恩","芬蘭",0],
  [2016,19,"actor","追兇者也","Cock and Bull","劉燁","中國",1],
  [2016,19,"actress","團地","The Projects","藤山直美","日本",0],

  [2017,20,"film","Pedicab","Pedicab","保羅·維拉盧納","菲律賓",0],
  [2017,20,"jury","Yellow","Yellow","Mostafa Taghizadeh","伊朗",0],
  [2017,20,"dir","I'm a Killer","I'm a Killer","馬切伊·皮普日察","波蘭",0],
  [2017,20,"actor","The Conformist","The Conformist","黃渤","中國",1],
  [2017,20,"actress","Yellow","Yellow","莎蕾·巴亞特","伊朗",0],

  [2018,21,"film","再別天堂","Out of Paradise","巴特巴雅爾·喬格松","瑞士／蒙古",0],
  [2018,21,"jury","阿拉姜色","Ala Changso","松太加","中國",1],
  [2018,21,"dir","A Translator","A Translator","羅德里戈與塞巴斯蒂安·巴里烏索","古巴／加拿大",0],
  [2018,21,"actor","Friday's Child","Friday's Child","泰·謝里丹","美國",0],
  [2018,21,"actress","Tadoussac","Tadoussac","伊莎貝爾·布萊","加拿大",0],

  [2019,22,"film","夢之城堡","Castle of Dreams","雷薩·米爾卡里米","伊朗",0],
  [2019,22,"jury","呼吸之間","Inhale-Exhale","迪托·琴察澤","格魯吉亞",0],
  [2019,22,"dir","夢之城堡","Castle of Dreams","雷薩·米爾卡里米","伊朗",0],
  [2019,22,"actor","夢之城堡","Castle of Dreams","哈邁德·貝達德","伊朗",0],
  [2019,22,"actor","拂鄉心","The Return","常楓","台灣",1],
  [2019,22,"actress","呼吸之間","Inhale-Exhale","莎樂美·戴繆莉亞","格魯吉亞",0],

  [2021,24,"film","東北虎","Manchurian Tiger","耿軍","中國",1],
  [2021,24,"jury","野蠻人入侵","Barbarian Invasion","陳翠梅","馬來西亞",1],
  [2021,24,"dir","反身曲徑","The Contrary Route","阿博法茲·賈利利","伊朗",0],
  [2021,24,"actor","反身曲徑","The Contrary Route","普揚·謝卡里","伊朗",0],
  [2021,24,"actress","業餘愛好者","Amateurs","瑪澤娜·加耶夫斯卡","波蘭",0],

  [2023,25,"film","658公里、陽子的旅途","Yoko","熊切和嘉","日本",0],
  [2023,25,"jury","遺跡的聲音","Muyeres","瑪塔·拉利亞納","西班牙",0],
  [2023,25,"dir","不虛此行","All Ears","劉伽茵","中國",1],
  [2023,25,"actor","不虛此行","All Ears","胡歌","中國",1],
  [2023,25,"actor","第八個嫌疑人","Dust to Dust","大鵬","中國",1],
  [2023,25,"actress","658公里、陽子的旅途","Yoko","菊地凜子","日本",0],

  [2024,26,"film","離婚","The Divorce","達尼亞爾·薩拉馬特","哈薩克",0],
  [2024,26,"jury","成年人","Adult","馬里亞諾·岡薩雷斯","阿根廷",0],
  [2024,26,"dir","院中雪","Snowflakes in My Yard","巴庫·巴庫拉德澤","格魯吉亞／俄羅斯",0],
  [2024,26,"actor","陽光俱樂部","Mostly Sunny","黃曉明","中國",1],
  [2024,26,"actress","離婚","The Divorce","奧瑪洛娃·阿米拉","哈薩克",0],

  [2025,27,"film","黑，紅，黃","Black Red Yellow","阿克坦·阿布德卡雷科夫","吉爾吉斯",0],
  [2025,27,"dir","脫韁者也","脱缰者也","曹保平","中國",1],
  [2025,27,"actor","被記住事物的氣味","The Scent of Things Remembered","若澤·馬丁斯","葡萄牙",0],
  [2025,27,"actress","長夜將盡","Wild Nights, Tamed Beasts","萬茜","中國",1],

  [2026,28,"film","大西洋","Atlantic Rhapsody","鍾凱峰","中國",1],
  [2026,28,"jury","微光女孩","Iluminada","尼古拉斯·林孔·吉耶","比利時",0],
  [2026,28,"dir","哈莉瑪","Halima","亞辛·伊德里西","摩洛哥",0],
  [2026,28,"actor","紙盒藏迷","Secret in the Box","張頌文","中國／香港",1],
  [2026,28,"actress","哈莉瑪","Halima","哈迪賈·阿瑪里","摩洛哥",0]
];

// 手動指定的 TMDB ID（鍵為「年份|中文片名」），優先於片名搜尋
var TMDB_IDS = {
  "2005|村之寫真集": 339593,
  "2007|According to Plan": 6697,
  "2008|The Fly": 106080,
  "2012|熊": 610273,
  "2013|少校": 191717,
  "2017|Pedicab": 401521,
  "2019|夢之城堡": 581159,
  "2023|658公里、陽子的旅途": 1090144,
  "2024|離婚": 1305053,
  "1995|火之屋": 123226,
  "2007|新人": 25782,
  "2008|老魚": 197844,
  "2009|尋找智美更登": 177369,
  "2012|For the Love of God": 82019,
  "2013|Reliance": 181338,
  "2014|勝利": 335405,
  "2015|Carte Blanche": 342765,
  "2017|Yellow": 482672,
  "2019|呼吸之間": 614406,
  "2024|成年人": 1305021,
  "2006|心力交瘁": 70930,
  "2008|Loss": 37473,
  "2009|Normal": 99229,
  "2015|烈日灼心": 344556,
  "2016|惡之花": 412437,
  "2017|I'm a Killer": 424782,
  "2023|不虛此行": 1077297,
  "2024|院中雪": 1298652,
  "1993|戴恩斯神父": 44103,
  "1999|Laugh, So The Photo Will Be Beautiful": 452461,
  "2012|The Conductor": 99785,
  "2019|拂鄉心": 630421,
  "2023|第八個嫌疑人": 1133013,
  "1995|紅櫻桃": 68841,
  "1997|Sur un air de mambo": 1561660,
  "2002|生活秀": 216008,
  "2021|業餘愛好者": 840355
};

var PAGE_SIZE = 40; // 每個獎項最多約 30 筆，一頁就能全部列出
var AWARD_ORDER = ["film", "jury", "dir", "actor", "actress"];

// 自動填入「按屆次瀏覽」的年份選項
(function () {
  var seen = {};
  var opts = [];
  for (var i = ROWS.length - 1; i >= 0; i--) {
    var y = ROWS[i][0];
    if (!seen[y]) { seen[y] = 1; opts.push({ title: y + " 第" + ROWS[i][1] + "屆", value: String(y) }); }
  }
  WidgetMetadata.modules[1].params[0].enumOptions = opts;
})();

// ---------------------------------------------------------------------------
// TMDB 比對
// ---------------------------------------------------------------------------
var tmdbCache = {};

async function searchTmdb(query, year) {
  try {
    var res = await Widget.tmdb.get("/search/movie", {
      params: { query: query, language: "zh-TW" }
    });
    var list = (res && res.results) || [];
    // 只接受上映年份與得獎年份相差兩年以內的結果，避免同名誤配
    for (var i = 0; i < list.length; i++) {
      var d = list[i].release_date;
      if (!d) continue;
      var y = parseInt(d.slice(0, 4), 10);
      if (Math.abs(y - year) <= 2) return list[i];
    }
  } catch (e) {
    console.log("TMDB 搜尋失敗：" + query + " " + e);
  }
  return null;
}

async function fetchTmdbById(id) {
  try {
    var res = await Widget.tmdb.get("/movie/" + id, { params: { language: "zh-TW" } });
    if (res && res.id) return res;
  } catch (e) {
    console.log("TMDB 取得失敗：" + id + " " + e);
  }
  // 詳情取不到時仍回傳 ID，讓 Forward 自行載入
  return { id: Number(id) };
}

async function matchTmdb(row) {
  var key = row[4] + "|" + row[0];
  if (key in tmdbCache) return tmdbCache[key];
  var fixedId = TMDB_IDS[row[0] + "|" + row[3]];
  if (fixedId) {
    tmdbCache[key] = await fetchTmdbById(fixedId);
    return tmdbCache[key];
  }
  var hit = await searchTmdb(row[4], row[0]);
  if (!hit && row[3] !== row[4]) hit = await searchTmdb(row[3], row[0]);
  tmdbCache[key] = hit;
  return hit;
}

function describe(row) {
  return row[0] + " 第" + row[1] + "屆 " + AWARD_NAME[row[2]] + "｜" + row[5] + "（" + row[6] + "）";
}

// 寫法與社群常用模塊（豆瓣、追劇日曆）一致：id 用 TMDB 數字 ID，搭配 mediaType: "movie"。
function tmdbItem(row, hit) {
  var item = {
    id: Number(hit.id),
    type: "tmdb",
    mediaType: "movie",
    title: "《" + row[3] + "》",
    description: describe(row) + (hit.overview ? "\n\n" + hit.overview : ""),
    releaseDate: hit.release_date || String(row[0]),
    genreTitle: AWARD_NAME[row[2]] + " · " + row[0]
  };
  if (hit.poster_path) item.posterPath = hit.poster_path;
  if (hit.backdrop_path) item.backdropPath = hit.backdrop_path;
  if (hit.vote_average) item.rating = hit.vote_average;
  return item;
}

async function toItem(row) {
  var hit = await matchTmdb(row);
  if (hit) return tmdbItem(row, hit);
  // 比對不到：以 TMDB 搜尋頁連結呈現
  var url = "https://www.themoviedb.org/search?query=" + encodeURIComponent(row[4]);
  return {
    id: url,
    type: "url",
    mediaType: "movie",
    title: "《" + row[3] + "》",
    description: describe(row),
    releaseDate: String(row[0]),
    genreTitle: AWARD_NAME[row[2]] + " · " + row[0],
    link: url
  };
}

function paginate(rows, page) {
  var p = Math.max(1, parseInt(page || 1, 10));
  return rows.slice((p - 1) * PAGE_SIZE, p * PAGE_SIZE);
}

async function mapAll(rows) {
  return Promise.all(rows.map(toItem));
}

// ---------------------------------------------------------------------------
// 模塊函式
// ---------------------------------------------------------------------------
async function loadByAward(params) {
  params = params || {};
  var award = params.award || "film";
  var region = params.region || "all";
  var rows = ROWS.filter(function (r) {
    if (r[2] !== award) return false;
    if (region === "cn") return r[7] === 1;
    if (region === "foreign") return r[7] !== 1;
    return true;
  });
  rows.sort(function (a, b) { return params.sort === "asc" ? a[0] - b[0] : b[0] - a[0]; });
  return mapAll(paginate(rows, params.page));
}

async function loadByYear(params) {
  params = params || {};
  var year = parseInt(params.year || "2026", 10);
  var rows = ROWS.filter(function (r) { return r[0] === year; });
  rows.sort(function (a, b) { return AWARD_ORDER.indexOf(a[2]) - AWARD_ORDER.indexOf(b[2]); });
  return mapAll(rows);
}

async function loadChinese(params) {
  params = params || {};
  var rows = ROWS.filter(function (r) { return r[7] === 1; });
  rows.sort(function (a, b) {
    return b[0] - a[0] || AWARD_ORDER.indexOf(a[2]) - AWARD_ORDER.indexOf(b[2]);
  });
  return mapAll(paginate(rows, params.page));
}
