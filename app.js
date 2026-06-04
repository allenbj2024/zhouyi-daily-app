const TRIGRAMS = {
  qian: {
    key: "qian",
    name: "乾",
    symbol: "☰",
    image: "天",
    lines: [1, 1, 1],
    direction: "西北",
    family: "父",
    virtue: "健",
    body: "首",
    learning: "乾象刚健，重在主动、承担、创造。学乾不是逞强，而是知道何时该站出来。",
    questions: ["我现在该主动承担什么？", "这份力量是否正当？", "我有没有躁进？"],
  },
  dui: {
    key: "dui",
    name: "兑",
    symbol: "☱",
    image: "泽",
    lines: [1, 1, 0],
    direction: "西",
    family: "少女",
    virtue: "悦",
    body: "口",
    learning: "兑象喜悦、表达、交流。学兑要分辨真诚的悦与讨好的悦。",
    questions: ["我说的话是在成事，还是在取悦？", "气氛变好了，原则还在吗？", "哪里需要一次坦诚表达？"],
  },
  li: {
    key: "li",
    name: "离",
    symbol: "☲",
    image: "火",
    lines: [1, 0, 1],
    direction: "南",
    family: "中女",
    virtue: "丽",
    body: "目",
    learning: "离象光明、依附、辨识。学离要让判断有证据，不让情绪假装成看见。",
    questions: ["我看见的是事实还是想象？", "这个判断依附在什么证据上？", "哪里需要照亮而不是放大？"],
  },
  zhen: {
    key: "zhen",
    name: "震",
    symbol: "☳",
    image: "雷",
    lines: [1, 0, 0],
    direction: "东",
    family: "长男",
    virtue: "动",
    body: "足",
    learning: "震象发动、惊醒、开始。学震要把惊动化成清醒行动，而不是慌乱反应。",
    questions: ["这次震动在提醒什么？", "第一步应该多小？", "我是在行动还是在反射？"],
  },
  xun: {
    key: "xun",
    name: "巽",
    symbol: "☴",
    image: "风",
    lines: [0, 1, 1],
    direction: "东南",
    family: "长女",
    virtue: "入",
    body: "股",
    learning: "巽象入、顺、渗透。学巽不是软弱，而是用柔和而持续的方式进入问题。",
    questions: ["我能否换一种更容易进入的方式？", "哪些话可以更柔，但更准确？", "这件事需要持续渗透多久？"],
  },
  kan: {
    key: "kan",
    name: "坎",
    symbol: "☵",
    image: "水",
    lines: [0, 1, 0],
    direction: "北",
    family: "中男",
    virtue: "陷",
    body: "耳",
    learning: "坎象险、陷、反复练习。学坎是在险中守信，在压力里保留清明。",
    questions: ["真正的风险在哪里？", "我能守住哪条底线？", "这次困难要我练习什么？"],
  },
  gen: {
    key: "gen",
    name: "艮",
    symbol: "☶",
    image: "山",
    lines: [0, 0, 1],
    direction: "东北",
    family: "少男",
    virtue: "止",
    body: "手",
    learning: "艮象止、限度、边界。学艮是知道什么时候停，停在哪里。",
    questions: ["我今天该停在哪里？", "这个边界有没有说清？", "停下后能看见什么？"],
  },
  kun: {
    key: "kun",
    name: "坤",
    symbol: "☷",
    image: "地",
    lines: [0, 0, 0],
    direction: "西南",
    family: "母",
    virtue: "顺",
    body: "腹",
    learning: "坤象承载、顺势、成物。学坤不是被动，而是把承诺落成可交付结果。",
    questions: ["我能承载什么？", "现在该顺势配合谁？", "地基是否足够厚？"],
  },
};

