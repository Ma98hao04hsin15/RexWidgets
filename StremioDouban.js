// 豆瓣（Stremio addon）→ ForwardWidgets 模組
// 來源：stremio-addon-douban.baran.wang
// 注意：BASE 網址中的 UUID 是你的個人設定，請勿公開分享此檔案（需要分享可先用 Forward 的模組加密工具）

const BASE = "https://stremio-addon-douban.baran.wang/87366134-4bcf-48a2-9c86-8892bde32738";

// 固定不變的片單（id → 類型／名稱）
const CATALOGS = {"movie_hot_gaia": {"type": "movie", "name": "豆瓣热门电影"}, "movie_weekly_best": {"type": "movie", "name": "一周口碑电影榜"}, "movie_real_time_hotest": {"type": "movie", "name": "实时热门电影"}, "movie_top250": {"type": "movie", "name": "豆瓣电影 Top250"}, "movie_showing": {"type": "movie", "name": "影院热映"}, "tv_hot": {"type": "series", "name": "近期热门剧集"}, "tv_animation": {"type": "series", "name": "近期热门动画"}, "show_hot": {"type": "series", "name": "近期热门综艺节目"}, "tv_real_time_hotest": {"type": "series", "name": "实时热门电视"}, "tv_chinese_best_weekly": {"type": "series", "name": "华语口碑剧集榜"}, "tv_global_best_weekly": {"type": "series", "name": "全球口碑剧集榜"}, "show_chinese_best_weekly": {"type": "series", "name": "国内口碑综艺榜"}, "show_global_best_weekly": {"type": "series", "name": "国外口碑综艺榜"}, "film_genre_27": {"type": "movie", "name": "剧情片榜"}, "movie_comedy": {"type": "movie", "name": "喜剧片榜"}, "movie_love": {"type": "movie", "name": "爱情片榜"}, "movie_action": {"type": "movie", "name": "动作片榜"}, "film_genre_32": {"type": "movie", "name": "悬疑片榜"}, "film_genre_46": {"type": "movie", "name": "犯罪片榜"}, "film_genre_49": {"type": "movie", "name": "冒险片榜"}, "film_genre_41": {"type": "movie", "name": "家庭片榜"}, "film_genre_44": {"type": "movie", "name": "历史片榜"}, "film_genre_43": {"type": "movie", "name": "传记片榜"}, "__movie_yearly_ranking__": {"type": "movie", "name": "豆瓣年度评分最高电影"}, "tv_domestic": {"type": "series", "name": "近期热门国产剧"}, "tv_american": {"type": "series", "name": "近期热门美剧"}, "tv_korean": {"type": "series", "name": "近期热门韩剧"}, "tv_japanese": {"type": "series", "name": "近期热门日剧"}, "EC74443FY": {"type": "series", "name": "大陆剧榜"}, "ECFA5DI7Q": {"type": "series", "name": "美剧榜"}, "ECNA46YBA": {"type": "series", "name": "日剧榜"}, "ECVACXBWI": {"type": "series", "name": "英剧榜"}, "ECBE5CBEI": {"type": "series", "name": "韩剧榜"}, "ECBI5EL6A": {"type": "series", "name": "台剧榜"}, "EC6I5FYHA": {"type": "series", "name": "欧洲剧榜"}, "__tv_yearly_ranking__": {"type": "series", "name": "豆瓣年度评分最高剧集"}};

