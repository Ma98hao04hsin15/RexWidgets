// TMDB 合集：整合自 TMDB(2).js + tmdbnetwork(2).js + tmdb_tv_popular.js 三支组件
// 说明：tmdbnetwork(2).js 里的 nowPlaying / trending / popular / topRated / categories / list
// 这几个函数没有被它自己的 WidgetMetadata 接入（是孤立代码），而且 trending / topRated 会跟
// TMDB(2).js 里真正接入的同名函数撞名，所以这里只保留 TMDB(2).js 里正式接入的版本，
// tmdbnetwork(2).js 里那几个孤立函数（包括抓取TMDB片单页面HTML的 list 函数）没有带过来。
// 两支文件里完全相同的 fetchData 辅助函数也只保留了一份。
WidgetMetadata = {
  id: "forward.tmdb.custom",
  title: "TMDB 合集",
  icon: "https://dashboardicons.com/api/icons/external/simpleicons/themoviedatabase/light.png",
  version: "1.0.0",
  requiredVersion: "0.0.1",
  description: "TMDB 趋势 / 高分榜单 / 新剧上线 / 今日播出 / 美剧播出平台 / 日剧播出平台 / 韩剧播出平台 / 国产剧播出平台 / 美国电影出品公司 / 中国电影出品公司 / 日本电影出品公司 / 韩国电影出品公司 / 热门内容",
  author: "you",
  site: "https://github.com/InchStudio/ForwardWidgets",
  modules: [
    {
      id: "trending",
      title: "趋势",
      functionName: "trending",
      params: [
        {
          name: "media_type",
          title: "类型",
          type: "enumeration",
          value: "movie",
          enumOptions: [
            { title: "电影", value: "movie" },
            { title: "剧集", value: "tv" },
          ],
        },
        {
          name: "time_window",
          title: "时间窗口",
          type: "enumeration",
          value: "day",
          enumOptions: [
            { title: "今日", value: "day" },
            { title: "本周", value: "week" },
          ],
        },
        { name: "language", title: "语言", type: "language", value: "zh-CN" },
      ],
    },
    {
      id: "top_rated",
      title: "高分榜单",
      functionName: "topRated",
      params: [
        {
          name: "type",
          title: "类型",
          type: "enumeration",
          value: "movie",
          enumOptions: [
            { title: "电影", value: "movie" },
            { title: "剧集", value: "tv" },
          ],
        },
        { name: "language", title: "语言", type: "language", value: "zh-CN" },
      ],
    },
    {
      id: "new_series",
      title: "新剧上线",
      functionName: "newSeries",
      params: [
        {
          name: "days",
          title: "首播时间范围",
          type: "enumeration",
          value: "30",
          enumOptions: [
            { title: "近 7 天", value: "7" },
            { title: "近 30 天", value: "30" },
            { title: "近 90 天", value: "90" },
          ],
        },
        { name: "language", title: "语言", type: "language", value: "zh-CN" },
      ],
    },
    {
      id: "airing_today",
      title: "今日播出",
      functionName: "airingToday",
      params: [{ name: "language", title: "语言", type: "language", value: "zh-CN" }],
    },
    {
      id: "networks",
      title: "美剧播出平台",
      functionName: "networks",
      params: [
        {
          name: "with_networks",
          title: "美剧播出平台",
          type: "enumeration",
          value: "213",
          enumOptions: [
            { title: "Netflix", value: "213" },
            { title: "Disney+", value: "2739" },
            { title: "Apple TV+", value: "2552" },
            { title: "HBO Max", value: "3186" },
            { title: "Hulu", value: "453" },
            { title: "Amazon Prime Video", value: "1024" },
            { title: "Peacock", value: "3353" },
            { title: "Paramount+", value: "4330" },
            { title: "AMC", value: "174" },
            { title: "CBS", value: "16" },
            { title: "NBC", value: "6" },
            { title: "ABC", value: "2" },
            { title: "Starz", value: "318" },
            { title: "AMC+", value: "4661" },
            { title: "BritBox", value: "4025" },
            { title: "Tubi", value: "5187" },
            { title: "The CW", value: "71" },
            { title: "Fox", value: "19" },
          ],
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          value: "popularity.desc",
          enumOptions: [
            { title: "热门度↓", value: "popularity.desc" },
            { title: "热门度↑", value: "popularity.asc" },
            { title: "评分↓", value: "vote_average.desc" },
            { title: "评分↑", value: "vote_average.asc" },
            { title: "首播日期↓", value: "first_air_date.desc" },
            { title: "首播日期↑", value: "first_air_date.asc" },
          ],
        },
        { name: "page", title: "页码", type: "page" },
        { name: "language", title: "语言", type: "language", value: "zh-CN" },
      ],
    },
    {
      id: "jp_drama_networks",
      title: "日剧播出平台",
      functionName: "jpDramaNetworks",
      params: [
        {
          name: "with_networks",
          title: "日剧播出平台",
          type: "enumeration",
          value: "2334",
          enumOptions: [
            { title: "NHK", value: "2334" },
            { title: "TBS", value: "160" },
            { title: "NTV", value: "57" },
            { title: "Fuji TV", value: "1" },
            { title: "TV Asahi", value: "103" },
            { title: "TV Tokyo", value: "98" },
            { title: "BS TV Tokyo", value: "3471" },
            { title: "WOWOW", value: "172" },
            { title: "Kansai TV", value: "1163" },
            { title: "U-NEXT", value: "3869" },
            { title: "Paravi", value: "3879" },
            { title: "TELASA", value: "4809" },
            { title: "FOD", value: "2763" },
            { title: "dTV", value: "2137" },
          ],
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          value: "popularity.desc",
          enumOptions: [
            { title: "热门度↓", value: "popularity.desc" },
            { title: "热门度↑", value: "popularity.asc" },
            { title: "评分↓", value: "vote_average.desc" },
            { title: "评分↑", value: "vote_average.asc" },
            { title: "首播日期↓", value: "first_air_date.desc" },
            { title: "首播日期↑", value: "first_air_date.asc" },
          ],
        },
        { name: "page", title: "页码", type: "page" },
        { name: "language", title: "语言", type: "language", value: "zh-CN" },
      ],
    },
    {
      id: "kr_drama_networks",
      title: "韩剧播出平台",
      functionName: "krDramaNetworks",
      params: [
        {
          name: "with_networks",
          title: "韩剧播出平台",
          type: "enumeration",
          value: "866",
          enumOptions: [
            { title: "tvN", value: "866" },
            { title: "SBS", value: "156" },
            { title: "MBC", value: "97" },
            { title: "KBS1", value: "829" },
            { title: "KBS2", value: "342" },
            { title: "JTBC", value: "885" },
            { title: "Coupang Play", value: "5169" },
            { title: "Wavve", value: "3357" },
            { title: "TVING", value: "3897" },
            { title: "OCN", value: "627" },
          ],
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          value: "popularity.desc",
          enumOptions: [
            { title: "热门度↓", value: "popularity.desc" },
            { title: "热门度↑", value: "popularity.asc" },
            { title: "评分↓", value: "vote_average.desc" },
            { title: "评分↑", value: "vote_average.asc" },
            { title: "首播日期↓", value: "first_air_date.desc" },
            { title: "首播日期↑", value: "first_air_date.asc" },
          ],
        },
        { name: "page", title: "页码", type: "page" },
        { name: "language", title: "语言", type: "language", value: "zh-CN" },
      ],
    },
    {
      id: "cn_drama_networks",
      title: "国产剧播出平台",
      functionName: "cnDramaNetworks",
      params: [
        {
          name: "with_networks",
          title: "国产剧播出平台",
          type: "enumeration",
          value: "1330",
          enumOptions: [
            { title: "iQiyi", value: "1330" },
            { title: "Tencent Video", value: "2007" },
            { title: "Youku", value: "1419" },
            { title: "bilibili", value: "1605" },
            { title: "Mango TV", value: "1631" },
            { title: "Migu Video", value: "6357" },
            { title: "红果短剧 (Hong Guo Short Drama)", value: "8020" },
          ],
        },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          value: "popularity.desc",
          enumOptions: [
            { title: "热门度↓", value: "popularity.desc" },
            { title: "热门度↑", value: "popularity.asc" },
            { title: "评分↓", value: "vote_average.desc" },
            { title: "评分↑", value: "vote_average.asc" },
            { title: "首播日期↓", value: "first_air_date.desc" },
            { title: "首播日期↑", value: "first_air_date.asc" },
          ],
        },
        { name: "page", title: "页码", type: "page" },
        { name: "language", title: "语言", type: "language", value: "zh-CN" },
      ],
    },
    {
      id: "companies",
      title: "美国电影出品公司",
      functionName: "companies",
      params: [
        {
          name: "with_companies",
          title: "美国电影出品公司",
          type: "enumeration",
          enumOptions: [
            { title: "迪士尼", value: "2" },
            { title: "Pixar", value: "3" },
            { title: "派拉蒙影业", value: "4" },
            { title: "华纳兄弟", value: "174" },
            { title: "哥伦比亚影业", value: "5" },
            { title: "索尼影业", value: "34" },
            { title: "环球影业", value: "33" },
            { title: "二十世纪影业", value: "25" },
            { title: "Marvel", value: "420" },
            { title: "DreamWorks Animation", value: "521" },
            { title: "DreamWorks Pictures", value: "7" },
            { title: "Lucasfilm Ltd.", value: "1" },
            { title: "Searchlight Pictures", value: "127929" },
            { title: "New Line Cinema", value: "12" },
            { title: "Warner Animation Group", value: "25120" },
            { title: "Focus Features", value: "10146" },
            { title: "Sony Pictures Animation", value: "2251" },
            { title: "Illumination", value: "6704" },
            { title: "Blue Sky Studios", value: "9383" },
            { title: "DC Studios", value: "184898" },
            { title: "Lionsgate", value: "1632" },
            { title: "A24", value: "41077" },
          ],
        },
        { name: "page", title: "页码", type: "page" },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          value: "popularity.desc",
          enumOptions: [
            { title: "热门度↓", value: "popularity.desc" },
            { title: "热门度↑", value: "popularity.asc" },
            { title: "评分↓", value: "vote_average.desc" },
            { title: "评分↑", value: "vote_average.asc" },
            { title: "上映日期↓", value: "primary_release_date.desc" },
            { title: "上映日期↑", value: "primary_release_date.asc" },
          ],
        },
        {
          name: "region",
          title: "地区(制片国家)",
          type: "enumeration",
          value: "",
          enumOptions: [
            { title: "全部", value: "" },
            { title: "美国", value: "US" },
            { title: "英国", value: "GB" },
            { title: "中国大陆", value: "CN" },
            { title: "中国香港", value: "HK" },
            { title: "中国台湾", value: "TW" },
            { title: "日本", value: "JP" },
            { title: "韩国", value: "KR" },
            { title: "法国", value: "FR" },
            { title: "德国", value: "DE" },
            { title: "加拿大", value: "CA" },
            { title: "印度", value: "IN" },
            { title: "泰国", value: "TH" },
          ],
        },
        { name: "language", title: "语言", type: "language", value: "zh-CN" },
      ],
    },
    {
      id: "china_companies",
      title: "中国电影出品公司",
      functionName: "chinaCompanies",
      params: [
        {
          name: "company",
          title: "出品公司",
          type: "enumeration",
          value: "id:3393",
          // value 为 "id:" + TMDB 公司ID
          enumOptions: [
            { title: "华谊兄弟", value: "id:3393" },
            { title: "中国电影集团 (China Film Group Corporation)", value: "id:2270" },
            { title: "China Film", value: "id:191908" },
            { title: "China Film Creative", value: "id:221665" },
            { title: "西部电影集团 (Western Movie Group)", value: "id:99069" },
            { title: "中影寰亚音像发行 (China Film Media Asia Audio Video Distribution)", value: "id:21348" },
            { title: "China Wit Media", value: "id:140097" },
            { title: "博纳影业", value: "id:30148" },
            { title: "光线影业", value: "id:17818" },
            { title: "万达影业", value: "id:78952" },
            { title: "Fun Age Pictures", value: "id:100127" },
            { title: "上海猫眼影业", value: "id:218024" },
            { title: "猫眼娱乐", value: "id:96956" },
            { title: "阿里影业", value: "id:69484" },
            { title: "腾讯视频 (Tencent Video)", value: "id:74457" },
            { title: "邵氏兄弟", value: "id:5798" },
            { title: "英皇电影", value: "id:122289" },
            { title: "寰亚电影", value: "id:131586" },
            { title: "Pegasus Motion Pictures", value: "id:6950" },
            { title: "八一电影制片厂", value: "id:39074" },
            { title: "Shanghai Film Group", value: "id:3407" },
            { title: "Shanghai Haimu Film Group", value: "id:230796" },
            { title: "Shanghai Film Group 上海电影（集团）(SFG)", value: "id:48919" },
            { title: "Beijing Film Studio", value: "id:708" },
          ],
        },
        { name: "page", title: "页码", type: "page" },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          value: "popularity.desc",
          enumOptions: [
            { title: "热门度↓", value: "popularity.desc" },
            { title: "热门度↑", value: "popularity.asc" },
            { title: "评分↓", value: "vote_average.desc" },
            { title: "评分↑", value: "vote_average.asc" },
            { title: "上映日期↓", value: "primary_release_date.desc" },
            { title: "上映日期↑", value: "primary_release_date.asc" },
          ],
        },
        { name: "language", title: "语言", type: "language", value: "zh-CN" },
      ],
    },
    {
      id: "japan_companies",
      title: "日本电影出品公司",
      functionName: "japanCompanies",
      params: [
        {
          name: "company",
          title: "出品公司",
          type: "enumeration",
          value: "id:49301",
          // value 为 "id:" + TMDB 公司ID
          enumOptions: [
            { title: "东宝 (Toho Pictures)", value: "id:49301" },
            { title: "东宝映画 (Toho Eiga)", value: "id:622" },
            { title: "东宝摄影所 (TOHO Studios)", value: "id:182161" },
            { title: "东宝东和 (TOHO-TOWA)", value: "id:657" },
            { title: "吉卜力工作室 (Studio Ghibli)", value: "id:10342" },
            { title: "松竹 (Shochiku)", value: "id:192" },
            { title: "Shochiku Studio", value: "id:130776" },
            { title: "Shochiku Broadcasting", value: "id:81419" },
            { title: "角川 (Kadokawa)", value: "id:2073" },
            { title: "角川书店 (Kadokawa Shoten)", value: "id:1194" },
            { title: "Kadokawa Daiei Studio", value: "id:46774" },
            { title: "Nippon Herald Films", value: "id:1598" },
            { title: "日活 (Nikkatsu Corporation)", value: "id:955" },
            { title: "Comix Wave Films", value: "id:3756" },
            { title: "Madhouse", value: "id:3464" },
            { title: "京都动画 (Kyoto Animation)", value: "id:5438" },
            { title: "Bandai Namco Filmworks", value: "id:173132" },
            { title: "富士电视台 (Fuji Television Network)", value: "id:3341" },
            { title: "日本电视台 (Nippon Television Network Corporation)", value: "id:6755" },
            { title: "BS Nippon Corporation", value: "id:192573" },
            { title: "TBS", value: "id:1393" },
            { title: "BS-TBS", value: "id:121339" },
            { title: "朝日电视台 (TV Asahi)", value: "id:9300" },
            { title: "Asahi Broadcasting Corporation", value: "id:4868" },
            { title: "东京电视台 (TV Tokyo)", value: "id:3034" },
            { title: "BS TV Tokyo", value: "id:133425" },
            { title: "NHK", value: "id:15505" },
            { title: "NHK Enterprises", value: "id:11376" },
            { title: "Altamira Pictures", value: "id:5099" },
            { title: "电通 (Dentsu)", value: "id:1778" },
            { title: "Hakuhodo DY Music & Pictures", value: "id:142186" },
            { title: "Hakuhodo DY Media Partners", value: "id:11846" },
            { title: "讲谈社 (Kodansha)", value: "id:59118" },
            { title: "光文社 (Kobunsha)", value: "id:165495" },
            { title: "WOWOW", value: "id:157807" },
            { title: "WOWOW Films", value: "id:5073" },
            { title: "Asmik Ace", value: "id:3033" },
            { title: "Asmik Ace Entertainment", value: "id:194517" },
            { title: "GAGA Communications", value: "id:3656" },
            { title: "GAGA Corporation", value: "id:84048" },
          ],
        },
        { name: "page", title: "页码", type: "page" },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          value: "popularity.desc",
          enumOptions: [
            { title: "热门度↓", value: "popularity.desc" },
            { title: "热门度↑", value: "popularity.asc" },
            { title: "评分↓", value: "vote_average.desc" },
            { title: "评分↑", value: "vote_average.asc" },
            { title: "上映日期↓", value: "primary_release_date.desc" },
            { title: "上映日期↑", value: "primary_release_date.asc" },
          ],
        },
        { name: "language", title: "语言", type: "language", value: "zh-CN" },
      ],
    },
    {
      id: "korea_companies",
      title: "韩国电影出品公司",
      functionName: "koreaCompanies",
      params: [
        {
          name: "company",
          title: "出品公司",
          type: "enumeration",
          value: "id:7036",
          // value 为 "id:" + TMDB 公司ID
          enumOptions: [
            { title: "CJ Entertainment", value: "id:7036" },
            { title: "CJ ENM", value: "id:128404" },
            { title: "Showbox", value: "id:3491" },
            { title: "Lotte Entertainment", value: "id:7819" },
            { title: "Next Entertainment World", value: "id:20064" },
            { title: "Plus M Entertainment", value: "id:91505" },
            { title: "Barunson E&A", value: "id:4399" },
            { title: "Little Big Pictures", value: "id:71853" },
            { title: "Hive Media Corp", value: "id:108532" },
            { title: "Pinehouse Film", value: "id:6925" },
            { title: "Myung Films", value: "id:21415" },
            { title: "Zip Cinema", value: "id:85150" },
            { title: "Opus Pictures", value: "id:7270" },
            { title: "Chungeorahm Film", value: "id:79498" },
            { title: "Moonlight Film", value: "id:88974" },
            { title: "BA Entertainment", value: "id:84678" },
            { title: "Sanai Pictures", value: "id:27133" },
            { title: "TVING", value: "id:157262" },
          ],
        },
        { name: "page", title: "页码", type: "page" },
        {
          name: "sort_by",
          title: "排序",
          type: "enumeration",
          value: "popularity.desc",
          enumOptions: [
            { title: "热门度↓", value: "popularity.desc" },
            { title: "热门度↑", value: "popularity.asc" },
            { title: "评分↓", value: "vote_average.desc" },
            { title: "评分↑", value: "vote_average.asc" },
            { title: "上映日期↓", value: "primary_release_date.desc" },
            { title: "上映日期↑", value: "primary_release_date.asc" },
          ],
        },
        { name: "language", title: "语言", type: "language", value: "zh-CN" },
      ],
    },
    {
      id: "popular_content",
      title: "热门内容(电影/剧集)",
      functionName: "popularContent",
      params: [
        {
          name: "type",
          title: "类型",
          type: "enumeration",
          value: "movie",
          enumOptions: [
            { title: "电影", value: "movie" },
            { title: "剧集", value: "tv" },
          ],
        },
        {
          name: "genre_movie",
          title: "电影类型",
          type: "enumeration",
          value: "",
          belongTo: { paramName: "type", value: "movie" },
          enumOptions: [
            { title: "全部", value: "" },
            { title: "动作", value: "28" },
            { title: "冒险", value: "12" },
            { title: "动画", value: "16" },
            { title: "喜剧", value: "35" },
            { title: "犯罪", value: "80" },
            { title: "纪录片", value: "99" },
            { title: "剧情", value: "18" },
            { title: "家庭", value: "10751" },
            { title: "奇幻", value: "14" },
            { title: "历史", value: "36" },
            { title: "恐怖", value: "27" },
            { title: "音乐", value: "10402" },
            { title: "悬疑", value: "9648" },
            { title: "爱情", value: "10749" },
            { title: "科幻", value: "878" },
            { title: "惊悚", value: "53" },
            { title: "战争", value: "10752" },
            { title: "西部", value: "37" },
          ],
        },
        {
          name: "genre_tv",
          title: "剧集类型",
          type: "enumeration",
          value: "",
          belongTo: { paramName: "type", value: "tv" },
          enumOptions: [
            { title: "全部", value: "" },
            { title: "动作冒险", value: "10759" },
            { title: "动画", value: "16" },
            { title: "喜剧", value: "35" },
            { title: "犯罪", value: "80" },
            { title: "纪录片", value: "99" },
            { title: "剧情", value: "18" },
            { title: "家庭", value: "10751" },
            { title: "儿童", value: "10762" },
            { title: "悬疑", value: "9648" },
            { title: "真人秀", value: "10764" },
            { title: "科幻奇幻", value: "10765" },
            { title: "肥皂剧", value: "10766" },
            { title: "脱口秀", value: "10767" },
            { title: "战争政治", value: "10768" },
            { title: "西部", value: "37" },
          ],
        },
        {
          name: "region",
          title: "地区(制片国家)",
          type: "enumeration",
          value: "",
          enumOptions: [
            { title: "全部", value: "" },
            { title: "中国大陆", value: "CN" },
            { title: "中国香港", value: "HK" },
            { title: "中国台湾", value: "TW" },
            { title: "美国", value: "US" },
            { title: "英国", value: "GB" },
            { title: "日本", value: "JP" },
            { title: "韩国", value: "KR" },
            { title: "法国", value: "FR" },
            { title: "德国", value: "DE" },
            { title: "印度", value: "IN" },
            { title: "泰国", value: "TH" },
          ],
        },
        {
          name: "year",
          title: "年份",
          type: "input",
          description: "填写4位数字年份（电影按上映年份，剧集按首播年份），留空表示不限",
          placeholders: [
            { title: "不限", value: "" },
            { title: "2026", value: "2026" },
            { title: "2025", value: "2025" },
            { title: "2024", value: "2024" },
            { title: "2020", value: "2020" },
            { title: "2010", value: "2010" },
          ],
        },
        {
          name: "sort_by_movie",
          title: "排序",
          type: "enumeration",
          value: "popularity.desc",
          belongTo: { paramName: "type", value: "movie" },
          enumOptions: [
            { title: "热门度↓", value: "popularity.desc" },
            { title: "热门度↑", value: "popularity.asc" },
            { title: "评分↓", value: "vote_average.desc" },
            { title: "评分↑", value: "vote_average.asc" },
            { title: "上映日期↓", value: "primary_release_date.desc" },
            { title: "上映日期↑", value: "primary_release_date.asc" },
          ],
        },
        {
          name: "sort_by_tv",
          title: "排序",
          type: "enumeration",
          value: "popularity.desc",
          belongTo: { paramName: "type", value: "tv" },
          enumOptions: [
            { title: "热门度↓", value: "popularity.desc" },
            { title: "热门度↑", value: "popularity.asc" },
            { title: "评分↓", value: "vote_average.desc" },
            { title: "评分↑", value: "vote_average.asc" },
            { title: "首播日期↓", value: "first_air_date.desc" },
            { title: "首播日期↑", value: "first_air_date.asc" },
          ],
        },
        {
          name: "min_rating",
          title: "最低评分",
          type: "input",
          description: "0-10，留空或0表示不限",
          placeholders: [
            { title: "不限", value: "0" },
            { title: "6", value: "6" },
            { title: "7", value: "7" },
            { title: "8", value: "8" },
          ],
        },
        { name: "page", title: "页码", type: "page" },
      ],
    },
  ],
};

