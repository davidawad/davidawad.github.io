/**
 * src/data/lawyering.ts
 *
 * Single source of truth for the Lawyering page content, per locale.
 * Imported by the shared page component
 * (src/components/pages/LawyeringPage.astro) for all three locales.
 */

import type { LocaleKey } from "@/i18n/config";

export type Pair = {
  area: string;
  then: string;
  now: string;
};

export type Testimonial = {
  quote: string;
  who: string;
};

export type LawyeringContent = {
  pageTitle: string;
  headline: string;
  subtitle: string;
  thenLabel: string;
  nowLabel: string;
  pairs: Pair[];
  brieflyTitle: string;
  /** Rendered with set:html — may contain <a class="law7-link"> anchors */
  brieflyHtml: string;
  testimonialsTitle: string;
  testimonials: Testimonial[];
  closeLine1: string;
  /** Rendered with set:html — contains the awad.esq / mailto anchors */
  closeLine2Html: string;
  closeMono: string;
  disclaimer: string;
  /** Four caption box positions; each gets its own list to cycle. */
  captionLists: string[][];
};

const en: LawyeringContent = {
  pageTitle: "lawyering",
  headline: "On both sides.",
  subtitle: "An essay on the work I do — and the work I used to need done for me.",
  thenLabel: "Then.",
  nowLabel: "Now.",
  pairs: [
    {
      area: "Acquisitions & Investments",
      then: "I was the one staring at a 90-page SPA on a Friday night with no idea where the bear traps were.",
      now: "I am the one who redlines it overnight and tells you which five things actually matter.",
    },
    {
      area: "Raising Venture Capital",
      then: "I read my first term sheet and accepted the participating preferred because I didn't know what it meant.",
      now: "I know what it means. I know which terms to fight, which to accept, and which to never sign.",
    },
    {
      area: "Real Estate",
      then: "I let a seller pick the title company. I trusted the title company.",
      now: "Don't let the seller pick the title company.",
    },
    {
      area: "Technology Litigation & Disputes",
      then: "My code got stolen and I didn't know what a preservation hold was.",
      now: "I send the preservation hold by lunch. I image the workstation by sundown.",
    },
    {
      area: "ADA Digital Litigation Defense",
      then: "I would have paid the demand letter.",
      now: "I don't pay the demand letter. We fix the site. We file the motion. They walk.",
    },
    {
      area: "AI & Software Compliance",
      then: "I would have read the headline and panicked.",
      now: "I read the statute. Most of the panic was the headline.",
    },
    {
      area: "Data Privacy",
      then: "I once shipped a privacy policy in a weekend because the lawyer wouldn't return my emails.",
      now: "I return the emails.",
    },
    {
      area: "Intellectual Property",
      then: "I assumed the designer assigned me her logo because I paid for it.",
      now: "Without it in writing, she didn't. We fix that, today.",
    },
    {
      area: "Securities & Quant Trading",
      then: "My friends asked me to invest. I would have said yes without thinking about the SEC.",
      now: "I think about the SEC first.",
    },
    {
      area: "Notary Services",
      then: "I needed something notarized at midnight in a state with no walk-in notaries.",
      now: "I'm a notary. We handle it in the same call.",
    },
    {
      area: "Technical Criminal Defense",
      then: "I assumed an indictment was the end of the conversation.",
      now: "It's the beginning of one. I read logs for a living.",
    },
  ],
  brieflyTitle: "Briefly:",
  brieflyHtml:
    `I'm an attorney in good standing with the California Bar (<a class="law7-link" href="https://apps.calbar.ca.gov/attorney/Licensee/Detail/357204" rel="noopener noreferrer">#357204</a>). JD from Northwestern California University School of Law. MS Computer Science from Georgia Tech, BS Computer Science &amp; Physics from Rutgers. Before I practiced law I built things at SendGrid, MailChimp, Tumblr, iconectiv, and R3. I've been an expert witness on software engineering matters. ABA, IEEE, EFF. Notary.`,
  testimonialsTitle: "What people have said.",
  testimonials: [
    {
      quote:
        "David consistently showcases exceptional technical skills, resourcefulness, and a proactive approach in understanding project objectives.",
      who: "Alexis DeBose, Attorney at Archetype Legal",
    },
    {
      quote: "David has my highest recommendation.",
      who: "John El-Maraghy, Cofounder, ARM",
    },
    {
      quote: "He's my go-to guy for all technical due diligence and deal analysis.",
      who: "Edward Castaño, CEO, First Gen Growth",
    },
    {
      quote:
        "David was a tremendous software engineering expert — an excellent witness on the stand during direct and cross examination.",
      who: "Seth Wilson, Partner, Morris Wilson",
    },
    {
      quote:
        "David turned around modified terms of service quickly — he understood the business first, then built us a workable solution.",
      who: "Phil Rafla, Founder, SPD Distribution",
    },
  ],
  closeLine1: "I don't take every engagement.",
  closeLine2Html:
    `When I do, it starts at <a class="law7-link" href="https://awad.esq">awad.esq</a> — or <a class="law7-link" href="mailto:hello@awad.esq">hello@awad.esq</a>.`,
  closeMono: "This page is where I write. The firm is where I work.",
  disclaimer:
    "Licensed to practice in California (Bar #357204). This page is informational and is not legal advice; reading it does not create an attorney–client relationship. For matters outside California, David can refer you to a colleague.",
  captionLists: [
    [
      "AWAD v. PADDING HOURS, 2024 (SDNY)",
      "IN RE: 90-PAGE MSA SENT FRIDAY AT 9 PM",
      "STARTUP v. FIRST-YEAR ASSOCIATE",
      "IN RE: SOURCE CODE PRESERVED, JUST IN TIME",
    ],
    [
      "AWAD v. BLACK BOX TERM SHEET",
      "IN RE: GENERIC NDA WITH THE WRONG STATE",
      "FOUNDER v. SHAREHOLDERS' AGREEMENT, PARA. 14.3(b)(ii)",
      "AWAD v. FORM TOS, 2023",
    ],
    [
      "IN RE: AI POLICY THAT DOESN'T MENTION AI",
      "AWAD v. DRAG-ALONG WITH NO MINIMUM",
      "IN RE: CCPA NOTICE THAT SHIPPED IN A WEEKEND",
      "STARTUP v. PATENT TROLL, EASTERN DIST. TEX.",
    ],
    [
      "IN RE: TWO-PAGE TOS, USED BY 8M PEOPLE",
      "IN RE: ASSIGNMENT, EXECUTED BEFORE IT MATTERED",
      "AWAD v. PADDING HOURS, 2024 (SDNY)",
      "IN RE: 90-PAGE MSA SENT FRIDAY AT 9 PM",
    ],
  ],
};

