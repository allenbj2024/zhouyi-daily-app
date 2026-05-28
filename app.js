const TRIGRAMS = {
  qian: { name: "乾", image: "天", lines: [1, 1, 1] },
  kun: { name: "坤", image: "地", lines: [0, 0, 0] },
  zhen: { name: "震", image: "雷", lines: [1, 0, 0] },
  xun: { name: "巽", image: "风", lines: [0, 1, 1] },
  kan: { name: "坎", image: "水", lines: [0, 1, 0] },
  li: { name: "离", image: "火", lines: [1, 0, 1] },
  gen: { name: "艮", image: "山", lines: [0, 0, 1] },
  dui: { name: "兑", image: "泽", lines: [1, 1, 0] },
};

const HEXAGRAMS = [
  ["乾为天", "qian", "qian", "刚健、创造、自强不息", "主动承担，但不躁进。", "辨认一个该主动承担的位置。"],
  ["坤为地", "kun", "kun", "顺承、厚载、成物", "以柔承载，先把地基做厚。", "把一个承诺落成可交付结果。"],
  ["水雷屯", "zhen", "kan", "初生、艰难、建侯", "草创之时，先立秩序。", "给混乱事项列一个最小推进步骤。"],
  ["山水蒙", "kan", "gen", "启蒙、求教、正养", "不明时先诚意求问。", "向一个明白人请教具体问题。"],
  ["水天需", "qian", "kan", "等待、养势、饮食宴乐", "等待不是停滞，是蓄养条件。", "列出还缺的条件，不硬闯。"],
  ["天水讼", "kan", "qian", "争讼、辨分、止争", "争端宜早辨是非，也宜知止。", "把冲突写成事实、判断、诉求三栏。"],
  ["地水师", "kan", "kun", "组织、纪律、用众", "众力要有正当目标和纪律。", "给团队事项明确负责人和边界。"],
  ["水地比", "kun", "kan", "亲比、联盟、择主", "亲近要审其所归。", "判断一个合作是否值得长期靠近。"],
  ["风天小畜", "qian", "xun", "小蓄、文德、密云", "力量未大，先以小积蓄。", "积累一个小而稳定的优势。"],
  ["天泽履", "dui", "qian", "践履、礼、临险", "走在危险边缘，靠礼与分寸。", "今天说一句该说但要讲分寸的话。"],
  ["地天泰", "qian", "kun", "通泰、交感、上下和", "上下交而事通。", "促成一次上下游之间的真实沟通。"],
  ["天地否", "kun", "qian", "闭塞、不交、守正", "不通之时，守其正而不苟合。", "停止一个低质量消耗。"],
  ["天火同人", "li", "qian", "同道、公开、大同", "同人于野，公心胜私结。", "把共同目标说清楚。"],
  ["火天大有", "qian", "li", "丰有、明德、居富", "有大者须以明德守之。", "盘点资源，并决定怎样正用。"],
  ["地山谦", "gen", "kun", "谦退、受益、持盈", "谦不是低姿态，是知位。", "把一个功劳让给真实参与者。"],
  ["雷地豫", "kun", "zhen", "悦豫、动众、预备", "悦动众心，也要防逸乐。", "用一个积极信号带动他人行动。"],
  ["泽雷随", "zhen", "dui", "随时、择从、转向", "随不是随便，是顺正势。", "判断一个变化是否值得跟随。"],
  ["山风蛊", "xun", "gen", "整弊、除腐、更新", "旧弊积久，须先治乱源。", "修一个反复出问题的流程。"],
  ["地泽临", "dui", "kun", "临下、亲民、渐盛", "势将增长，先以德临之。", "主动靠近一线，听真实反馈。"],
  ["风地观", "kun", "xun", "观察、示范、省察", "观人也观己，风行地上。", "安静观察一个系统的真实运行。"],
  ["火雷噬嗑", "zhen", "li", "决断、刑罚、去梗", "有梗阻时，明断才能通。", "处理一个拖延已久的小障碍。"],
  ["山火贲", "li", "gen", "文饰、节制、文明", "文饰可美，不可掩实。", "把一个表达修得更清楚。"],
  ["山地剥", "kun", "gen", "剥落、衰败、止损", "小人渐盛，君子宜藏器。", "识别一个正在流失的根基。"],
  ["地雷复", "zhen", "kun", "回复、一阳来复、改过", "返本复初，善端可养。", "恢复一个被中断的好习惯。"],
  ["天雷无妄", "zhen", "qian", "真实、无伪、顺天", "无妄则正，不以私意妄动。", "删掉一个自欺的理由。"],
  ["山天大畜", "qian", "gen", "大蓄、止健、养贤", "强力要能被涵养。", "把冲劲收束成长期能力。"],
  ["山雷颐", "zhen", "gen", "养正、言语、饮食", "观其所养，知其所成。", "调整今天摄入的信息与语言。"],
  ["泽风大过", "xun", "dui", "过重、栋桡、非常", "非常之时，需非常担当。", "识别一个已超载的结构。"],
  ["坎为水", "kan", "kan", "险陷、习坎、诚信", "险中守信，反复练习。", "在压力里守住一个底线。"],
  ["离为火", "li", "li", "明丽、依附、文明", "明要有所附，光要有根。", "让一个判断有证据可依。"],
  ["泽山咸", "gen", "dui", "感应、少男少女、交感", "感而能正，情才不乱。", "观察一次情绪如何影响判断。"],
  ["雷风恒", "xun", "zhen", "恒久、夫妇、常道", "恒不是不变，是守常中能动。", "给一件长期事设固定节律。"],
  ["天山遁", "gen", "qian", "退避、远小人、藏身", "该退时退，是保存大道。", "退出一个无益争场。"],
  ["雷天大壮", "qian", "zhen", "强盛、壮而能正", "强盛最怕恃强。", "把力量用在正当处。"],
  ["火地晋", "kun", "li", "进升、明出地上", "进要以明，不以躁。", "推进一个可公开说明的成果。"],
  ["地火明夷", "li", "kun", "明伤、晦明、守难", "光明受伤时，内明外柔。", "保护一个重要判断，不急于表露。"],
  ["风火家人", "li", "xun", "家道、内正、分职", "家内正则外事顺。", "把一个内部角色边界讲清。"],
  ["火泽睽", "dui", "li", "乖离、小事吉、异中求同", "不同不可怕，错位才可怕。", "找出分歧中的共同小目标。"],
  ["水山蹇", "gen", "kan", "险阻、止而求助", "见险而止，利见大人。", "向合适的人求援。"],
  ["雷水解", "kan", "zhen", "解除、缓急、赦过", "困结已松，宜解不宜紧。", "释放一个不必要的压力。"],
  ["山泽损", "dui", "gen", "减损、损下益上、诚", "损其过，益其真。", "删掉一个虚耗成本。"],
  ["风雷益", "zhen", "xun", "增益、利往、迁善", "益人即益己，风雷相助。", "做一件让系统变好的小事。"],
  ["泽天夬", "qian", "dui", "决去、刚决、宣告", "决断要光明，不可阴狠。", "明确拒绝一个不正当要求。"],
  ["天风姤", "xun", "qian", "遇合、阴始生、谨始", "相遇之初，最要辨正邪。", "审视一个新机会的隐患。"],
  ["泽地萃", "kun", "dui", "聚集、祭祀、组织", "聚众须有中心与敬意。", "把分散的人或信息聚成一处。"],
  ["地风升", "xun", "kun", "上升、渐进、积小", "升进靠顺势与积累。", "做一个能向上累积的动作。"],
  ["泽水困", "kan", "dui", "困穷、言不信、守命", "困中少言，重在守德。", "减少解释，把一件事做实。"],
  ["水风井", "xun", "kan", "井养、制度、公共资源", "井不可废，养人靠制度。", "维护一个公共可用的资源。"],
  ["泽火革", "li", "dui", "变革、去故、取信", "革故鼎新，先得其时。", "判断一个改变是否时机已到。"],
  ["火风鼎", "xun", "li", "鼎新、养贤、成器", "器成则能养人。", "把经验整理成可复用方法。"],
  ["震为雷", "zhen", "zhen", "震动、恐惧修省", "震来知惧，反能致福。", "把一次惊动转成反省清单。"],
  ["艮为山", "gen", "gen", "止、限度、背身", "知止，才能各安其位。", "给今天设一个清楚的停止线。"],
  ["风山渐", "gen", "xun", "渐进、女归、礼序", "渐进有序，慢就是正。", "把长期目标拆成下一阶。"],
  ["雷泽归妹", "dui", "zhen", "失序、情动、非正合", "情急易失位，须辨名分。", "检查一个关系或合作是否失序。"],
  ["雷火丰", "li", "zhen", "丰盛、明动、日中", "丰盛之时，最怕遮蔽。", "在高峰处排查一个盲点。"],
  ["火山旅", "gen", "li", "旅居、谨慎、无依", "在外少依，贵在柔顺明慎。", "在陌生场景里降低姿态。"],
  ["巽为风", "xun", "xun", "入、顺、申命", "柔入而不失正。", "用温和方式推进一个必要要求。"],
  ["兑为泽", "dui", "dui", "悦、讲习、和说", "悦以正，不以媚。", "用一次真诚表达修复气氛。"],
  ["风水涣", "kan", "xun", "涣散、聚心、过险", "散而能聚，靠共同所归。", "把一个涣散团队重新定向。"],
  ["水泽节", "dui", "kan", "节制、制度、限度", "节要适中，苦节不可贞。", "给资源、时间或欲望设上限。"],
  ["风泽中孚", "dui", "xun", "诚信、内实、感通", "内诚则外信。", "兑现一个小承诺。"],
  ["雷山小过", "gen", "zhen", "小过、谨小、不宜大事", "小事可过，大事宜慎。", "把注意力放在一个细节补正。"],
  ["水火既济", "li", "kan", "已成、守成、防乱", "成事之后，仍须戒惧。", "为一个已完成事项做维护。"],
  ["火水未济", "kan", "li", "未成、续进、慎终", "未成之时，明在险上。", "找出最后一段路的风险。"],
].map((item, index) => {
  const [name, lowerKey, upperKey, theme, meaning, practice] = item;
  const lower = TRIGRAMS[lowerKey];
  const upper = TRIGRAMS[upperKey];
  return {
    id: index + 1,
    symbol: String.fromCodePoint(0x4dc0 + index),
    name,
    lower,
    upper,
    theme,
    meaning,
    practice,
    core: [1, 2, 3, 4, 11, 12, 15, 24, 31, 32, 41, 42, 49, 50, 63, 64].includes(index + 1),
  };
});