// 基础获取TMDB数据方法（两支原文件里完全一样，合并后只留一份）
async function fetchData(api, params, forceMediaType) {
  try {
    const response = await Widget.tmdb.get(api, { params: params });

    if (!response) {
      throw new Error("获取数据失败");
    }

    const data = response.results;
    const result = data.map((item) => {
      let mediaType = item.media_type;
      if (forceMediaType) {
        mediaType = forceMediaType;
      } else if (mediaType == null) {
        mediaType = item.title ? "movie" : "tv";
      }
      return {
        id: item.id,
        type: "tmdb",
        title: item.title ?? item.name,
        description: item.overview,
        releaseDate: item.release_date ?? item.first_air_date,
        backdropPath: item.backdrop_path,
        posterPath: item.poster_path,
        rating: item.vote_average,
        mediaType: mediaType,
      };
    });
    return result;
  } catch (error) {
    console.error("调用 TMDB API 失败:", error);
    throw error;
  }
}

// ---------- 趋势 ----------
async function trending(params) {
  const mediaType = params.media_type || "movie";
  const timeWindow = params.time_window;
  const api = `trending/${mediaType}/${timeWindow}`;
  delete params.media_type;
  delete params.time_window;
  return await fetchData(api, params, mediaType);
}

// ---------- 新剧上线 ----------
async function newSeries(params) {
  const days = parseInt(params.days || "30", 10);
  delete params.days;

  const today = new Date();
  const past = new Date(today);
  past.setDate(past.getDate() - days);

  params["first_air_date.gte"] = past.toISOString().slice(0, 10);
  params["first_air_date.lte"] = today.toISOString().slice(0, 10);
  params.sort_by = params.sort_by || "first_air_date.desc";
  // 过滤掉几乎没人投票、大概率是低质量/占位条目的剧集
  params["vote_count.gte"] = params["vote_count.gte"] || 1;

  return await fetchData("discover/tv", params, "tv");
}

