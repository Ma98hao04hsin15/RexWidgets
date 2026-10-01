var WidgetMetadata = {
  "id": "douban_venice_awards",
  "title": "威尼斯國際電影節獲獎",
  "icon": "https://cdn.phototourl.com/member/2026-10-01-e2e43c98-dc0b-4e18-83d4-18c1111a9159.png",
  "description": "豆瓣電影・威尼斯國際電影節歷屆獲獎與提名片單，詳情以 TMDB 識別",
  "author": "Forward User",
  "site": "https://movie.douban.com/awards/venice/",
  "version": "3.0.1",
  "requiredVersion": "0.0.1",
  "detailCacheDuration": 60,
  "modules": [
    {
      "title": "威尼斯影展 獲獎片單",
      "description": "豆瓣威尼斯影展獲獎名單（TMDB 識別）",
      "requiresWebView": false,
      "functionName": "loadVenice",
      "cacheDuration": 86400,
      "params": [
        {
          "name": "edition",
          "title": "屆數",
          "type": "enumeration",
          "value": "83",
          "enumOptions": [
            {
              "title": "第83屆 (2026)",
              "value": "83"
            },
            {
              "title": "第82屆 (2025)",
              "value": "82"
            },
            {
              "title": "第81屆 (2024)",
              "value": "81"
            },
            {
              "title": "第80屆 (2023)",
              "value": "80"
            },
            {
              "title": "第79屆 (2022)",
              "value": "79"
            },
            {
              "title": "第78屆 (2021)",
              "value": "78"
            },
            {
              "title": "第77屆 (2020)",
              "value": "77"
            },
            {
              "title": "第76屆 (2019)",
              "value": "76"
            },
            {
              "title": "第75屆 (2018)",
              "value": "75"
            },
            {
              "title": "第74屆 (2017)",
              "value": "74"
            },
            {
              "title": "第73屆 (2016)",
              "value": "73"
            },
            {
              "title": "第72屆 (2015)",
              "value": "72"
            },
            {
              "title": "第71屆 (2014)",
              "value": "71"
            },
            {
              "title": "第70屆 (2013)",
              "value": "70"
            },
            {
              "title": "第69屆 (2012)",
              "value": "69"
            },
            {
              "title": "第68屆 (2011)",
              "value": "68"
            },
            {
              "title": "第67屆 (2010)",
              "value": "67"
            },
            {
              "title": "第66屆 (2009)",
              "value": "66"
            },
            {
              "title": "第65屆 (2008)",
              "value": "65"
            },
            {
              "title": "第64屆 (2007)",
              "value": "64"
            },
            {
              "title": "第63屆 (2006)",
              "value": "63"
            },
            {
              "title": "第62屆 (2005)",
              "value": "62"
            },
            {
              "title": "第61屆 (2004)",
              "value": "61"
            },
            {
              "title": "第60屆 (2003)",
              "value": "60"
            },
            {
              "title": "第59屆 (2002)",
              "value": "59"
            },
            {
              "title": "第58屆 (2001)",
              "value": "58"
            },
            {
              "title": "第57屆 (2000)",
              "value": "57"
            },
            {
              "title": "第56屆 (1999)",
              "value": "56"
            },
            {
              "title": "第55屆 (1998)",
              "value": "55"
            },
            {
              "title": "第54屆 (1997)",
              "value": "54"
            },
            {
              "title": "第53屆 (1996)",
              "value": "53"
            },
            {
              "title": "第52屆 (1995)",
              "value": "52"
            },
            {
              "title": "第51屆 (1994)",
              "value": "51"
            },
            {
              "title": "第50屆 (1993)",
              "value": "50"
            },
            {
              "title": "第49屆 (1992)",
              "value": "49"
            },
            {
              "title": "第48屆 (1991)",
              "value": "48"
            },
            {
              "title": "第47屆 (1990)",
              "value": "47"
            },
            {
              "title": "第46屆 (1989)",
              "value": "46"
            },
            {
              "title": "第45屆 (1988)",
              "value": "45"
            },
            {
              "title": "第44屆 (1987)",
              "value": "44"
            },
            {
              "title": "第43屆 (1986)",
              "value": "43"
            },
            {
              "title": "第42屆 (1985)",
              "value": "42"
            },
            {
              "title": "第41屆 (1984)",
              "value": "41"
            },
            {
              "title": "第40屆 (1983)",
              "value": "40"
            },
            {
              "title": "第39屆 (1982)",
              "value": "39"
            },
            {
              "title": "第38屆 (1981)",
              "value": "38"
            },
            {
              "title": "第37屆 (1980)",
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
var FEST_YEARS = {"venice":{"37":1980,"38":1981,"39":1982,"40":1983,"41":1984,"42":1985,"43":1986,"44":1987,"45":1988,"46":1989,"47":1990,"48":1991,"49":1992,"50":1993,"51":1994,"52":1995,"53":1996,"54":1997,"55":1998,"56":1999,"57":2000,"58":2001,"59":2002,"60":2003,"61":2004,"62":2005,"63":2006,"64":2007,"65":2008,"66":2009,"67":2010,"68":2011,"69":2012,"70":2013,"71":2014,"72":2015,"73":2016,"74":2017,"75":2018,"76":2019,"77":2020,"78":2021,"79":2022,"80":2023,"81":2024,"82":2025,"83":2026}};

// 豆瓣請求全部失敗時的內建備份：[豆瓣ID, 片名, 獎項]
var FALLBACK = { venice: {
  "83": [
    ["36901474","女人，未知 Kvinde ukendt","主競賽・金獅獎 / 沃爾皮杯・最佳女演員"],
    ["38617828","附帶傷亡 Naza","主競賽・評審團特別獎"],
    ["37490322","列夫·朗道","銀獅獎・最佳導演"],
    ["36847425","可能的愛情 가능한 사랑","銀獅獎・評審團大獎"],
    ["37447589","優秀卒子 Un Bon Petit Soldat","金奧賽拉獎・最佳編劇"],
    ["35641228","野馬九號","沃爾皮杯・最佳男演員"],
    ["36845676","繞道黛安 Un détour par Diane","地平線・最佳影片"],
    ["36308267","JO的一天：菲德拉篇 Mia mera sti zoi tis tzo: kefalaio Faidra","地平線・最佳導演"],
    ["36176186","猴子的孩子 I figli della scimmia","地平線・最佳劇本 / 地平線・最佳男演員"],
    ["38569740","看守者","地平線・最佳女演員"],
    ["38553238","片刻的幸福 Quelques Instants De Bonheur","地平線・最佳短片"],
    ["36728360","風起之家 La Maison du Vent","地平線・評審團特別獎 / 未來之獅處女作獎"],
    ["35384241","吾有其重 Eu contez","地平線・觀眾獎"],
    ["38557300","鴿環 The Pigeon Ring","沉浸式・大獎"],
    ["38557293","Out of the Ashes","沉浸式・評審團特別獎"],
    ["38557264","Empire at Sea","沉浸式・成就獎"],
    ["3431461","1943年的長夜 La lunga notte del '43","威尼斯經典・最佳修復電影"],
    ["38193967","15/18","馬塞洛·馬斯楚安尼獎"]
  ]
} };

// 手動指定：豆瓣ID -> TMDB 電影ID（自動對應不到或對錯時補在這裡）
var TMDB_OVERRIDES = {
  "3431461": 62365,
  "38569740": 1736497
};

// 內建備份（依片名到 TMDB 搜尋）：[搜尋片名, 獎項, 年份(選填), "tv"(劇集時填), 豆瓣ID(選填)]
// 第54屆：kinoafisha；第46–53屆：維基百科；第55–82屆：威尼斯雙年展官方公告及影視媒體報導；第37–45屆僅主要獎項；第83屆：豆瓣
var FALLBACK_Q = { venice: {
  "82": [
    ["Father Mother Sister Brother","主競賽・金獅獎"],
    ["The Voice of Hind Rajab","銀獅獎・評審團大獎"],
    ["The Smashing Machine","銀獅獎・最佳導演",2025],
    ["Sotto le nuvole","主競賽・評審團特別獎"],
    ["À pied d'œuvre","最佳編劇"],
    ["La grazia","沃爾皮杯・最佳男演員"],
    ["The Sun Rises on Us All","沃爾皮杯・最佳女演員"],
    ["Silent Friend","馬斯楚安尼獎"],
    ["En el camino","地平線・最佳影片",2025],
    ["Songs of Forgotten Trees","地平線・最佳導演"],
    ["Harà Watan","地平線・評審團特別獎"],
    ["Il rapimento di Arabella","地平線・最佳女演員"],
    ["Un anno di scuola","地平線・最佳男演員"],
    ["Hiedra","地平線・最佳劇本",2025],
    ["Utan Kelly","地平線・最佳短片"],
    ["Short Summer","未來之獅處女作獎"],
    ["Bashu, the Little Stranger","威尼斯經典・最佳修復電影",1989]
  ],
  "81": [
    ["The Room Next Door","主競賽・金獅獎"],
    ["Vermiglio","銀獅獎・評審團大獎"],
    ["The Brutalist","銀獅獎・最佳導演"],
    ["April","主競賽・評審團特別獎",2024],
    ["I'm Still Here","最佳編劇",2024],
    ["Jouer avec le feu","沃爾皮杯・最佳男演員"],
    ["Babygirl","沃爾皮杯・最佳女演員",2024],
    ["And Their Children After Them","馬斯楚安尼獎"],
    ["The New Year That Never Came","地平線・最佳影片"],
    ["Familiar Touch","地平線・最佳導演"],
    ["Familiar Touch","地平線・最佳女演員"],
    ["Familiar Touch","未來之獅處女作獎"],
    ["One of Those Days When Hemme Dies","地平線・評審團特別獎"],
    ["Familia","地平線・最佳男演員",2024],
    ["Happy Holidays","地平線・最佳劇本",2024],
    ["Who Loves the Sun","地平線・最佳短片",2024],
    ["Shahed","地平線額外單元觀眾獎",2024],
    ["Ecce bombo","威尼斯經典・最佳修復電影",1978]
  ],
  "80": [
    ["Poor Things","主競賽・金獅獎"],
    ["Evil Does Not Exist","銀獅獎・評審團大獎"],
    ["Io Capitano","銀獅獎・最佳導演"],
    ["Io Capitano","馬斯楚安尼獎"],
    ["Green Border","主競賽・評審團特別獎",2023],
    ["El Conde","最佳編劇"],
    ["Memory","沃爾皮杯・最佳男演員",2023],
    ["Priscilla","沃爾皮杯・最佳女演員",2023],
    ["Explanation for Everything","地平線・最佳影片"],
    ["Paradise Is Burning","地平線・最佳導演"],
    ["Una sterminata domenica","地平線・評審團特別獎"],
    ["El Paraíso","地平線・最佳女演員",2023],
    ["El Paraíso","地平線・最佳劇本",2023],
    ["City of Wind","地平線・最佳男演員",2023],
    ["A Short Trip","地平線・最佳短片",2023],
    ["Love Is a Gun","未來之獅處女作獎",2023],
    ["Felicità","地平線額外單元觀眾獎",2023],
    ["お引越し","威尼斯經典・最佳修復電影",1993]
  ],
  "79": [
    ["All the Beauty and the Bloodshed","主競賽・金獅獎"],
    ["Saint Omer","銀獅獎・評審團大獎"],
    ["Saint Omer","未來之獅處女作獎"],
    ["Bones and All","銀獅獎・最佳導演"],
    ["Bones and All","馬斯楚安尼獎"],
    ["No Bears","主競賽・評審團特別獎"],
    ["The Banshees of Inisherin","最佳編劇"],
    ["The Banshees of Inisherin","沃爾皮杯・最佳男演員"],
    ["Tár","沃爾皮杯・最佳女演員"],
    ["World War III","地平線・最佳影片",2022],
    ["World War III","地平線・最佳男演員",2022],
    ["Vera","地平線・最佳導演",2022],
    ["Vera","地平線・最佳女演員",2022],
    ["Bread and Salt","地平線・評審團特別獎",2022],
    ["Blanquita","地平線・最佳劇本"],
    ["Snow in September","地平線・最佳短片",2022],
    ["Nezouh","地平線額外單元觀眾獎"],
    ["殺しの烙印","威尼斯經典・最佳修復電影",1967]
  ],
  "78": [
    ["L'Événement","主競賽・金獅獎"],
    ["The Hand of God","銀獅獎・評審團大獎"],
    ["The Hand of God","馬斯楚安尼獎"],
    ["The Power of the Dog","銀獅獎・最佳導演"],
    ["Il buco","主競賽・評審團特別獎"],
    ["The Lost Daughter","最佳編劇"],
    ["On the Job: The Missing 8","沃爾皮杯・最佳男演員"],
    ["Parallel Mothers","沃爾皮杯・最佳女演員"],
    ["Pilgrims","地平線・最佳影片",2021],
    ["À plein temps","地平線・最佳導演"],
    ["À plein temps","地平線・最佳女演員"],
    ["El gran movimiento","地平線・評審團特別獎"],
    ["White Building","地平線・最佳男演員",2021],
    ["107 Mothers","地平線・最佳劇本"],
    ["Los huesos","地平線・最佳短片",2021],
    ["Imaculat","未來之獅處女作獎"],
    ["The Blind Man Who Did Not Want to See Titanic","地平線額外單元觀眾獎"]
  ],
  "77": [
    ["Nomadland","主競賽・金獅獎"],
    ["Nuevo orden","銀獅獎・評審團大獎"],
    ["Wife of a Spy","銀獅獎・最佳導演"],
    ["Dear Comrades!","主競賽・評審團特別獎"],
    ["The Disciple","最佳編劇",2020],
    ["Padrenostro","沃爾皮杯・最佳男演員"],
    ["Pieces of a Woman","沃爾皮杯・最佳女演員"],
    ["Sun Children","馬斯楚安尼獎"],
    ["The Wasteland","地平線・最佳影片",2020],
    ["Genus Pan","地平線・最佳導演"],
    ["Listen","地平線・評審團特別獎",2020],
    ["Listen","未來之獅處女作獎",2020],
    ["Zanka Contact","地平線・最佳女演員"],
    ["The Man Who Sold His Skin","地平線・最佳男演員"],
    ["I predatori","地平線・最佳劇本",2020],
    ["Entre tú y milagros","地平線・最佳短片"]
  ],
  "76": [
    ["Joker","主競賽・金獅獎",2019],
    ["J'accuse","銀獅獎・評審團大獎",2019],
    ["About Endlessness","銀獅獎・最佳導演"],
    ["La mafia non è più quella di una volta","主競賽・評審團特別獎"],
    ["繼園臺七號","最佳編劇"],
    ["Martin Eden","沃爾皮杯・最佳男演員",2019],
    ["Gloria Mundi","沃爾皮杯・最佳女演員",2019],
    ["Babyteeth","馬斯楚安尼獎"],
    ["Atlantis","地平線・最佳影片",2019],
    ["Blanco en blanco","地平線・最佳導演"],
    ["Verdict","地平線・評審團特別獎",2019],
    ["Madre","地平線・最佳女演員",2019],
    ["Un fils","地平線・最佳男演員",2019],
    ["Revenir","地平線・最佳劇本",2019],
    ["Darling","地平線・最佳短片",2019],
    ["You Will Die at Twenty","未來之獅處女作獎"],
    ["Ekstase","威尼斯經典・最佳修復電影",1933]
  ],
  "75": [
    ["Roma","主競賽・金獅獎",2018],
    ["The Favourite","銀獅獎・評審團大獎"],
    ["The Favourite","沃爾皮杯・最佳女演員"],
    ["The Sisters Brothers","銀獅獎・最佳導演"],
    ["The Nightingale","主競賽・評審團特別獎",2018],
    ["The Nightingale","馬斯楚安尼獎",2018],
    ["The Ballad of Buster Scruggs","最佳編劇"],
    ["At Eternity's Gate","沃爾皮杯・最佳男演員"],
    ["Manta Ray","地平線・最佳影片",2018],
    ["The River","地平線・最佳導演",2018],
    ["The Announcement","地平線・評審團特別獎",2018],
    ["The Man Who Surprised Everyone","地平線・最佳女演員"],
    ["Tel Aviv on Fire","地平線・最佳男演員"],
    ["Jinpa","地平線・最佳劇本"],
    ["Kado","地平線・最佳短片",2018],
    ["The Day I Lost My Shadow","未來之獅處女作獎"],
    ["La notte di San Lorenzo","威尼斯經典・最佳修復電影",1982]
  ],
  "74": [
    ["The Shape of Water","主競賽・金獅獎"],
    ["Foxtrot","銀獅獎・評審團大獎",2017],
    ["Jusqu'à la garde","銀獅獎・最佳導演"],
    ["Jusqu'à la garde","未來之獅處女作獎"],
    ["Sweet Country","主競賽・評審團特別獎",2017],
    ["Three Billboards Outside Ebbing, Missouri","最佳編劇"],
    ["The Insult","沃爾皮杯・最佳男演員",2017],
    ["Hannah","沃爾皮杯・最佳女演員",2017],
    ["Lean on Pete","馬斯楚安尼獎"],
    ["Nico, 1988","地平線・最佳影片"],
    ["No Date, No Signature","地平線・最佳導演"],
    ["No Date, No Signature","地平線・最佳男演員"],
    ["Caniba","地平線・評審團特別獎"],
    ["Les Bienheureux","地平線・最佳女演員",2017],
    ["Los versos del olvido","地平線・最佳劇本"],
    ["Gros chagrin","地平線・最佳短片"]
  ],
  "73": [
    ["Ang Babaeng Humayo","主競賽・金獅獎"],
    ["Nocturnal Animals","銀獅獎・評審團大獎"],
    ["La región salvaje","銀獅獎・最佳導演"],
    ["Рай","銀獅獎・最佳導演",2016],
    ["The Bad Batch","主競賽・評審團特別獎"],
    ["Jackie","最佳編劇",2016],
    ["El ciudadano ilustre","沃爾皮杯・最佳男演員"],
    ["La La Land","沃爾皮杯・最佳女演員"],
    ["Frantz","馬斯楚安尼獎"],
    ["Liberami","地平線・最佳影片"],
    ["Home","地平線・最佳導演",2016],
    ["Koca Dünya","地平線・評審團特別獎"],
    ["Tarde para la ira","地平線・最佳女演員"],
    ["São Jorge","地平線・最佳男演員"],
    ["苦钱","地平線・最佳劇本"],
    ["La voz perdida","地平線・最佳短片"],
    ["Akher Wahed Fina","未來之獅處女作獎"],
    ["L'uomo dei cinque palloni","威尼斯經典・最佳修復電影",1965]
  ],
  "72": [
    ["Desde allá","主競賽・金獅獎"],
    ["Anomalisa","銀獅獎・評審團大獎"],
    ["El Clan","銀獅獎・最佳導演",2015],
    ["Abluka","主競賽・評審團特別獎"],
    ["L'Hermine","最佳編劇"],
    ["L'Hermine","沃爾皮杯・最佳男演員"],
    ["Per amor vostro","沃爾皮杯・最佳女演員"],
    ["Beasts of No Nation","馬斯楚安尼獎"],
    ["Free in Deed","地平線・最佳影片"],
    ["The Childhood of a Leader","地平線・最佳導演"],
    ["The Childhood of a Leader","未來之獅處女作獎"],
    ["Boi Neon","地平線・評審團特別獎"],
    ["Tempête","地平線・最佳演員",2015],
    ["Belladonna","地平線・最佳短片",2015]
  ],
  "71": [
    ["A Pigeon Sat on a Branch Reflecting on Existence","主競賽・金獅獎"],
    ["The Look of Silence","銀獅獎・評審團大獎"],
    ["The Postman's White Nights","銀獅獎・最佳導演"],
    ["Sivas","主競賽・評審團特別獎",2014],
    ["Ghesseha","最佳編劇"],
    ["Hungry Hearts","沃爾皮杯・最佳男演員",2014],
    ["Hungry Hearts","沃爾皮杯・最佳女演員",2014],
    ["Le Dernier Coup de marteau","馬斯楚安尼獎"],
    ["Court","地平線・最佳影片",2014],
    ["Court","未來之獅處女作獎",2014],
    ["Theeb","地平線・最佳導演"],
    ["Belluscone. Una storia siciliana","地平線・評審團特別獎"],
    ["Takva su pravila","地平線・最佳演員"],
    ["Maryam","地平線・最佳短片",2014],
    ["Una giornata particolare","威尼斯經典・最佳修復電影",1977]
  ],
  "70": [
    ["Sacro GRA","主競賽・金獅獎"],
    ["郊遊","銀獅獎・評審團大獎"],
    ["Miss Violence","銀獅獎・最佳導演"],
    ["Miss Violence","沃爾皮杯・最佳男演員"],
    ["Die Frau des Polizisten","主競賽・評審團特別獎"],
    ["Philomena","最佳編劇"],
    ["Via Castellana Bandiera","沃爾皮杯・最佳女演員"],
    ["Joe","馬斯楚安尼獎",2013],
    ["Eastern Boys","地平線・最佳影片"],
    ["Still Life","地平線・最佳導演",2013],
    ["Ruin","地平線・評審團特別獎",2013],
    ["Mahi va gorbeh","地平線・創新內容特別獎"],
    ["Kush","地平線・最佳短片",2013],
    ["White Shadow","未來之獅處女作獎",2013]
  ],
  "69": [
    ["Pietà","主競賽・金獅獎",2012],
    ["The Master","銀獅獎・最佳導演",2012],
    ["The Master","沃爾皮杯・最佳男演員",2012],
    ["Paradies: Glaube","主競賽・評審團特別獎"],
    ["Fill the Void","沃爾皮杯・最佳女演員"],
    ["Après mai","最佳編劇"],
    ["Bella addormentata","馬斯楚安尼獎"],
    ["È stato il figlio","馬斯楚安尼獎"],
    ["È stato il figlio","最佳技術貢獻"],
    ["Küf","未來之獅處女作獎"],
    ["三姊妹","地平線・最佳影片",2012],
    ["Tango libre","地平線・評審團特別獎"]
  ],
  "68": [
    ["Faust","主競賽・金獅獎",2011],
    ["人山人海","銀獅獎・最佳導演"],
    ["Terraferma","主競賽・評審團特別獎"],
    ["Shame","沃爾皮杯・最佳男演員",2011],
    ["桃姐","沃爾皮杯・最佳女演員"],
    ["ヒミズ","馬斯楚安尼獎"],
    ["Wuthering Heights","最佳攝影",2011],
    ["Alpeis","最佳編劇"],
    ["Là-bas","未來之獅處女作獎",2011],
    ["Kotoko","地平線・最佳影片"],
    ["Whores' Glory","地平線・評審團特別獎"]
  ],
  "67": [
    ["Somewhere","主競賽・金獅獎",2010],
    ["Balada triste de trompeta","銀獅獎・最佳導演"],
    ["Balada triste de trompeta","最佳編劇"],
    ["Essential Killing","主競賽・評審團特別獎"],
    ["Essential Killing","沃爾皮杯・最佳男演員"],
    ["Attenberg","沃爾皮杯・最佳女演員"],
    ["Black Swan","馬斯楚安尼獎"],
    ["Овсянки","最佳攝影"],
    ["Çoğunluk","未來之獅處女作獎"],
    ["Verano de Goliat","地平線・最佳影片"],
    ["The Forgotten Space","地平線・評審團特別獎"]
  ],
  "66": [
    ["Lebanon","主競賽・金獅獎",2009],
    ["Women Without Men","銀獅獎・最佳導演"],
    ["Soul Kitchen","主競賽・評審團特別獎",2009],
    ["A Single Man","沃爾皮杯・最佳男演員"],
    ["La doppia ora","沃爾皮杯・最佳女演員"],
    ["Il grande sogno","馬斯楚安尼獎"],
    ["Life During Wartime","最佳編劇"],
    ["Mr. Nobody","最佳技術貢獻"],
    ["Engkwentro","地平線・最佳影片"],
    ["Engkwentro","未來之獅處女作獎"],
    ["1428","地平線・紀錄片獎",2009]
  ],
  "65": [
    ["The Wrestler","主競賽・金獅獎",2008],
    ["Бумажный солдат","銀獅獎・最佳導演"],
    ["Бумажный солдат","最佳攝影"],
    ["Teza","主競賽・評審團特別獎"],
    ["Teza","最佳編劇"],
    ["Il papà di Giovanna","沃爾皮杯・最佳男演員"],
    ["L'Autre","沃爾皮杯・最佳女演員",2008],
    ["The Burning Plain","馬斯楚安尼獎"],
    ["Pranzo di ferragosto","未來之獅處女作獎"],
    ["Melancholia","地平線・最佳影片",2008],
    ["Below Sea Level","地平線・紀錄片獎",2008]
  ],
  "64": [
    ["色，戒","主競賽・金獅獎"],
    ["色，戒","最佳攝影"],
    ["Redacted","銀獅獎・最佳導演",2007],
    ["La Graine et le Mulet","主競賽・評審團特別獎"],
    ["La Graine et le Mulet","馬斯楚安尼獎"],
    ["I'm Not There","主競賽・評審團特別獎"],
    ["I'm Not There","沃爾皮杯・最佳女演員"],
    ["The Assassination of Jesse James by the Coward Robert Ford","沃爾皮杯・最佳男演員"],
    ["It's a Free World...","最佳編劇"],
    ["Sügisball","地平線・最佳影片"],
    ["无用","地平線・紀錄片獎"],
    ["La zona","未來之獅處女作獎",2007],
    ["Dog Altogether","最佳短片",2007]
  ],
  "63": [
    ["三峡好人","主競賽・金獅獎"],
    ["Cœurs","銀獅獎・最佳導演",2006],
    ["Nuovomondo","銀獅・新發現獎"],
    ["Daratt","主競賽・評審團特別獎"],
    ["Hollywoodland","沃爾皮杯・最佳男演員"],
    ["The Queen","沃爾皮杯・最佳女演員",2006],
    ["The Queen","最佳編劇",2006],
    ["L'Intouchable","馬斯楚安尼獎",2006],
    ["Children of Men","最佳技術貢獻"]
  ],
  "62": [
    ["Brokeback Mountain","主競賽・金獅獎"],
    ["Les Amants réguliers","銀獅獎・最佳導演"],
    ["Les Amants réguliers","最佳技術貢獻"],
    ["Mary","主競賽・評審團特別獎",2005],
    ["Good Night, and Good Luck.","沃爾皮杯・最佳男演員"],
    ["Good Night, and Good Luck.","最佳編劇"],
    ["La bestia nel cuore","沃爾皮杯・最佳女演員"],
    ["Vers le sud","馬斯楚安尼獎"],
    ["13 Tzameti","未來之獅處女作獎"],
    ["East of Paradise","地平線・最佳影片",2005],
    ["Первые на Луне","地平線・紀錄片獎"]
  ],
  "61": [
    ["Vera Drake","主競賽・金獅獎"],
    ["Mar adentro","銀獅獎・評審團大獎"],
    ["Mar adentro","沃爾皮杯・最佳男演員"],
    ["빈집","銀獅獎・最佳導演"],
    ["Vera Drake","沃爾皮杯・最佳女演員"],
    ["Lavorare con lentezza","馬斯楚安尼獎"],
    ["Le Grand Voyage","未來之獅處女作獎",2004],
    ["Les Petits Fils","地平線・最佳影片",2004]
  ],
  "60": [
    ["Возвращение","主競賽・金獅獎",2003],
    ["Возвращение","未來之獅處女作獎",2003],
    ["Le Cerf-volant","銀獅獎・評審團大獎",2003],
    ["座頭市","銀獅獎・最佳導演",2003],
    ["21 Grams","沃爾皮杯・最佳男演員"],
    ["Rosenstrasse","沃爾皮杯・最佳女演員"],
    ["Buongiorno, notte","最佳個人貢獻（劇本）"],
    ["Raja","馬斯楚安尼獎",2003]
  ],
  "59": [
    ["The Magdalene Sisters","主競賽・金獅獎"],
    ["Дом дураков","銀獅獎・評審團大獎"],
    ["오아시스","銀獅獎・最佳導演"],
    ["오아시스","馬斯楚安尼獎"],
    ["Far from Heaven","沃爾皮杯・最佳女演員"],
    ["Far from Heaven","最佳攝影"],
    ["Un viaggio chiamato amore","沃爾皮杯・最佳男演員"]
  ],
  "58": [
    ["Monsoon Wedding","主競賽・金獅獎"],
    ["Hundstage","銀獅獎・評審團大獎"],
    ["Raye makhfi","銀獅獎・最佳導演"],
    ["Y tu mamá también","最佳編劇"],
    ["Y tu mamá también","馬斯楚安尼獎"],
    ["Luce dei miei occhi","沃爾皮杯・最佳男演員"],
    ["Luce dei miei occhi","沃爾皮杯・最佳女演員"],
    ["L'Emploi du temps","當代電影單元・金獅獎"]
  ],
  "57": [
    ["The Circle","主競賽・金獅獎",2000],
    ["Before Night Falls","銀獅獎・評審團大獎"],
    ["Before Night Falls","沃爾皮杯・最佳男演員"],
    ["Uttara","銀獅獎・最佳導演",2000],
    ["I cento passi","最佳編劇"],
    ["The Goddess of 1967","沃爾皮杯・最佳女演員"],
    ["Liam","馬斯楚安尼獎",2000]
  ],
  "56": [
    ["一个都不能少","主競賽・金獅獎"],
    ["The Wind Will Carry Us","銀獅獎・評審團大獎"],
    ["过年回家","銀獅獎・最佳導演"],
    ["Topsy-Turvy","沃爾皮杯・最佳男演員"],
    ["Une liaison pornographique","沃爾皮杯・最佳女演員"],
    ["Nordrand","馬斯楚安尼獎"],
    ["Questo è il giardino","未來之獅處女作獎"]
  ],
  "55": [
    ["Così ridevano","主競賽・金獅獎"],
    ["Così ridevano","最佳攝影"],
    ["Terminus paradis","銀獅獎・評審團大獎"],
    ["Black Cat, White Cat","銀獅獎・最佳導演"],
    ["Conte d'automne","最佳編劇"],
    ["Hurlyburly","沃爾皮杯・最佳男演員"],
    ["Place Vendôme","沃爾皮杯・最佳女演員"],
    ["L'albero delle pere","馬斯楚安尼獎"]
  ],
  "54": [
    ["Hana-bi","主競賽・金獅獎"],
    ["Ovosodo","主競賽・評審團特別獎"],
    ["One Night Stand","沃爾皮杯・最佳男演員",1997],
    ["Niagara, Niagara","沃爾皮杯・最佳女演員"],
    ["Nettoyage à sec","最佳編劇"],
    ["Tano da morire","未來之獅處女作獎"]
  ],
  "53": [
    ["Michael Collins","主競賽・金獅獎",1996],
    ["Michael Collins","沃爾皮杯・最佳男演員",1996],
    ["Brigands, chapitre VII","評審團大獎"],
    ["Profundo carmesí","最佳編劇"],
    ["The Funeral","最佳男配角",1996],
    ["Ponette","沃爾皮杯・最佳女演員"]
  ],
  "52": [
    ["Cyclo","主競賽・金獅獎",1995],
    ["A Comédia de Deus","評審團大獎"],
    ["In the Bleak Midwinter","銀獅獎・最佳導演"],
    ["幻の光","最佳攝影"],
    ["Det Means Girl","最佳編劇"],
    ["Der Totmacher","沃爾皮杯・最佳男演員"],
    ["Nothing Personal","最佳男配角",1995],
    ["La Cérémonie","沃爾皮杯・最佳女演員"],
    ["Romanzo di un giovane povero","最佳女配角"]
  ],
  "51": [
    ["Before the Rain","主競賽・金獅獎",1994],
    ["愛情萬歲","主競賽・金獅獎"],
    ["Natural Born Killers","評審團大獎"],
    ["Lamerica","銀獅獎・最佳導演"],
    ["La teta y la luna","最佳編劇"],
    ["東邪西毒","最佳攝影"],
    ["陽光燦爛的日子","沃爾皮杯・最佳男演員"],
    ["Três Irmãos","沃爾皮杯・最佳女演員"],
    ["Il toro","最佳男配角",1994],
    ["Little Odessa","最佳女配角"]
  ],
  "50": [
    ["Short Cuts","主競賽・金獅獎",1993],
    ["Short Cuts","最佳群戲",1993],
    ["Trois couleurs : Bleu","主競賽・金獅獎"],
    ["Trois couleurs : Bleu","沃爾皮杯・最佳女演員"],
    ["Trois couleurs : Bleu","最佳攝影"],
    ["Kosh ba kosh","銀獅獎"],
    ["Bad Boy Bubby","評審團大獎"],
    ["Un'anima divisa in due","沃爾皮杯・最佳男演員"],
    ["Un, deux, trois, soleil","最佳男配角"],
    ["Dove siete? Io sono qui","最佳女配角"]
  ],
  "49": [
    ["秋菊打官司","主競賽・金獅獎"],
    ["秋菊打官司","沃爾皮杯・最佳女演員"],
    ["Morte di un matematico napoletano","評審團大獎"],
    ["Jamón jamón","銀獅獎"],
    ["Un cœur en hiver","銀獅獎"],
    ["Hotel de Lux","銀獅獎",1992],
    ["Glengarry Glen Ross","沃爾皮杯・最佳男演員"]
  ],
  "48": [
    ["Урга — территория любви","主競賽・金獅獎"],
    ["A Divina Comédia","評審團大獎"],
    ["大紅燈籠高高掛","銀獅獎"],
    ["The Fisher King","銀獅獎"],
    ["J'entends plus la guitare","銀獅獎"],
    ["Mississippi Masala","最佳編劇"],
    ["My Own Private Idaho","沃爾皮杯・最佳男演員"],
    ["Edward II","沃爾皮杯・最佳女演員",1991]
  ],
  "47": [
    ["Rosencrantz & Guildenstern Are Dead","主競賽・金獅獎"],
    ["An Angel at My Table","評審團大獎"],
    ["Goodfellas","銀獅獎・最佳導演"],
    ["Sirup","最佳編劇",1990],
    ["The Only Witness","沃爾皮杯・最佳男演員",1990],
    ["La luna en el espejo","沃爾皮杯・最佳女演員"]
  ],
  "46": [
    ["悲情城市","主競賽・金獅獎"],
    ["Et la lumière fut","評審團大獎"],
    ["I Want to Go Home","最佳編劇",1989],
    ["Australia","最佳攝影",1989],
    ["Che ora è?","沃爾皮杯・最佳男演員"],
    ["She's Been Away","沃爾皮杯・最佳女演員"]
  ],
  "45": [
    ["La leggenda del santo bevitore","主競賽・金獅獎"],
    ["Camp de Thiaroye","評審團大獎"],
    ["Τοπίο στην ομίχλη","銀獅獎"],
    ["Things Change","沃爾皮杯・最佳男演員"],
    ["Madame Sousatzka","沃爾皮杯・最佳女演員"],
    ["Une affaire de femmes","沃爾皮杯・最佳女演員"]
  ],
  "44": [
    ["Au revoir les enfants","主競賽・金獅獎"],
    ["Lunga vita alla signora!","評審團大獎"],
    ["Maurice","銀獅獎",1987],
    ["Maurice","沃爾皮杯・最佳男演員",1987],
    ["씨받이","沃爾皮杯・最佳女演員"]
  ],
  "43": [
    ["Le Rayon vert","主競賽・金獅獎"],
    ["Chuzhaya, belaya i ryaboy","評審團大獎"],
    ["Regalo di Natale","沃爾皮杯・最佳男演員"],
    ["Storia d'amore","沃爾皮杯・最佳女演員",1986]
  ],
  "42": [
    ["Sans toit ni loi","主競賽・金獅獎"],
    ["Tangos, el exilio de Gardel","評審團大獎"],
    ["Police","沃爾皮杯・最佳男演員",1985]
  ],
  "41": [
    ["Rok spokojnego słońca","主競賽・金獅獎"],
    ["Les Favoris de la lune","評審團大獎"],
    ["Paar","沃爾皮杯・最佳男演員",1984],
    ["Les Nuits de la pleine lune","沃爾皮杯・最佳女演員"]
  ],
  "40": [
    ["Prénom Carmen","主競賽・金獅獎"],
    ["Biquefarre","評審團大獎"],
    ["Streamers","沃爾皮杯・最佳男演員",1983],
    ["Rue Cases-Nègres","沃爾皮杯・最佳女演員"]
  ],
  "39": [
    ["Der Stand der Dinge","主競賽・金獅獎"]
  ],
  "38": [
    ["Die bleierne Zeit","主競賽・金獅獎"],
    ["Sogni d'oro","評審團大獎"]
  ],
  "37": [
    ["Atlantic City","主競賽・金獅獎",1980],
    ["Gloria","主競賽・金獅獎",1980]
  ]
} };

// 「全部提名」用：入圍片 [搜尋片名, 年份(選填), 標籤(選填，預設「主競賽・入圍」), 豆瓣ID(選填)]
var FALLBACK_NOM = { venice: {
  "54": [
    ["Hana-bi"],
    ["Niagara, Niagara"],
    ["A Ostra e o Vento",1997],
    ["One Night Stand",1997],
    ["Combat de fauves"],
    ["The Winter Guest"],
    ["I vesuviani"],
    ["Вор",1997],
    ["The Informant",1997],
    ["Le Septième Ciel",1997],
    ["Giro di lune tra terra e mare"],
    ["Ossos"],
    ["Historie miłosne"],
    ["A ciegas",1997],
    ["Chinese Box"],
    ["Nettoyage à sec"],
    ["Ovosodo"],
    ["有话好好说"]
  ],
  "53": [
    ["Basquiat",1996],
    ["Brigands, chapitre VII"],
    ["太平天國",1996],
    ["Carla's Song"],
    ["Chronicle of a Disappearance"],
    ["Profundo carmesí"],
    ["For Ever Mozart"],
    ["The Funeral",1996],
    ["Ilona llega con la lluvia"],
    ["Hommes, femmes, mode d'emploi"],
    ["Michael Collins",1996],
    ["Der Unhold"],
    ["Party",1996],
    ["Ponette"],
    ["Pianese Nunzio, 14 anni a maggio"],
    ["Vesna va veloce"]
  ],
  "52": [
    ["Кардиограмма"],
    ["La Cérémonie"],
    ["Clockers"],
    ["The Crossing Guard"],
    ["Cyclo",1995],
    ["Der Totmacher"],
    ["Det Means Girl"],
    ["De vliegende Hollander"],
    ["A Comédia de Deus"],
    ["Guantanamera"],
    ["In the Bleak Midwinter"],
    ["幻の光"],
    ["Nothing Personal",1995],
    ["Romanzo di un giovane povero"],
    ["Sin remitente"],
    ["L'uomo delle stelle"],
    ["Pasolini, un delitto italiano"]
  ],
  "51": [
    ["À la folie",1994],
    ["東邪西毒"],
    ["Before the Rain",1994],
    ["Il toro",1994],
    ["Le Cri du cœur"],
    ["Heavenly Creatures"],
    ["陽光燦爛的日子"],
    ["Lamerica"],
    ["Life and Extraordinary Adventures of Private Ivan Chonkin"],
    ["Little Odessa"],
    ["Bűvös vadász"],
    ["Natural Born Killers"],
    ["Il branco",1994],
    ["Pigalle",1994],
    ["Una sombra ya pronto serás"],
    ["Somebody to Love",1994],
    ["La teta y la luna"],
    ["Três Irmãos"],
    ["愛情萬歲"]
  ],
  "50": [
    ["Un, deux, trois, soleil"],
    ["Hélas pour moi"],
    ["Bad Boy Bubby"],
    ["杂嘴子"],
    ["Rozmowa z człowiekiem z szafy"],
    ["Dangerous Game",1993],
    ["Even Cowgirls Get the Blues"],
    ["Aqui na Terra"],
    ["De eso no se habla"],
    ["Kosh ba kosh"],
    ["La prossima volta il fuoco"],
    ["¡Dispara!"],
    ["L'Ombre du doute"],
    ["Short Cuts",1993],
    ["Un'anima divisa in due"],
    ["誘僧"],
    ["Trois couleurs : Bleu"],
    ["Dove siete? Io sono qui"]
  ],
  "49": [
    ["Die Abwesenheit"],
    ["La discesa di Aclà a Floristella"],
    ["Fratelli e sorelle",1992],
    ["La Chasse aux papillons"],
    ["Morte di un matematico napoletano"],
    ["Glengarry Glen Ross"],
    ["Guelwaar"],
    ["Jamón jamón"],
    ["Un cœur en hiver"],
    ["In the Soup",1992],
    ["L.627"],
    ["O Último Mergulho"],
    ["Hotel de Lux",1992],
    ["Olivier, Olivier"],
    ["Orlando",1992],
    ["La Peste",1992],
    ["Raising Cain"],
    ["Чувствительный милиционер"],
    ["秋菊打官司"],
    ["The Waltz on the Pechora"],
    ["Kaivo",1992]
  ],
  "48": [
    ["Ferdydurke",1991],
    ["La Plage des enfants perdus"],
    ["Chatarra",1991],
    ["Урга — территория любви"],
    ["A Divina Comédia"],
    ["Edward II",1991],
    ["The Fisher King"],
    ["Allemagne 90 neuf zéro"],
    ["J'entends plus la guitare"],
    ["Il muro di gomma"],
    ["Jeszcze tylko ten las"],
    ["Meeting Venus"],
    ["Mississippi Masala"],
    ["My Own Private Idaho"],
    ["L'amore necessario"],
    ["Nuit et jour",1991],
    ["Prospero's Books"],
    ["大紅燈籠高高掛"],
    ["Cerro Torre: Schrei aus Stein"],
    ["Gizli Yüz"],
    ["Una storia semplice",1991],
    ["Les Équilibristes"]
  ],
  "47": [
    ["Die Rückkehr",1990],
    ["An Angel at My Table"],
    ["Ragazzi fuori"],
    ["Raspad"],
    ["Pożegnanie jesieni"],
    ["Spieler",1990],
    ["Goodfellas"],
    ["I Hired a Contract Killer"],
    ["Karartma geceleri"],
    ["Laura Adler's Last Love Affair"],
    ["Marta a já"],
    ["Mo' Better Blues"],
    ["La luna en el espejo"],
    ["Mr. & Mrs. Bridge"],
    ["S'en fout la mort"],
    ["The Only Witness",1990],
    ["Rosencrantz & Guildenstern Are Dead"],
    ["Sirup",1990],
    ["あげまん"],
    ["Tracce di vita amorosa"],
    ["Mathilukal"]
  ],
  "46": [
    ["Et la lumière fut"],
    ["Australia",1989],
    ["Berlin-Jerusalem"],
    ["Blauäugig"],
    ["Christian",1989],
    ["悲情城市"],
    ["In una notte di chiaro di luna"],
    ["千利休 本覺坊遺文"],
    ["I Want to Go Home",1989],
    ["Island",1989],
    ["Layla, ma raison"],
    ["M' agapas?"],
    ["New Year's Day",1989],
    ["Fallgropen"],
    ["Recordações da Casa Amarela"],
    ["She's Been Away"],
    ["Sedím na konári a je mi dobre"],
    ["Scugnizzi"],
    ["Ek Din Achanak"],
    ["Муж и дочь Тамары Александровны"],
    ["El sueño del mono loco"],
    ["Che ora è?"],
    ["La Femme de Rose Hill"]
  ]
} };

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

async function loadVenice(params) {
  return loadFestival("venice", params);
}
