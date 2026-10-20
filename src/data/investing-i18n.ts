/**
 * src/data/investing-i18n.ts
 *
 * Localized copy for the Investing page. The structural data (asset-class
 * ids, nums, public investment links) lives in src/data/investing.ts; this
 * module carries per-locale UI strings, translated questions, and translated
 * asset-class copy. Imported by the shared page component
 * (src/components/pages/InvestingPage.astro) and the localized LLM-text
 * endpoints so the rendered page and the text version never drift.
 */

import type { LocaleKey } from "@/i18n/config";

export type AssetClassStrings = {
  name: string;
  category: string;
  philosophy: string;
  detail: string;
  publicLabel?: string;
};

export type InvestingStrings = {
  pageTitle: string;
  description: string;
  eyebrow: string;
  headline: string;
  subhead: string;
  scrollHint: string;
  qaTitle: string;
  qaSub: string;
  qaTooltipName: string;
  qaTooltipCat: string;
  qaFootKey: string;
  qaFootVal: string;
  questions: string[];
  boardTitle: string;
  boardSub: string;
  boardRowTitle: string;
  boardRowNote: string;
  boardNote: string;
  boardProud: string;
  dfdfTitle: string;
  dfdfSub: string;
  boardStamp: string;
  advTitle: string;
  advRole: string;
  advCompany: string;
  advSite: string;
  advStatus: string;
  advRoleValue: string;
  advActiveValue: string;
  /** Overrides keyed by asset-class id; missing ids fall back to EN data */
  assets: Record<string, AssetClassStrings>;
};

const en: InvestingStrings = {
  pageTitle: "Investing — David Awad",
  description:
    "David Awad on capital, conviction, and the eight ways he allocates it.",
  eyebrow: "DAVID AWAD / INVESTING / 2026",
  headline: "READ THE TAPE.",
  subhead:
    "David Awad on capital, conviction, and the eight ways he allocates it.",
  scrollHint: "SCROLL TO ADVANCE THE TAPE",
  qaTitle: "THE QUESTIONS.",
  qaSub: "Asked in every meeting. Their order is intentional.",
  qaTooltipName: "The Questions",
  qaTooltipCat: "High volume — every meeting",
  qaFootKey: "STOCK ADVICE",
  qaFootVal: "“Don't be cool. Just be clear.”",
  questions: [
    "What do you do? (in one sentence)",
    "How big is the market?",
    "What's your progress?",
    "What's your unique insight?",
    "What's your business model?",
    "Who's on your team?",
    "Would I work for you?",
    "How will your company 10x?",
    "What is the most likely reason you will fail?",
    "What do you want? (size of round, ask)",
  ],
  boardTitle: "— THE CLOSING BELL —",
  boardSub: "Some of the deals I'm proud to have been part of: founders and products I'd back again.",
  boardRowTitle: "Private investments",
  boardRowNote: "since Sept 2024",
  boardNote: "Estimated total value ÷ capital invested, as of Oct 2026.",
  boardProud: "Proud to have been part of",
  dfdfTitle: "Dubai Future District Fund",
  dfdfSub: "My favorite calls from DFDF.",
  boardStamp: "estimates, not a guarantee of future returns",
  advTitle: "— ADVISING —",
  advRole: "role",
  advCompany: "company",
  advSite: "site",
  advStatus: "status",
  advRoleValue: "advisor",
  advActiveValue: "active",
  assets: {},
};