// ---------- 今日播出 ----------
async function airingToday(params) {
  return await fetchData("tv/airing_today", params, "tv");
}

// ---------- 高分榜单 ----------
async function topRated(params) {
  const type = params.type || "movie";
  const api = type === "tv" ? "tv/top_rated" : "movie/top_rated";
  delete params.type;
  return await fetchData(api, params, type);
}

// ---------- 美剧播出平台 ----------
async function networks(params) {
  const api = "discover/tv";
  return await fetchData(api, params, "tv");
}

// ---------- 日剧播出平台 ----------
async function jpDramaNetworks(params) {
  return await fetchData("discover/tv", params, "tv");
}

// ---------- 韩剧播出平台 ----------
async function krDramaNetworks(params) {
  return await fetchData("discover/tv", params, "tv");
}

// ---------- 国产剧播出平台 ----------
async function cnDramaNetworks(params) {
  return await fetchData("discover/tv", params, "tv");
}

// ---------- 美国电影出品公司 ----------
async function companies(params) {
  const api = "discover/movie";
  // 地区筛选：映射为 TMDB 的 with_origin_country（制片国家），留空表示不限
  if (params.region) {
    params.with_origin_country = params.region;
  }
  delete params.region;
  return await fetchData(api, params, "movie");
}

// ---------- 中国电影出品公司 ----------
// company 取值形如 "id:3393"，去掉 "id:" 前缀后即为 TMDB 公司ID。
// 中国/日本出品公司两个模块共用这个查询逻辑。
async function discoverByCompany(params) {
  const companyId = String(params.company || "").replace(/^id:/, "");
  if (!companyId) {
    console.log("discoverByCompany: 缺少公司ID", params.company);
    return [];
  }
  params.with_companies = companyId;
  delete params.company;
  return await fetchData("discover/movie", params, "movie");
}