// 支援細分的片單與其選項（值要維持原樣，會直接送給 addon）
const GENRES = {"movie_comedy": ["近期热门", "高分经典", "华语", "欧洲", "中国大陆", "美国", "中国香港", "中国台湾", "日本", "韩国", "英国", "法国", "德国", "意大利", "西班牙", "瑞典", "印度", "泰国", "加拿大", "澳大利亚", "爱尔兰", "冷门佳作"], "movie_love": ["近期热门", "高分经典", "华语", "欧洲", "中国大陆", "美国", "中国台湾", "日本", "韩国", "英国", "法国", "德国", "意大利", "西班牙", "瑞典", "印度", "泰国", "加拿大", "澳大利亚", "爱尔兰", "冷门佳作"], "movie_action": ["近期热门", "高分经典", "华语", "欧洲", "美国", "中国台湾", "日本", "韩国", "英国", "法国", "德国", "印度", "加拿大", "澳大利亚", "冷门佳作"], "film_genre_32": ["近期热门", "高分经典", "华语", "欧洲", "美国", "中国香港", "日本", "韩国", "英国", "法国", "德国", "意大利", "西班牙", "加拿大", "澳大利亚", "冷门佳作"], "film_genre_46": ["近期热门", "高分经典", "华语", "欧洲", "中国大陆", "美国", "中国香港", "日本", "韩国", "英国", "法国", "德国", "意大利", "西班牙", "加拿大", "澳大利亚", "冷门佳作"], "film_genre_49": ["近期热门", "高分经典", "华语", "欧洲", "美国", "日本", "英国", "法国", "德国", "加拿大", "澳大利亚", "冷门佳作"], "film_genre_44": ["高分经典", "华语", "欧洲", "美国", "中国香港", "日本", "韩国", "英国", "法国", "德国", "意大利", "冷门佳作"], "film_genre_43": ["近期热门", "高分经典", "华语", "欧洲", "美国", "英国", "法国", "德国", "意大利", "加拿大", "冷门佳作"], "__movie_yearly_ranking__": ["华语", "外语", "冷门佳片", "日本", "韩国", "喜剧", "爱情", "恐怖", "动画", "纪录"], "EC74443FY": ["近期热门", "高分经典", "喜剧", "爱情", "悬疑", "家庭", "古装", "犯罪", "历史", "冷门佳作"], "ECFA5DI7Q": ["近期热门", "高分经典", "喜剧", "爱情", "悬疑", "动作", "科幻", "犯罪", "惊悚", "奇幻", "恐怖", "冷门佳作"], "ECNA46YBA": ["近期热门", "高分经典", "喜剧", "爱情", "悬疑", "冷门佳作"], "ECVACXBWI": ["高分经典", "喜剧", "悬疑", "犯罪", "冷门佳作"], "ECBE5CBEI": ["近期热门", "高分经典", "喜剧", "爱情", "冷门佳作"], "ECBI5EL6A": ["高分经典", "爱情", "冷门佳作"], "EC6I5FYHA": ["近期热门", "高分经典", "喜剧", "爱情", "悬疑", "犯罪", "冷门佳作"], "__tv_yearly_ranking__": ["华语剧集", "英美新剧", "英美续订", "日本剧集", "韩国剧集", "综艺", "动画", "纪录", "微短剧"]};

// 每月／每屆會換 id 的片單：執行時從 manifest 用名稱比對出當下的 id
const ROTATING = [
  { title: "本月定檔熱門電影", value: "rot_movie_schedule", type: "movie", pattern: "定档热门电影" },
  { title: "本月定檔熱門新劇", value: "rot_tv_schedule", type: "series", pattern: "定档热门新剧" },
  { title: "最新電影節獲獎名單", value: "rot_film_festival", type: "movie", pattern: "电影节获奖" },
  { title: "最新電視節獲獎名單", value: "rot_tv_festival", type: "series", pattern: "电视节.*获奖" },
  { title: "年度榜單高分電影精選", value: "rot_yearly_picks", type: "movie", pattern: "年度榜单高分电影" },
];

function pageParam() {
  return { name: "page", title: "頁碼", type: "page", value: "1" };
}

function singleModule(title, catalogId) {
  return {
    title,
    functionName: "loadCatalog",
    cacheDuration: 3600,
    params: [{ name: "catalog", title: "片單", type: "constant", value: catalogId }, pageParam()],
  };
}

// 一個模組內用下拉選單切換片單；有細分選項的片單會多出對應的「細分」選單
// type 傳 "movie" / "series" 只列該類型；傳 "all" 列出全部片單（含每月更新的片單）
function groupModule(title, type) {
  const ids = Object.keys(CATALOGS).filter(id => type === "all" || CATALOGS[id].type === type);
  const typeTag = id => (type === "all" ? (CATALOGS[id].type === "movie" ? "［電影］" : "［劇集］") : "");
  const options = ids.map(id => ({ title: `${typeTag(id)}${CATALOGS[id].name}`, value: id }));
  if (type === "all") {
    ROTATING.forEach(r => options.push({ title: `［每月］${r.title}`, value: r.value }));
  }
  const params = [
    {
      name: "catalog",
      title: "片單",
      type: "enumeration",
      value: options[0].value,
      enumOptions: options,
    },
  ];
  ids.filter(id => GENRES[id]).forEach(id => {
    params.push({
      name: `genre_${id}`,
      title: "細分",
      type: "enumeration",
      value: "",
      belongTo: { paramName: "catalog", value: [id] },
      enumOptions: [{ title: "全部", value: "" }].concat(GENRES[id].map(g => ({ title: g, value: g }))),
    });
  });
  params.push(pageParam());
  return { title, functionName: "loadCatalog", cacheDuration: 3600, params };
}