const TRIGRAM_ORDER = ["qian", "dui", "li", "zhen", "xun", "kan", "gen", "kun"];
const BAGUA_POSITIONS = {
  qian: "nw",
  kan: "n",
  gen: "ne",
  dui: "w",
  zhen: "e",
  kun: "sw",
  li: "s",
  xun: "se",
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
    lowerKey,
    upperKey,
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
    title: "八卦先熟",
    meta: "第1个月",
    text: "每天看一卦象：乾健、坤顺、震动、巽入、坎险、离明、艮止、兑悦。先能用八象看日常处境。",
    tasks: ["背八象", "会画三爻", "每天举一例", "完成辨卦练习"],
  },
  {
    title: "通读六十四卦",
    meta: "3到6个月",
    text: "每卦一页笔记，记录上下卦、卦辞、六爻进程，以及此卦所讲的处境。",
    tasks: ["每周三卦", "完成卦象表", "复盘十条日志", "标记核心16卦"],
  },
  {
    title: "问事与复盘",
    meta: "持续练习",
    text: "每次起卦只问一件具体事，输出应行、应止、复盘标准。三日或七日后回看，不追求神秘，追求校正判断。",
    tasks: ["写清问题", "生成解读", "保存记录", "七日复盘"],
  },
  {
    title: "玩辞入深",
    meta: "第二轮以后",
    text: "读《周易玩辞》，围绕字词、同文、反义、象辞关系反复玩味，把解卦从套话变成细读。",
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

const TOPIC_GUIDE = {
  事业: {
    lens: "先看角色、资源、节奏和边界。",
    action: "把下一步缩成一个可交付动作，不要只停留在想法。",
    stop: "停止用焦虑催促时机，先补齐事实和责任。",
    review: "七日后看是否完成一次明确沟通、一个交付物或一个决策节点。",
  },
  关系: {
    lens: "先分清事实、情绪、名分和期待。",
    action: "用一句诚实而有分寸的话推进关系。",
    stop: "停止替对方脑补动机，也停止用沉默惩罚。",
    review: "三日后看气氛是否更清楚，边界是否更稳定。",
  },
  选择: {
    lens: "先看哪一个选项更合时位，更能承受后果。",
    action: "把大选择变成一次小试探，用结果校正判断。",
    stop: "停止在两个抽象想象里来回耗损。",
    review: "七日后看小试探带来了什么证据。",
  },
  修身: {
    lens: "先看自己哪一个惯性正在主导判断。",
    action: "把卦义落成一个今日可做的修正。",
    stop: "停止把外部处境全部归咎于别人。",
    review: "三日后看自己的反应是否更稳、更清醒。",
  },
  其他: {
    lens: "先把问题缩小，只问一件具体事。",
    action: "选一个最小行动，让情况从模糊变得可观察。",
    stop: "停止追求一次看透全部。",
    review: "七日后看问题是否变清楚，行动是否产生反馈。",
  },
};

const STORAGE = {
  entries: "zhouyi.entries.v1",
  studied: "zhouyi.studied.v1",
  completed: "zhouyi.completedDates.v1",
  checks: "zhouyi.dailyChecks.v1",
  path: "zhouyi.path.v1",
  consults: "zhouyi.consults.v1",
};

const HEXAGRAM_BY_LINES = new Map();
HEXAGRAMS.forEach((hex) => HEXAGRAM_BY_LINES.set(lineKey(linesFor(hex)), hex));

let activeIndex = dayOfYear(new Date()) % HEXAGRAMS.length;
let coreOnly = false;
let selectedTrigramKey = "qian";
let currentJournal = "daily";
let currentConsultation = null;
let manualCast = [];
let drillAnswerKey = null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));
const field = (form, name) => form.elements.namedItem(name);

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

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

function formatDateLabel(date = new Date()) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  }).format(date);
}

function linesFor(hex) {
  return [...hex.lower.lines, ...hex.upper.lines];
}

function lineKey(lines) {
  return lines.join("");
}

function findHexByLines(lines) {
  return HEXAGRAM_BY_LINES.get(lineKey(lines)) ?? HEXAGRAMS[0];
}

