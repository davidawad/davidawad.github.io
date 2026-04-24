---
author: David Awad
pubDatetime: 2023-11-5T16:38:49Z
title: 拜登关于人工智能安全、可靠和可信开发与使用的行政命令违宪。
postSlug: 11-05-biden-eo-unconstitutional
featured: true
draft: false
tags:
  - law
  - computing
  - policy
ogImage: "/assets/img/aireg_1.png"
description: "我们从基本法律框架对拜登行政命令的监管条款进行分析，概述其如何在我们当前对第一修正案的理解下既不合宪也无法执行。"
---

![拜登网站标题的修改版图片](/assets/img/aireg_1.png)

翻开拜登政府这份最新行政命令，你会发现它蠢透了。这根本不是一份经过认真推敲的立法文件。[行政命令原文见此。](https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/)

我的论点是：对任何形式的软件加以限制，均属违宪。（如果你了解IRAC分析法，这就是我们的核心争议点。）

如果你不想看法律基础部分，可以直接跳到[行政命令的实质内容](#这份行政命令的多项条款违反第一修正案且无法通过严格审查)。

#### 背景：美国法律的合宪性

> 如果你已经了解严格审查，可以跳过本节。

美国宪法采取*消极权利*或*自由权*的哲学立场——其核心思想是：政府不能阻止你做某些事情。我享有不受侵犯的言论自由权。个人在宪法下享有诸多此类基本权利：迅速受审的权利、面对指控者的权利、集会的权利，等等。

当各级州、地方和联邦政府制定侵害基本权利的法规时，你可以起诉，理由是该法律违反了你受宪法保护的权利，因而违宪。此时（简化说明）法院会对该法律适用相应程度的合宪性审查。

> 在技术层面，当有人"质疑某法律的合宪性"时，实际上是在起诉负责执法的政府官员（例如国务卿或环保局局长）。这基于"Ex parte Young"原则——参见 [*Ex Parte Young*, 209 U.S. 123 (1908)](https://casetext.com/case/gitlow-v-people-of-the-state-of-new-york)——该原则允许联邦法院对州政府官员发出禁令，以阻止违宪行为。

提起诉讼，不能只是假设性地声称（"我认为X违宪"）。你必须具备诉讼资格，即你是对案件结果具有利益关系的当事方，你已经受到或即将受到该法律执行的伤害。最后，你还须证明法院能够提供你所寻求的救济（宣告该法律违宪，或发出禁止执行的禁令）。

#### 背景：第一修正案的限制

> 如果你已经了解第一修正案的运作方式，可以跳过本节。

先看修正案原文，再解释其解释方式。

> "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof; or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble, and to petition the Government for a redress of grievances."

这就是人人皆知的第一修正案。言论自由。

在实操层面，第一修正案通过第十四修正案的正当程序条款适用于各州，参见 [Gitlow v. New York, 268 U.S. 652 (1925)](https://casetext.com/case/gitlow-v-people-of-the-state-of-new-york)。

就我们的目的而言，法律上的关键在于：政府只能在有限范围内限制言论。当然存在诽谤、共谋犯罪等刑事行为，但大多数律师真正关注的只有两类：（1）时间、地点和方式限制；（2）内容限制。

1. 时间、地点和方式限制，例如"只能在周二抗议"或"在此处举行抗议须事先申请许可证"。
    - 这类限制必须与内容无关、针对重大政府利益进行窄幅裁定，且须为受保护言论留有充分替代空间。
2. 政府试图规范言论内容，通常被推定为违宪，并须接受严格审查。参见 [*Simon & Schuster, Inc. v. Members of the New York State Crime Victims Board*, 502 U.S. 105 (1991)](https://casetext.com/case/simon-schuster-v-crime-victims-bd?p=1&q=Simon%20%26%20Schuster,%20Inc.%20v.%20Members%20of%20the%20New%20York%20State%20Crime%20Victims%20Board,%20502%20U.S.%20105%20(1991)%0A&sort=relevance&type=case&ssr=false&scrollTo=true)

最后补充一点：适用何种审查级别通常取决于法律所针对的群体类型。本文中，我们直接假设适用严格审查。

> 值得注意的是，AI本身并不属于任何可能使相关法律适用严格审查的特定分类。我认为这是件好事——那些认为AI在某种程度上"有生命"的人对这项技术毫无了解，应该多出去走走。但即便我们真的认为AI有知觉或某种意义上"活着"，适用严格审查的论点依然成立。

#### 软件在法律上属于言论？

我们现在明白，言论管制通常违宪。你可能想知道：代码怎么算言论？推导这一前提的方法，是尝试找出区分两者的原则。换个角度来论证。

以下是一段受保护言论的例子（假设它发表在某本离散数学教材里）：

>斐波那契数列是一组数字序列，其中每个数字是前两个数字之和，通常从0和1开始。
>
>用数学表达如下：
>$F(0) = 0, \quad F(1) = 1$
>
>当 $n > 1$ 时：
  $F(n) = F(n-1) + F(n-2)$

我想大多数人都会同意，这段文字是受保护的言论，就像某些政治言辞一样。

下面是同一概念以计算机代码形式呈现的版本，你可以按照它来计算同一个数字：

```python
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        a, b = b, a + b
    return a
```

如果这两者之间的区别对你来说显而易见，我很乐意听你说说。

我们应该把计算机代码理解为一本你可以下载到电脑上阅读的"自选冒险"书。就像那本书受言论保护一样，代码也是如此。以下是该领域若干关键案例的简要概述：

1999年，第九巡回上诉法院裁定：源代码是受第一修正案保护的言论，政府禁止发布源代码的规定违宪。参见 [*Bernstein v. United States Dept. of Justice*, 176 F.3d 1132 (9th Cir. 1999)](https://casetext.com/case/bernstein-v-united-states-dept-of-justice?p=1&q=Bernstein%20v.%20Department%20of%20Justice&sort=relevance&type=case&ssr=false&scrollTo=true)。加密代码在教材语境下的地位在 [*Junger v. Daley*, 209 F.3d 481 (6th Cir. 2000)](https://casetext.com/case/junger-v-daley?p=1&q=Junger%20v.%20Daley:%0A%0A&sort=relevance&type=case&ssr=false&scrollTo=true) 中再次得到确认。以下是首席法官 Boyce F. Martin Jr. 在该案中代表多数意见所写：

> "Because computer source code is an expressive means for the exchange of information and ideas about computer programming, we hold that it is protected by the First Amendment." –Junger v. Daley, 209 F.3d 481, 485 (6th Cir. 2000)

虽然 Martin 法官对技术的理解未必完全准确，但核心法律原则是正确的：发布源代码是交流信息的表达方式。

2001年，第二巡回上诉法院承认计算机代码属于言论，即便在涉及 Eric Corley 发布DVD解密代码的案件中也不例外。参见 [*Universal City Studios, Inc. v. Corley*, 273 F.3d 429 (2d Cir. 2001)](https://casetext.com/case/universal-city-studios-inc-v-corley?p=1&q=Universal%20City%20Studios,%20Inc.%20v.%20Corley:%0A%0A&sort=relevance&type=case&ssr=false&scrollTo=true)。

最后值得一提的是苹果公司试图传票获取电子邮件记录以追查产品泄露信息来源的案件。被告援引第一修正案主张博主保护。法院在该案中明确承认数字通信是受保护言论的一种形式。参见 [EFF关于该案的精彩文章](https://www.eff.org/cases/apple-v-does)。更多言论管制失败的案例，可参阅[正义研究所商业言论胜诉案例博客](https://ij.org/case/?pillar=commercial-speech)。

**那么，我们知道计算机代码和信息表达属于言论——但有些言论不也是违法的吗？** 正如我们之前看到的，确实存在特定类型的违法言论，如煽动暴力、挑衅性言辞、诽谤、诬蔑，以及共谋或教唆犯罪。但也仅此而已。

#### 你甚至可以出版关于如何制造武器的书籍和软件

我此前写过：[即便是用于生产3D打印武器的计算机设计文件，通常也被视为言论](https://davidaw.ad/posts/05-05-3d-printed-weapons--explained/)。参见 [*Defense Distributed v. U.S. Dep't of State*, 838 F.3d 451 (5th Cir. 2016)](https://casetext.com/case/distributed-v-us-dept-of-state-1)。

该领域还有以下案例：

美国政府曾试图阻止杂志《进步》发表一篇声称揭示氢弹"秘密"的文章。政府本会败诉，但因另有他人发布相同内容而使案件变得无实际意义。参见 [*United States v. Progressive, Inc.*, 467 F. Supp. 990 (W.D. Wis. 1979)](https://casetext.com/case/united-states-v-progressive-inc-2)。

在 *United States v. Stevens* 案中，最高法院推翻了一项将特定动物虐待画面的商业制作、销售或持有入罪的联邦法律，理由是违反第一修正案。该裁决意味着政府限制出版——即便是令人不快或危险内容——须满足极高门槛。参见 [*U.S. v. Stevens*, 559 U.S. 460 (2010)](https://casetext.com/case/us-v-stevens-28)。

> 顺带一提，我推荐《无政府主义食谱》——第一本挑战这一标准边界的书。（务必找1971年版，别找那个懦弱的修订版。）

现在来看行政命令中我认为无法通过联邦地区法院的实质性条款。

#### 这份行政命令的多项条款违反第一修正案且无法通过严格审查

首先值得关注的是对被监管核心对象——模型——的定义。
（*这是IRAC分析的规则部分*）

> (k)  The term "dual-use foundation model" means an AI model that is trained on broad data; generally uses self-supervision; contains at least tens of billions of parameters; is applicable across a wide range of contexts; and that exhibits, or could be easily modified to exhibit, high levels of performance at tasks that pose a serious risk to security, national economic security, national public health or safety, or any combination of those matters, such as by:
> (i)    substantially lowering the barrier of entry for non-experts to design, synthesize, acquire, or use chemical, biological, radiological, or nuclear (CBRN) weapons;
> (ii)   enabling powerful offensive cyber operations through automated vulnerability discovery and exploitation against a wide range of potential targets of cyber attacks; or
> (iii)  permitting the evasion of human control or oversight through means of deception or obfuscation.

该规则必须针对某个"物体"加以规范。它要么规范代码本身，要么规范权重。然而，对任一者的规范都构成对言论内容的限制。

此外，被规范对象定义的第一句话本身即站不住脚。

训练模型所用的数据，在法律上与模型的功能性输出无关。实质性的不是准备时间或所用数据量，而是模型本身的输出——代码和权重——两者均独立受第一修正案保护。

该定义随后试图依据长度来区分言论，这显然违宪。(k)(i)、(k)(ii)和(k)(iii)明确试图依据模型的具体书面输出内容创设内容限制。

##### "宽泛"数据集

该法规明确试图依据所用训练数据的内容来区分模型，其中"宽泛"一词在宪法上很可能因含糊不清而无效。

根据正当程序条款，若一项法律禁止的行为定义含糊到以下程度，该法律将被认定"因模糊而无效"：(i) "具有普通智识的人必然须猜测其含义，且对其适用存在分歧"。

此处，法规明确规定：若模型是在宽泛数据集上训练的，则受规范约束。几乎所有机器学习模型，尤其是语言模型，在任何监管者的解读下都会被认定是在"宽泛"数据集上训练的。

这项法规几乎必然需要修订才能具有可执行性。

由于言论既不能以内容为由受到规范，也不能以内容的"宽泛性"为由受到规范，更不能以长度或所发布的具体内容类型为由受到规范，因此对何为"模型"的定义本身不可执行，无法适用，实质上使整个命令形同虚设。如果类比一位作者出版一本自选冒险书，这些限制中没有任何一条能够以任何方式成立。

接下来值得关注的是 §10.1(b)(viii)(C)，该条款专门要求对人工智能生成的内容进行水印标注。

> (C)  reasonable steps to watermark or otherwise label output from generative AI;

从内容中立的时间、地点和方式限制角度看，若其经过窄幅裁定以服务于特定政府利益，理论上是可行的。

然而，很难想象政府有何重大利益，须要求个人在自己电脑上运行软件所产生的图像或内容标注"由计算机生成"。此外，如前所述，对于何种内容应被视为AI生成，并无清晰界定。

例如，如果AI仅用于调整照片的色彩对比度，是否也须加水印？按该法规的逻辑，答案是肯定的。

#### 强制披露模型的代码和权重构成第五修正案意义上的征用

§4.1(i)(B) 进一步要求该软件的发布者向商务部报告：

> the ownership and possession of the model weights of any dual-use foundation models, and the physical and cybersecurity measures taken to protect those model weights;
>（任何双重用途基础模型的模型权重的所有权与持有情况，以及为保护这些模型权重所采取的物理和网络安全措施）

我认为模型权重是一种知识产权，权重本身的披露构成第五修正案意义上的征用。由于代码本身是全部知识产权之所在，强制披露代码是一种难以量化的征用行为。

> 尽管我坚持软件属于言论，但在本情境中，仅要求通知信息，现实中并非征用，而只是一种规范形式——因为它并不干涉财产的所有权或主要用途。假设政府不将代码挪作经济用途，即便是我也必须承认，就现行法律而言，第五修正案的论点相对薄弱。如果政府援引国家安全利益，即便这不被视为规范，也可能被接受为重大政府利益。话虽如此，除前联邦国防雇员外，没有任何国家安全利益被认为比个人基本言论自由权利更具压倒性。参见 [*Snepp v. United States*, 444 U.S. 507 (1980)](https://casetext.com/case/snepp-v-united-states)。

§4.1(ii) 更进一步：

> (ii)  Companies, individuals, or other organizations or entities that acquire, develop, or possess a potential large-scale computing cluster to report any such acquisition, development, or possession, including the existence and location of these clusters and the amount of total computing power available in each cluster.
>（收购、开发或持有潜在大规模计算集群的公司、个人或其他组织实体，须报告上述收购、开发或持有情况，包括集群的存在与位置，以及每个集群的总计算能力。）

这项要求同样以报告义务的形式强制言论，政府是否对计算硬件的可用性和集中程度拥有重大利益，尚存争议，但我怀疑许多理性法官会对此持不同意见。

在未有合理怀疑你犯罪的情况下，被强制披露关于你个人私有财产（计算机硬件形式）的信息，是第四修正案意义上的搜查，因此违宪。

§4.2(b)(i) 规定：应依据创建所用的计算能力对输出内容（权重）加以规范。

> (i)   any model that was trained using a quantity of computing power greater than 1026 integer or floating-point operations, or using primarily biological sequence data and using a quantity of computing power greater than 1023 integer or floating-point operations; and
> (ii)  any computing cluster that has a set of machines physically co-located in a single datacenter, transitively connected by data center networking of over 100 Gbit/s, and having a theoretical maximum computing capacity of 1020 integer or floating-point operations per second for training AI.

此处我们又发现一处强制披露要求，依据准备模型所用的时间以及内容（生物序列数据）而定。

如前所述，这类披露和审查要求须以重大利益为依托。

由于该限制明显依据内容及准备言论所用的时间进行审查，它须接受严格审查，且无法通过合宪性检验。

请记住，政府须证明这些法律是实现其所主张重大利益的限制最少的手段。此处我们不知道那个重大利益是什么，但假设政府援引防止欺诈的利益。显然存在诸多限制更少的替代手段，例如在人工智能提供内容的任何通信媒介上张贴一则声明，注明该内容由AI生成。无需政府审批或披露，还有许多更简便的做法可以实现同样目的。

行政命令中还有其他有问题的部分，但论点已经说清楚了。当你类比一位作者出版一本自选冒险书，这些法规几乎全部须接受中等或严格审查，且不可执行。大多数联邦法官几乎必然会认定，这些对言论和创意内容的宽泛或具体限制对个人和出版商过于苛刻，并宣告其违宪。

#### 这些条款现实中会被推翻吗？很可能。

联邦法官不是那种喜欢在政治敏感案件中惹麻烦的人，所以在激烈案件中他们做出错误裁决也不是没有可能。话虽如此，他们同样不喜欢偏离成熟的法律。第一修正案是最根深蒂固的存在。

而且，在更广泛的政治氛围中，大多数人不把这视为"热门党派议题"——即便如此，你也不想成为那个裁决"政府有权以不喜欢的方式规范言论"的法官。

所以我押注这在普通法官面前会被推翻，但我愿意打赌它会进入不止一个巡回上诉法院。