const PATH = [
  {
    title: "先立底本",
    meta: "1个月",
    text: "读《周易译注》导读、乾坤两卦、《系辞上传》，只抓阴阳、时位、中正、吉凶悔吝。",
    tasks: ["读乾坤", "读系辞上传", "整理关键词", "建立日志"],
  },
  {
    title: "通读六十四卦",
    meta: "3到6个月",
    text: "每卦一页笔记，记录卦象、卦辞、六爻进程，以及此卦所讲的处境。",
    tasks: ["每周三卦", "完成卦象表", "复盘十条日志", "标记核心16卦"],
  },
  {
    title: "进入程朱义理",
    meta: "3个月",
    text: "以《周易程氏传》和《周易本义》对读核心16卦，从文字理解转入修身处事。",
    tasks: ["对读程传", "对读本义", "整理进退守变", "做一次月复盘"],
  },
  {
    title: "玩辞测象",
    meta: "3到6个月",
    text: "读《周易玩辞》，围绕字词、同文、反义、象辞关系反复玩味。",
    tasks: ["读玩辞序", "选一组辞", "比较程朱项", "写一篇心得"],
  },
];

const BOOKS = [
  {
    type: "主教材",
    title: "黄寿祺、张善文《周易译注》",
    text: "用于入门和完整通读。原文、注释、译文、说明、总论都比较稳。",
    url: "https://books.google.com/books/about/%E5%91%A8%E6%98%93%E8%AF%91%E6%B3%A8.html?id=hPInAQAAMAAJ",
  },
  {
    type: "经学底本",
    title: "《周易注疏 / 周易正义》",
    text: "用于校准文字和传统经学脉络。先备着，不必一开始硬读。",
    url: "https://books.google.com.au/books/about/%E5%91%A8%E6%98%93%E5%8D%81%E4%B9%A6.html?id=D_pnzwEACAAJ&redir_esc=y",
  },
  {
    type: "修身主线",
    title: "程颐《周易程氏传》",
    text: "把《易》读成识时、守位、修身、处世之学，适合知行合一目标。",
    url: "https://www.cp.com.cn/book/3722612b-e.html",
  },
  {
    type: "结构平衡",
    title: "朱熹《周易本义》",
    text: "保留古易、易图、筮法、象数与义理的结构，不让读法单薄。",
    url: "https://www.shuge.org/view/zhou_yi_ben_yi/",
  },
  {
    type: "深化",
    title: "项安世《周易玩辞》",
    text: "从辞反测象，补程传之外的象数与辞义关系，适合第二轮以后读。",
    url: "https://zh.wikisource.org/zh-hans/%E5%91%A8%E6%98%93%E7%8E%A9%E8%BE%AD_%28%E5%9B%9B%E5%BA%AB%E5%85%A8%E6%9B%B8%E6%9C%AC%29",
  },
];

