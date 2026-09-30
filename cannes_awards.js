var WidgetMetadata = {
  id: "cannes.awards",
  title: "坎城影展獎項",
  icon: "https://cdn.phototourl.com/member/2026-09-30-a8ce1856-2adf-45bc-973e-879ad0699608.png",
  description: "歷屆坎城影展金棕櫚獎、評審團大獎、評審團獎、最佳導演、最佳男女演員獎得獎影片",
  author: "custom",
  site: "https://www.festival-cannes.com/",
  version: "1.1.0",
  requiredVersion: "0.0.1",
  detailCacheDuration: 60,
  modules: [
    {
      title: "坎城影展獎項",
      description: "歷屆得獎影片",
      requiresWebView: false,
      functionName: "loadCannesAwards",
      sectionMode: false,
      cacheDuration: 86400,
      params: [
        {
          name: "award",
          title: "獎項",
          type: "enumeration",
          value: "palmedor",
          enumOptions: [
            { title: "金棕櫚獎", value: "palmedor" },
            { title: "評審團大獎", value: "grandprix" },
            { title: "評審團獎", value: "jury" },
            { title: "最佳導演", value: "director" },
            { title: "最佳男演員", value: "actor" },
            { title: "最佳女演員", value: "actress" }
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
        {
          name: "page",
          title: "頁碼",
          type: "page"
        }
      ]
    }
  ]
};

const PAGE_SIZE = 20;

// [得獎年份, 中文片名, 原文片名, 英文片名（TMDB 搜尋用）, 得獎者]
// 評審團大獎：1967–2016 依中文維基百科，2017 以後補充；評審團獎：依英文維基百科
// 導演：1946–2015 依中文維基百科，2016 以後補充；演員：依英文維基百科，同片多人合併為一筆
const AWARDS = {
  grandprix: {
    label: "評審團大獎",
    person: "導演",
    cacheKey: "gp",
    winners: [
  [1967, "車禍", "Accident", "Accident", "Joseph Losey"],
  [1967, "快樂的吉普賽人", "Skupljači perja", "I Even Met Happy Gypsies", "Aleksandar Petrović"],
  [1969, "阿達倫事件", "Ådalen 31", "Adalen 31", "Bo Widerberg"],
  [1970, "調查可疑者", "Indagine su un cittadino al di sopra di ogni sospetto", "Investigation of a Citizen Above Suspicion", "Elio Petri"],
  [1971, "強尼上戰場", "Johnny Got His Gun", "Johnny Got His Gun", "Dalton Trumbo"],
  [1971, "逃家", "Taking Off", "Taking Off", "Miloš Forman"],
  [1972, "索拉力星", "Солярис", "Solaris", "Andrei Tarkovsky"],
  [1973, "媽媽與妓女", "La Maman et la putain", "The Mother and the Whore", "Jean Eustache"],
  [1973, "奇幻星球", "La Planète sauvage", "Fantastic Planet", "René Laloux"],
  [1974, "一千零一夜", "Il fiore delle Mille e una notte", "Arabian Nights", "Pier Paolo Pasolini"],
  [1975, "賈斯伯荷西之謎", "Jeder für sich und Gott gegen alle", "The Enigma of Kaspar Hauser", "Werner Herzog"],
  [1976, "飼養烏鴉", "Cría cuervos", "Cria Cuervos", "Carlos Saura"],
  [1976, "歐女侯爵", "Die Marquise von O...", "The Marquise of O", "Éric Rohmer"],
  [1978, "縱情狂嘯", "The Shout", "The Shout", "Jerzy Skolimowski"],
  [1978, "猴子再見", "Ciao maschio", "Bye Bye Monkey", "Marco Ferreri"],
  [1979, "西伯利亞頌", "Сибириада", "Siberiade", "Andrei Konchalovsky"],
  [1980, "我的美國舅舅", "Mon oncle d'Amérique", "My American Uncle", "Alain Resnais"],
  [1981, "光年之外", "Les Années lumière", "Light Years Away", "Alain Tanner"],
  [1982, "疾走繁星夜", "La notte di San Lorenzo", "The Night of the Shooting Stars", "Paolo Taviani, Vittorio Taviani"],
  [1983, "脫線一籮筐", "Monty Python's The Meaning of Life", "The Meaning of Life", "Terry Jones"],
  [1984, "留給女兒的日記", "Napló gyermekeimnek", "Diary for My Children", "Márta Mészáros"],
  [1985, "鳥人", "Birdy", "Birdy", "Alan Parker"],
  [1986, "犧牲", "Offret", "The Sacrifice", "Andrei Tarkovsky"],
  [1987, "懺悔", "Monanieba", "Repentance", "Tengiz Abuladze"],
  [1988, "上帝的另一個世界", "A World Apart", "A World Apart", "Chris Menges"],
  [1989, "新天堂樂園", "Nuovo Cinema Paradiso", "Cinema Paradiso", "Giuseppe Tornatore"],
  [1989, "美的過火", "Trop belle pour toi", "Too Beautiful for You", "Bertrand Blier"],
  [1990, "律法", "Tilaï", "Tilai", "Idrissa Ouédraogo"],
  [1990, "死之棘", "死の棘", "The Sting of Death", "Kōhei Oguri"],
  [1991, "美麗壞女人", "La Belle Noiseuse", "La Belle Noiseuse", "Jacques Rivette"],
  [1992, "小小偷的春天", "Il ladro di bambini", "The Stolen Children", "Gianni Amelio"],
  [1993, "咫尺天涯", "In weiter Ferne, so nah!", "Faraway, So Close!", "Wim Wenders"],
  [1994, "活著", "活着", "To Live", "Zhang Yimou"],
  [1994, "烈日灼身", "Утомлённые солнцем", "Burnt by the Sun", "Nikita Mikhalkov"],
  [1995, "尤里西斯生命之旅", "To Vlemma tou Odyssea", "Ulysses' Gaze", "Theo Angelopoulos"],
  [1996, "破浪而出", "Breaking the Waves", "Breaking the Waves", "Lars von Trier"],
  [1997, "意外的春天", "The Sweet Hereafter", "The Sweet Hereafter", "Atom Egoyan"],
  [1998, "美麗人生", "La vita è bella", "Life Is Beautiful", "Roberto Benigni"],
  [1999, "人，性本色", "L'Humanité", "Humanité", "Bruno Dumont"],
  [2000, "鬼子來了", "鬼子来了", "Devils on the Doorstep", "Jiang Wen"],
  [2001, "鋼琴教師", "La Pianiste", "The Piano Teacher", "Michael Haneke"],
  [2002, "沒有過去的男人", "Mies vailla menneisyyttä", "The Man Without a Past", "Aki Kaurismäki"],
  [2003, "遠方", "Uzak", "Distant", "Nuri Bilge Ceylan"],
  [2004, "原罪犯", "올드보이", "Oldboy", "Park Chan-wook"],
  [2005, "愛情，不用尋找", "Broken Flowers", "Broken Flowers", "Jim Jarmusch"],
  [2006, "野獸邏輯", "Flandres", "Flanders", "Bruno Dumont"],
  [2007, "殯之森", "殯の森", "The Mourning Forest", "Naomi Kawase"],
  [2008, "娥摩拉罪惡之城", "Gomorra", "Gomorrah", "Matteo Garrone"],
  [2009, "大獄言家", "Un prophète", "A Prophet", "Jacques Audiard"],
  [2010, "人神之間", "Des hommes et des dieux", "Of Gods and Men", "Xavier Beauvois"],
  [2011, "安那托利亞故事", "Bir Zamanlar Anadolu'da", "Once Upon a Time in Anatolia", "Nuri Bilge Ceylan"],
  [2011, "騎單車的男孩", "Le Gamin au vélo", "The Kid with a Bike", "Jean-Pierre Dardenne, Luc Dardenne"],
  [2012, "盧哥來唬秀", "Reality", "Reality", "Matteo Garrone"],
  [2013, "醉鄉民謠", "Inside Llewyn Davis", "Inside Llewyn Davis", "Joel Coen, Ethan Coen"],
  [2014, "奇蹟", "Le meraviglie", "The Wonders", "Alice Rohrwacher"],
  [2015, "索爾之子", "Saul fia", "Son of Saul", "László Nemes"],
  [2016, "不過就是世界末日", "Juste la fin du monde", "It's Only the End of the World", "Xavier Dolan"],
  [2017, "每分鐘120擊", "120 battements par minute", "BPM (Beats per Minute)", "Robin Campillo"],
  [2018, "黑色黨徒", "BlacKkKlansman", "BlacKkKlansman", "Spike Lee"],
  [2019, "大西洋", "Atlantique", "Atlantics", "Mati Diop"],
  [2021, "英雄", "Ghahreman", "A Hero", "Asghar Farhadi"],
  [2021, "六號車廂", "Hytti nro 6", "Compartment No. 6", "Juho Kuosmanen"],
  [2022, "親密", "Close", "Close", "Lukas Dhont"],
  [2022, "正午之星", "Stars at Noon", "Stars at Noon", "Claire Denis"],
  [2023, "夢想之地", "The Zone of Interest", "The Zone of Interest", "Jonathan Glazer"],
  [2024, "我們想像中的光", "All We Imagine as Light", "All We Imagine as Light", "Payal Kapadia"],
  [2025, "情感的價值", "Affeksjonsverdi", "Sentimental Value", "Joachim Trier"],
  [2026, "Minotaur", "Minotaure", "Minotaur", "Andrey Zvyagintsev"]
    ]
  },
  jury: {
    label: "評審團獎",
    person: "導演",
    cacheKey: "jp",
    winners: [
  [1946, "鐵路戰鬥", "La Bataille du rail", "The Battle of the Rails", "René Clément"],
  [1951, "彗星美人", "All About Eve", "All About Eve", "Joseph L. Mankiewicz"],
  [1952, "我們都是殺人犯", "Nous sommes tous des assassins", "We Are All Murderers", "André Cayatte"],
  [1954, "紅心傑克", "Monsieur Ripois", "Knave of Hearts", "René Clément"],
  [1955, "失落的大陸", "Continente perduto", "Lost Continent", "Enrico Gras, Giorgio Moser, Leonardo Bonzi"],
  [1956, "畢卡索的秘密", "Le mystère Picasso", "The Mystery of Picasso", "Henri-Georges Clouzot"],
  [1957, "下水道", "Kanał", "Kanal", "Andrzej Wajda"],
  [1957, "第七封印", "Det sjunde inseglet", "The Seventh Seal", "Ingmar Bergman"],
  [1958, "我的舅舅", "Mon Oncle", "Mon Oncle", "Jacques Tati"],
  [1959, "星星", "Sterne", "Stars", "Konrad Wolf"],
  [1960, "情事", "L'Avventura", "L'Avventura", "Michelangelo Antonioni"],
  [1960, "鍵", "鍵", "Odd Obsession", "Kon Ichikawa"],
  [1961, "修女喬安娜", "Matka Joanna od Aniołów", "Mother Joan of the Angels", "Jerzy Kawalerowicz"],
  [1962, "慾海含羞花", "L'Eclisse", "L'Eclisse", "Michelangelo Antonioni"],
  [1962, "聖女貞德的審判", "Procès de Jeanne d'Arc", "The Trial of Joan of Arc", "Robert Bresson"],
  [1963, "當貓來臨時", "Až přijde kocour", "The Cassandra Cat", "Vojtěch Jasný"],
  [1963, "切腹", "切腹", "Harakiri", "Masaki Kobayashi"],
  [1964, "砂之女", "砂の女", "Woman in the Dunes", "Hiroshi Teshigahara"],
  [1965, "怪談", "怪談", "Kwaidan", "Masaki Kobayashi"],
  [1966, "阿飛外傳", "Alfie", "Alfie", "Lewis Gilbert"],
  [1969, "焦點新聞", "Z", "Z", "Costa-Gavras"],
  [1970, "獵鷹", "Magasiskola", "The Falcons", "István Gaál"],
  [1970, "草莓宣言", "The Strawberry Statement", "The Strawberry Statement", "Stuart Hagmann"],
  [1971, "喬希爾", "Joe Hill", "Joe Hill", "Bo Widerberg"],
  [1971, "愛情", "Szerelem", "Love", "Károly Makk"],
  [1972, "第五號屠宰場", "Slaughterhouse-Five", "Slaughterhouse-Five", "George Roy Hill"],
  [1973, "沙漏療養院", "Sanatorium pod klepsydrą", "The Hourglass Sanatorium", "Wojciech Has"],
  [1973, "邀請", "L'Invitation", "The Invitation", "Claude Goretta"],
  [1974, "安潔莉卡表妹", "La prima Angélica", "Cousin Angelica", "Carlos Saura"],
  [1980, "常數", "Constans", "The Constant Factor", "Krzysztof Zanussi"],
  [1983, "解約", "খারিজ", "Kharij", "Mrinal Sen"],
  [1985, "雷德爾上校", "Oberst Redl", "Colonel Redl", "István Szabó"],
  [1986, "泰瑞莎", "Thérèse", "Thérèse", "Alain Cavalier"],
  [1987, "親鸞：白色之道", "親鸞 白い道", "Shinran: Path to Purity", "Rentarō Mikuni"],
  [1987, "光之翼", "Yeelen", "Yeelen", "Souleymane Cissé"],
  [1988, "殺人短片", "Krótki film o zabijaniu", "A Short Film About Killing", "Krzysztof Kieślowski"],
  [1989, "蒙特婁的耶穌", "Jésus de Montréal", "Jesus of Montreal", "Denys Arcand"],
  [1990, "秘密議程", "Hidden Agenda", "Hidden Agenda", "Ken Loach"],
  [1991, "歐洲特快車", "Europa", "Europa", "Lars von Trier"],
  [1991, "生命之外", "Hors la vie", "Out of Life", "Maroun Bagdadi"],
  [1992, "光之夢", "El sol del membrillo", "Dream of Light", "Víctor Erice"],
  [1992, "獨立生活", "Самостоятельная жизнь", "An Independent Life", "Vitali Kanevsky"],
  [1993, "戲夢人生", "戲夢人生", "The Puppetmaster", "Hou Hsiao-hsien"],
  [1993, "天雨落石", "Raining Stones", "Raining Stones", "Ken Loach"],
  [1994, "瑪歌皇后", "La Reine Margot", "Queen Margot", "Patrice Chéreau"],
  [1995, "別忘了你會死", "N'oublie pas que tu vas mourir", "Don't Forget You're Going to Die", "Xavier Beauvois"],
  [1995, "卡林頓", "Carrington", "Carrington", "Christopher Hampton"],
  [1996, "超速性追緝", "Crash", "Crash", "David Cronenberg"],
  [1997, "西部", "Western", "Western", "Manuel Poirier"],
  [1998, "那一個晚上", "Festen", "The Celebration", "Thomas Vinterberg"],
  [1998, "雪地裡的男孩", "La classe de neige", "Class Trip", "Claude Miller"],
  [1999, "情書", "A Carta", "The Letter", "Manoel de Oliveira"],
  [2000, "黑板", "تخته سیاه", "Blackboards", "Samira Makhmalbaf"],
  [2000, "二樓傳來的歌聲", "Sånger från andra våningen", "Songs from the Second Floor", "Roy Andersson"],
  [2002, "神的介入", "يد إلهية", "Divine Intervention", "Elia Suleiman"],
  [2003, "下午五點", "پنج عصر", "At Five in the Afternoon", "Samira Makhmalbaf"],
  [2004, "師奶殺手", "The Ladykillers", "The Ladykillers", "Joel Coen, Ethan Coen（Irma P. Hall 獲獎）"],
  [2004, "熱帶幻夢", "สัตว์ประหลาด", "Tropical Malady", "Apichatpong Weerasethakul"],
  [2005, "青紅", "青红", "Shanghai Dreams", "Wang Xiaoshuai"],
  [2006, "紅色之路", "Red Road", "Red Road", "Andrea Arnold"],
  [2007, "茉莉人生", "Persepolis", "Persepolis", "Marjane Satrapi, Vincent Paronnaud"],
  [2007, "靜默之光", "Stellet Licht", "Silent Light", "Carlos Reygadas"],
  [2008, "大牌", "Il divo", "Il Divo", "Paolo Sorrentino"],
  [2009, "魚缸", "Fish Tank", "Fish Tank", "Andrea Arnold"],
  [2009, "蝙蝠：血色情慾", "박쥐", "Thirst", "Park Chan-wook"],
  [2010, "尖叫的男人", "Un homme qui crie", "A Screaming Man", "Mahamat-Saleh Haroun"],
  [2011, "警察故事", "Polisse", "Polisse", "Maïwenn"],
  [2012, "天使威士忌", "The Angels' Share", "The Angels' Share", "Ken Loach"],
  [2013, "我的意外爸爸", "そして父になる", "Like Father, Like Son", "Hirokazu Kore-eda"],
  [2014, "告別語言", "Adieu au langage", "Goodbye to Language", "Jean-Luc Godard"],
  [2014, "親愛媽咪", "Mommy", "Mommy", "Xavier Dolan"],
  [2015, "單身動物園", "The Lobster", "The Lobster", "Yorgos Lanthimos"],
  [2016, "美國甜心", "American Honey", "American Honey", "Andrea Arnold"],
  [2017, "失愛", "Нелюбовь", "Loveless", "Andrey Zvyagintsev"],
  [2018, "我想有個家", "كفرناحوم", "Capernaum", "Nadine Labaki"],
  [2019, "巴克勞", "Bacurau", "Bacurau", "Kleber Mendonça Filho, Juliano Dornelles"],
  [2019, "悲慘世界", "Les Misérables", "Les Misérables", "Ladj Ly"],
  [2021, "阿赫德的膝蓋", "הברך", "Ahed's Knee", "Nadav Lapid"],
  [2021, "記憶", "Memoria", "Memoria", "Apichatpong Weerasethakul"],
  [2022, "八座山", "Le otto montagne", "The Eight Mountains", "Felix van Groeningen, Charlotte Vandermeersch"],
  [2022, "驢子EO", "IO", "EO", "Jerzy Skolimowski"],
  [2023, "枯葉", "Kuolleet lehdet", "Fallen Leaves", "Aki Kaurismäki"],
  [2024, "璀璨女人", "Emilia Pérez", "Emilia Pérez", "Jacques Audiard"],
  [2025, "Sirāt", "Sirāt", "Sirāt", "Oliver Laxe"],
  [2025, "凝視太陽", "In die Sonne schauen", "Sound of Falling", "Mascha Schilinski"],
  [2026, "The Dreamed Adventure", "Das Geträumte Abenteuer", "The Dreamed Adventure", "Valeska Grisebach"]
    ]
  },
  director: {
    label: "最佳導演",
    person: "得獎導演",
    cacheKey: "bd",
    winners: [
  [1946, "鐵路英雄傳", "La Bataille du rail", "The Battle of the Rails", "René Clément"],
  [1949, "瑪拉帕瓜之牆", "Au-delà des grilles", "The Walls of Malapaga", "René Clément"],
  [1951, "被遺忘的人", "Los olvidados", "Los Olvidados", "Luis Buñuel"],
  [1952, "勇士的奇遇", "Fanfan la Tulipe", "Fanfan la Tulipe", "Christian-Jaque"],
  [1955, "男人的爭鬥", "Du rififi chez les hommes", "Rififi", "Jules Dassin"],
  [1955, "石普卡的英雄", "Герои Шипки", "Heroes of Shipka", "Sergei Yutkevich"],
  [1956, "奧塞羅", "Отелло", "Othello", "Sergei Yutkevich"],
  [1957, "死囚逃生記", "Un condamné à mort s'est échappé", "A Man Escaped", "Robert Bresson"],
  [1958, "生命的邊緣", "Nära livet", "Brink of Life", "Ingmar Bergman"],
  [1959, "四百擊", "Les Quatre Cents Coups", "The 400 Blows", "François Truffaut"],
  [1961, "烽火連年", "Повесть пламенных лет", "Chronicle of Flaming Years", "Yuliya Solntseva"],
  [1965, "吊死鬼森林", "Pădurea spânzuraților", "Forest of the Hanged", "Liviu Ciulei"],
  [1966, "列寧在波蘭", "Ленин в Польше", "Lenin in Poland", "Sergei Yutkevich"],
  [1967, "一萬個太陽", "Tízezer nap", "Ten Thousand Days", "Ferenc Kósa"],
  [1969, "死神安東尼", "O Dragão da Maldade contra o Santo Guerreiro", "Antonio das Mortes", "Glauber Rocha"],
  [1969, "我的父老鄉親", "Všichni dobří rodáci", "All My Good Countrymen", "Vojtěch Jasný"],
  [1970, "最後的萊奧", "Leo the Last", "Leo the Last", "John Boorman"],
  [1972, "紅聖歌", "Még kér a nép", "Red Psalm", "Miklós Jancsó"],
  [1975, "命令", "Les Ordres", "Orders", "Michel Brault"],
  [1975, "特別法庭", "Section spéciale", "Special Section", "Costa-Gavras"],
  [1976, "驚恐、污穢、邪惡", "Brutti, sporchi e cattivi", "Ugly, Dirty and Bad", "Ettore Scola"],
  [1978, "愛的亡靈", "愛の亡霊", "Empire of Passion", "Nagisa Ōshima"],
  [1979, "天堂之日", "Days of Heaven", "Days of Heaven", "Terrence Malick"],
  [1982, "陸上行舟", "Fitzcarraldo", "Fitzcarraldo", "Werner Herzog"],
  [1983, "錢", "L'Argent", "L'Argent", "Robert Bresson"],
  [1983, "鄉愁", "Ностальгия", "Nostalghia", "Andrei Tarkovsky"],
  [1984, "鄉村星期天", "Un dimanche à la campagne", "A Sunday in the Country", "Bertrand Tavernier"],
  [1985, "激情密約", "Rendez-vous", "Rendez-vous", "André Téchiné"],
  [1986, "下班後", "After Hours", "After Hours", "Martin Scorsese"],
  [1987, "慾望之翼", "Der Himmel über Berlin", "Wings of Desire", "Wim Wenders"],
  [1988, "南方", "Sur", "South", "Fernando Solanas"],
  [1989, "流浪者之歌", "Дом за вешање", "Time of the Gypsies", "Emir Kusturica"],
  [1990, "藍色計程車", "Такси-блюз", "Taxi Blues", "Pavel Lungin"],
  [1991, "巴頓芬克", "Barton Fink", "Barton Fink", "Joel Coen"],
  [1992, "超級大玩家", "The Player", "The Player", "Robert Altman"],
  [1993, "赤裸", "Naked", "Naked", "Mike Leigh"],
  [1994, "親愛的日記", "Caro diario", "Dear Diary", "Nanni Moretti"],
  [1995, "恨", "La Haine", "La Haine", "Mathieu Kassovitz"],
  [1996, "冰血暴", "Fargo", "Fargo", "Joel Coen"],
  [1997, "春光乍洩", "春光乍洩", "Happy Together", "王家衛"],
  [1998, "王牌大盜", "The General", "The General", "John Boorman"],
  [1999, "我的母親", "Todo sobre mi madre", "All About My Mother", "Pedro Almodóvar"],
  [2000, "一一", "一一", "Yi Yi", "楊德昌"],
  [2001, "隱形特務", "The Man Who Wasn't There", "The Man Who Wasn't There", "Joel Coen"],
  [2001, "穆荷蘭大道", "Mulholland Drive", "Mulholland Drive", "David Lynch"],
  [2002, "醉畫仙", "취화선", "Chihwaseon", "Im Kwon-taek"],
  [2002, "戀愛雞尾酒", "Punch-Drunk Love", "Punch-Drunk Love", "Paul Thomas Anderson"],
  [2003, "大象", "Elephant", "Elephant", "Gus Van Sant"],
  [2004, "北非行路遙", "Exils", "Exiles", "Tony Gatlif"],
  [2005, "隱藏攝影機", "Caché", "Caché", "Michael Haneke"],
  [2006, "火線交錯", "Babel", "Babel", "Alejandro González Iñárritu"],
  [2007, "潛水鐘與蝴蝶", "Le Scaphandre et le Papillon", "The Diving Bell and the Butterfly", "Julian Schnabel"],
  [2008, "三隻猴子", "Üç Maymun", "Three Monkeys", "Nuri Bilge Ceylan"],
  [2009, "男孩看見血地獄", "Kinatay", "Kinatay", "Brillante Mendoza"],
  [2010, "舞孃人生", "Tournée", "On Tour", "Mathieu Amalric"],
  [2011, "落日車神", "Drive", "Drive", "Nicolas Winding Refn"],
  [2012, "舐夢人", "Post Tenebras Lux", "Post Tenebras Lux", "Carlos Reygadas"],
  [2013, "毒粉風暴", "Heli", "Heli", "Amat Escalante"],
  [2014, "暗黑冠軍路", "Foxcatcher", "Foxcatcher", "Bennett Miller"],
  [2015, "刺客聶隱娘", "刺客聶隱娘", "The Assassin", "侯孝賢"],
  [2016, "畢業會考", "Bacalaureat", "Graduation", "Cristian Mungiu"],
  [2016, "私人採購", "Personal Shopper", "Personal Shopper", "Olivier Assayas"],
  [2017, "魅惑", "The Beguiled", "The Beguiled", "Sofia Coppola"],
  [2018, "沒有煙硝的愛情", "Zimna wojna", "Cold War", "Paweł Pawlikowski"],
  [2019, "年輕的阿罕默德", "Le Jeune Ahmed", "Young Ahmed", "Jean-Pierre Dardenne, Luc Dardenne"],
  [2021, "安妮特", "Annette", "Annette", "Leos Carax"],
  [2022, "分手的決心", "헤어질 결심", "Decision to Leave", "Park Chan-wook"],
  [2023, "火上鍋", "La Passion de Dodin Bouffant", "The Taste of Things", "Trần Anh Hùng"],
  [2024, "壯遊", "Grand Tour", "Grand Tour", "Miguel Gomes"],
  [2025, "秘密特工", "O Agente Secreto", "The Secret Agent", "Kleber Mendonça Filho"],
  [2026, "La bola negra", "La bola negra", "The Black Ball", "Javier Calvo, Javier Ambrossi"],
  [2026, "Fatherland", "Fatherland", "Fatherland", "Paweł Pawlikowski"]
    ]
  },
  actor: {
    label: "最佳男演員",
    person: "得獎演員",
    cacheKey: "ba",
    winners: [
  [1946, "失去的週末", "The Lost Weekend", "The Lost Weekend", "Ray Milland"],
  [1949, "陌生人之家", "House of Strangers", "House of Strangers", "Edward G. Robinson"],
  [1951, "布朗寧版本", "The Browning Version", "The Browning Version", "Michael Redgrave"],
  [1952, "薩巴達傳", "Viva Zapata!", "Viva Zapata!", "Marlon Brando"],
  [1955, "黑岩喋血記", "Bad Day at Black Rock", "Bad Day at Black Rock", "Spencer Tracy"],
  [1955, "大家庭", "Большая семья", "A Big Family", "全體男演員（Sergei Lukyanov、Aleksey Batalov 等）"],
  [1957, "和平之谷", "Dolina miru", "Valley of Peace", "John Kitzmiller"],
  [1958, "漫長炎夏", "The Long, Hot Summer", "The Long, Hot Summer", "Paul Newman"],
  [1959, "朱門孽種", "Compulsion", "Compulsion", "Bradford Dillman、Dean Stockwell、Orson Welles"],
  [1961, "何日君再來", "Aimez-vous Brahms?", "Goodbye Again", "Anthony Perkins"],
  [1962, "蜜的滋味", "A Taste of Honey", "A Taste of Honey", "Murray Melvin"],
  [1962, "長夜漫漫路迢迢", "Long Day's Journey into Night", "Long Day's Journey into Night", "Ralph Richardson、Jason Robards、Dean Stockwell"],
  [1963, "如此運動生涯", "This Sporting Life", "This Sporting Life", "Richard Harris"],
  [1964, "雲雀", "Pacsirta", "Drama of the Lark", "Antal Páger"],
  [1964, "誘惑與遺棄", "Sedotta e abbandonata", "Seduced and Abandoned", "Saro Urzì"],
  [1965, "蝴蝶春夢", "The Collector", "The Collector", "Terence Stamp"],
  [1966, "飢餓", "Sult", "Hunger", "Per Oscarsson"],
  [1967, "三天與一個孩子", "שלושה ימים וילד", "Three Days and a Child", "Oded Kotler"],
  [1969, "焦點新聞", "Z", "Z", "Jean-Louis Trintignant"],
  [1970, "嫉妒的戲劇", "Dramma della gelosia (tutti i particolari in cronaca)", "The Pizza Triangle", "Marcello Mastroianni"],
  [1971, "死刑台的旋律", "Sacco e Vanzetti", "Sacco & Vanzetti", "Riccardo Cucciolla"],
  [1972, "我們不會一起變老", "Nous ne vieillirons pas ensemble", "We Won't Grow Old Together", "Jean Yanne"],
  [1973, "愛情與無政府", "Film d'amore e d'anarchia", "Love and Anarchy", "Giancarlo Giannini"],
  [1974, "最後的細節", "The Last Detail", "The Last Detail", "Jack Nicholson"],
  [1975, "女人香", "Profumo di donna", "Scent of a Woman", "Vittorio Gassman"],
  [1976, "帕斯夸爾·杜阿爾特", "Pascual Duarte", "Pascual Duarte", "José Luis Gómez"],
  [1977, "伊莉莎，我的生命", "Elisa, vida mía", "Elisa, My Life", "Fernando Rey"],
  [1978, "返鄉", "Coming Home", "Coming Home", "Jon Voight"],
  [1979, "大特寫", "The China Syndrome", "The China Syndrome", "Jack Lemmon"],
  [1979, "親愛的爸爸", "Caro papà", "Dear Father", "Stefano Madia（最佳男配角）"],
  [1980, "跳入黑暗", "Salto nel vuoto", "A Leap in the Dark", "Michel Piccoli"],
  [1980, "烈血焚城", "Breaker Morant", "Breaker Morant", "Jack Thompson（最佳男配角）"],
  [1981, "荒謬人的悲劇", "La tragedia di un uomo ridicolo", "Tragedy of a Ridiculous Man", "Ugo Tognazzi"],
  [1981, "火戰車", "Chariots of Fire", "Chariots of Fire", "Ian Holm（最佳男配角）"],
  [1982, "大失蹤", "Missing", "Missing", "Jack Lemmon"],
  [1983, "馬里奧·里奇之死", "La mort de Mario Ricci", "The Death of Mario Ricci", "Gian Maria Volonté"],
  [1984, "無辜的聖徒", "Los santos inocentes", "The Holy Innocents", "Alfredo Landa、Francisco Rabal"],
  [1985, "蜘蛛女之吻", "O Beijo da Mulher Aranha", "Kiss of the Spider Woman", "William Hurt"],
  [1986, "晚禮服", "Tenue de soirée", "Evening Dress", "Michel Blanc"],
  [1986, "蒙娜麗莎", "Mona Lisa", "Mona Lisa", "Bob Hoskins"],
  [1987, "黑眼睛", "Oci ciornie", "Dark Eyes", "Marcello Mastroianni"],
  [1988, "菜鳥帕克", "Bird", "Bird", "Forest Whitaker"],
  [1989, "性、謊言、錄影帶", "Sex, Lies, and Videotape", "Sex, Lies, and Videotape", "James Spader"],
  [1990, "大鼻子情聖", "Cyrano de Bergerac", "Cyrano de Bergerac", "Gérard Depardieu"],
  [1991, "巴頓芬克", "Barton Fink", "Barton Fink", "John Turturro"],
  [1991, "叢林熱", "Jungle Fever", "Jungle Fever", "Samuel L. Jackson（最佳男配角）"],
  [1992, "超級大玩家", "The Player", "The Player", "Tim Robbins"],
  [1993, "赤裸", "Naked", "Naked", "David Thewlis"],
  [1994, "活著", "活着", "To Live", "葛優"],
  [1995, "卡林頓", "Carrington", "Carrington", "Jonathan Pryce"],
  [1996, "第八日", "Le huitième jour", "The Eighth Day", "Daniel Auteuil、Pascal Duquenne"],
  [1997, "她是如此可愛", "She's So Lovely", "She's So Lovely", "Sean Penn"],
  [1998, "我的名字叫喬", "My Name Is Joe", "My Name Is Joe", "Peter Mullan"],
  [1999, "人，性本色", "L'Humanité", "Humanité", "Emmanuel Schotté"],
  [2000, "花樣年華", "花樣年華", "In the Mood for Love", "梁朝偉"],
  [2001, "鋼琴教師", "La Pianiste", "The Piano Teacher", "Benoît Magimel"],
  [2002, "兒子", "Le Fils", "The Son", "Olivier Gourmet"],
  [2003, "遠方", "Uzak", "Distant", "Muzaffer Özdemir、Mehmet Emin Toprak"],
  [2004, "無人知曉的夏日清晨", "誰も知らない", "Nobody Knows", "柳樂優彌"],
  [2005, "三度葬禮", "The Three Burials of Melquiades Estrada", "The Three Burials of Melquiades Estrada", "Tommy Lee Jones"],
  [2006, "光榮歲月", "Indigènes", "Days of Glory", "Roschdy Zem、Jamel Debbouze、Samy Naceri、Sami Bouajila、Bernard Blancan"],
  [2007, "放逐", "Изгнание", "The Banishment", "Konstantin Lavronenko"],
  [2008, "切·格瓦拉", "Che", "Che: Part One", "Benicio del Toro"],
  [2009, "惡棍特工", "Inglourious Basterds", "Inglourious Basterds", "Christoph Waltz"],
  [2010, "最後的美麗", "Biutiful", "Biutiful", "Javier Bardem"],
  [2010, "我們的生活", "La nostra vita", "Our Life", "Elio Germano"],
  [2011, "大藝術家", "The Artist", "The Artist", "Jean Dujardin"],
  [2012, "謊言的烙印", "Jagten", "The Hunt", "Mads Mikkelsen"],
  [2013, "內布拉斯加", "Nebraska", "Nebraska", "Bruce Dern"],
  [2014, "畫世紀：透納先生", "Mr. Turner", "Mr. Turner", "Timothy Spall"],
  [2015, "市場法則", "La Loi du marché", "The Measure of a Man", "Vincent Lindon"],
  [2016, "新居風暴", "فروشنده", "The Salesman", "Shahab Hosseini"],
  [2017, "你從未在此", "You Were Never Really Here", "You Were Never Really Here", "Joaquin Phoenix"],
  [2018, "狗男人", "Dogman", "Dogman", "Marcello Fonte"],
  [2019, "痛苦與榮耀", "Dolor y gloria", "Pain and Glory", "Antonio Banderas"],
  [2021, "惡之島", "Nitram", "Nitram", "Caleb Landry Jones"],
  [2022, "嬰兒轉運站", "브로커", "Broker", "宋康昊"],
  [2023, "我的完美日常", "Perfect Days", "Perfect Days", "役所廣司"],
  [2024, "憐憫的種類", "Kinds of Kindness", "Kinds of Kindness", "Jesse Plemons"],
  [2025, "秘密特工", "O Agente Secreto", "The Secret Agent", "Wagner Moura"],
  [2026, "懦夫", "Coward", "Coward", "Emmanuel Macchia、Valentin Campagne"]
    ]
  },
  actress: {
    label: "最佳女演員",
    person: "得獎演員",
    cacheKey: "bs",
    winners: [
  [1946, "田園交響曲", "La Symphonie pastorale", "Pastoral Symphony", "Michèle Morgan"],
  [1949, "瑪拉帕瓜之牆", "Au-delà des grilles", "The Walls of Malapaga", "Isa Miranda"],
  [1951, "彗星美人", "All About Eve", "All About Eve", "Bette Davis"],
  [1952, "偵探故事", "Detective Story", "Detective Story", "Lee Grant"],
  [1955, "大家庭", "Большая семья", "A Big Family", "全體女演員（Elena Dobronravova、Klara Luchko 等）"],
  [1956, "明日之淚", "I'll Cry Tomorrow", "I'll Cry Tomorrow", "Susan Hayward"],
  [1957, "卡比利亞之夜", "Le notti di Cabiria", "Nights of Cabiria", "Giulietta Masina"],
  [1958, "生命的邊緣", "Nära livet", "Brink of Life", "Bibi Andersson、Eva Dahlbeck、Barbro Hiort af Ornäs、Ingrid Thulin"],
  [1959, "金屋淚", "Room at the Top", "Room at the Top", "Simone Signoret"],
  [1960, "痴漢艷娃", "Ποτέ την Κυριακή", "Never on Sunday", "Melina Mercouri"],
  [1960, "如歌的中板", "Moderato cantabile", "Seven Days... Seven Nights", "Jeanne Moreau"],
  [1961, "烽火母女淚", "La ciociara", "Two Women", "Sophia Loren"],
  [1962, "長夜漫漫路迢迢", "Long Day's Journey into Night", "Long Day's Journey into Night", "Katharine Hepburn"],
  [1962, "蜜的滋味", "A Taste of Honey", "A Taste of Honey", "Rita Tushingham"],
  [1963, "蜂后", "L'ape regina", "The Conjugal Bed", "Marina Vlady"],
  [1964, "南瓜食者", "The Pumpkin Eater", "The Pumpkin Eater", "Anne Bancroft"],
  [1964, "一個馬鈴薯，兩個馬鈴薯", "One Potato, Two Potato", "One Potato, Two Potato", "Barbara Barrie"],
  [1965, "蝴蝶春夢", "The Collector", "The Collector", "Samantha Eggar"],
  [1966, "摩根", "Morgan – A Suitable Case for Treatment", "Morgan: A Suitable Case for Treatment", "Vanessa Redgrave"],
  [1967, "鴛鴦淚", "Elvira Madigan", "Elvira Madigan", "Pia Degermark"],
  [1969, "裸足天使", "Isadora", "Isadora", "Vanessa Redgrave"],
  [1970, "梅泰洛", "Metello", "Metello", "Ottavia Piccolo"],
  [1971, "毒海鴛鴦", "The Panic in Needle Park", "The Panic in Needle Park", "Kitty Winn"],
  [1972, "幻象", "Images", "Images", "Susannah York"],
  [1973, "金盞花", "The Effect of Gamma Rays on Man-in-the-Moon Marigolds", "The Effect of Gamma Rays on Man-in-the-Moon Marigolds", "Joanne Woodward"],
  [1974, "舞會上的小提琴", "Les Violons du bal", "Violins at the Ball", "Marie-José Nat"],
  [1975, "連尼", "Lenny", "Lenny", "Valerie Perrine"],
  [1976, "遺產", "L'eredità Ferramonti", "The Inheritance", "Dominique Sanda"],
  [1976, "德里夫人，您在哪裡？", "Déryné hol van?", "Mrs. Dery Where Are You?", "Mari Törőcsik"],
  [1977, "三女性", "3 Women", "3 Women", "Shelley Duvall"],
  [1977, "攝影師馬丁", "J.A. Martin photographe", "J.A. Martin Photographer", "Monique Mercure"],
  [1978, "不結婚的女人", "An Unmarried Woman", "An Unmarried Woman", "Jill Clayburgh"],
  [1978, "維奧萊特·諾齊埃爾", "Violette Nozière", "Violette", "Isabelle Huppert"],
  [1979, "諾瑪蕊", "Norma Rae", "Norma Rae", "Sally Field"],
  [1979, "沃伊采克", "Woyzeck", "Woyzeck", "Eva Mattes（最佳女配角）"],
  [1980, "跳入黑暗", "Salto nel vuoto", "A Leap in the Dark", "Anouk Aimée"],
  [1980, "特殊待遇", "Посебан третман", "Special Treatment", "Milena Dravić（最佳女配角）"],
  [1980, "陽台", "La terrazza", "The Terrace", "Carla Gravina（最佳女配角）"],
  [1981, "著魔", "Possession", "Possession", "Isabelle Adjani"],
  [1981, "四重奏", "Quartet", "Quartet", "Isabelle Adjani"],
  [1981, "事實", "Faktas", "Faktas", "Elena Solovey（最佳女配角）"],
  [1982, "另一種方式", "Egymásra nézve", "Another Way", "Jadwiga Jankowska-Cieślak"],
  [1983, "皮耶拉的故事", "Storia di Piera", "The Story of Piera", "Hanna Schygulla"],
  [1984, "凱爾", "Cal", "Cal", "Helen Mirren"],
  [1985, "官方說法", "La historia oficial", "The Official Story", "Norma Aleandro"],
  [1985, "面具", "Mask", "Mask", "Cher"],
  [1986, "羅莎·盧森堡", "Rosa Luxemburg", "Rosa Luxemburg", "Barbara Sukowa"],
  [1986, "永遠愛你", "Eu Sei que Vou Te Amar", "Love Me Forever or Never", "Fernanda Torres"],
  [1987, "害羞的人", "Shy People", "Shy People", "Barbara Hershey"],
  [1988, "上帝的另一個世界", "A World Apart", "A World Apart", "Barbara Hershey、Jodhi May、Linda Mvusi"],
  [1989, "暗夜哭聲", "A Cry in the Dark", "A Cry in the Dark", "Meryl Streep"],
  [1990, "審訊", "Przesłuchanie", "Interrogation", "Krystyna Janda"],
  [1991, "雙面維若妮卡", "La double vie de Véronique", "The Double Life of Veronique", "Irène Jacob"],
  [1992, "善意的背叛", "Den goda viljan", "The Best Intentions", "Pernilla August"],
  [1993, "鋼琴師和她的情人", "The Piano", "The Piano", "Holly Hunter"],
  [1994, "瑪歌皇后", "La Reine Margot", "Queen Margot", "Virna Lisi"],
  [1995, "瘋狂喬治王", "The Madness of King George", "The Madness of King George", "Helen Mirren"],
  [1996, "秘密與謊言", "Secrets & Lies", "Secrets & Lies", "Brenda Blethyn"],
  [1997, "切勿吞食", "Nil by Mouth", "Nil by Mouth", "Kathy Burke"],
  [1998, "天使夢想的生活", "La Vie rêvée des anges", "The Dreamlife of Angels", "Élodie Bouchez、Natacha Régnier"],
  [1999, "人，性本色", "L'Humanité", "Humanité", "Séverine Caneele"],
  [1999, "美麗羅塞塔", "Rosetta", "Rosetta", "Émilie Dequenne"],
  [2000, "在黑暗中漫舞", "Dancer in the Dark", "Dancer in the Dark", "Björk"],
  [2001, "鋼琴教師", "La Pianiste", "The Piano Teacher", "Isabelle Huppert"],
  [2002, "沒有過去的男人", "Mies vailla menneisyyttä", "The Man Without a Past", "Kati Outinen"],
  [2003, "老爸的單程車票", "Les Invasions barbares", "The Barbarian Invasions", "Marie-Josée Croze"],
  [2004, "錯過的愛", "Clean", "Clean", "張曼玉"],
  [2005, "自由區", "Free Zone", "Free Zone", "Hanna Laslo"],
  [2006, "玩美女人", "Volver", "Volver", "Penélope Cruz、Carmen Maura、Lola Dueñas、Blanca Portillo、Yohana Cobo、Chus Lampreave"],
  [2007, "密陽", "밀양", "Secret Sunshine", "全度妍"],
  [2008, "越線", "Linha de Passe", "Linha de Passe", "Sandra Corveloni"],
  [2009, "撒旦的情與慾", "Antichrist", "Antichrist", "Charlotte Gainsbourg"],
  [2010, "愛情對白", "Copie conforme", "Certified Copy", "Juliette Binoche"],
  [2011, "驚悚末日", "Melancholia", "Melancholia", "Kirsten Dunst"],
  [2012, "山之外", "După dealuri", "Beyond the Hills", "Cristina Flutur、Cosmina Stratan"],
  [2013, "過去", "Le Passé", "The Past", "Bérénice Bejo"],
  [2014, "星圖", "Maps to the Stars", "Maps to the Stars", "Julianne Moore"],
  [2015, "我的國王", "Mon roi", "My King", "Emmanuelle Bercot"],
  [2015, "因為愛你", "Carol", "Carol", "Rooney Mara"],
  [2016, "羅莎媽媽", "Ma' Rosa", "Ma' Rosa", "Jaclyn Jose"],
  [2017, "憤怒的消逝", "Aus dem Nichts", "In the Fade", "Diane Kruger"],
  [2018, "艾卡", "Айка", "Ayka", "Samal Yeslyamova"],
  [2019, "小魔花", "Little Joe", "Little Joe", "Emily Beecham"],
  [2021, "世界上最爛的人", "Verdens verste menneske", "The Worst Person in the World", "Renate Reinsve"],
  [2022, "聖蛛", "عنکبوت مقدس", "Holy Spider", "Zar Amir Ebrahimi"],
  [2023, "枯草", "Kuru Otlar Üstüne", "About Dry Grasses", "Merve Dizdar"],
  [2024, "璀璨女人", "Emilia Pérez", "Emilia Pérez", "Karla Sofía Gascón、Selena Gomez、Adriana Paz、Zoe Saldaña"],
  [2025, "小妹妹", "La Petite Dernière", "The Little Sister", "Nadia Melliti"],
  [2026, "突然", "Soudain", "All of a Sudden", "岡本多緒、Virginie Efira"]
    ]
  }
};

// ---------- TMDB 配對 ----------
function hasTmdb() {
  return typeof Widget !== "undefined" && Widget.tmdb && typeof Widget.tmdb.get === "function";
}

function resultYear(r) {
  return parseInt(String(r.release_date || "").slice(0, 4), 10) || null;
}

async function searchMovie(query) {
  try {
    const res = await Widget.tmdb.get("/search/movie", {
      params: { query: query, language: "zh-TW" }
    });
    return (res && res.results) || [];
  } catch (e) {
    console.log("TMDB 搜尋失敗 " + query + ":", String(e));
    return [];
  }
}

// 得獎年份通常等於或晚於上映年份 0–2 年
function pickByYear(results, awardYear) {
  let best = null;
  let bestScore = Infinity;
  for (const r of results) {
    const y = resultYear(r);
    if (!y) continue;
    const diff = awardYear - y;
    if (diff < -1 || diff > 3) continue;
    const score = Math.abs(diff) * 10 - Math.min(r.vote_count || 0, 9999) / 1000;
    if (score < bestScore) {
      best = r;
      bestScore = score;
    }
  }
  return best;
}

async function matchWinner(entry, keyPrefix) {
  const [year, zh, original, english] = entry;
  const cacheKey = keyPrefix + ":" + year + ":" + original;
  const cached = Widget.storage && Widget.storage.get(cacheKey);
  if (cached) {
    try {
      return JSON.parse(cached);
    } catch (e) {}
  }

  const queries = [english, original, zh].filter((q, i, arr) => q && arr.indexOf(q) === i);
  for (const q of queries) {
    const hit = pickByYear(await searchMovie(q), year);
    if (hit) {
      const slim = {
        id: hit.id,
        title: hit.title,
        poster_path: hit.poster_path,
        backdrop_path: hit.backdrop_path,
        release_date: hit.release_date,
        vote_average: hit.vote_average,
        overview: hit.overview
      };
      if (Widget.storage) Widget.storage.set(cacheKey, JSON.stringify(slim));
      return slim;
    }
  }
  return null;
}

// =====================================================================
// 金棕櫚獎：讀取豆瓣豆列「歷屆金棕櫚獎最佳影片」再轉 TMDB
// =====================================================================
const DOULIST_ID = "164270940";
const DOULIST_PAGE_SIZE = 25;
const DOULIST_CACHE_KEY = "pd:doulist";
const DOULIST_CACHE_TTL = 24 * 3600 * 1000;

const UA_DESKTOP =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";
const UA_MOBILE =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1";

function parseAbstract(text) {
  const info = {};
  String(text || "")
    .split(/\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .forEach((line) => {
      const idx = line.search(/[:：]/);
      if (idx > 0) info[line.slice(0, idx).trim()] = line.slice(idx + 1).trim();
    });
  return info;
}

// ---------- 方式一：桌面版網頁 HTML ----------
async function fetchFromWeb(doulistId, start, sort) {
  const url = "https://www.douban.com/doulist/" + doulistId + "/";
  const query = { start: String(start), sort: sort };
  const headerSets = [
    { "User-Agent": UA_DESKTOP, Referer: "https://www.douban.com/" },
    { "User-Agent": UA_DESKTOP },
    { "User-Agent": UA_MOBILE, Referer: "https://www.douban.com/" }
  ];

  let lastError = null;
  for (const headers of headerSets) {
    try {
      const res = await Widget.http.get(url, { headers: headers, params: query });
      const html = res && res.data;
      if (typeof html === "string" && html.indexOf("doulist-item") !== -1) {
        return parseWebHtml(html);
      }
      lastError = new Error("網頁內容不含豆列條目");
    } catch (e) {
      lastError = e;
      console.log("網頁請求失敗，換一組請求頭重試:", String(e));
    }
  }
  throw lastError || new Error("網頁請求失敗");
}

function parseWebHtml(html) {
  const $ = Widget.html.load(html);
  const items = [];
  $(".doulist-item").each((_, el) => {
    const $el = $(el);
    const $titleLink = $el.find(".doulist-subject .title a").first();
    const href = $titleLink.attr("href") || "";
    const idMatch = href.match(/movie\.douban\.com\/subject\/(\d+)/);
    if (!idMatch) return;

    const cover = $el.find(".doulist-subject .post img").attr("src") || "";
    const rating = $el.find(".rating .rating_nums").text().trim();
    const $abstract = $el.find(".doulist-subject .abstract").first();
    $abstract.find("br").replaceWith("\n");
    const info = parseAbstract($abstract.text());
    const comment = $el.find("blockquote.comment").first().text().trim();

    const desc = [];
    if (info["导演"]) desc.push("导演: " + info["导演"]);
    if (info["主演"]) desc.push("主演: " + info["主演"]);
    if (info["制片国家/地区"]) desc.push(info["制片国家/地区"]);
    if (comment) desc.push("豆列评语: " + comment);

    items.push({
      id: idMatch[1],
      type: "douban",
      title: $titleLink.text().replace(/\s+/g, " ").trim(),
      coverUrl: cover,
      posterPath: cover,
      rating: rating || undefined,
      releaseDate: info["年份"] || undefined,
      genreTitle: info["类型"] || undefined,
      description: desc.join("\n")
    });
  });
  return items;
}

// ---------- 方式二：豆瓣手機版 API（備援） ----------
async function fetchFromMobileApi(doulistId, start) {
  const headers = {
    "User-Agent": UA_MOBILE,
    Referer: "https://m.douban.com/doulist/" + doulistId + "/"
  };
  const endpoints = ["posts", "items"];
  let lastError = null;

  for (const ep of endpoints) {
    try {
      const url = "https://m.douban.com/rexxar/api/v2/doulist/" + doulistId + "/" + ep;
      const res = await Widget.http.get(url, {
        headers: headers,
        params: { start: String(start), count: String(DOULIST_PAGE_SIZE), for_mobile: "1" }
      });
      let data = res && res.data;
      if (typeof data === "string") data = JSON.parse(data);
      const list = (data && (data.items || data.posts || data.subjects)) || [];
      const items = list.map(parseApiItem).filter(Boolean);
      if (items.length > 0 || list.length === 0) return items;
      lastError = new Error("API 回傳格式無法解析");
    } catch (e) {
      lastError = e;
      console.log("手機版 API (" + ep + ") 失敗:", String(e));
    }
  }
  throw lastError || new Error("手機版 API 請求失敗");
}

function parseApiItem(raw) {
  if (!raw) return null;
  const s = (raw.content && raw.content.subject) || raw.subject || raw.target || raw;
  const url = s.url || s.uri || raw.url || raw.uri || "";
  const idFromUrl = (String(url).match(/(?:subject|movie|tv)\/(\d+)/) || [])[1];
  const typeOk =
    !s.type || ["movie", "tv"].indexOf(s.type) !== -1 || /movie\.douban\.com/.test(url);
  const id = idFromUrl || (typeOk ? s.id : null);
  if (!id || !typeOk) return null;

  const cover =
    (s.pic && (s.pic.large || s.pic.normal)) || s.cover_url || s.cover || raw.cover_url || "";
  const rating = s.rating && (s.rating.value || s.rating.star_count);

  return {
    id: String(id),
    type: "douban",
    title: s.title || raw.title || "",
    coverUrl: cover,
    posterPath: cover,
    rating: rating ? String(rating) : undefined,
    releaseDate: s.year || undefined,
    mediaType: s.type === "tv" ? "tv" : s.type === "movie" ? "movie" : undefined,
    description: s.card_subtitle || raw.abstract || raw.comment || ""
  };
}

// ---------- 豆瓣條目轉 TMDB ID ----------
function splitTitle(full) {
  const t = String(full || "").trim();
  const i = t.search(/\s/);
  if (i === -1) return { cn: t, original: "" };
  return { cn: t.slice(0, i).trim(), original: t.slice(i + 1).trim() };
}

function dbResultYear(r) {
  const d = r.release_date || r.first_air_date || "";
  return parseInt(d.slice(0, 4), 10) || null;
}

async function tmdbSearch(path, query, extra) {
  try {
    const res = await Widget.tmdb.get(path, {
      params: Object.assign({ query: query, language: "zh-CN" }, extra || {})
    });
    return (res && res.results) || [];
  } catch (e) {
    console.log("TMDB 搜尋失敗 " + path + " " + query + ":", String(e));
    return [];
  }
}

function pickBest(results, year) {
  const list = results.filter((r) => !r.media_type || r.media_type === "movie" || r.media_type === "tv");
  if (list.length === 0) return null;
  if (!year) return list[0];
  let best = null;
  let bestDiff = Infinity;
  for (const r of list) {
    const y = dbResultYear(r);
    const diff = y ? Math.abs(y - year) : 99;
    if (diff < bestDiff) {
      best = r;
      bestDiff = diff;
    }
  }
  return bestDiff <= 1 ? best : null;
}

async function matchTmdb(item) {
  const { cn, original } = splitTitle(item.title);
  const year = parseInt(item.releaseDate, 10) || null;
  const queries = [original, cn].filter(Boolean);

  for (const q of queries) {
    // 先精準搜電影 + 年份
    if (year) {
      const hit = pickBest(await tmdbSearch("/search/movie", q, { primary_release_year: year }), year);
      if (hit) return { id: hit.id, mediaType: "movie", r: hit };
    }
    // 再用綜合搜尋（包含劇集），挑年份最接近的
    const hit = pickBest(await tmdbSearch("/search/multi", q), year);
    if (hit) return { id: hit.id, mediaType: hit.media_type || "movie", r: hit };
  }
  return null;
}

async function convertToTmdb(items) {
  if (typeof Widget === "undefined" || !Widget.tmdb || typeof Widget.tmdb.get !== "function") {
    console.log("此版本 Forward 沒有 Widget.tmdb，無法轉換，保留豆瓣 ID");
    return items;
  }
  const converted = await Promise.all(
    items.map(async (item) => {
      const m = await matchTmdb(item);
      if (!m) {
        console.log("TMDB 未匹配，保留豆瓣 ID：" + item.title);
        return item;
      }
      // tmdb 類型走 Forward 內建詳情頁：只給必要欄位，不要帶 link
      return {
        id: m.id, // 新版 Forward 範例：數字 id + mediaType
        type: "tmdb",
        mediaType: m.mediaType,
        title: m.r.title || m.r.name || item.title,
        posterPath: m.r.poster_path || undefined,
        backdropPath: m.r.backdrop_path || undefined,
        releaseDate: m.r.release_date || m.r.first_air_date || item.releaseDate,
        rating: item.rating,
        genreTitle: item.genreTitle,
        description: m.r.overview || item.description
      };
    })
  );
  const ok = converted.filter((i) => i.type === "tmdb").length;
  console.log("TMDB 轉換：" + ok + "/" + items.length);
  return converted;
}


// 抓豆列單頁：先網頁版，失敗改手機版 API
async function fetchDoulistPage(start) {
  try {
    return await fetchFromWeb(DOULIST_ID, start, "seq");
  } catch (webError) {
    console.log("網頁版失敗，改用手機版 API:", String(webError));
    try {
      return await fetchFromMobileApi(DOULIST_ID, start);
    } catch (apiError) {
      throw new Error("豆列載入失敗。網頁版：" + String(webError) + "；手機版 API：" + String(apiError));
    }
  }
}

// 抓整份豆列（快取一天），方便和其他獎項一樣排序、每頁 20 部
async function fetchWholeDoulist() {
  try {
    const raw = Widget.storage && Widget.storage.get(DOULIST_CACHE_KEY);
    if (raw) {
      const c = JSON.parse(raw);
      if (c && Date.now() - c.time < DOULIST_CACHE_TTL && c.items && c.items.length) return c.items;
    }
  } catch (e) {}

  const all = [];
  for (let p = 0; p < 10; p++) {
    const items = await fetchDoulistPage(p * DOULIST_PAGE_SIZE);
    all.push(...items);
    if (items.length === 0) break;
    if (p > 0 && items.length < DOULIST_PAGE_SIZE - 5) break;
  }
  console.log("豆列共取得 " + all.length + " 筆");
  if (Widget.storage && all.length) {
    Widget.storage.set(DOULIST_CACHE_KEY, JSON.stringify({ time: Date.now(), items: all }));
  }
  return all;
}

async function loadPalmeDor(params) {
  const all = (await fetchWholeDoulist()).map((item, i) => Object.assign({ _i: i }, item));
  const year = (it) => parseInt(it.releaseDate, 10) || 0;
  all.sort((a, b) =>
    params.sort === "asc" ? year(a) - year(b) || a._i - b._i : year(b) - year(a) || a._i - b._i
  );

  const page = Math.max(parseInt(params.page, 10) || 1, 1);
  const slice = all.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE).map((it) => {
    const copy = Object.assign({}, it);
    delete copy._i;
    return copy;
  });
  if (slice.length === 0) return [];

  const converted = await convertToTmdb(slice);
  return converted.map((it) =>
    Object.assign(it, {
      genreTitle: "金棕櫚獎" + (it.genreTitle ? "｜" + it.genreTitle : "")
    })
  );
}

// ---------- 主函式 ----------
async function loadCannesAwards(params = {}) {
  if (!params.award || params.award === "palmedor") {
    return loadPalmeDor(params);
  }

  if (!hasTmdb()) {
    throw new Error("此版本 Forward 沒有內建 TMDB 查詢（Widget.tmdb），無法載入");
  }

  const award = AWARDS[params.award] || AWARDS.grandprix;
  const list = award.winners.slice();
  if (params.sort === "asc") {
    list.sort((a, b) => a[0] - b[0]);
  } else {
    list.sort((a, b) => b[0] - a[0]);
  }

  const page = Math.max(parseInt(params.page, 10) || 1, 1);
  const slice = list.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  if (slice.length === 0) return [];

  const results = await Promise.all(
    slice.map(async (entry) => {
      const [year, zh, original, , director] = entry;
      const m = await matchWinner(entry, award.cacheKey);
      if (!m) {
        console.log("TMDB 未匹配，略過：" + year + " " + zh + "（" + original + "）");
        return null;
      }
      return {
        id: m.id,
        type: "tmdb",
        mediaType: "movie",
        title: m.title || zh,
        posterPath: m.poster_path || undefined,
        backdropPath: m.backdrop_path || undefined,
        releaseDate: m.release_date || String(year),
        rating: m.vote_average ? String(m.vote_average.toFixed(1)) : undefined,
        genreTitle: year + " " + award.label,
        description: year + " 年坎城" + award.label + "｜" + zh + "（" + original + "）｜" + award.person + "：" + director +
          (m.overview ? "\n" + m.overview : "")
      };
    })
  );

  const items = results.filter(Boolean);
  console.log("第 " + page + " 頁：配對成功 " + items.length + "/" + slice.length);
  return items;
}
