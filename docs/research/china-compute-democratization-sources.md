# SOURCE FILE — NOT FOR PUBLICATION

Raw research dump for the blog post "China's roadmap to democratizing compute
for the world." Gathered by 6 parallel haiku subagents (web search + fetch),
July 28 2026. This file is citation scaffolding only — do not publish as-is.
Fact-check anything with a specific number before it goes in the final post;
some of these are single-sourced trade-press claims from a fast-moving story.

---

## LEG 1 — RISC-V (open CPU ISA)

**#1 — The licensing math.** ARM: $1–10M upfront + 1–2% royalty (ARMv8),
2–4.5% (ARMv9). At 100M chips/yr and ~$2 avg royalty ≈ $200M/yr to ARM
Holdings. ARM's internal "Picasso" project reportedly seeks up to 300% fee
increases (~$3–12/device, ~24x current rate), worth an estimated +$5.4B
operating profit. RISC-V: zero licensing, zero royalty, BSD-style license via
the Swiss non-profit RISC-V International.
Sources: technology.org (Mar 5 2025); electronicdesign.com; SemiAnalysis
"Arm and a Leg" (newsletter.semianalysis.com/p/arm-and-a-leg-arms-quest-to-extract, 2025);
androidheadlines.com (Jan 2025).

**#2 — Eight-agency Chinese policy push (Mar 2025).** Eight government bodies
(Cyberspace Administration, MIIT, Ministry of Science & Technology, National
IP Administration + 4 more) issued nationwide RISC-V adoption guidance —
reportedly the first time a major power designated open-source hardware a
national-security priority. Source: technology.org, Mar 5 2025
(https://www.technology.org/2025/03/05/china-aims-to-elevate-risc-v-chip-adoption-with-nationwide-policy-push/);
corroborated in Asia Times, Mar 2025 (https://asiatimes.com/2025/03/china-all-in-on-risc-v-open-source-chip-design/).

**#3 — Alibaba XuanTie C930 (Feb–Mar 2025).** First server-grade 64-bit
multi-core RISC-V CPU: 6-decode, 16-stage pipeline, RVA23 profile, 256-bit
vector unit, SPECint2006 >15/GHz. Shipping since March 2025; licensable to
other IC vendors for datacenter/AV use. Sources: The Register, Mar 5 2025
(https://www.theregister.com/2025/03/05/china_alibaba_risc_v_c930/); SCMP, Mar
2025 (https://www.scmp.com/tech/big-tech/article/3301620/how-alibabas-new-risc-v-chip-hits-mark-chinas-tech-self-sufficiency-drive);
Tom's Hardware, Mar 2025.
Quote (Alibaba T-Head, via SCMP): "The open-source model will help build an
inclusive and collaborative global RISC-V ecosystem, making it the new engine
for chip industry disruption."
Note: earlier Alibaba RISC-V silicon (XT910) was fabbed by TSMC — the ISA is
open, the fab dependency is not.

**#4 — 25% global processor market share (Jan 2026).** RISC-V reportedly hit
25% of the global processor market by Jan 2026, "ending the x86/ARM duopoly."
China: 13 of 25 RISC-V International premier members; ~50% of global RISC-V
core shipment volume. Source: TokenRing/markets.financialcontent.com, Jan 1–2
2026 (single trade-press source, treat the "25%" figure as a claim, not a
verified market-research number); Jamestown Foundation, 2024–25
(https://jamestown.org/examining-chinas-grand-strategy-for-risc-v/) —
independently corroborates the "13 of 25 premier members" figure and cites
China's 2018 RISC-V Alliance + 14th Five-Year Plan commitments, 300+ Chinese
RISC-V companies.

**#5 — Growth forecasts.** SHD Group/Omdia: 16.2B RISC-V SoC units by 2030
(44% CAGR) vs 1.3B in 2023. Market value: $1.31–2.49B (2025) → $9–10.7B
(2030). Sources: gminsights.com/industry-analysis/risc-v-market;
tomshardware.com (RISC-V AI-boost forecast piece).

**#6 — Tencent joining as premier member.** Paying up to $250K/yr to join
RISC-V International after ARM restricted export of its advanced Neoverse V
designs to Chinese firms — explicit sanctions-evasion motive. Source: SCMP
(https://www.scmp.com/tech/big-tech/article/3204265/tencent-joins-open-source-chip-design-community-risc-v-china-seeks-mitigate-impact-us-sanctions).

**#7 — StarFive "Lion Rock" chip (Nov 2025).** Hong Kong–backed StarFive
launched what's described as the first RISC-V data-center management chip;
full-scale production targeted Q1 2026. Sources: SCMP, Nov 28 2025; DigiTimes,
Nov 19 2025.

**#8 — Xiangshan / openRuyi (Mar 2026, Zhongguancun Forum).** Chinese Academy
of Sciences unveiled Xiangshan, an open-source RISC-V processor design, and
openRuyi, a native OS. CAS's Bao Yungang called it "the most powerful
open-source RISC-V processor in the world" — SPEC CPU2006 16.5 points/GHz.
600+ hardware / 400+ software researchers; 27,000+ program participants
across 1,100+ universities. Source: China Daily, Mar 26 2026
(https://www.chinadaily.com.cn/a/202603/26/WS69c54702a310d6866eb4016e.html) —
note this is a state-affiliated outlet; treat superlative claims ("most
powerful in the world") as promotional framing, cite the concrete numbers.

**#9 — Android/Ubuntu on RISC-V (2026).** Alibaba ported Android 16 to
RISC-V (The Register, May 27 2026). Canonical's Ubuntu 26.04 LTS is the first
LTS to target RVA23 RISC-V. Realistic consumer-device arrival still years out
per most analysts despite the momentum.

**#10 — The honest caveat (important for the post).** SDxCentral, 2025
(https://www.sdxcentral.com/news/is-risc-v-chinas-semiconductor-salvation/):
RISC-V solves ISA/licensing independence, NOT fab independence. SMIC only
recently reached ~14nm domestically; Alibaba's own early RISC-V chip was
fabbed on TSMC silicon. "Developing a whole new architecture is next to
impossible" — the ISA is the easy part of the stool; manufacturing is the
hard part (this is the connective tissue to Leg 3/DUV below).

---

## LEG 2 — Frontier intelligence (China's AI models)

**#1 — DeepSeek R1 economics.** Peer-reviewed in Nature (Sept 2025): trained
for $294K (excluding the ~$6M base model run), matched o1-class reasoning,
inference ~30x cheaper ($2.20 vs $60 per million tokens). 2,048 H800 chips,
55-day pretrain.

**#2 — The "DeepSeek moment" (Jan 27 2025).** Nvidia lost ~$593B in market
cap in a single day — reportedly the largest single-day stock loss in market
history — after R1's open-weight release reset assumptions about how much
capital/compute a frontier model needs.

**#3 — Kimi K3 (Jul 16 2026).** Moonshot's ~2.8T-param open-weight model
reported to trade blows with Claude-class frontier models, #1 on a coding
leaderboard; framed as narrowing the US-China frontier gap from "6-8 months"
to "weeks." (Single-source trade claim — treat leaderboard-topping claims
cautiously in the final draft, attribute to the benchmark/outlet.)

**#4 — Open-weight market share.** Chinese models reportedly = 41% of
Hugging Face downloads and 63% of OpenRouter US token usage (vs <10% a year
prior); DeepSeek alone ~17.6% of OpenRouter traffic.

**#5 — Price war.** DeepSeek V4 Flash ~$0.14/M input tokens vs GPT-class
~$5.00/M (~35x cheaper) — cost, not benchmark supremacy, is the primary
adoption lever globally.

**#6 — Domestic-silicon independence.** Zhipu's GLM-5 reportedly trained
entirely on Huawei Ascend chips (zero Nvidia). Meituan's LongCat-2.0 (1T
params) reportedly trained on a 50K domestic-chip cluster (Jun 2026) — model
efficiency + domestic silicon as the workaround for export controls.

**#7 — Xi Jinping framing (Jul 17 2026, Shanghai / WAICO launch).** Reported
framing: cheap, commoditized AI helps China as "the manufacturer of the
world"; WAICO (World AI Cooperation Organization) launched with 29 nations,
5,000 AI training slots pledged to developing countries — explicit
soft-power/compute-democratization framing from Beijing itself, useful as a
direct tie to the post's thesis.

**#8 — The field, mid-2026.** Five active frontier labs: DeepSeek
(cost/reasoning), Alibaba Qwen (multimodal, ~$2.50/M tokens), Moonshot Kimi
(long-context), Zhipu/Z.ai GLM (agentic, Ascend-native), ByteDance Doubao
(~200M users, ~$0.47/M tokens).

Caveat: several of the 2026 figures (Kimi K3, WAICO, LongCat cluster size)
come from trade press / single sources close to the event and should be
hedged ("reportedly," "according to X") rather than stated as flat fact.

---

## LEG 3 — PDKs (process design kits) — the sleeping giant

**What a PDK is.** Bundle of device models, design rules, verified standard
cell libraries and simulation decks a foundry issues so chip designers can
target its specific process node. Functionally: the proprietary interface
between "I have a chip design" and "TSMC/Samsung/Intel can manufacture it."

**#1 — Lock-in cost, sourced.** SemiAnalysis ("Apple-TSMC: The Partnership
That Built Modern Semiconductors," 2025) and related SemiAnalysis pieces put
full re-design + re-qualification to move a high-volume part to a new
foundry's process at **$2–5B** and **2–3 years** of inferior yield while the
new process matures. Full 5nm tape-out (EDA + IP + masks + verification +
NRE): **$300–500M+**. Mask sets alone at 3nm: **$10–20M**. This is the
"switching cost" that makes TSMC's PDK a moat, not just a spec sheet.
Sources: newsletter.semianalysis.com/p/apple-tsmc-the-partnership-that-built;
newsletter.semianalysis.com/p/the-dark-side-of-the-semiconductor-design-renaissance
(2025); capitalblueprint.substack.com TSMC deep-dive (2025).

**#2 — Open PDK precedent (proof it's technically possible).** Google +
SkyWater open-sourced a 130nm CMOS PDK in 2020 (no NDA required). IHP
(Germany, Fraunhofer) released an open 130nm/180nm PDK and, per IHP's own
2026 announcement, a fully open "Assembly Design Kit" — permissive license,
no NDA, no RAND terms, no membership fee. GlobalFoundries' gf180mcu followed.
All of these are stuck at legacy nodes (130-180nm) — nowhere near the 3-5nm
leading edge — but they prove the open-PDK model works and lowers the barrier
to entry for small teams who'd otherwise need an NDA and foundry relationship
just to start a layout.
Sources: ihp-microelectronics.com (2024, 2026); Google/SkyWater sky130
announcement (2020).

**#3 — Important correction — verify before publishing.** Extensive search
found **no credible reporting that SMIC, Hua Hong, CXMT, or the Chinese
government have announced an open-source or non-proprietary PDK
initiative.** This is a real gap, not an oversight — it was checked
specifically. What exists instead:
  - Chinese domestic EDA vendors (Empyrean Technology ~$168M revenue,
    Primarius, Semitronix) have grown fast since the June 2025 US export
    controls cut off Synopsys/Cadence access, capturing an estimated ~$1.8B
    of displaced tool spend — but they are building **proprietary**
    replacement tools, not open standards, and don't yet compete with
    Synopsys/Cadence at the leading edge (GAA, 3nm+).
    Sources: SCMP, 2025 (scmp.com/tech/article/3322366 and 3315237);
    TrendForce, Jun 2 2025 (trendforce.com/news/2025/06/02); ITIF, Aug 2024.
  - A minor private Chinese firm (ICsprout) released a 55nm open PDK
    (ICS55) — a real data point, but a small private effort, not a
    foundry- or state-level strategy.
  **Framing implication for the post: PDKs should be pitched as the
  logical/predictable NEXT domino — the move nobody has made yet but that
  the RISC-V and DUV playbook obviously points toward — not as a confirmed
  Chinese government initiative. This is actually a stronger, more honest
  argument than overclaiming: "here's the chokepoint nobody's touched yet,
  and here's why the incentives line up for someone to."**

**#4 — Why PDKs have seen so little disruption.** Structural reasons, per
SemiAnalysis's EDA market primer (2024-25): Synopsys + Cadence hold
65-85% of the ~$18B EDA market, 95%+ customer retention, 37-42% operating
margins, driven by sequential tool lock-in (switching one tool in the flow
forces re-running every downstream step) and foundries contractually
mandating specific EDA tools for tape-out. EDA licensing alone runs
$1-5M/year per engineering team — often a startup's first check written,
before a single chip is taped out. Source:
newsletter.semianalysis.com/p/eda-market-primer.

**#5 — UPDATE (late-arriving, deeper sourcing) — the real headline stat.**
Three follow-up subagents (dispatched to fill exactly the gaps flagged above)
came back with sharper numbers than #1-4. Use these as the primary citations
for the PDK section; they supersede/sharpen, don't contradict, what's above.

- **The actual moat, per SemiAnalysis (pub. Jul 8 2026, quoted via SemiWiki
  Jul 10 2026 and BigGo Finance):** it's not the PDK document itself, it's
  the certified-IP ecosystem built on top of it. TSMC's certified IP catalog
  grew from **~3,000 items (2010) to 93,000 (2025) — a 31x increase**. Every
  one of those IP blocks is pre-validated against TSMC's specific PDK;
  porting a flagship design to another foundry means rebuilding the EDA
  toolchain AND re-validating IP from scratch. Direct quote: "the entire
  flow itself is the lock-in." A single re-spin at an advanced node runs
  **$50-100M and 6-12 months** — that's the real switching cost, sharper
  than the $2-5B/2-3yr figure in #1 (which was about a full high-volume
  product move, not a single re-spin).
  Sources: semiwiki.com/forum/threads/tsmcs-moat-revealed-93-000-certified-ips
  (Jul 10 2026); finance.biggo.com summary of the SemiAnalysis Jul 8 2026
  piece (biggo.com/news/6176e278-0d68-4ba7-a52f-7baa9148f15a) — primary
  SemiAnalysis article is paywalled, verified via these two secondary quotes.

- **TSMC PDK access mechanics, sourced.** Requires a signed Technology
  License Agreement *in addition to* an NDA (2-4 week NDA timeline).
  Non-exclusive, non-transferable, no sublicensing, all fab must be done by
  TSMC, any customer modifications to licensed tech revert to TSMC —
  confirmed via a real 2011 TSMC/Ambiq Micro Master Technology License
  Agreement on file at Justia. TSMC PDK certification for a given
  tool/node takes **1-3 years**. Sources: contracts.justia.com (TSMC/Ambiq
  Micro MTLA); Tianxia Gongchang Research "Software for a Nation" 2026
  report (faxiangongchang.com/en/reports/china-industrial-software-2026).

- **Granular cost ladder (Silicon Analysts "Foundry Engagement Guide," pub.
  Jun 2026, siliconanalysts.com/guide/foundry-engagement):** mask sets —
  180nm ~$100K, 28nm $800K-1.5M, 7nm(EUV) $3-5M, 5nm $5-8M, 3nm $10-20M
  (matches #1). EDA tool licensing: small team $200-500K/yr, 7nm+ team
  $500K-1M+/yr. Total NRE: 28nm $1.4-3.4M, 5nm $7.3-20.5M+. Wafer pricing:
  28nm ~$3,000, 7nm ~$9,500, 5nm ~$18,500, 3nm ~$19,500 (300mm wafer).

- **Open-PDK precedent, more precisely sourced.** SkyWater SKY130 (Google
  partnership, first open foundry PDK, Apache-2.0) is still officially in
  "experimental preview / alpha," not certified for production, per
  SkyWater's own docs (skywater-pdk.readthedocs.io/en/main/status.html) —
  used for education/research and hundreds of real tapeouts, but not a
  drop-in TSMC-grade replacement. IHP's SG13G2 (0.13um SiGe:C BiCMOS,
  Germany, EU-funded) hits 350 GHz fT and IHP separately holds a
  silicon-transistor world record of 720 GHz fmax — genuinely
  leading-edge for RF/analog even at a "legacy" node, Apache-2.0,
  early-access only. GF180MCU (GlobalFoundries + Google, Aug 2022,
  Apache-2.0) joined the **Linux Foundation's CHIPS Alliance in Nov 2023**
  and is now under the FOSSi Foundation — real institutional governance,
  not a hobby project. Google's open shuttle program has manufactured
  **360 designs from 600+ submissions across 19 countries** since 2019.
  Sources: github.com/google/skywater-pdk; github.com/IHP-GmbH/IHP-Open-PDK;
  ihp-microelectronics.com (720 GHz fmax record); opensource.googleblog.com
  (Aug 2022, Oct 2022, Nov 2023 posts); github.com/fossi-foundation/gf180mcu-pdk;
  linux-magazine.com "Changing the Chip Industry" (360 designs/600+ submissions).

- **Why PDKs stayed closed until 2019 at all, precisely.** Direct quote via
  ChinaTalk (chinatalk.media/p/holes-in-the-chip-design-software): "until
  2019, all the commercially relevant PDKs in the world were under license
  and NDA." SkyWater 130nm (2020) was the first ever open one. Root causes:
  (1) PDKs encode the foundry's actual manufacturing process IP; (2)
  foundries update PDKs frequently and only support the latest version,
  which doubles as anti-piracy — an out-of-date PDK at tape-out flags a
  pirate immediately; (3) Cadence Virtuoso PDKs are written in Cadence's
  proprietary SKILL language, unreadable by other tools — TSMC's Open
  Innovation Platform certifies only Cadence/Synopsys/Siemens, so advanced-
  node access runs exclusively through those three; (4) a standardization
  effort to fix this (IPL Alliance's "iPDK," Python-based, TSMC-backed) never
  displaced SKILL, partly because a rival Si2/OpenAccess effort was seen as
  too Cadence-friendly to trust. IEEE is now trying again with a real
  standard, P3733 "Universal Foundry PDK" (standards.ieee.org/ieee/3733/12362),
  but it standardizes *packaging/format*, explicitly not disclosure of
  proprietary process content — i.e., even the standardization effort isn't
  trying to make PDKs open, just less duplicative to produce per EDA vendor.
  Market shares as of 2026: Synopsys + Cadence + Siemens EDA = 70-85% of
  global EDA revenue; TSMC ~70% of global foundry market (Q1 2026), per
  shashi.co (2026-07-22).

- **China's PDK/EDA reality, independently re-confirmed and sharpened.**
  Second pass found the same "no open PDK" result as #3 above, plus real
  texture on what China is doing instead — and it's the opposite of open:
    - China's domestic EDA self-sufficiency crossed just **10% in 2024**
      (Synopsys 31% / Cadence 30% / Siemens 13% of global share that year).
      Contrast this explicitly in the post against RISC-V's ~50% global
      shipment share and DUV's 35% equipment self-sufficiency — PDK/EDA is
      the leg China is furthest behind on, not the leg that's quietly ahead.
      Source: TrendForce, Jun 5 2025 (trendforce.com/news/2025/06/05/insights-
      chinas-eda-self-sufficiency-tops-10-in-2024).
    - Made in China 2025 targeted 70% overall semiconductor self-sufficiency;
      independent analyst estimate is ~30% actually achieved by end-2025;
      equipment self-sufficiency specifically was ~13.6% in 2024 vs a 50%
      target. Source: Tom's Hardware, "The State of China's Decade-Long
      Semiconductor Push — Still a Decade Behind."
    - SMIC PDK certification is explicitly named as THE bottleneck for
      broader domestic EDA adoption — "the path to broader domestic
      analog-EDA adoption runs through more foundry PDK certifications
      (especially SMIC's various nodes)." Even where Chinese EDA tools
      (Empyrean, Primarius) claim 7nm/5nm support, they reportedly "only
      cover part of the process" — no complete end-to-end domestic digital
      flow exists yet. Source: Tianxia Gongchang Research 2026.
    - No evidence found of any Chinese acquisition of a foreign EDA/PDK
      vendor, and no evidence of Chinese firms partnering with or
      contributing to the open-PDK projects (SkyWater, IHP, OpenROAD).
      Empyrean's attempted acquisition of Xpeedic (a domestic, not foreign,
      EDA firm) was announced Mar 2025 and collapsed Jul 2025 — a signal of
      friction in China's own EDA consolidation, not momentum.
      Sources: DigiTimes, Mar 18 2025 + TrendForce, Jul 10 2025.
    - Huawei's Kirin 9000S (7nm, SMIC N+2) was designed using FinFET-
      compatible EDA tools already accessible domestically plus ~10-year EDA
      licenses bulk-procured before the 2019 embargo — a workaround, not
      evidence of a new open ecosystem. Source: FPT Semiconductor analysis;
      corroborated by DigiTimes, Oct 2023.
    - Direct, on-the-record confirmation: China's own open-source hardware
      push is explicitly RISC-V (the ISA), not PDKs. CAS/Zhongguancun Forum
      claims "a complete RISC-V ecosystem" — nothing analogous is claimed for
      PDKs anywhere in Chinese state media. Source: Chinese Academy of
      Sciences, Mar 30 2026 (english.cas.cn/newsroom/cas-in-media/202603/
      t20260330_1154281.shtml).
  **This sharpens, doesn't change, the framing guidance from #3: PDK/EDA is
  the one leg where China is verifiably furthest behind (10% self-sufficiency
  vs ~50% on RISC-V, ~35% on lithography equipment) AND the one where its
  current strategy is to rebuild the closed Western model domestically, not
  leapfrog it with an open one. That's a more interesting and more honest
  post than claiming otherwise — it means the "PDK domino" is a prediction
  about incentives, not a trend already in motion.**

---

## CONNECTIVE TISSUE — DUV lithography (why Leg 3 matters strategically)

Not one of the three named legs, but the fastest-moving, most recent story
and useful as evidence the "stool" metaphor is playing out in real time.

**#1 — BREAKING, this week (Jul 27 2026).** China began mass production of
domestically-built immersion DUV lithography tools — ~5 units in 2026, ~20 in
2027, first customers SMIC, Hua Hong, CXMT. Maker: Shanghai Yuliangsheng
(ties to Huawei/SiCarrier); SMIC began testing in Sept 2025. Targets 28nm
natively but reaches 7nm/5nm via multi-patterning at lower yield. Triggered a
6-8% single-day drop in ASML's stock — the market treating this as a credible
threat to ASML's near-monopoly.
Sources: The Information via roic.ai, Jul 27 2026; Tom's Hardware, Jul 27
2026 (tomshardware.com/tech-industry/semiconductors/china-begins-mass-production-of-domestic-immersion-duv-lithography-machines);
fxleaders.com, Jul 27 2026 (ASML stock reaction).

**#2 — Self-sufficiency milestone.** China reached 35% semiconductor
equipment self-sufficiency by Jan 2026 (up from ~25% two years earlier),
hitting Beijing's original 2025 target. Source: Wedbush/financialcontent.com,
Jan 21 2026.

**#3 — The multi-patterning workaround, quantified.** SMIC's 7nm needs 34
lithography steps vs. 9 with EUV; 5nm yields ~20% vs. TSMC's EUV-based
equivalent; 40-50% cost premium over TSMC. China legally acquired ~90 ASML
NXT:1980Fi DUV machines in 2024 (~$5-7B, ~20-25% of the global installed
base) before restrictions tightened. Source: AEI/Abhishek Gautam, Apr 2026.

**#4 — EUV timeline.** A domestic EUV light-source prototype is running in a
Shenzhen lab (not yet producing chips); government target 2028, outside
estimate 2030. Two competing approaches (solid-state laser + tin droplets vs.
laser-induced discharge plasma) — current output ~100W vs. ASML's ~600W.
Source: Asia Times, Dec 2025.

---

## ECONOMICS — the rent-seeking argument

**#1 — TSMC margins.** Gross margin: 56.1% (2024) → 59.9% (2025) → 66.2%
(Q1 2026, record high); Q2 2026 guidance 65.5-67.5%. 2025 price hikes: 5-10%
on N4/N5 for AI/HPC customers; CoWoS/HBM packaging +20% over 2-3 years. AI
chips ~1/3 of TSMC revenue by mid-2026. Sources: TSMC Q1 2026 SEC filing;
Yahoo Finance, Jan 2026; macrotrends.net.

**#2 — ARM's take.** FY2025 revenue $4.007B (+24% YoY): $1.839B licensing +
$2.17B royalties (v9 royalties +27% YoY). Typical smartphone royalty ~$0.50/
unit; at 1B+ units/yr that's $500M+/yr in extraction from one product
category alone. "Picasso" project (per SemiAnalysis) reportedly targets up to
300% fee increases. Source: ARM FY2025 annual report;
newsletter.semianalysis.com/p/arm-and-a-leg-arms-quest-to-extract.

**#3 — EDA duopoly.** Synopsys + Cadence = 65-85% of an ~$18B market;
Cadence 42.5% operating margin, Synopsys 37.3% (2024); 95%+ retention.
$1-5M/yr per team just for tool licenses — a structural tax on anyone trying
to enter chip design. Source: newsletter.semianalysis.com/p/eda-market-primer.

**#4 — Global semiconductor IP licensing market.** $7.5B (2024) → $11.2B
(2029E), 8.5% CAGR; ~70% of that is per-unit royalty revenue. Source:
Valuates Reports, 2024.

**#5 — Historical analogy: Linux vs. proprietary Unix.** Late 1990s-2000s,
Linux displaced expensive proprietary Unix (Solaris/AIX/HP-UX) on commodity
x86 hardware — commonly cited ~60% cost reduction for migrators (e.g.
Amazon's 2001 migration, trading $50K Unix boxes for commodity x86). Direct
structural analogy: open ISA + open PDK doing to ARM + Synopsys/Cadence what
Linux did to proprietary Unix vendors. Source: tuxcare.com; multiple Linux
history retrospectives (2024).

**#6 — x86 as a cautionary tale in the other direction.** Unlike ARM's
transparent per-chip royalty, x86 licensing rents were historically embedded/
opaque (Intel-AMD cross-license born of a 1991 antitrust settlement that gave
AMD a royalty-free x86 license worth far more than the $10M cash award). x86
license rigidity is a big part of why x86 got locked out of mobile — ARM's
flexible licensing ate that whole market. Useful as evidence that closed IP
regimes eventually lose out to more open/flexible ones when a big enough
market segment needs low cost + customizability.

---

## Fact-check flags before publishing

- Several 2026 (i.e., "future relative to training") figures are single or
  thinly-sourced trade-press claims (Kimi K3 benchmark topping, "25%
  global RISC-V market share," WAICO 29-nation figure, LongCat cluster size).
  Hedge these ("reportedly," "according to X") rather than stating as flat
  fact.
- Do NOT claim China has an active open-PDK strategy — verified false/
  unconfirmed. Frame PDKs as the obvious next move given the pattern, not a
  thing that's already happening.
- China Daily / state-media-sourced claims (Xiangshan "most powerful in the
  world") should be attributed to the source, not repeated as neutral fact.