const ar: LawyeringContent = {
  pageTitle: "المحاماة",
  headline: "على الجانبين.",
  subtitle: "مقال عن العمل الذي أقوم به — والعمل الذي كنت أحتاج من يقوم به لأجلي.",
  thenLabel: "حينها.",
  nowLabel: "الآن.",
  pairs: [
    {
      area: "الاستحواذات والاستثمارات",
      then: "كنت أنا من يحدّق في اتفاقية شراء أسهم من 90 صفحة ليلة الجمعة دون أدنى فكرة عن مواضع الفخاخ.",
      now: "أنا الآن من يراجعها بين ليلة وضحاها ويخبرك بالأشياء الخمسة التي تهم فعلًا.",
    },
    {
      area: "جمع رأس المال الجريء",
      then: "قرأت أول term sheet في حياتي وقبلت الأسهم الممتازة المشارِكة لأنني لم أعرف ما معناها.",
      now: "أعرف الآن ما معناها. أعرف أي البنود تقاتل عليها، وأيها تقبلها، وأيها لا توقّع عليها أبدًا.",
    },
    {
      area: "العقارات",
      then: "تركت البائع يختار شركة سند الملكية. ووثقت بشركة سند الملكية.",
      now: "لا تدع البائع يختار شركة سند الملكية.",
    },
    {
      area: "نزاعات وتقاضي التقنية",
      then: "سُرق كودي ولم أكن أعرف ما هو أمر حفظ الأدلة.",
      now: "أرسل أمر حفظ الأدلة قبل الغداء. وأصوّر جهاز العمل قبل الغروب.",
    },
    {
      area: "الدفاع في دعاوى ADA الرقمية",
      then: "كنت سأدفع قيمة خطاب المطالبة.",
      now: "لا أدفع خطاب المطالبة. نصلح الموقع. نقدّم المذكرة. وينصرفون.",
    },
    {
      area: "الامتثال للذكاء الاصطناعي والبرمجيات",
      then: "كنت سأقرأ العنوان وأصاب بالذعر.",
      now: "أقرأ نص القانون. معظم الذعر كان في العنوان.",
    },
    {
      area: "خصوصية البيانات",
      then: "أطلقت مرة سياسة خصوصية في عطلة نهاية أسبوع لأن المحامي لم يكن يرد على رسائلي.",
      now: "أنا أرد على الرسائل.",
    },
    {
      area: "الملكية الفكرية",
      then: "افترضت أن المصممة نقلت لي حقوق الشعار لأنني دفعت ثمنه.",
      now: "بدون ذلك كتابةً، لم تنقلها. نصلح هذا اليوم.",
    },
    {
      area: "الأوراق المالية والتداول الكمي",
      then: "طلب مني أصدقائي أن أستثمر أموالهم. كنت سأوافق دون التفكير في هيئة الأوراق المالية.",
      now: "أفكر في هيئة الأوراق المالية أولًا.",
    },
    {
      area: "خدمات التوثيق",
      then: "احتجت توثيق مستند في منتصف الليل في ولاية بلا كاتب عدل متاح.",
      now: "أنا كاتب عدل. ننهيها في المكالمة نفسها.",
    },
    {
      area: "الدفاع الجنائي التقني",
      then: "افترضت أن لائحة الاتهام نهاية الحديث.",
      now: "إنها بدايته. أنا أقرأ السجلات لأكسب عيشي.",
    },
  ],
  brieflyTitle: "باختصار:",
  brieflyHtml:
    `أنا محامٍ مقيد وبوضع جيد لدى نقابة المحامين في كاليفورنيا (<a class="law7-link" href="https://apps.calbar.ca.gov/attorney/Licensee/Detail/357204" rel="noopener noreferrer">#357204</a>). دكتور في القانون من Northwestern California University School of Law. ماجستير علوم الحاسوب من Georgia Tech، وبكالوريوس علوم الحاسوب والفيزياء من Rutgers. قبل ممارسة القانون بنيت أنظمة في SendGrid وMailChimp وTumblr وiconectiv وR3. عملت شاهدًا خبيرًا في قضايا هندسة البرمجيات. عضو ABA وIEEE وEFF. كاتب عدل.`,
  testimonialsTitle: "ما قاله الناس.",
  testimonials: [
    {
      quote:
        "يُظهر ديفيد باستمرار مهارات تقنية استثنائية وسعة حيلة ونهجًا استباقيًا في فهم أهداف المشروع.",
      who: "أليكسيس ديبوز، محامية في Archetype Legal",
    },
    {
      quote: "ديفيد يحظى بأعلى توصية مني.",
      who: "جون المراغي، شريك مؤسس، ARM",
    },
    {
      quote: "هو رجلي الأول في كل ما يخص العناية التقنية الواجبة وتحليل الصفقات.",
      who: "إدوارد كاستانيو، الرئيس التنفيذي، First Gen Growth",
    },
    {
      quote:
        "كان ديفيد خبير هندسة برمجيات هائلًا — وشاهدًا ممتازًا على المنصة أثناء الاستجواب المباشر والمضاد.",
      who: "سيث ويلسون، شريك، Morris Wilson",
    },
    {
      quote:
        "أنجز ديفيد شروط خدمة معدلة بسرعة — فهم العمل أولًا ثم بنى لنا حلًا قابلًا للتطبيق.",
      who: "فيل رفلة، مؤسس، SPD Distribution",
    },
  ],
  closeLine1: "لا أقبل كل تكليف.",
  closeLine2Html:
    `وحين أقبل، يبدأ الأمر من <a class="law7-link" href="https://awad.esq">awad.esq</a> — أو <a class="law7-link" href="mailto:hello@awad.esq">hello@awad.esq</a>.`,
  closeMono: "هذه الصفحة حيث أكتب. والمكتب حيث أعمل.",
  disclaimer:
    "مرخّص لممارسة المحاماة في كاليفورنيا (قيد رقم 357204). هذه الصفحة معلوماتية وليست استشارة قانونية؛ وقراءتها لا تنشئ علاقة محامٍ وموكل. للمسائل خارج كاليفورنيا، يمكن لديفيد إحالتك إلى زميل.",
  captionLists: [
    [
      "عوض ضد تضخيم الساعات، 2024 (SDNY)",
      "بشأن: MSA من 90 صفحة أُرسلت الجمعة 9 مساءً",
      "شركة ناشئة ضد محامٍ في سنته الأولى",
      "بشأن: كود مصدري حُفظ في اللحظة الأخيرة",
    ],
    [
      "عوض ضد term sheet الصندوق الأسود",
      "بشأن: اتفاقية سرية عامة بولاية خاطئة",
      "مؤسس ضد اتفاقية المساهمين، البند 14.3(ب)(2)",
      "عوض ضد شروط خدمة جاهزة، 2023",
    ],
    [
      "بشأن: سياسة ذكاء اصطناعي لا تذكر الذكاء الاصطناعي",
      "عوض ضد drag-along بلا حد أدنى",
      "بشأن: إشعار CCPA أُطلق في عطلة نهاية أسبوع",
      "شركة ناشئة ضد patent troll، شرق تكساس",
    ],
    [
      "بشأن: شروط خدمة من صفحتين يستخدمها 8 ملايين",
      "بشأن: تنازل وُقّع قبل أن يصبح مهمًا",
      "عوض ضد تضخيم الساعات، 2024 (SDNY)",
      "بشأن: MSA من 90 صفحة أُرسلت الجمعة 9 مساءً",
    ],
  ],
};

