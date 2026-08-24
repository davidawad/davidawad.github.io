---
author: David Awad
pubDatetime: 2026-08-02T12:00:00Z
title: "The legal infrastructure of the new world: a gas city for law practice"
postSlug: 8-2-gas-city-for-law-practice
featured: false
draft: true
tags:
  - law
  - legal-tech
  - ai
  - agents
  - compute
description: "In 1887 free natural gas turned a 150-person Indiana crossroads into a factory town of 4,000 almost overnight. Frontier intelligence is about to do the same thing to law practice, and I want to sketch out the factory floor before someone builds it badly."
---

In 1887, a bunch of Indiana farmers looking for water hit a gas pocket instead, and within three years the state had 162 factories running on gas that cost the manufacturer nothing. One of those towns, a 150-person crossroads called Harrisburg, grew to 4,000 people in eight years and renamed itself, with admirable lack of poetry, Gas City. That's the setup. I'll get to the punchline (it burns down) in a minute, but I want you to sit with the first part first, because I think the legal industry is standing exactly where Harrisburg stood in 1886, and almost nobody's noticed yet.

This is a draft. I'm thinking out loud here the same way I did with [the China compute post](/posts/7-28-china-compute-democratization), so treat this as a thesis I'm still stress-testing, not a finished argument.

---

## The actual gas boom, briefly, because it's a good story