var WidgetMetadata = {
  id: "stremio.douban",
  title: "豆瓣榜單",
  description: "豆瓣熱門、口碑榜、Top250 與各類型榜單（Stremio Douban addon）",
  author: "you",
  site: "https://movie.douban.com",
  version: "1.1.0",
  requiredVersion: "0.0.1",
  modules: [
    singleModule("豆瓣熱門電影", "movie_hot_gaia"),
    singleModule("實時熱門電影", "movie_real_time_hotest"),
    singleModule("影院熱映", "movie_showing"),
    singleModule("一週口碑電影榜", "movie_weekly_best"),
    singleModule("豆瓣電影 Top250", "movie_top250"),
    singleModule("近期熱門劇集", "tv_hot"),
    singleModule("實時熱門電視", "tv_real_time_hotest"),
    singleModule("近期熱門動畫", "tv_animation"),
    singleModule("近期熱門綜藝", "show_hot"),
    groupModule("所有片單", "all"),
    groupModule("電影榜單", "movie"),
    groupModule("劇集／綜藝榜單", "series"),
    {
      title: "豆瓣片單（每月更新）",
      functionName: "loadCatalog",
      cacheDuration: 3600,
      params: [
        {
          name: "catalog",
          title: "片單",
          type: "enumeration",
          value: ROTATING[0].value,
          enumOptions: ROTATING.map(r => ({ title: r.title, value: r.value })),
        },
        pageParam(),
      ],
    },
  ],
};

// ---------- 共用工具 ----------

async function getJson(url) {
  const res = await Widget.http.get(url, { headers: { Accept: "application/json" } });
  return typeof res.data === "string" ? JSON.parse(res.data) : res.data;
}

// 每月更新的片單：從 manifest 用名稱找出目前的 id（快取 6 小時）
async function resolveRotating(key) {
  const def = ROTATING.find(r => r.value === key);
  if (!def) return null;
  const cacheKey = `rot:${key}`;
  const cached = Widget.storage.get(cacheKey);
  if (cached) {
    try {
      const c = JSON.parse(cached);
      if (Date.now() - c.at < 6 * 3600 * 1000) return c.catalog;
    } catch (e) { /* 忽略，重新解析 */ }
  }
  const manifest = await getJson(`${BASE}/manifest.json`);
  const re = new RegExp(def.pattern);
  const hit = ((manifest && manifest.catalogs) || []).find(c => c.type === def.type && re.test(c.name));
  if (!hit) {
    console.log(`manifest 裡目前沒有符合「${def.pattern}」的片單`);
    return null;
  }
  const catalog = { id: hit.id, type: hit.type };
  Widget.storage.set(cacheKey, JSON.stringify({ at: Date.now(), catalog }));
  return catalog;
}

// 把 Stremio 的條目 id 轉成 Forward 認得的格式
function mapId(rawId, mediaType) {
  const id = String(rawId || "");
  if (id.startsWith("douban:")) return { type: "douban", id: id.slice(7) };
  if (id.startsWith("tt")) return { type: "imdb", id };
  if (id.startsWith("tmdb:")) return { type: "tmdb", id: `${mediaType}.${id.slice(5)}` };
  if (/^\d+$/.test(id)) return { type: "douban", id };
  return { type: "url", id };
}

function toVideoItem(m, type) {
  const mediaType = type === "series" ? "tv" : "movie";
  const mapped = mapId(m.id, mediaType);
  const item = {
    id: mapped.id,
    type: mapped.type,
    title: m.name,
    coverUrl: m.poster || (mapped.type === "imdb" ? `https://images.metahub.space/poster/medium/${mapped.id}/img` : undefined),
    mediaType,
    releaseDate: m.releaseInfo || m.released || "",
    rating: m.imdbRating || "",
    genreTitle: Array.isArray(m.genres) ? m.genres.join(" / ") : "",
    description: m.description || "",
  };
  if (mapped.type === "url") item.link = mapped.id;
  return item;
}

// ---------- 模組函式 ----------

async function loadCatalog(params = {}) {
  const key = params.catalog;
  if (!key) throw new Error("缺少片單參數");

  let catalogId, type;
  if (CATALOGS[key]) {
    catalogId = key;
    type = CATALOGS[key].type;
  } else {
    const rot = await resolveRotating(key);
    if (!rot) return [];
    catalogId = rot.id;
    type = rot.type;
  }

  const genre = params[`genre_${catalogId}`] || "";

  // Stremio 用 skip 分頁；以第一頁實際回傳筆數當作每頁大小
  const page = Math.max(1, parseInt(params.page || "1", 10));
  const sizeKey = `pageSize:${catalogId}`;
  const pageSize = Widget.storage.get(sizeKey) || 20;
  const skip = (page - 1) * pageSize;

  const extras = [];
  if (genre) extras.push(`genre=${encodeURIComponent(genre)}`);
  if (skip > 0) extras.push(`skip=${skip}`);
  const extraPath = extras.length ? `/${extras.join("&")}` : "";

  try {
    const data = await getJson(`${BASE}/catalog/${type}/${encodeURIComponent(catalogId)}${extraPath}.json`);
    const metas = (data && data.metas) || [];
    if (page === 1 && metas.length > 0) Widget.storage.set(sizeKey, metas.length);
    return metas.map(m => toVideoItem(m, type));
  } catch (e) {
    console.error("讀取片單失敗:", catalogId, e);
    throw e;
  }
}

