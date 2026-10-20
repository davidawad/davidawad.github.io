/**
 * src/data/engineering-i18n.ts
 *
 * Localized copy for the Engineering page. The project list itself (names,
 * years, categories, URLs) lives in src/data/engineering.ts and is shared by
 * all locales; this module carries the per-locale UI strings and translated
 * blurbs. Imported by the shared page component
 * (src/components/pages/EngineeringPage.astro) and the localized LLM-text
 * endpoints so the rendered page and the text version never drift.
 */

import type { LocaleKey } from "@/i18n/config";

export type EngineeringStrings = {
  /** Browser tab title segment, e.g. "engineering" */
  pageTitle: string;
  /** The single serif identity statement (H1) */
  identity: string;
  /** Full man-page preamble rendered inside the <pre> block */
  manText: string;
  openSite: string;
  openSource: string;
  notPublished: string;
  /** Lead-in of the closing paragraph, before the mailto link */
  closingLead: string;
  /** Conjunction between the two contact links */
  closingOr: string;
  /** Translated blurbs keyed by project name; missing keys fall back to EN */
  blurbs: Record<string, string>;
};

const en: EngineeringStrings = {
  pageTitle: "engineering",
  identity: "Engineering.",
  manText: `NAME
    david(1) — lawyer, investor, engineer.  Ships open-source side projects.

SYNOPSIS
    david [--law] [--capital] [--code] [--help]

DESCRIPTION
    Rutgers CS + Physics. Georgia Tech MS CS. Northwestern California
    Law. Built infrastructure at SendGrid, MailChimp, Tumblr, iconectiv,
    and R3. Currently runs Awad Law P.C. and Luminance Capital Partners.

    The following listing enumerates the open-source projects in
    ~/engineering, newest first. Every row is a real file in this directory.
    Permission bits are not decoration — see LEGEND.

LEGEND
    The permission string at the start of each row encodes metadata.

    Position 1  type
                d = deployed product (live URL, not just source)
                - = code-only repository

    Owner bits (pos 2-4)  david's relationship to the code
                r  has README and writeup
                w  actively maintained (commit within last 2 years)
                x  shipped artifact (not research / coursework)

    Group bits (pos 5-7)  open to outside contributors
                r  source is publicly readable
                w  accepts pull requests
                x  always "-" — collaboration is async

    World bits (pos 8-10) publicly shipped to end users
                r  anyone can view the source / artifact
                w  always "-" — the world doesn't commit here
                x  live deployment anyone can execute

    Click a row to expand its screenshot or demo video.
    Click the project name to open the source or live site.
`,
  openSite: "open site",
  openSource: "open source",
  notPublished: "not published",
  closingLead: "Feedback, issues, or pull requests welcome. Reach out at",
  closingOr: "or",
  blurbs: {},
};