const STORAGE = {
  entries: "zhouyi.entries.v1",
  studied: "zhouyi.studied.v1",
  completed: "zhouyi.completedDates.v1",
  checks: "zhouyi.dailyChecks.v1",
  path: "zhouyi.path.v1",
};

let activeIndex = dayOfYear(new Date()) % HEXAGRAMS.length;
let coreOnly = false;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function load(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function todayKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  return Math.floor((date - start) / 86400000);
}

function formatDateLabel() {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  }).format(new Date());
}

function linesFor(hex) {
  return [...hex.lower.lines, ...hex.upper.lines];
}

function renderLines(target, hex) {
  target.innerHTML = "";
  linesFor(hex)
    .slice()
    .reverse()
    .forEach((line) => {
      const row = document.createElement("div");
      row.className = `line-row${line ? "" : " is-broken"}`;
      row.innerHTML = line ? "<i></i>" : "<i></i><i></i>";
      target.appendChild(row);
    });
}

function getEntryForToday() {
  return load(STORAGE.entries, []).find((entry) => entry.date === todayKey() && entry.hexId === HEXAGRAMS[activeIndex].id);
}

function renderToday() {
  const hex = HEXAGRAMS[activeIndex];
  $("#todayLabel").textContent = formatDateLabel();
  $("#dailySymbol").textContent = hex.symbol;
  $("#dailyNumber").textContent = `第${hex.id}卦`;
  $("#dailyName").textContent = hex.name;
  $("#dailyTheme").textContent = hex.theme;
  $("#dailyMeaning").textContent = hex.meaning;
  $("#dailyPractice").textContent = hex.practice;
  renderLines($("#dailyLines"), hex);
  renderChecks();
  hydrateForm();
  renderMetrics();
}