const ar: InvestingStrings = {
  pageTitle: "استثمار — ديفيد عوض",
  description:
    "ديفيد عوض عن رأس المال والقناعة والطرق الثماني التي يوزّعه بها.",
  eyebrow: "ديفيد عوض / الاستثمار / 2026",
  headline: "اقرأ الشريط.",
  subhead: "ديفيد عوض عن رأس المال والقناعة والطرق الثماني التي يوزّعه بها.",
  scrollHint: "مرّر للأسفل لتحريك الشريط",
  qaTitle: "الأسئلة.",
  qaSub: "تُطرح في كل اجتماع. ترتيبها مقصود.",
  qaTooltipName: "الأسئلة",
  qaTooltipCat: "حجم تداول مرتفع — في كل اجتماع",
  qaFootKey: "نصيحة استثمارية",
  qaFootVal: "«لا تحاول أن تكون رائعًا. كن واضحًا.»",
  questions: [
    "ماذا تفعل؟ (في جملة واحدة)",
    "ما حجم السوق؟",
    "ما مدى تقدّمك؟",
    "ما رؤيتك الفريدة؟",
    "ما نموذج عملك؟",
    "من في فريقك؟",
    "هل كنت سأعمل لديك؟",
    "كيف ستنمو شركتك عشرة أضعاف؟",
    "ما السبب الأرجح لفشلك؟",
    "ماذا تريد؟ (حجم الجولة، الطلب)",
  ],
  boardTitle: "— جرس الإغلاق —",
  boardSub: "بعض الصفقات التي أفخر بأنني كنت جزءًا منها: مؤسسون ومنتجات سأدعمها مرة أخرى.",
  boardRowTitle: "الاستثمارات الخاصة",
  boardRowNote: "منذ سبتمبر 2024",
  boardNote: "إجمالي القيمة التقديرية ÷ رأس المال المستثمر، حتى أكتوبر 2026.",
  boardProud: "فخور بأنني كنت جزءًا منها",
  dfdfTitle: "Dubai Future District Fund (DFDF)",
  dfdfSub: "أفضل اختياراتي من DFDF.",
  boardStamp: "تقديرات وليست ضمانًا للعوائد المستقبلية",
  advTitle: "— مستشار لدى —",
  advRole: "الدور",
  advCompany: "الشركة",
  advSite: "الموقع",
  advStatus: "الحالة",
  advRoleValue: "مستشار",
  advActiveValue: "نشط",
  assets: {
    vc: {
      name: "رأس المال الجريء",
      category: "VC — غير سائل",
      philosophy:
        "فئة الأصول التي كتبت عنها علنًا أكثر من غيرها. مؤسسو التقنية العميقة يجدون بريدي بفضل خلفية في البرمجيات والقيادة الذاتية وأنظمة التشغيل.",
      detail:
        "السوق قبل المنتج قبل الفريق. أبحث عن مشكلات ملحّة ومؤسسين يجمعون الشجاعة والذكاء — بهذا الترتيب. أستثمر عبر شيكات ملائكية وعبر صناديق، وأحتفظ بأكبر قائمة لموارد البرمجة بالعربية على الإنترنت.",
      publicLabel: "معلن عنها",
    },
    re: {
      name: "العقارات",
      category: "عقارات — جاهزة، برافعة مالية",
      philosophy:
        "بناء ثروة طويلة الأجل عبر أصول ملموسة برافعة مالية في أسواق النمو — تكساس. التضخم مرتفع، لذا الدين بفائدة ثابتة على أصول ملموسة تنمو قيمتها هو الموقف الصحيح.",
      detail:
        "جاهزة فقط. لا ترميم، لا BRRRR، لا قيمة مضافة. الهدف تدفق نقدي ممل ويمكن التنبؤ به بأقل تعقيد تشغيلي. الإيجار قصير الأجل استراتيجية فرعية فقط حيث تكون اللوائح واضحة تمامًا.",
    },
    equities: {
      name: "الأسهم",
      category: "عامة — انحياز سلبي",
      philosophy:
        "أحتفظ بالأسهم وأبقى متشككًا في قدرة الأفراد على انتقاء الأسهم بميزة حقيقية. الجزء الأكبر استثمار سلبي؛ والبحث النشط محفوظ لحالات لا يستطيع المؤشر تسعيرها.",
      detail:
        "حين أدرس سهمًا أدرسه كمحلل ائتمان — تدفقات مخصومة واقتصاديات الوحدة وتغطية خدمة الدين. أقرأ الرسائل الفصلية لمشغّلين أحترمهم؛ ولا أقرأها كلها.",
    },
    options: {
      name: "الخيارات",
      category: "عامة — بائع تقلب",
      philosophy:
        "بيع تقلب منهجي. أبيع العلاوة حول المحفزات — الأرباح واجتماعات الفيدرالي — حين يكون التقلب الضمني مرتفعًا نسبةً إلى التوزيع المحقق.",
      detail:
        "Iron condors وshort strangles هما الأداتان الأساسيتان. أتعامل مع الخيارات كتخصص منفصل عن انتقاء الأسهم: رياضيات مختلفة ومخاطر مختلفة ونفسية مختلفة. حجم المحفظة مضبوط بحيث لا تُنهي نتيجة سيئة واحدة البرنامج كله.",
    },
    saas: {
      name: "مايكرو SaaS",
      category: "PE — أقل من مليون دولار ARR",
      philosophy:
        "شركات برمجيات مدرّة للنقد وغير برّاقة تُشترى بـ 2-4 أضعاف الإيراد السنوي من مشغّلين منهكين لا متعثرين. أسواق متخصصة بتكاليف تحويل عالية وتكلفة اكتساب منخفضة بفضل الكلمة المنقولة.",
      detail:
        "الميزة هي الصبر والاستعداد لشراء شركات أصغر من أن تهتم بها صناديق PE المؤسسية. تشغيل رشيق. نمو مركّب 30-50% نقدًا على نقد بدفع أسعار عادلة وغير مثيرة.",
      publicLabel: "أداة التشغيل",
    },
    pe: {
      name: "الملكية الخاصة",
      category: "PE — نمو برافعة",
      philosophy:
        "رياضيات PE: تغطية خدمة الدين والتدفق النقدي تحت سيناريوهات الرافعة. المهمة هي اختبار هيكل رأس المال تحت الضغط والانسحاب حين لا يصمد أمام سوق غير ودّي.",
      detail:
        "عبر Luminance Capital Partners أجري العناية التقنية الواجبة لشركات مدعومة من PE — تدقيق الكود وعمل CTO جزئي وجاهزية التخارج — لرعاة في نيويورك ودبي.",
      publicLabel: "مكتب العناية الواجبة",
    },
    bonds: {
      name: "السندات",
      category: "دخل ثابت — ذخيرة جاهزة",
      philosophy:
        "سندات الخزانة تعمل كاحتياطي شبه نقدي — ذخيرة جاهزة للنشر الانتهازي في الصناديق السبعة الأخرى حين يُعاد تسعير شيء بين ليلة وضحاها.",
      detail:
        "لا مطاردة للعائد في الائتمان. وظيفة هذه السلة أن تكون متاحة، لا أن تكون مثيرة. محفظة سندات صارت مثيرة هي محفظة فشلت.",
    },
    prediction: {
      name: "أسواق التنبؤ",
      category: "بحث — Kalshi / Polymarket",
      philosophy:
        "اهتمام بحثي نشط. السؤال هو ما إذا كانت الاحتمالات الضمنية للأحداث تنحرف عن التسعير في أسواق الخيارات المجاورة — وما إذا كان الانحراف يصمد بعد تكاليف التداول.",
      detail:
        "تُعامل كمجال بحث لا كتوزيع أساسي لرأس المال. معظم العمل في الجدول لا في المركز. المركز هو ما يتبقى بعد أن يلتهم الجدول كل ما لم يصمد حسابيًا.",
    },
  },
};