const zh: LawyeringContent = {
  pageTitle: "律师业务",
  headline: "两边都站过。",
  subtitle: "一篇关于我现在做的工作 — 以及我曾经需要别人为我做的工作 — 的文章。",
  thenLabel: "那时。",
  nowLabel: "现在。",
  pairs: [
    {
      area: "收购与投资",
      then: "那时是我在周五深夜盯着一份 90 页的股权收购协议，完全不知道陷阱埋在哪里。",
      now: "现在是我连夜改红线，然后告诉你真正要紧的是哪五件事。",
    },
    {
      area: "风险投资融资",
      then: "我读第一份 term sheet 时接受了参与型优先股，因为我不知道那是什么意思。",
      now: "现在我知道了。我知道哪些条款要争，哪些可以接受，哪些永远不能签。",
    },
    {
      area: "房地产",
      then: "我曾让卖方挑产权公司。我还信了那家产权公司。",
      now: "别让卖方挑产权公司。",
    },
    {
      area: "科技诉讼与争议",
      then: "我的代码被偷时，我连证据保全通知是什么都不知道。",
      now: "现在我午饭前就发出保全通知，日落前完成工作站镜像。",
    },
    {
      area: "ADA 数字无障碍诉讼辩护",
      then: "那时我大概会照着索赔函付钱。",
      now: "我不付索赔函。我们修好网站，提交动议，他们走人。",
    },
    {
      area: "AI 与软件合规",
      then: "那时我会看完标题就恐慌。",
      now: "我读法条。恐慌大多来自标题。",
    },
    {
      area: "数据隐私",
      then: "我曾在一个周末赶出一份隐私政策，因为律师不回我邮件。",
      now: "我回邮件。",
    },
    {
      area: "知识产权",
      then: "我以为付了钱，设计师就把 logo 的权利转让给我了。",
      now: "没有白纸黑字，她就没有转让。这事我们今天就解决。",
    },
    {
      area: "证券与量化交易",
      then: "朋友们想把钱交给我投资。那时我会想都不想 SEC 就答应。",
      now: "现在我先想 SEC。",
    },
    {
      area: "公证服务",
      then: "我曾在午夜需要公证，而那个州没有随到随办的公证员。",
      now: "我自己就是公证员。一通电话里就办完。",
    },
    {
      area: "技术性刑事辩护",
      then: "我以为起诉书就是对话的终点。",
      now: "那是对话的起点。读日志本来就是我的营生。",
    },
  ],
  brieflyTitle: "简而言之：",
  brieflyHtml:
    `我是加州律师协会在册且信誉良好的执业律师（<a class="law7-link" href="https://apps.calbar.ca.gov/attorney/Licensee/Detail/357204" rel="noopener noreferrer">#357204</a>）。Northwestern California University 法学院 JD，Georgia Tech 计算机科学硕士，Rutgers 计算机科学与物理学学士。执业之前，我在 SendGrid、MailChimp、Tumblr、iconectiv 和 R3 做工程。曾在软件工程相关案件中担任专家证人。ABA、IEEE、EFF 会员。公证员。`,
  testimonialsTitle: "别人怎么说。",
  testimonials: [
    {
      quote:
        "David 始终展现出卓越的技术能力、随机应变的本事，以及理解项目目标的主动性。",
      who: "Alexis DeBose，Archetype Legal 律师",
    },
    {
      quote: "David 得到我的最高推荐。",
      who: "John El-Maraghy，ARM 联合创始人",
    },
    {
      quote: "所有技术尽调和交易分析，我第一个找他。",
      who: "Edward Castaño，First Gen Growth CEO",
    },
    {
      quote:
        "David 是一位出色的软件工程专家 — 在主询问和交叉询问中都是极佳的出庭证人。",
      who: "Seth Wilson，Morris Wilson 合伙人",
    },
    {
      quote:
        "David 很快交付了修改后的服务条款 — 他先理解业务，再给我们搭出可行的方案。",
      who: "Phil Rafla，SPD Distribution 创始人",
    },
  ],
  closeLine1: "不是每个委托我都接。",
  closeLine2Html:
    `接的话，从 <a class="law7-link" href="https://awad.esq">awad.esq</a> 开始 — 或写信到 <a class="law7-link" href="mailto:hello@awad.esq">hello@awad.esq</a>。`,
  closeMono: "这个页面是我写作的地方。事务所才是我工作的地方。",
  disclaimer:
    "持照于加利福尼亚州执业（律师编号 357204）。本页面仅供参考，不构成法律意见；阅读本页不建立律师-委托人关系。加州以外的事务，David 可以为你转介同行。",
  captionLists: [
    [
      "AWAD 诉 虚报工时案，2024（SDNY）",
      "关于：周五晚 9 点发来的 90 页 MSA",
      "创业公司 诉 一年级律师",
      "关于：源代码在最后关头得以保全",
    ],
    [
      "AWAD 诉 黑箱 TERM SHEET",
      "关于：写错州名的通用 NDA",
      "创始人 诉 股东协议第 14.3(b)(ii) 条",
      "AWAD 诉 模板服务条款，2023",
    ],
    [
      "关于：只字不提 AI 的 AI 政策",
      "AWAD 诉 无底线的领售权条款",
      "关于：一个周末赶出来的 CCPA 告知",
      "创业公司 诉 专利流氓，德州东区",
    ],
    [
      "关于：800 万人在用的两页服务条款",
      "关于：在生效前及时签署的转让协议",
      "AWAD 诉 虚报工时案，2024（SDNY）",
      "关于：周五晚 9 点发来的 90 页 MSA",
    ],
  ],
};

export const lawyeringContent: Record<LocaleKey, LawyeringContent> = {
  en,
  ar,
  zh,
};