function hydrateForm() {
  const form = $("#dailyForm");
  const entry = getEntryForToday();
  form.situation.value = entry?.situation ?? "";
  form.act.value = entry?.act ?? "";
  form.stop.value = entry?.stop ?? "";
  form.review.value = entry?.review ?? "";
  $("#saveState").textContent = entry ? "已保存" : "未保存";
}

function renderChecks() {
  const today = todayKey();
  const state = load(STORAGE.checks, {});
  const todayChecks = state[today] ?? {};
  const items = [
    ["read", "读原文与译注"],
    ["compare", "对照程朱"],
    ["write", "写知行四问"],
    ["review", "复看昨日行动"],
  ];
  const wrap = $("#dailyChecks");
  wrap.innerHTML = "";
  items.forEach(([id, label]) => {
    const node = document.createElement("label");
    node.className = "check-item";
    node.innerHTML = `<input type="checkbox" data-check="${id}" ${todayChecks[id] ? "checked" : ""} /><span>${label}</span>`;
    wrap.appendChild(node);
  });
}

function renderMetrics() {
  const entries = load(STORAGE.entries, []);
  const studied = load(STORAGE.studied, []);
  $("#streakCount").textContent = String(streakCount());
  $("#studiedCount").textContent = String(new Set(studied).size);
  $("#entryCount").textContent = String(entries.length);
}