function renderLineRows(lines, moving = []) {
  return lines
    .slice()
    .reverse()
    .map((line, reverseIndex) => {
      const number = lines.length - reverseIndex;
      const isMoving = moving.includes(number);
      const pieces = line ? "<i></i>" : "<i></i><i></i>";
      return `<div class="line-row${line ? "" : " is-broken"}${isMoving ? " is-moving" : ""}" title="第${number}爻">${pieces}</div>`;
    })
    .join("");
}

function renderLines(target, hex, moving = []) {
  target.innerHTML = renderLineRows(linesFor(hex), moving);
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
  $("#dailyTheme").textContent = `${hex.upper.name}${hex.lower.name}之象：${hex.theme}`;
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
    ["bagua", "辨一个八卦象"],
    ["read", "读原文与译注"],
    ["write", "写知行四问"],
    ["review", "复盘一次行动"],
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
  const consults = load(STORAGE.consults, []);
  $("#streakCount").textContent = String(streakCount());
  $("#studiedCount").textContent = String(new Set(studied).size);
  $("#consultMetric").textContent = String(consults.length);
  $("#consultCount").textContent = `${consults.length} 条记录`;
}

function fillExample() {
  const hex = HEXAGRAMS[activeIndex];
  const form = $("#dailyForm");
  form.situation.value = `我今天用${hex.name}观察一个真实处境：${hex.theme}。先写事实，再判断该进、该守，还是该止。`;
  form.act.value = hex.practice;
  form.stop.value = "不凭情绪和惯性马上反应。";
  form.review.value = "三日后看这个行动是否真的改变了一个小结果。";
  $("#saveState").textContent = "示例未保存";
  form.situation.focus();
}

async function copyXhsHandle() {
  const button = $("#copyXhs");
  const handle = $("#xhsHandle").textContent.trim();
  try {
    await navigator.clipboard.writeText(handle);
    button.textContent = "已复制";
  } catch {
    button.textContent = handle;
  }
  setTimeout(() => {
    button.textContent = "复制账号";
  }, 1600);
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
  const list = document.createElement("div");
  list.className = "path-list";
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
  return list;
}

function renderBagua() {
  const board = $("#baguaBoard");
  board.innerHTML = "";
  Object.entries(BAGUA_POSITIONS).forEach(([key, pos]) => {
    const trigram = TRIGRAMS[key];
    const button = document.createElement("button");
    button.type = "button";
    button.className = `trigram-tile pos-${pos}${key === selectedTrigramKey ? " is-active" : ""}`;
    button.dataset.trigram = key;
    button.innerHTML = `
      <span class="trigram-symbol">${trigram.symbol}</span>
      <strong>${trigram.name}</strong>
      <small>${trigram.image} / ${trigram.virtue}</small>
    `;
    board.appendChild(button);
  });
  const center = document.createElement("div");
  center.className = "bagua-center";
  center.innerHTML = `<strong>八卦</strong><span>点一卦看象义</span>`;
  board.appendChild(center);
  renderTrigramDetail();
}

function renderTrigramDetail() {
  const trigram = TRIGRAMS[selectedTrigramKey];
  const related = HEXAGRAMS.filter((hex) => hex.lowerKey === selectedTrigramKey || hex.upperKey === selectedTrigramKey).slice(0, 6);
  $("#trigramDetail").innerHTML = `
    <div class="detail-symbol">${trigram.symbol}</div>
    <p class="hex-number">${trigram.name}为${trigram.image}</p>
    <h3>${trigram.name}卦：${trigram.virtue}</h3>
    <div class="trigram-lines">${renderLineRows(trigram.lines)}</div>
    <div class="detail-tags">
      <span>${trigram.direction}</span>
      <span>${trigram.family}</span>
      <span>${trigram.body}</span>
    </div>
    <p>${trigram.learning}</p>
    <div class="question-list">
      ${trigram.questions.map((item) => `<span>${item}</span>`).join("")}
    </div>
    <h4>相关卦例</h4>
    <div class="related-hexes">
      ${related.map((hex) => `<button type="button" data-set-today="${hex.id}">${hex.symbol} ${hex.name}</button>`).join("")}
    </div>
  `;
}

