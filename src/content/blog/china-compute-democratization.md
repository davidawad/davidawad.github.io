---
author: David Awad
pubDatetime: 2026-07-28T12:00:00Z
title: China's roadmap to democratizing compute for the world
postSlug: 7-28-china-compute-democratization
featured: false
draft: false
tags:
  - china
  - semiconductors
  - risc-v
  - ai
  - compute
  - geopolitics
ogImage: ""
description: "China is attacking the three chokepoints that make compute expensive (CPU licensing, frontier AI, and chip manufacturing IP) one leg at a time. It's aimed at America's most dominant industry, and it will probably make compute cheaper for everyone on earth."
---

The western compute empire is built on a three-legged stool, that probably became clear when integrated circuits were first used to decisively end the persian gulf war in 1991. Today some of these industries are some of the most profitable in the history of technology: the American semiconductor and AI stack. It is clear that China, whether deliberately or not, has made a choice to influence the american frontier labs by engaging in price warfare in the form of democratizing availability of frontier models by giving them away as open source software, _how communist_. Geopolitically this is a good move, you become the good guy while simultaneously putting the competition in a position to somehow have to oppose this. I've written about regulating this kind of open source software is generally unconstitutional and also [unproductive](https://davidaw.ad/posts/11-06-regulating-intelligence-is-dumb/). 

Anyhow, onto the three legs:

- **Frontier intelligence**: cheap, open-weight AI models instead of proprietary API models with high gross margins
- **CPU instruction set architecture**: RISC-V instead of ARM
- **PDKs**: the process design kits that enable the manufacturing of chips, currently the least discussed and most valuable chokepoint in the entire industry