const ar: EngineeringStrings = {
  pageTitle: "هندسة",
  identity: "الهندسة.",
  manText: `NAME
    david(1) — محامٍ ومستثمر ومهندس. يبني مشاريع جانبية مفتوحة المصدر.

SYNOPSIS
    david [--law] [--capital] [--code] [--help]

DESCRIPTION
    علوم حاسوب وفيزياء من Rutgers. ماجستير علوم حاسوب من Georgia Tech.
    قانون من Northwestern California. بنى بنية تحتية في SendGrid
    وMailChimp وTumblr وiconectiv وR3. يدير حاليًا Awad Law P.C.
    وLuminance Capital Partners.

    القائمة التالية تسرد المشاريع مفتوحة المصدر في ‎~/engineering،
    الأحدث أولًا. كل سطر هو ملف حقيقي في هذا المجلد. بتات الأذونات
    ليست للزينة — انظر LEGEND.

LEGEND
    سلسلة الأذونات في بداية كل سطر ترمّز بيانات وصفية حقيقية.

    Position 1  النوع
                d = منتج منشور (رابط مباشر، وليس مجرد كود مصدري)
                - = مستودع كود فقط

    Owner bits (pos 2-4)  علاقة ديفيد بالكود
                r  يحتوي على README وتوثيق
                w  مُصان بنشاط (آخر commit خلال آخر سنتين)
                x  منتج مكتمل (ليس بحثًا أو واجبًا دراسيًا)

    Group bits (pos 5-7)  مفتوح للمساهمين الخارجيين
                r  الكود المصدري متاح للقراءة علنًا
                w  يقبل pull requests
                x  دائمًا "-" — التعاون غير متزامن

    World bits (pos 8-10)  منشور للمستخدمين النهائيين
                r  يمكن لأي شخص رؤية الكود / المنتج
                w  دائمًا "-" — العالم لا يكتب هنا
                x  نشر مباشر يمكن لأي شخص تشغيله

    اضغط على أي سطر لعرض لقطة الشاشة أو فيديو العرض.
    اضغط على اسم المشروع لفتح الكود المصدري أو الموقع المباشر.
`,
  openSite: "افتح الموقع",
  openSource: "افتح المصدر",
  notPublished: "غير منشور",
  closingLead: "نرحّب بالملاحظات والمشكلات وطلبات السحب. تواصل معي عبر",
  closingOr: "أو",
  blurbs: {
    "Contract Variable Highlighter":
      "أداة تمييز بأسلوب VS Code تعثر على كل مصطلح معرَّف في العقد وتلوّنه ليتمكن المحامون من اكتشاف أخطاء الصياغة.",
    teamlab: "منصة تساعد فرق الهاكاثون على إيجاد بعضها البعض.",
    thoth: "تدوين ملاحظات من الطرفية مع معاينة markdown مُصيَّرة.",
    "TISLA Student Loan FAQ":
      "أسئلة شائعة مفتوحة المصدر عن القروض الطلابية لصالح معهد مستشاري القروض الطلابية.",
    pebbledex: "موسوعة بوكيمون لساعة Pebble الذكية — كل بوكيمون على معصمك.",
    "traffic-sign-classifier":
      "شبكة CNN عميقة تصنّف إشارات المرور الألمانية — من برنامج Udacity للسيارات ذاتية القيادة.",
    "lane-detection":
      "خط معالجة OpenCV يكتشف خطوط المسارات من كاميرا قيادة أمامية.",
    "Behavioral-Cloning":
      "شبكة عصبية شاملة تتعلم قيادة السيارة من صور الكاميرا الأمامية وحدها.",
    insightweets: "لوحة تحليل مشاعر لتغريدات مستخدم على تويتر.",
    "Read-Between-The-Lines":
      "أداة معالجة لغة طبيعية تقارن نسختين من عقد وتُبرز التغييرات الجوهرية.",
    "Archangel Raphael's Mission":
      "الموقع والبنية التشغيلية للجمعية الخيرية 501(c)(3) التي شارك ديفيد في تأسيسها — حمامات متنقلة ووجبات وخدمات نظافة للمشردين.",
    capstone:
      "مشروع التخرج للسيارة ذاتية القيادة — نظام ROS كامل: إدراك وتخطيط وتحكم.",
    "hi.rd": "مختصِر روابط صغير مع تحليلات للنقرات.",
    blocky: "لعبة ألغاز دفع المكعبات في المتصفح.",
    kinectsentrygun:
      "مدفع حراسة يتتبع الحركة عبر Kinect ويتبع الشخص في أرجاء الغرفة.",
    "vehicle-detection":
      "خط معالجة SVM + HOG يحدد كل سيارة في إطار كاميرا القيادة.",
    spaceshare:
      "منصة على غرار Airbnb لمشاركة المساحات المكتبية غير المستخدمة، بُنيت في هاكاثون.",
    ironmyo:
      "واجهة لسوار Myo تتيح التحكم بعناصر HUD على طريقة Iron Man بإيماءات اليد.",
    "advanced-lane-detection":
      "تحويل منظوري وملاءمة كثيرات حدود لتتبع المسارات المنحنية تحت الظل والوهج.",
    Waves:
      "محاكاة عددية لمعادلة الموجة ثنائية الأبعاد، كُتبت لمقرر جامعي في المعادلات التفاضلية الجزئية.",
  },
};