Natural gas was discovered in Indiana in 1876, by coal miners who were drilling for coal, got 600 feet down, and hit something that made a loud noise and smelled awful ([American Oil & Gas Historical Society](https://aoghs.org/petroleum-pioneers/indiana-natural-gas-boom/)). Nobody did anything with it for a decade. Then in 1886 a commercial well went in at Eaton and threw flames ten feet into the air, and the state figured out what it was sitting on: the Trenton Gas Field, a 2,500-mile formation stretching from Indiana into Ohio, producing something like 40 billion cubic feet a year at its 1890 peak.

Towns didn't just sell the gas. They gave it away. Portland, Indiana organized the Manufacturers' Gas & Oil Company for the explicit purpose of handing manufacturers free gas as a relocation incentive ([Indiana History Blog](https://blog.history.in.gov/tag/gas-belt/)). By 1890 the "Gas Belt" had 162 factories and over 10,000 jobs, including 21 glass factories that existed *specifically* because glassmaking needs enormous, constant heat and here was a town handing that heat out for nothing. Gas City itself went from 150 people to 3,622 by 1900, a 25x jump in a decade ([Wikipedia](https://en.wikipedia.org/wiki/Gas_City,_Indiana)).

Then the gas ran out. By 1902 well pressure had collapsed across the field. By 1913 Indiana was *importing* gas from West Virginia. In Gas City, only two of the boom-era factories survived long enough to matter, Thompson Bottle Works and United States Glass, and even those two didn't make it past the 1980s ([Grokipedia](https://grokipedia.com/page/Gas_City,_Indiana)).

Here's why I'm telling you this. **The gas boom wasn't a story about gas. It was a story about what happens when the marginal cost of a critical input drops to zero inside an industry that had never priced anything at zero before.** Glass manufacturing didn't get better technology in 1887. It got the same technology at a radically different price, and an entire regional economy reorganized itself around that price for about fifteen years before the underlying resource ran out and the reorganization had to survive on its own.

That's what's happening to law right now, except the free resource isn't gas. It's tokens.

---

## The free gas is intelligence, and it's already flowing

I wrote at length about [why frontier intelligence is getting radically cheaper](/posts/7-28-china-compute-democratization), so I won't re-run the whole argument here, just the number that matters for this post: DeepSeek V4 Flash runs about $0.14 per million input tokens against roughly $5.00 for a comparable US frontier model, a 35x gap, and Chinese open-weight models are already 63% of OpenRouter's US token usage. Whatever you think of the geopolitics, the effect on the ground is the same effect free gas had on 1887 Indiana: **the cost of the input that used to gate an entire category of production just fell off a cliff.**

Now look at what that input is gating in law. Senior BigLaw associates are billing over $1,000 an hour, third-year associates at 16 firms already cross that line, and partners at the top of the market are billing $3,000 to $4,000 an hour ([Above the Law](https://abovethelaw.com/2026/02/meet-the-4000-hr-biglaw-partners/), [Legal.io](https://www.legal.io/articles/5795605/BigLaw-Billing-Rates-Surge-Past-3-400-an-Hour-as-Partner-Fees-Hit-New-Records)). Most of what generates those hours is not judgment. It's *production*: finding the precedent, drafting the first pass of the motion, checking whether the case you're citing is still good law, organizing discovery, summarizing a deposition transcript. That's the glassmaking of the legal industry, energy-intensive, repetitive, and, it turns out, extremely amenable to a resource that just got 35x cheaper.

Harvey is already charging $1,200-$2,000 a seat for agentic legal workflows, Thomson Reuters' CoCounsel passed a million users across 107 countries in February 2026, and the "defining technical shift of 2026," per the trade press, is AI that "plans, acts, and evaluates across multi-step work" instead of just answering a single prompt ([GC.ai](https://gc.ai/blog/harvey-vs-cocounsel), [Modern Counsel](https://modern-counsel.com/2026/what-harveys-latest-growth-reveals-about-the-state-of-legal-ai/)). That's the tell. Nobody's shipping "a chatbot for lawyers" anymore. They're shipping a *workflow*, which means somebody, somewhere, is already sketching an org chart. I want to sketch mine.

---

## The factory floor

If cheap intelligence is the free gas, a law practice isn't one machine, it's a factory with stations, the same way a glass plant has a furnace, a gatherer, a blower, and an annealing oven. Here's my first pass at the floor plan, one agent per station, each one named for the actual person that station used to belong to:

| Station | Role |
| --------------- | ------------------------------------------- |
| Barrister | Primary legal reasoning and strategy |
| Clerk | Document preparation and drafting |
| Archivist | Precedent search and firm knowledge retrieval |
| Shepard | Citation verification, is this case still good law |
| Bailiff | Enforces workflow rules and deadlines |
| Court Reporter | Summarizes meetings, hearings, depositions |
| Paralegal | Intake, discovery, organization |
| Judge | Final quality gate before anything gets filed |
| Courier | Client communication and filing |
| Registrar | Storage, versioning, and access across the document repository |

A few of these need explaining, because the names aren't cute, they're doing real work.

**Shepard** is named after Frank Shepard, who in 1873 started publishing citators listing every later case that cited, questioned, or overruled a given decision, a practice every law student still calls "Shepardizing" whether or not they've ever touched an actual Shepard's volume ([Cornell Wex](https://www.law.cornell.edu/wex/shepards_citations)). This is not a decorative station. It is, right now, the single most litigated failure mode of the entire AI-in-law transition. As of April 2026, researchers have logged 1,313 court proceedings where AI-generated fabricated cases, invented citations, or fake quotes got filed with a court, 496 of them by licensed attorneys ([Sterne Kessler](https://www.sternekessler.com/news-insights/insights/ai-ip-year-in-reviewai-hallucinations-in-court-filings-and-orders-a-2025-review-of-sanctions-across-the-courts-and-rule-proposals/)). This started with *Mata v. Avianca* in 2023, where a lawyer's brief cited six cases ChatGPT had simply invented, including one with legal analysis the judge described as "gibberish," and it got the lawyers a $5,000 sanction and a public order to write letters of apology to judges who never wrote the fake opinions attributed to them ([LegalClarity](https://legalclarity.org/what-happened-in-the-mata-v-avianca-case/)). It has not stopped since. The Sixth Circuit sanctioned attorneys over it as recently as March 2026, and a single case, *Lacey v. State Farm*, cost two firms $31,000 in fees after 9 of 27 citations in one brief turned out to be wrong and two cases didn't exist at all ([LawSites](https://www.lawnext.com/2025/05/ai-hallucinations-strike-again-two-more-cases-where-lawyers-face-judicial-wrath-for-fake-citations.html)). If your factory floor doesn't have a dedicated station whose entire job is "verify this citation actually exists and is still good law before anything downstream touches it," you don't have a legal AI workflow, you have a defamation-and-sanctions generator with better production values.

**Judge** is the LLM-as-judge pattern, borrowed straight from AI evaluation research: a second model reviews a first model's output before it's allowed to proceed, the same way a code reviewer blocks a bad pull request ([MindStudio](https://www.mindstudio.ai/blog/llm-as-judge-agent-safety-pattern)). It's a good pattern. It is also, and I want to be extremely clear about this, *not the same thing as an actual judge*, and not even the same thing as the human lawyer who has to sign the filing. Every federal filing still runs through Rule 11, which puts personal, individually-billable liability on the human attorney of record for everything in that document, and the ABA said exactly this in July 2024, in Formal Opinion 512: lawyers have a duty of competence (Model Rule 1.1) to understand a GAI tool's limitations, a duty of supervision (Model Rule 5.3, the rule originally written for paralegals and now stretched over software) for anything the tool produces, and "to competently use a GAI tool in a client representation, lawyers need not become GAI experts," but they still have to check the work ([ABA](https://www.americanbar.org/news/abanews/aba-news-archives/2024/07/aba-issues-first-ethics-guidance-ai-tools/)). An AI judge station is a good gate. It is not a liability shield, and any firm selling you a workflow that implies otherwise is selling you the Mata v. Avianca sanction with extra steps.

**Registrar** is the one the user's original list of stations left blank, "something else, responsible for coordinating Google Drive storage problems," and I think that blank is the most interesting station on the whole floor, precisely because it's the least glamorous. Real law firms don't run on Google Drive. iManage holds roughly 60% of the BigLaw document-management market, NetDocuments has most of the rest, and virtually every AmLaw 200 firm runs one or the other specifically because general-purpose cloud storage doesn't have matter-centric access control, audit trails, or the confidentiality guarantees Model Rule 1.6 requires ([Big Mode Consulting](https://www.bigmodeconsulting.com/compare/netdocuments-vs-imanage)). A firm that hands its AI agents write access to "wherever the files happen to be" is one permissions mistake away from a privilege waiver. The Registrar's job is boring in exactly the way infrastructure is supposed to be boring: version control, access scoping, and making sure nine other agents pulling and writing documents concurrently doesn't turn into a shared folder that looks like a raccoon got into it.

---

## What the bust looks like this time

Here's the honest caveat, because the china post taught me readers want the part where I admit I don't have the answer yet.

Gas City's bust had a single, physical cause: the gas ran out. Nobody could out-manage geology. This boom's bust risk is different, and worse, because it isn't physical, it's *behavioral*. Two things can end this era of free intelligence for law practice, and unlike a depleting gas field, both of them are self-inflicted:

- **The subsidy ends.** A lot of the current cheap-token era is being subsidized by VC money chasing market share, the same way Uber rides were briefly a public transit subsidy for people who owned iPhones. When inference gets priced at cost, the firms that built their entire practice on $0.14-per-million-token assumptions find out what their real cost structure looks like.
- **The trust runs out first, and it'll run out faster than the money.** 1,313 hallucination-sanctioned filings and counting is not a rounding error, it's a pattern, and every one of those cases makes the next judge a little more skeptical of every future filing, AI-assisted or not. A courtroom's patience for "the AI did it" is a non-renewable resource in exactly the way Gas City's gas field was, and I'd bet it depletes faster.

I'll be honest that I went looking for a firm that's already built this whole floor, Barrister through Registrar, with real citation verification and a real human-liability-aware judge gate, and I didn't find one. I found vendors building pieces of it (Harvey, Legora, CoCounsel all ship agentic pieces of this stack today) and I found a mile-long list of firms that skipped straight to "paste ChatGPT's output into the brief" and got sanctioned for it. Nobody's built the disciplined version yet. That's not a hole in the thesis, that's the opportunity.

Only two factories were still standing in Gas City by the time the boom ended, and they weren't the ones that grew fastest, they were the ones that had built something that lasted. **The firms that survive this version of the boom won't be the ones that adopted AI fastest. They'll be the ones that built a Shepard station and a real Judge station before their first sanctions order forced them to.**

I don't have the second half of this essay yet, the part where I work out whether this factory floor should live inside existing firms or spawn a new category of AI-native practice entirely. That's a draft for another day. For now: the gas is flowing, the factories are already going up, and I'd rather be the one drawing the floor plan than reading about the fire.