function streakCount() {
  const completed = new Set(load(STORAGE.completed, []));
  let count = 0;
  const cursor = new Date();
  while (completed.has(todayKey(cursor))) {
    count += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return count;
}

function completeHex(hexId = HEXAGRAMS[activeIndex].id) {
  const studied = new Set(load(STORAGE.studied, []));
  studied.add(hexId);
  save(STORAGE.studied, [...studied].sort((a, b) => a - b));
  const completed = new Set(load(STORAGE.completed, []));
  completed.add(todayKey());
  save(STORAGE.completed, [...completed].sort());
  renderMetrics();
}

function renderPath() {
  const progress = load(STORAGE.path, {});
  const list = $("#pathList");
  list.innerHTML = "";
  PATH.forEach((phase, phaseIndex) => {
    const card = document.createElement("article");
    card.className = "path-card";
    const tasks = phase.tasks
      .map((task, taskIndex) => {
        const id = `${phaseIndex}-${taskIndex}`;
        return `<label class="task-chip"><input type="checkbox" data-path="${id}" ${progress[id] ? "checked" : ""} /><span>${task}</span></label>`;
      })
      .join("");
    card.innerHTML = `
      <div class="phase-number">${phaseIndex + 1}</div>
      <div>
        <span class="path-meta">${phase.meta}</span>
        <h3>${phase.title}</h3>
        <p>${phase.text}</p>
        <div class="path-tasks">${tasks}</div>
      </div>
      <button class="secondary" type="button" data-phase="${phaseIndex}">设为当前</button>
    `;
    list.appendChild(card);
  });
}

function renderLibrary() {
  const query = $("#hexSearch").value.trim();
  const list = $("#hexList");
  list.innerHTML = "";
  const filtered = HEXAGRAMS.filter((hex) => {
    const matchesCore = coreOnly ? hex.core : true;
    const haystack = `${hex.name} ${hex.theme} ${hex.meaning} ${hex.practice} ${hex.lower.name}${hex.upper.name}`;
    return matchesCore && (!query || haystack.includes(query));
  });
  filtered.forEach((hex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `hex-card${hex.id === HEXAGRAMS[activeIndex].id ? " is-active" : ""}`;
    button.dataset.hex = hex.id;
    button.innerHTML = `
      <div class="hex-card-symbol">${hex.symbol}</div>
      <h3>${hex.id}. ${hex.name}</h3>
      <p>${hex.theme}</p>
    `;
    list.appendChild(button);
  });
  if (!filtered.length) {
    list.innerHTML = `<div class="empty">没有匹配的卦。</div>`;
  }
  renderHexDetail(HEXAGRAMS[activeIndex]);
}

function renderHexDetail(hex) {
  const detail = $("#hexDetail");
  detail.innerHTML = `
    <div class="detail-symbol">${hex.symbol}</div>
    <p class="hex-number">第${hex.id}卦</p>
    <h3>${hex.name}</h3>
    <p>${hex.theme}</p>
    <div class="detail-tags">
      <span>上${hex.upper.name} ${hex.upper.image}</span>
      <span>下${hex.lower.name} ${hex.lower.image}</span>
      ${hex.core ? "<span>核心16卦</span>" : ""}
    </div>
    <p><strong>卦义：</strong>${hex.meaning}</p>
    <p><strong>今日功课：</strong>${hex.practice}</p>
    <div class="detail-actions">
      <button class="primary" type="button" data-set-today="${hex.id}">设为今日</button>
      <button class="secondary" type="button" data-mark-read="${hex.id}">标记已读</button>
    </div>
  `;
}

function renderJournal() {
  const entries = load(STORAGE.entries, []).slice().sort((a, b) => b.savedAt.localeCompare(a.savedAt));
  const list = $("#journalList");
  if (!entries.length) {
    list.innerHTML = `<div class="empty">还没有日志。完成一次今日日课后，这里会自动出现。</div>`;
    return;
  }
  list.innerHTML = "";
  entries.forEach((entry) => {
    const hex = HEXAGRAMS.find((item) => item.id === entry.hexId);
    const card = document.createElement("article");
    card.className = "journal-card";
    card.innerHTML = `
      <span class="journal-date">${entry.date}</span>
      <h3>${hex?.symbol ?? ""} ${hex?.name ?? "未记录卦名"}</h3>
      <p>${entry.situation || "未写处境"}</p>
      <dl>
        <div><dt>应行</dt><dd>${entry.act || "未填"}</dd></div>
        <div><dt>应止</dt><dd>${entry.stop || "未填"}</dd></div>
        <div><dt>复盘标准</dt><dd>${entry.review || "未填"}</dd></div>
        <div><dt>保存</dt><dd>${new Date(entry.savedAt).toLocaleString("zh-CN")}</dd></div>
      </dl>
    `;
    list.appendChild(card);
  });
}

function renderBooks() {
  const grid = $("#bookGrid");
  grid.innerHTML = "";
  BOOKS.forEach((book) => {
    const card = document.createElement("article");
    card.className = "book-card";
    card.innerHTML = `
      <span class="book-type">${book.type}</span>
      <h3>${book.title}</h3>
      <p>${book.text}</p>
      <a href="${book.url}" target="_blank" rel="noreferrer">打开资料</a>
    `;
    grid.appendChild(card);
  });
}

function saveDailyEntry(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const hex = HEXAGRAMS[activeIndex];
  const entries = load(STORAGE.entries, []);
  const key = todayKey();
  const existing = entries.findIndex((entry) => entry.date === key && entry.hexId === hex.id);
  const entry = {
    date: key,
    hexId: hex.id,
    situation: form.situation.value.trim(),
    act: form.act.value.trim(),
    stop: form.stop.value.trim(),
    review: form.review.value.trim(),
    savedAt: new Date().toISOString(),
  };
  if (existing >= 0) {
    entries[existing] = { ...entries[existing], ...entry };
  } else {
    entries.push(entry);
  }
  save(STORAGE.entries, entries);
  $("#saveState").textContent = "已保存";
  completeHex(hex.id);
  renderJournal();
}

function bindEvents() {
  $$(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      $$(".tab").forEach((item) => item.classList.remove("is-active"));
      $$(".view").forEach((item) => item.classList.remove("is-active"));
      tab.classList.add("is-active");
      $(`#view-${tab.dataset.view}`).classList.add("is-active");
      if (tab.dataset.view === "library") renderLibrary();
      if (tab.dataset.view === "journal") renderJournal();
    });
  });

  $("#prevHex").addEventListener("click", () => {
    activeIndex = (activeIndex + HEXAGRAMS.length - 1) % HEXAGRAMS.length;
    renderToday();
    renderLibrary();
  });

  $("#nextHex").addEventListener("click", () => {
    activeIndex = (activeIndex + 1) % HEXAGRAMS.length;
    renderToday();
    renderLibrary();
  });

  $("#dailyForm").addEventListener("submit", saveDailyEntry);

  $("#completeToday").addEventListener("click", () => {
    completeHex();
    $("#saveState").textContent = "已完成";
  });

  $("#dailyChecks").addEventListener("change", (event) => {
    const input = event.target.closest("[data-check]");
    if (!input) return;
    const state = load(STORAGE.checks, {});
    const key = todayKey();
    state[key] = state[key] ?? {};
    state[key][input.dataset.check] = input.checked;
    save(STORAGE.checks, state);
  });

  $("#pathList").addEventListener("change", (event) => {
    const input = event.target.closest("[data-path]");
    if (!input) return;
    const progress = load(STORAGE.path, {});
    progress[input.dataset.path] = input.checked;
    save(STORAGE.path, progress);
  });

  $("#pathList").addEventListener("click", (event) => {
    const button = event.target.closest("[data-phase]");
    if (!button) return;
    const phaseIndex = Number(button.dataset.phase);
    const hexId = [1, 3, 11, 49][phaseIndex] ?? 1;
    activeIndex = hexId - 1;
    renderToday();
    $("[data-view='today']").click();
  });

  $("#resetPath").addEventListener("click", () => {
    save(STORAGE.path, {});
    renderPath();
  });

  $("#hexSearch").addEventListener("input", renderLibrary);

  $("#showCore").addEventListener("click", () => {
    coreOnly = !coreOnly;
    $("#showCore").textContent = coreOnly ? "显示全部64卦" : "只看核心16卦";
    renderLibrary();
  });

  $("#hexList").addEventListener("click", (event) => {
    const card = event.target.closest("[data-hex]");
    if (!card) return;
    activeIndex = Number(card.dataset.hex) - 1;
    renderLibrary();
  });

  $("#hexDetail").addEventListener("click", (event) => {
    const setButton = event.target.closest("[data-set-today]");
    const markButton = event.target.closest("[data-mark-read]");
    if (setButton) {
      activeIndex = Number(setButton.dataset.setToday) - 1;
      renderToday();
      renderLibrary();
      $("[data-view='today']").click();
    }
    if (markButton) {
      completeHex(Number(markButton.dataset.markRead));
      markButton.textContent = "已标记";
    }
  });

  $("#exportJournal").addEventListener("click", () => {
    const payload = {
      exportedAt: new Date().toISOString(),
      entries: load(STORAGE.entries, []),
      studied: load(STORAGE.studied, []),
      completedDates: load(STORAGE.completed, []),
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `易学日课-${todayKey()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  });

  $("#clearJournal").addEventListener("click", () => {
    if (!confirm("清空后，本地日志和完成记录会删除。")) return;
    save(STORAGE.entries, []);
    save(STORAGE.studied, []);
    save(STORAGE.completed, []);
    renderToday();
    renderJournal();
  });
}

function init() {
  if (new URLSearchParams(window.location.search).get("reset") === "1") {
    Object.values(STORAGE).forEach((key) => localStorage.removeItem(key));
    window.history.replaceState({}, "", window.location.pathname);
  }
  renderToday();
  renderPath();
  renderLibrary();
  renderJournal();
  renderBooks();
  bindEvents();
}

init();