function startBaguaDrill() {
  const panel = $("#baguaDrill");
  panel.hidden = false;
  drillAnswerKey = TRIGRAM_ORDER[Math.floor(Math.random() * TRIGRAM_ORDER.length)];
  const answer = TRIGRAMS[drillAnswerKey];
  $("#drillLines").innerHTML = renderLineRows(answer.lines);
  $("#drillFeedback").textContent = "看三爻阴阳，选出对应的卦。";
  const options = TRIGRAM_ORDER.slice().sort(() => Math.random() - 0.5);
  $("#drillOptions").innerHTML = options
    .map((key) => `<button class="secondary" type="button" data-drill="${key}">${TRIGRAMS[key].symbol} ${TRIGRAMS[key].name}</button>`)
    .join("");
}

function renderLibrary() {
  const query = $("#hexSearch").value.trim();
  const list = $("#hexList");
  list.innerHTML = "";
  const filtered = HEXAGRAMS.filter((hex) => {
    const matchesCore = coreOnly ? hex.core : true;
    const haystack = `${hex.name} ${hex.theme} ${hex.meaning} ${hex.practice} ${hex.lower.name}${hex.upper.name} ${hex.lower.image}${hex.upper.image}`;
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
      <p>上${hex.upper.name}${hex.upper.image} 下${hex.lower.name}${hex.lower.image}</p>
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
    <div class="trigram-lines hex-detail-lines">${renderLineRows(linesFor(hex))}</div>
    <p>${hex.theme}</p>
    <div class="detail-tags">
      <span>上${hex.upper.name} ${hex.upper.image}</span>
      <span>下${hex.lower.name} ${hex.lower.image}</span>
      ${hex.core ? "<span>核心16卦</span>" : ""}
    </div>
    <p><strong>卦义：</strong>${hex.meaning}</p>
    <p><strong>行动：</strong>${hex.practice}</p>
    <div class="detail-actions">
      <button class="primary" type="button" data-set-today="${hex.id}">设为今日</button>
      <button class="secondary" type="button" data-mark-read="${hex.id}">标记已读</button>
    </div>
  `;
}

function renderJournal() {
  if (currentJournal === "consult") {
    renderConsultJournal();
    return;
  }
  const entries = load(STORAGE.entries, []).slice().sort((a, b) => b.savedAt.localeCompare(a.savedAt));
  const list = $("#journalList");
  if (!entries.length) {
    list.innerHTML = `<div class="empty">还没有日课日志。完成一次今日日课后，这里会自动出现。</div>`;
    return;
  }
  list.innerHTML = "";
  entries.forEach((entry) => {
    const hex = HEXAGRAMS.find((item) => item.id === entry.hexId);
    const card = document.createElement("article");
    card.className = "journal-card";
    card.innerHTML = `
      <span class="journal-date">${escapeHtml(entry.date)}</span>
      <h3>${hex?.symbol ?? ""} ${hex?.name ?? "未记录卦名"}</h3>
      <p>${escapeHtml(entry.situation || "未写处境")}</p>
      <dl>
        <div><dt>应行</dt><dd>${escapeHtml(entry.act || "未填")}</dd></div>
        <div><dt>应止</dt><dd>${escapeHtml(entry.stop || "未填")}</dd></div>
        <div><dt>复盘标准</dt><dd>${escapeHtml(entry.review || "未填")}</dd></div>
        <div><dt>保存</dt><dd>${new Date(entry.savedAt).toLocaleString("zh-CN")}</dd></div>
      </dl>
    `;
    list.appendChild(card);
  });
}

function renderConsultJournal() {
  const consults = load(STORAGE.consults, []).slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  const list = $("#journalList");
  if (!consults.length) {
    list.innerHTML = `<div class="empty">还没有解卦记录。到“起卦”生成并保存一次解读后，这里会出现。</div>`;
    return;
  }
  list.innerHTML = "";
  consults.forEach((item) => {
    const hex = HEXAGRAMS.find((hexagram) => hexagram.id === item.hexId);
    const changed = HEXAGRAMS.find((hexagram) => hexagram.id === item.changedHexId);
    const card = document.createElement("article");
    card.className = "journal-card";
    card.innerHTML = `
      <span class="journal-date">${new Date(item.createdAt).toLocaleString("zh-CN")} · ${escapeHtml(item.topic)}</span>
      <h3>${hex?.symbol ?? ""} ${hex?.name ?? "本卦"} → ${changed?.symbol ?? ""} ${changed?.name ?? "变卦"}</h3>
      <p>${escapeHtml(item.question || "未写问题")}</p>
      <dl>
        <div><dt>记录名</dt><dd>${escapeHtml(item.person || "未填写")}</dd></div>
        <div><dt>动爻</dt><dd>${escapeHtml(movingText(item.moving))}</dd></div>
        <div><dt>应行</dt><dd>${escapeHtml(item.reading?.action || "")}</dd></div>
        <div><dt>复盘</dt><dd>${escapeHtml(item.reading?.review || "")}</dd></div>
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

function hashString(text) {
  let hash = 2166136261;
  for (let index = 0; index < text.length; index += 1) {
    hash ^= text.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function randomInt(max) {
  const array = new Uint32Array(1);
  if (window.crypto?.getRandomValues) {
    window.crypto.getRandomValues(array);
    return array[0] % max;
  }
  return Math.floor(Math.random() * max);
}

function castByTime({ question, topic, person }) {
  const now = new Date();
  const seed = hashString(`${question}|${topic}|${person}|${now.toISOString().slice(0, 16)}`);
  const lines = Array.from({ length: 6 }, (_, index) => ((seed >>> ((index * 5) % 24)) + index + seed) % 2);
  const moving = [((seed >>> 3) % 6) + 1];
  const changedLines = lines.map((line, index) => (moving.includes(index + 1) ? Number(!line) : line));
  return { lines, moving, changedLines, methodLabel: "时间起卦" };
}

function yaoValueToLine(value) {
  return value === 7 || value === 9 ? 1 : 0;
}

function castByRandom() {
  const values = manualCast.length === 6 ? manualCast.slice() : Array.from({ length: 6 }, () => [6, 7, 8, 9][randomInt(4)]);
  const lines = values.map(yaoValueToLine);
  const moving = values.map((value, index) => (value === 6 || value === 9 ? index + 1 : null)).filter(Boolean);
  const normalizedMoving = moving.length ? moving : [randomInt(6) + 1];
  const changedLines = lines.map((line, index) => (normalizedMoving.includes(index + 1) ? Number(!line) : line));
  return { lines, moving: normalizedMoving, changedLines, methodLabel: "随机起卦", values };
}

function buildConsultation(form) {
  const person = form.person?.value.trim() ?? "";
  const question = form.question.value.trim() || "未写明的问题";
  const topic = form.topic.value;
  const method = field(form, "method").value;
  const cast = method === "time" ? castByTime({ question, topic, person }) : castByRandom();
  const hex = findHexByLines(cast.lines);
  const changed = findHexByLines(cast.changedLines);
  const guide = TOPIC_GUIDE[topic] ?? TOPIC_GUIDE.其他;
  return {
    id: `${Date.now().toString(36)}-${randomInt(9999)}`,
    createdAt: new Date().toISOString(),
    person,
    question,
    topic,
    method,
    methodLabel: cast.methodLabel,
    lines: cast.lines,
    moving: cast.moving,
    changedLines: cast.changedLines,
    hexId: hex.id,
    changedHexId: changed.id,
    reading: {
      situation: `本卦为${hex.name}，上${hex.upper.name}${hex.upper.image}、下${hex.lower.name}${hex.lower.image}。这件事先看“${hex.theme}”：${hex.meaning}`,
      change: changed.id === hex.id ? "变卦与本卦相同，说明重点在把本卦做扎实。" : `变为${changed.name}，后势转向“${changed.theme}”。`,
      lens: guide.lens,
      action: `${hex.practice}${guide.action}`,
      stop: guide.stop,
      review: guide.review,
      reminder: `这卦不替你下决定，它提醒你先看时位：${hex.theme}。现在更适合做一个能验证的小动作，再根据反馈调整。`,
    },
  };
}

function movingText(moving = []) {
  return moving.length ? moving.map((item) => `第${item}爻`).join("、") : "无动爻";
}

function renderReading(consultation, target) {
  const hex = HEXAGRAMS.find((item) => item.id === consultation.hexId);
  const changed = HEXAGRAMS.find((item) => item.id === consultation.changedHexId);
  const reminder = consultation.reading.reminder ?? consultation.reading.friend ?? "";
  target.innerHTML = `
    <article class="reading-card">
      <div class="reading-head">
        <div>
          <p class="eyebrow">${escapeHtml(consultation.methodLabel)} · ${escapeHtml(consultation.topic)}</p>
          <h3>${hex.symbol} ${hex.name} <span>→</span> ${changed.symbol} ${changed.name}</h3>
          <p>${escapeHtml(consultation.question)}</p>
        </div>
        <button class="secondary" type="button" data-copy-reading>复制解读</button>
      </div>
      <div class="reading-hexes">
        <div>
          <span>本卦</span>
          <strong>${hex.symbol} ${hex.name}</strong>
          <div class="trigram-lines">${renderLineRows(consultation.lines, consultation.moving)}</div>
        </div>
        <div>
          <span>变卦</span>
          <strong>${changed.symbol} ${changed.name}</strong>
          <div class="trigram-lines">${renderLineRows(consultation.changedLines)}</div>
        </div>
      </div>
      <dl class="reading-list">
        <div><dt>动爻</dt><dd>${movingText(consultation.moving)}</dd></div>
        <div><dt>处境</dt><dd>${escapeHtml(consultation.reading.situation)}</dd></div>
        <div><dt>变势</dt><dd>${escapeHtml(consultation.reading.change)}</dd></div>
        <div><dt>看法</dt><dd>${escapeHtml(consultation.reading.lens)}</dd></div>
        <div><dt>应行</dt><dd>${escapeHtml(consultation.reading.action)}</dd></div>
        <div><dt>应止</dt><dd>${escapeHtml(consultation.reading.stop)}</dd></div>
        <div><dt>复盘</dt><dd>${escapeHtml(consultation.reading.review)}</dd></div>
        <div><dt>给自己的提醒</dt><dd>${escapeHtml(reminder)}</dd></div>
      </dl>
      <p class="notice">这份解读只作为传统文化学习和反省练习。涉及疾病、诉讼、投资、婚姻等重大事项，请寻求专业意见。</p>
    </article>
  `;
}

function renderQuickResult(consultation) {
  const hex = HEXAGRAMS.find((item) => item.id === consultation.hexId);
  const changed = HEXAGRAMS.find((item) => item.id === consultation.changedHexId);
  const target = $("#quickResult");
  const reminder = consultation.reading.reminder ?? consultation.reading.friend ?? "";
  target.hidden = false;
  target.innerHTML = `
    <div>
      <span>本卦</span>
      <strong>${hex.symbol} ${hex.name}</strong>
    </div>
    <div>
      <span>变卦</span>
      <strong>${changed.symbol} ${changed.name}</strong>
    </div>
    <p>${escapeHtml(reminder)}</p>
    <button class="secondary" type="button" data-open-reading>看完整解读</button>
  `;
}

function formatReading(consultation) {
  const hex = HEXAGRAMS.find((item) => item.id === consultation.hexId);
  const changed = HEXAGRAMS.find((item) => item.id === consultation.changedHexId);
  return [
    `问题：${consultation.question}`,
    `类型：${consultation.topic}`,
    `本卦：${hex.symbol} ${hex.name}`,
    `变卦：${changed.symbol} ${changed.name}`,
    `动爻：${movingText(consultation.moving)}`,
    "",
    `处境：${consultation.reading.situation}`,
    `变势：${consultation.reading.change}`,
    `应行：${consultation.reading.action}`,
    `应止：${consultation.reading.stop}`,
    `复盘：${consultation.reading.review}`,
    "",
    "提醒：这只是传统文化学习和自我反省，不替代医疗、法律、投资等专业意见。",
  ].join("\n");
}

async function copyCurrentReading(button) {
  if (!currentConsultation) return;
  try {
    await navigator.clipboard.writeText(formatReading(currentConsultation));
    button.textContent = "已复制";
  } catch {
    button.textContent = "复制失败";
  }
  setTimeout(() => {
    button.textContent = "复制解读";
  }, 1600);
}

function saveCurrentConsultation() {
  if (!currentConsultation) {
    $("#readingPanel").innerHTML = `<div class="empty">请先生成一次解读，再保存。</div>`;
    return;
  }
  const consults = load(STORAGE.consults, []);
  const exists = consults.some((item) => item.id === currentConsultation.id);
  if (!exists) {
    consults.push(currentConsultation);
    save(STORAGE.consults, consults);
  }
  renderMetrics();
  renderJournal();
  $("#saveConsult").textContent = "已保存";
  setTimeout(() => {
    $("#saveConsult").textContent = "保存解卦";
  }, 1600);
}

function renderManualCast() {
  const wrap = $("#manualLines");
  wrap.innerHTML = "";
  for (let index = 5; index >= 0; index -= 1) {
    const value = manualCast[index];
    const row = document.createElement("div");
    row.className = "manual-line";
    if (value) {
      const line = yaoValueToLine(value);
      row.innerHTML = `<span>第${index + 1}爻</span><div class="line-row${line ? "" : " is-broken"}${value === 6 || value === 9 ? " is-moving" : ""}">${line ? "<i></i>" : "<i></i><i></i>"}</div><b>${value}</b>`;
    } else {
      row.innerHTML = `<span>第${index + 1}爻</span><div class="line-row is-empty"><i></i></div><b>-</b>`;
    }
    wrap.appendChild(row);
  }
}

function updateManualVisibility(form = $("#consultForm")) {
  $("#manualCast").hidden = field(form, "method").value !== "random";
}

function handleConsultSubmit(event) {
  event.preventDefault();
  currentConsultation = buildConsultation(event.currentTarget);
  renderReading(currentConsultation, $("#readingPanel"));
  renderQuickResult(currentConsultation);
  $("#saveConsult").textContent = "保存解卦";
}

function handleQuickConsult(event) {
  event.preventDefault();
  currentConsultation = buildConsultation(event.currentTarget);
  renderQuickResult(currentConsultation);
  renderReading(currentConsultation, $("#readingPanel"));
}

function exportJournal() {
  const payload = {
    exportedAt: new Date().toISOString(),
    entries: load(STORAGE.entries, []),
    consults: load(STORAGE.consults, []),
    studied: load(STORAGE.studied, []),
    completedDates: load(STORAGE.completed, []),
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `易学八卦自占-${todayKey()}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function clearJournal() {
  if (!confirm("清空后，本地日课、解卦记录和完成记录都会删除。")) return;
  save(STORAGE.entries, []);
  save(STORAGE.consults, []);
  save(STORAGE.studied, []);
  save(STORAGE.completed, []);
  renderToday();
  renderJournal();
}

function bindEvents() {
  $$(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      $$(".tab").forEach((item) => item.classList.remove("is-active"));
      $$(".view").forEach((item) => item.classList.remove("is-active"));
      tab.classList.add("is-active");
      $(`#view-${tab.dataset.view}`).classList.add("is-active");
      if (tab.dataset.view === "bagua") renderBagua();
      if (tab.dataset.view === "library") renderLibrary();
      if (tab.dataset.view === "journal") renderJournal();
      if (tab.dataset.view === "divine") updateManualVisibility();
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
  $("#fillExample").addEventListener("click", fillExample);
  $("#copyXhs").addEventListener("click", copyXhsHandle);

  $("#quickConsultForm").addEventListener("submit", handleQuickConsult);
  $("#consultForm").addEventListener("submit", handleConsultSubmit);
  field($("#consultForm"), "method").addEventListener("change", (event) => updateManualVisibility(event.currentTarget.form));
  $("#saveConsult").addEventListener("click", saveCurrentConsultation);

  $("#castLine").addEventListener("click", () => {
    if (manualCast.length >= 6) return;
    manualCast.push([6, 7, 8, 9][randomInt(4)]);
    renderManualCast();
  });

  $("#resetCast").addEventListener("click", () => {
    manualCast = [];
    renderManualCast();
  });

  $("#readingPanel").addEventListener("click", (event) => {
    const copyButton = event.target.closest("[data-copy-reading]");
    if (copyButton) copyCurrentReading(copyButton);
  });

  $("#quickResult").addEventListener("click", (event) => {
    if (event.target.closest("[data-open-reading]")) {
      $("[data-view='divine']").click();
    }
  });

  $("#baguaBoard").addEventListener("click", (event) => {
    const tile = event.target.closest("[data-trigram]");
    if (!tile) return;
    selectedTrigramKey = tile.dataset.trigram;
    renderBagua();
  });

  $("#trigramDetail").addEventListener("click", (event) => {
    const button = event.target.closest("[data-set-today]");
    if (!button) return;
    activeIndex = Number(button.dataset.setToday) - 1;
    renderToday();
    renderLibrary();
    $("[data-view='today']").click();
  });

  $("#startBaguaDrill").addEventListener("click", startBaguaDrill);
  $("#drillOptions").addEventListener("click", (event) => {
    const button = event.target.closest("[data-drill]");
    if (!button) return;
    if (button.dataset.drill === drillAnswerKey) {
      const trigram = TRIGRAMS[drillAnswerKey];
      $("#drillFeedback").textContent = `答对了：${trigram.name}为${trigram.image}，象${trigram.virtue}。`;
      setTimeout(startBaguaDrill, 900);
    } else {
      $("#drillFeedback").textContent = "再看三条爻：阳爻是一整条，阴爻中间断开。";
    }
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

  document.addEventListener("change", (event) => {
    const input = event.target.closest("[data-path]");
    if (!input) return;
    const progress = load(STORAGE.path, {});
    progress[input.dataset.path] = input.checked;
    save(STORAGE.path, progress);
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-phase]");
    if (!button) return;
    const phaseIndex = Number(button.dataset.phase);
    const hexId = [1, 3, 29, 49][phaseIndex] ?? 1;
    activeIndex = hexId - 1;
    renderToday();
    $("[data-view='today']").click();
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

  $$(".journal-tab").forEach((button) => {
    button.addEventListener("click", () => {
      $$(".journal-tab").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      currentJournal = button.dataset.journal;
      renderJournal();
    });
  });

  $("#exportJournal").addEventListener("click", exportJournal);
  $("#clearJournal").addEventListener("click", clearJournal);
}

function init() {
  if (new URLSearchParams(window.location.search).get("reset") === "1") {
    Object.values(STORAGE).forEach((key) => localStorage.removeItem(key));
    window.history.replaceState({}, "", window.location.pathname);
  }
  renderToday();
  renderBagua();
  renderLibrary();
  renderJournal();
  renderBooks();
  renderManualCast();
  updateManualVisibility();
  bindEvents();
}

init();