const zh: InvestingStrings = {
  pageTitle: "投资 — David Awad",
  description: "David Awad 谈资本、信念，以及他配置资本的八种方式。",
  eyebrow: "DAVID AWAD / 投资 / 2026",
  headline: "读盘。",
  subhead: "David Awad 谈资本、信念，以及他配置资本的八种方式。",
  scrollHint: "向下滚动推进行情",
  qaTitle: "那些问题。",
  qaSub: "每次会议都会问。顺序是有意安排的。",
  qaTooltipName: "那些问题",
  qaTooltipCat: "高成交量 — 每次会议",
  qaFootKey: "炒股建议",
  qaFootVal: "“别耍帅。把话说清楚。”",
  questions: [
    "你们是做什么的？（一句话）",
    "市场有多大？",
    "目前进展如何？",
    "你们的独特洞察是什么？",
    "商业模式是什么？",
    "团队都有谁？",
    "我愿意为你工作吗？",
    "公司如何做到十倍增长？",
    "你们最可能因为什么而失败？",
    "你们想要什么？（轮次规模、诉求）",
  ],
  boardTitle: "— 收盘钟 —",
  boardSub: "我很自豪参与过的一些交易：我愿意再次支持的创始人和产品。",
  boardRowTitle: "私募投资",
  boardRowNote: "自 2024 年 9 月起",
  boardNote: "估算总价值 ÷ 投入资本，截至 2026 年 10 月。",
  boardProud: "我自豪参与的项目",
  dfdfTitle: "Dubai Future District Fund (DFDF)",
  dfdfSub: "我在 DFDF 最喜欢的几笔投资。",
  boardStamp: "为估算值，不代表未来回报",
  advTitle: "— 顾问 —",
  advRole: "角色",
  advCompany: "公司",
  advSite: "网站",
  advStatus: "状态",
  advRoleValue: "顾问",
  advActiveValue: "活跃",
  assets: {
    vc: {
      name: "风险投资",
      category: "VC — 非流动",
      philosophy:
        "我公开写得最多的资产类别。深科技创始人因为我在软件、自动驾驶和操作系统方面的背景找到我的邮箱。",
      detail:
        "市场优先于产品，产品优先于团队。我找的是火烧眉毛的问题，以及兼具勇气与才华的创始人 — 顺序如此。我通过天使支票和基金出资，并维护着网上最大的阿拉伯语编程资源清单。",
      publicLabel: "已公开披露",
    },
    re: {
      name: "房地产",
      category: "RE — 交钥匙、杠杆",
      philosophy:
        "在增长市场 — 德州 — 通过杠杆化硬资产实现长期财富积累。通胀居高不下，所以固定利率负债加上增值的硬资产就是正确的仓位。",
      detail:
        "只做交钥匙。不翻新、不做 BRRRR、不做增值改造。目标是无聊、可预测的现金流和最低的运营复杂度。短租只在监管完全明确的地方作为子策略存在。",
    },
    equities: {
      name: "股票",
      category: "公开市场 — 偏被动",
      philosophy:
        "我持有股票，同时对散户的选股优势保持怀疑。大部分是被动配置；主动研究只留给指数无法定价的情形。",
      detail:
        "真要研究一只股票时，我会像信贷分析师一样研究它 — DCF、单位经济学、偿债覆盖率。我读我尊敬的经营者的季度信；但不会全都读。",
    },
    options: {
      name: "期权",
      category: "公开市场 — 卖波动率",
      philosophy:
        "系统化卖波动率。在财报、FOMC 等催化剂前后，当隐含波动率相对已实现分布偏贵时卖出权利金。",
      detail:
        "铁鹰式和短勒式是主力策略。我把期权当作与选股完全不同的学科：不同的数学、不同的风险、不同的心理。仓位规模确保一次糟糕的行情不会终结整个计划。",
    },
    saas: {
      name: "微型 SaaS",
      category: "PE — ARR 低于 100 万美元",
      philosophy:
        "以 2-4 倍 ARR 从疲惫（而非陷入困境）的经营者手中买入产生现金流、不性感的软件生意。选择转换成本高、口碑获客成本低的细分市场。",
      detail:
        "优势在于耐心，以及愿意买机构 PE 看不上的小生意。精简运营。用公道但不刺激的价格实现 30-50% 的现金回报复利。",
      publicLabel: "运营载体",
    },
    pe: {
      name: "私募股权",
      category: "PE — 杠杆增长",
      philosophy:
        "PE 的数学：DSCR、偿债覆盖、杠杆情景下的现金流。工作就是对资本结构做压力测试，撑不过恶劣行情就转身走人。",
      detail:
        "通过 Luminance Capital Partners，我为纽约和迪拜的 PE 机构做技术尽调 — 代码审计、兼职 CTO、退出准备。",
      publicLabel: "尽调机构",
    },
    bonds: {
      name: "债券",
      category: "固定收益 — 备用弹药",
      philosophy:
        "国债是准现金储备 — 当其他七个格子里有资产一夜之间被重新定价时，用来机会性出手的干火药。",
      detail:
        "不在信用债里追逐收益。这个篮子的职责是随时可用，而不是刺激。变得刺激的债券组合就是失败的债券组合。",
    },
    prediction: {
      name: "预测市场",
      category: "研究 — Kalshi / Polymarket",
      philosophy:
        "活跃的研究兴趣。问题在于事件隐含概率是否偏离相邻期权市场的定价 — 以及这种偏离扣除交易成本后是否仍然成立。",
      detail:
        "当作研究领域，而非核心资产配置。大部分工作在表格里，而不在仓位里。仓位是表格吃掉所有算不过账的东西之后剩下的部分。",
    },
  },
};

export const investingStrings: Record<LocaleKey, InvestingStrings> = {
  en,
  ar,
  zh,
};