Individually each leg chips at a Western monopoly. Together they add up to something much bigger than "China wants to compete in tech." They add up to a coordinated attack on the licensing, royalty, and trade-secret moats that make compute expensive for everyone on the planet, including you, me and the guy running a RAG pipeline out of his garage in Lagos. (I've met those founders!!) 

**The moats are really not about national security, and certainly not intellectual property. They are about rent-seeking and economic protectionism.** 


## Leg one: frontier intelligence you can just... download

If leg two is "stop paying ARM," leg two is "stop paying OpenAI and Anthropic," and it's moving even faster.

On January 27, 2025, Nvidia [lost $593 billion in market cap in a single trading session](https://markets.financialcontent.com/stocks/article/breakingcrypto-2026-1-12-the-deepseek-shock-how-ai-efficiency-shattered-the-crypto-market-in-2025) (the largest single-day loss in stock market history at the time) after DeepSeek open-weighted a reasoning model that matched OpenAI's o1 for a fraction of the assumed cost. That number got fuzzy in the retelling for a year, so it's worth noting DeepSeek [published the real figure in a peer-reviewed Nature paper in September 2025](https://www.nature.com/articles/d41586-025-03015-6): $294,000 to train R1 (on top of roughly $6M already spent on the base model), on 2,048 H800 GPUs, inference running about 30x cheaper than o1: $2.20 per million output tokens versus $60. That number is debated and 

**That was the shot across the bow. What's happened since is the battle.** Five serious Chinese labs are now shipping frontier-class open-weight models (DeepSeek, Alibaba's Qwen, Moonshot's Kimi, Zhipu's GLM, and ByteDance's Doubao) and as of July 2026 the gap with US frontier labs has [reportedly narrowed from "6-8 months" to "weeks"](https://www.axios.com/2026/07/16/moonshot-kimi-ai-china-model-openai-anthropic), with Moonshot's 2.8-trillion-parameter Kimi K3 landing #1 on a coding leaderboard the week I'm writing this. I'd treat any single "we're #1" claim from a July-2026-fresh benchmark with the appropriate grain of salt (leaderboards move weekly and everyone games them a little), but the progress is there. 

> It's important to remember that from the consumer perspective this is wonderful, and there's a very active scene of independent developers pioneering the path to getting frontier intelligence available on consumer and commodity hardware, engaging in all kinds of very unique [inference engineering](https://www.baseten.co/inference-engineering/). 

This strategy is working [Chinese open-weight models are now 41% of Hugging Face downloads](https://finance.biggo.com/news/309a4fab-5b28-4605-b0e0-e0ad42e5d3df) and [63% of OpenRouter's US token usage](https://finance.yahoo.com/technology/ai/articles/china-ai-models-capture-63-205130859.html), up from _under 10%_ a year earlier. DeepSeek V4 Flash runs about $0.14 per million input tokens against roughly $5.00 for a comparable US frontier model: a 35x difference. That's the entire unit economics of an API business getting demolished from below.

Zhipu's GLM-5 was [trained entirely on Huawei Ascend chips](https://medium.com/@mlabonne/glm-5-chinas-first-public-ai-company-ships-a-frontier-model-a068cecb74e3) (zero Nvidia dependency), which tells you the strategy is to make AI cheap *and* independent of any chip the US can put on an export control list. Xi Jinping said the quiet part at the World AI Conference in Shanghai this July, [launching the World AI Cooperation Organization](https://gizmodo.com/chinas-xi-jinping-wants-ai-to-be-open-to-the-world-and-out-of-americas-control-2000787023) with 29 member nations and 5,000 pledged AI training slots for the developing world: cheap, commoditized AI is good for China because China is, in his framing, "the manufacturer of the world." Give away the software, sell the hardware and the manufacturing underneath it. 


---

## Leg two: RISC-V, or, why pay ARM at all

This one is very underappreciated. There essentially hasn't been innovation within instruction set architectures in a very long time. x86 is essentially a pile of hacks, and it's technically still owned and licensed today. 

ARM's business model is a toll booth. License a core design for $1–10M upfront, then pay a royalty of 1–2% of the chip's sale price on the older ARMv8 architecture, 2–4.5% on ARMv9 ([SemiAnalysis breaks the math down in detail](https://newsletter.semianalysis.com/p/arm-and-a-leg-arms-quest-to-extract); more here from [ElectronicDesign](https://www.electronicdesign.com/technologies/embedded/article/21808309/arm-eases-upfront-licensing-fees-to-head-off-risc-v)). At 100 million units a year and a couple bucks of average royalty, that's roughly $200 million a year flowing to ARM Holdings for the privilege of using an instruction set. And ARM's internal "Picasso" project reportedly wants to push royalties up to $3–12 per device (something like a 24x increase), worth an estimated $5.4 billion in additional operating profit if it lands.

> Before you ask: no, ARM doesn't offer 24x more engineering for that money. The instruction set doesn't get better. You're paying rent on an idea, not licensing a new invention.

Now there are open source ISAs out there as well. RISC-V costs nothing. Zero licensing fee, zero royalty, open BSD-style license administered by a Swiss non-profit, [RISC-V International](https://jamestown.org/examining-chinas-grand-strategy-for-risc-v/), specifically so no single government can strangle it with export controls. 

China noticed the toll booth and decided to build around it, at the state level. In March 2025, eight separate Chinese government bodies (the Cyberspace Administration, the Ministry of Industry and Information Technology, the Ministry of Science and Technology, the National IP Administration, and four others) issued [nationwide guidance pushing RISC-V adoption](https://www.technology.org/2025/03/05/china-aims-to-elevate-risc-v-chip-adoption-with-nationwide-policy-push/), reportedly the first time any major power has designated an open-source hardware standard a national priority. China now holds [13 of the 25 premier seats in RISC-V International](https://jamestown.org/examining-chinas-grand-strategy-for-risc-v/) and something like half of global RISC-V core shipment volume, a legacy of the 2018 China RISC-V Alliance and explicit commitments in the 14th Five-Year Plan. 

The silicon backs it up. Alibaba's T-Head unit shipped the [XuanTie C930 in March 2025](https://www.theregister.com/2025/03/05/china_alibaba_risc_v_c930/): the first server-grade 64-bit multicore RISC-V processor, 6-decode-wide, 16-stage pipeline, a 256-bit vector unit, SPECint2006 north of 15 per GHz. See [Alibaba's notes on the release](https://www.scmp.com/tech/big-tech/article/3301620/how-alibabas-new-risc-v-chip-hits-mark-chinas-tech-self-sufficiency-drive), "the open-source model will help build an inclusive and collaborative global RISC-V ecosystem, making it the new engine for chip industry disruption." Tencent joined RISC-V International as a premier member ([paying up to $250K a year](https://www.scmp.com/tech/big-tech/article/3204265/tencent-joins-open-source-chip-design-community-risc-v-china-seeks-mitigate-impact-us-sanctions)) specifically after ARM restricted export of its high-end Neoverse V designs to Chinese chip firms. 

By one trade-press estimate RISC-V hit [25% of the global processor market by January 2026](https://markets.financialcontent.com/wral/article/tokenring-2026-1-2-risc-v-hits-25-market-share-the-rise-of-open-source-silicon-sovereignty) (I'd hold that specific number loosely, it's a single source and market-share figures in this space get restated aggressively), but the trendline is not in dispute. Forecasts from Omdia and others put RISC-V shipments at 16.2 billion units by 2030, a 44% compound annual growth rate off 1.3 billion in 2023. 

It's important to note though that RISC-V solves a *licensing* problem, not the *manufacturing* problem. Alibaba's earlier RISC-V chip, the XT910, was actually fabbed by TSMC. [Quote from SDxCentral](https://www.sdxcentral.com/news/is-risc-v-chinas-semiconductor-salvation/), "developing a whole new architecture is next to impossible." 

It's also important to say that making a performance competitive CPU or GPU is *extremely* hard, open source ISA or not, solving licensing absolutely is a hurdle, but the amount of branch optimization and architecture experimentation and simulation / verification is extremely hard. This is where companies like Cadence and Synopsys come in. Its my personal believe that AI will compress multiples on each piece of these moats, and there's open source versions of those design tools too. (Shout out to Professor Mohammad Shalan's lab in Egypt for his work on [Librelane](https://github.com/librelane/librelane))



Zooming out though again, as a consumer, breaking open the computing ISA stack for the world is great news. Having more manufacturers use open source architecture standards for chip design and an open source processing stack is a wonderful thing for industry and for innovation. Once again though it's a tricky position for the incumbents that have to manufacture arguments against open source which end up quite silly.

> “Communist China is developing open-source chip architecture to dodge our sanctions and grow its chip industry. If we don't broaden our export controls to include this threat, China will one day surpass us as the global leader in chip design.” - Senator Marco Rubio
- [There is a November 2, 2023 congressional letter signed by Marco Rubio and others formally asking Commerce to address RISC-V/open-source semiconductor technology.](https://chinaselectcommittee.house.gov/media/press-releases/gallagher-rubio-select-committee-members-urge-sec-raimondo-safeguard-american)

But the last piece of the puzzle is two sides of the same coin. Manufacturing compute at scale is incredibly difficult, even if the cpu instructions are open source, the fabrication instructions for the labs that fabricate chips are nearly all proprietary.

---

## Leg three: PDKs, the sleeping giant nobody's woken up yet

This is the leg I think is the most interesting, because almost nobody outside chip design knows what a PDK even is. A process design kit (PDK) is the bundle of device models, design rules, verified standard-cell libraries, and simulation decks that a foundry hands you so you can design a chip that its specific fab can manufacture. It's the interface between "I have a chip design" and "TSMC can build it." You cannot tape out a chip without one, you cannot get one without a very intense NDA and a separate Technology License Agreement: non-exclusive, non-transferable, no sublicensing, every modification you make to the licensed process reverts back to the foundry. To even get an NDA at this point you'd need a significant foundry relationship, and once you've built your whole design flow around a specific foundry's PDK, you are (effectively) that foundry's customer for the life of that product. It is very hard to switch as you'd be redesigning the entire chip.

That lock-in is bigger than most people assume. TSMC's own catalog of *certified IP* (pre-validated blocks that only work because they've been checked against a specific PDK) [grew from about 3,000 in 2010 to 93,000 in 2025](https://semiwiki.com/forum/threads/tsmcs-moat-revealed-93-000-certified-ips-build-a-hundred-billion-dollar-ecosystem-barrier.25488/), a 31x increase. That's the real moat: the decade-plus ecosystem of validated IP built on top of it. Porting a design off it doesn't just mean re-running design rule checks. It means rebuilding the whole EDA flow and re-validating every IP block from scratch: SemiAnalysis puts a single re-spin at an advanced node at **$50-100 million and 6-12 months**, 


Some other statistics for you;
- a full high-volume product migration to a different foundry at $2-5 billion along 2-3 years of degraded yield. 
- A full 5nm tape-out runs $300-500 million all-in before you've shipped a unit
- a 3nm mask set alone is $10-20 million; 
 Layer a Synopsys/Cadence/Siemens EDA trio that controls 70-85% of an $18 billion tool market on top of that, PDK certification per tool per node taking [one to three years](https://faxiangongchang.com/en/reports/china-industrial-software-2026), and you start to understand why, as one piece put it bluntly, ["the entire flow itself is the lock-in."](https://finance.biggo.com/news/6176e278-0d68-4ba7-a52f-7baa9148f15a) **PDKs are the single most valuable chokepoint in the entire semiconductor value chain and it's the one nobody's even trying to route around.**

Open PDKs aren't impossible, and they aren't even new: [until 2019, literally every commercially relevant PDK on earth was locked behind an NDA](https://chinatalk.media/p/holes-in-the-chip-design-software). Google and SkyWater broke that in 2020 with the first-ever open foundry PDK, SKY130 (still technically "experimental preview," per SkyWater's own docs, but it's produced hundreds of real chips through Google's shuttle program: 360 designs from over 600 submissions across 19 countries). Germany's IHP followed with an open, EU-funded 0.13µm SiGe PDK at 350 GHz transistor speed, and IHP separately holds the world record for silicon transistor speed at 720 GHz. GlobalFoundries' GF180MCU joined all of this under the Linux Foundation's CHIPS Alliance in 2023. These efforts prove the open model works, has real institutional backing, and lowers the barrier for anyone who doesn't need the bleeding edge. The problem is they're all stuck at process nodes from twenty years ago. This is nowhere near the 3-5nm frontier that matters for anything you'd want to run a real workload on.

** China's domestic EDA self-sufficiency only [crossed 10% in 2024](https://www.trendforce.com/news/2025/06/05/insights-chinas-eda-self-sufficiency-tops-10-in-2024-will-u-s-crackdown-boost-or-block-its-chip-push/), against Synopsys at 31% and Cadence at 30% of the global market that same year, which makes this, by a wide margin, the leg China is furthest behind on. SMIC's own PDK certification is explicitly named in industry analysis as *the* bottleneck standing between domestic Chinese EDA tools and broader adoption: even where a tool like Empyrean's claims 7nm or 5nm support, it reportedly "only covers part of the process." Empyrean's attempt to acquire Xpeedic and consolidate the domestic EDA sector collapsed in July 2025. Huawei's Kirin 9000S got designed by leaning on FinFET-compatible EDA tools already available domestically. 

Unfortunately on this axis, what China is building is yet another closed, proprietary domestic replica of the Western TSMC-plus-Synopsys stack. It's strange because the strategy is working so obviously on the other legs of the stool. 

RISC-V and frontier AI were the easy legs: open-source software and open-source-adjacent policy. PDKs require someone to give up an actual manufacturing trade secret at the leading edge. Right now China's own strategy says it would rather *rebuild the toll booth* than tear it down. Nobody has open-sourced a leading-edge PDK yet, not China, not anyone. But given that China just demonstrated it will spend a decade methodically dismantling every other chokepoint in this stack, including ones analysts called physically impossible (see lithography below, which happened this week). Betting that the most lucrative chokepoint stays standing closed forever seems like the wrong bet.

---

## The domino that fell this week

I'm writing this on July 28, 2026 which matters because two days ago China [began mass production of domestically-built immersion DUV lithography machines](https://www.tomshardware.com/tech-industry/semiconductors/china-begins-mass-production-of-domestic-immersion-duv-lithography-machines): roughly 5 units this year, 20 next, going to SMIC, Hua Hong, and CXMT. Lithography tools are a whole other "impossible" chokepoint everyone assumed China couldn't crack, because ASML has had a near-monopoly on advanced lithography for two decades. ASML's stock dropped 6-8% the day the news broke, which is the market pricing in exactly the thing I'm arguing here.

To be clear about the physics: this isn't EUV. It's DUV pushed through multi-patterning which costs accuracy: SMIC's 7nm process needs 34 lithography steps where an EUV process needs 9, yields around 20% versus TSMC's much better numbers, and a 40-50% cost premium. China has reached [35% domestic semiconductor equipment self-sufficiency in January](https://investor.wedbush.com/wedbush/article/tokenring-2026-1-21-china-reaches-35-semiconductor-equipment-self-sufficiency-amid-advanced-lithography-breakthroughs). It's a workaround that's shipping product to real fabs this year, and that's the whole point: leg three (PDKs) doesn't need a moonshot breakthrough either. It needs exactly this "worse, more expensive, but real and shipping" answer, and China has now demonstrated it's willing to grind that answer out three separate times.

---

## Why this is good for you

Here's the part that's easy to miss if you're only reading this as a US-vs-China story: **every one of these three moats functions as a tax on global compute, and every dollar of that tax gets paid by someone who is not ARM, not Synopsys, and not TSMC's shareholders.**

TSMC's gross margin went from [56.1% in 2024 to 66.2% in Q1 2026](https://www.macrotrends.net/stocks/charts/TSM/taiwan-semiconductor-manufacturing/gross-margin) (an insane number for a manufacturing business) on the back of 5-10% price hikes for AI/HPC customers and 20%+ increases on CoWoS packaging. ARM pulled [$4 billion in FY2025 revenue](https://newsletter.semianalysis.com/p/arm-and-a-leg-arms-quest-to-extract), $2.17B of it pure royalty, and is reportedly trying to raise that another 300%. Synopsys and Cadence together run 37-42% operating margins on a market where switching costs are engineered to be prohibitive. None of that money gets you a faster chip it only buys the seller pricing power on the substrate that every AI model, phone, and server on earth now depends on.

We've watched this movie before. Proprietary Unix (Solaris, AIX, HP-UX) ran the enterprise computing world at eye-watering margins for two decades, right up until Linux, license-free and running on commodity x86 hardware, made the whole category of "pay six figures for an operating system" look absurd. [Amazon's famous 2001 migration](https://tuxcare.com/blog/linux-evolution/) swapped $50K proprietary Unix boxes for commodity x86 running Linux and never looked back. Nobody remembers Solaris's pricing tiers anymore. **The moat wasn't defeated by a better technology, just a free one that was good enough when the market got tired of paying the toll.**

Chinese open-weight models don't need to beat GPT and Claude on every benchmark, they need to be 35x cheaper and good enough, and they are. And if PDKs go the same way (if some foundry, Chinese or otherwise, eventually does for chip manufacturing what SkyWater has), the price of manufacturing a chip stops being a function of how much rent TSMC can extract and starts being a function of how much silicon and electricity it costs.

---

## So is this bad for America?

It's bad for a specific slice of America: ARM's shareholders, Synopsys and Cadence's shareholders, and TSMC's pricing power. It's aimed at the most dominant, most profitable corner of the US economy (this is a deliberate, well-funded, multi-decade strategic play by a government that has been explicit about wanting to win it).

Cheaper compute means cheaper AI for a hospital in Uganda, cheaper chips for a university lab in São Paulo, one fewer six-figure EDA license standing between a kid with a good idea and a taped-out chip. China just happens to be the first actor with the state capacity, the domestic demand, and the sanctions-driven motivation to run the argument at the scale of an entire industry, three chokepoints deep, in under five years.

It's net good for America because we have free market, as long as they're freed up to compete on this battleground.