const zh: EngineeringStrings = {
  pageTitle: "工程",
  identity: "工程。",
  manText: `NAME
    david(1) — 律师、投资人、工程师。业余打造开源项目。

SYNOPSIS
    david [--law] [--capital] [--code] [--help]

DESCRIPTION
    Rutgers 计算机科学与物理学学士，Georgia Tech 计算机科学硕士，
    Northwestern California 法学院。曾在 SendGrid、MailChimp、
    Tumblr、iconectiv 和 R3 构建基础设施。现运营 Awad Law P.C.
    与 Luminance Capital Partners。

    以下列表按时间倒序列出 ~/engineering 中的开源项目。
    每一行都是这个目录里真实存在的文件。权限位不是装饰 —
    见 LEGEND。

LEGEND
    每行开头的权限字符串编码了真实的元数据。

    Position 1  类型
                d = 已部署的产品（有线上地址，而不只是源码）
                - = 纯代码仓库

    Owner bits (pos 2-4)  david 与代码的关系
                r  有 README 和说明文档
                w  仍在积极维护（近两年内有提交）
                x  已交付的成品（非研究 / 课程作业）

    Group bits (pos 5-7)  对外部贡献者开放
                r  源码公开可读
                w  接受 pull request
                x  恒为 "-" — 协作是异步的

    World bits (pos 8-10)  面向最终用户公开发布
                r  任何人都能查看源码 / 成品
                w  恒为 "-" — 世界不会直接提交代码
                x  任何人都能使用的线上部署

    点击某一行可展开截图或演示视频。
    点击项目名可打开源码或线上站点。
`,
  openSite: "打开网站",
  openSource: "查看源码",
  notPublished: "未发布",
  closingLead: "欢迎反馈、提交 issue 或 pull request。联系方式：",
  closingOr: "或",
  blurbs: {
    "Contract Variable Highlighter":
      "VS Code 风格的高亮工具，找出合同中每个已定义术语并着色，帮律师发现起草错误。",
    teamlab: "帮助黑客松队伍互相找到彼此的平台。",
    thoth: "终端里的笔记工具，带 markdown 渲染预览。",
    "TISLA Student Loan FAQ": "为学生贷款顾问协会编写的开源学生贷款 FAQ。",
    pebbledex: "Pebble 智能手表上的宝可梦图鉴 — 每只宝可梦都在你手腕上。",
    "traffic-sign-classifier":
      "识别德国交通标志的深度 CNN — Udacity 自动驾驶纳米学位项目。",
    "lane-detection": "从前置行车记录仪画面检测车道线的 OpenCV 流水线。",
    "Behavioral-Cloning":
      "端到端神经网络，仅凭前置摄像头画面学会控制方向盘。",
    insightweets: "针对 Twitter 用户时间线的情感分析仪表盘。",
    "Read-Between-The-Lines":
      "对比合同两个版本并突出实质性改动的 NLP 工具。",
    "Archangel Raphael's Mission":
      "David 联合创立的 501(c)(3) 公益组织的网站与运营系统 — 为无家可归者提供流动淋浴、餐食和卫生服务。",
    capstone: "自动驾驶毕业设计 — 完整 ROS 栈：感知 + 规划 + 控制。",
    "hi.rd": "带点击统计的迷你短链接服务。",
    blocky: "浏览器里的推方块益智游戏。",
    kinectsentrygun:
      "由 Kinect 驱动的运动追踪哨戒炮，会跟着人在房间里转。",
    "vehicle-detection":
      "SVM + HOG 特征流水线，框出行车记录仪画面中的每辆车。",
    spaceshare: "共享闲置办公空间的 Airbnb 式平台，黑客松作品。",
    ironmyo: "Myo 臂环接口，用手势控制钢铁侠风格的 HUD 元素。",
    "advanced-lane-detection":
      "透视变换 + 多项式拟合，在阴影与眩光下追踪弯道车道线。",
    Waves: "二维波动方程的数值模拟，本科偏微分方程课程作业。",
  },
};

export const engineeringStrings: Record<LocaleKey, EngineeringStrings> = {
  en,
  ar,
  zh,
};