async function chinaCompanies(params) {
  return await discoverByCompany(params);
}

// ---------- 日本电影出品公司 ----------
async function japanCompanies(params) {
  return await discoverByCompany(params);
}

// ---------- 韩国电影出品公司 ----------
async function koreaCompanies(params) {
  return await discoverByCompany(params);
}

// ---------- 热门内容(电影/剧集，来自 tmdb_tv_popular.js) ----------
function mapTvItem(item) {
  return {
    id: item.id,
    type: "tmdb",
    title: item.name,
    description: item.overview,
    releaseDate: item.first_air_date,
    backdropPath: item.backdrop_path,
    posterPath: item.poster_path,
    rating: item.vote_average,
    mediaType: "tv",
  };
}

function mapMovieItem(item) {
  return {
    id: item.id,
    type: "tmdb",
    title: item.title,
    description: item.overview,
    releaseDate: item.release_date,
    backdropPath: item.backdrop_path,
    posterPath: item.poster_path,
    rating: item.vote_average,
    mediaType: "movie",
  };
}

async function popularContent(params = {}) {
  const type = params.type || "movie";
  const page = params.page || 1;
  const region = params.region || "";
  const year = params.year || "";
  const minRating = params.min_rating || "0";

  if (type === "tv") {
    const sortBy = params.sort_by_tv || "popularity.desc";
    const genre = params.genre_tv || "";

    const query = {
      language: "zh-CN",
      page,
      sort_by: sortBy,
    };
    if (genre) query.with_genres = genre;
    if (region) query.with_origin_country = region;
    if (year) query.first_air_date_year = year;
    if (minRating && Number(minRating) > 0) {
      query["vote_average.gte"] = minRating;
      query["vote_count.gte"] = 50;
    } else if (sortBy.startsWith("vote_average")) {
      query["vote_count.gte"] = 50;
    }

    const res = await Widget.tmdb.get("/discover/tv", { params: query });
    if (!res || !res.results) return [];
    return res.results.map(mapTvItem);
  }

  const sortBy = params.sort_by_movie || "popularity.desc";
  const genre = params.genre_movie || "";

  const query = {
    language: "zh-CN",
    page,
    sort_by: sortBy,
    include_adult: false,
  };
  if (genre) query.with_genres = genre;
  if (region) query.with_origin_country = region;
  if (year) query.primary_release_year = year;
  if (minRating && Number(minRating) > 0) {
    query["vote_average.gte"] = minRating;
    query["vote_count.gte"] = 50;
  } else if (sortBy.startsWith("vote_average")) {
    query["vote_count.gte"] = 50;
  }

  const res = await Widget.tmdb.get("/discover/movie", { params: query });
  if (!res || !res.results) return [];
  return res.results.map(mapMovieItem);
}
