# Checklist report: formbook-at-scale (bead dot-y5p992)

Post: `src/data/blog/en/formbook-at-scale.md` (draft: true). Checked 2026-10-15.

Tools: `sdr-blog-post-lint validate` (dotfiles `src/rust/crates/sdr-blog-post-lint`, master) exits 0 with "PASS: deterministic blog-post checks". `ai-writing` verify (dotfiles `src/rust/crates/ai-writing`) is clean on the post and on `social.md`. The 30 checks are from `AI/skills/sdr-blog-post/references/what-works-on-the-web.org`.

Core claim (Commander's Intent): formbook went from 0 to 489 court templates, mostly in two days, because the work was cut into small isolated units with atomic claims and a mechanical verify, so hundreds of agent runs could run in parallel safely.

Reader promise: if you run coding agents in parallel, you leave with a checklist for deciding which tasks are safe to fan out, and the real numbers from one fan-out.

## Headline candidates (sdr-headline-hook-writer)

| # | Candidate | Verdict |
|---|---|---|
| 1 | Building formbook at scale with a fleet of coding agents | **Chosen.** 56 chars, names the project and the method, HN-safe as is. |
| 2 | The engineering behind formbook at scale | Accurate, but vaguer about the method. |
| 3 | 805 agent runs, 489 court templates, two days | Title numbers trip check 4 and the HN guidelines; the numbers moved to the OG card and the lede. |
| 4 | What makes a task safe to fan out to coding agents | Strong for X; it's the post's take-away, not its subject. Used as an H2. |
| 5 | How a fleet of agents wrote court templates for hundreds of courts | Long (65 chars), and "wrote" overclaims: git can't separate agent commits from human ones. |
| 6 | Court-filing templates by the hundred, built by throwaway boxes | Curiosity gap, but "built by boxes" is cute and imprecise. |

Opening: the conclusion in the first two sentences (0 to 489 templates, a two-day burst, 805 runs), then the reason it worked.

## The 30 checks

A = automatable, J = judged. "lint" means `sdr-blog-post-lint` covers it.

| # | Type | Result | Note |
|---|---|---|---|
| 1 | A | pass (lint) | "formbook" is in both the title and the first paragraph. |
| 2 | J | pass | Concrete subject and method; the curiosity gap ("at scale with a fleet") is answered in the opening. |
| 3 | A | pass (lint) | No caps words, no "!". |
| 4 | A | pass (lint) | No number in the title. |
| 5 | A | pass | No site name; title and description are unique among the 36 `src/data/blog/en` posts (checked by grep). |
| 6 | A | pass (lint) | Title 56 chars; description 153 chars. |
| 7 | A | pass (lint) | The claim is in sentence 1; no preamble. |
| 8 | J | pass | Each H2 serves the core claim: why (need), unit anatomy, why it parallelizes, numbers, gaps, take-away, CTA. |
| 9 | A | pass (lint) | Every H2 is a question or a concrete claim. |
| 10 | A | pass (lint) | Every section has a number or a named source. |
| 11 | A | pass (lint) + manual | The external statistics (92%, 27%, 11%, 19%/20%) link to their sources, and all returned HTTP 200 on 2026-10-15. David's own numbers link to the data CSVs in `static/assets/blog/formbook-at-scale/data/`. |
| 12 | A | pass (lint) | Every numeric line has a unit or base. |
| 13 | J | pass | First screen: 489 templates, mostly in two days, and 532 commits in one day (the chart). |
| 14 | J | exception | No personal story: David supplied no anecdote, and the skill forbids inventing one. The "case" is formbook itself (challenge: hundreds of courts; outcome: 489 templates, with the gaps stated). |
| 15 | A | pass (lint) | Five charts, each with alt text and a visible "Source:" line in the chart and in the caption. |
| 16 | A | pass (lint) | One CTA section (point your agent at the repo; `<!-- [CTA] -->` marker). |
| 17 | J | pass | Reusable take-away: the nine-item "safe to fan out" checklist. |
| 18 | A | **partial** | The site template emits og:title, og:description, og:url, og:image and twitter:card=summary_large_image (verified in the built HTML). It does NOT emit og:image:alt, og:image:width or og:image:height, because `Layout.astro` has no field for them; the values are recorded in the post's review comment. The OG image is 1200x630, verified. Follow-up filed as a bead. |
| 19 | A | pass | Slug `formbook-at-scale` (postSlug + slug). The page's canonical is https://davidaw.ad/posts/formbook-at-scale/. Note: `PostDetails.astro` ignores frontmatter `canonicalURL` and uses the default, which is the same URL. |
| 20 | A | pass (lint) | Internal links: /posts/nwcu-review and /posts/4-13-technical-diligence, both with descriptive anchors. |
| 21 | A | n/a | The site template emits no Article JSON-LD. |
| 22 | A | **partial** | The date is visible on the page. The author is in the meta tags, but the post template shows no visible byline (a site-wide template trait, not changed in this branch). |
| 23 | A | pass (lint) | Every paragraph is 45 words or fewer. |
| 24 | J | pass | Defined at first use: pro se (self-represented), exemplar, overlay, newbox run, tier 1/2/3, verify. "TOA" is spelled out as "tables of contents and authorities". |
| 25 | J | pass | Every number is traced to a data file (table below); the gaps are stated in their own H2. Speculative explanations from the drafter (why README 479 differs from git 489, "dozens of agents", "most units passed first try") were cut. |
| 26 | A | pass (lint) | The HN variant equals the title; the URL is the article itself. |
| 27 | J | pass | Distribution plan in `social.md`: HN, X, LinkedIn, each with copy fitted to that channel. |
| 28 | A | pass | Quotable line, chart and thread are all in `social.md`. |
| 29 | A | pass | `ai-writing` verify is clean. The judgment pass (no em dashes, contractions, parenthetical asides, blockquote asides, resigned-joke close) was done by the orchestrating agent after a separate drafter subagent, per the two-agent workflow. |
| 30 | J | pass | No conflict with earlier posts found. The closest is "Regulating Intelligence is Dumb", which argues against regulating AI; nothing here contradicts it. |

## Citations (all opened and verified on 2026-10-15, HTTP 200)

1. Legal Services Corporation, *The Justice Gap: The Unmet Civil Legal Needs of Low-income Americans* (2022; NORC AmeriSpeak survey of ~5,000 adults). https://justicegap.lsc.gov/ : "did not receive any or enough legal help for 92% of their civil legal problems." Limitation: low-income population only, self-reported survey.
2. Administrative Office of the U.S. Courts (JDAO), "Just the Facts: Trends in Pro Se Civil Litigation from 2000 to 2019", 2021-02-11. https://www.uscourts.gov/data-news/judiciary-news/2021/02/11/just-facts-trends-pro-se-civil-litigation-2000-2019 : 27 percent of civil cases had at least one pro se party; 11 percent of non-prisoner civil cases. Limitation: federal district courts only; state courts (where most pro se litigants are) aren't covered.
3. Becker, Rush, Barnes, Rein (METR), "Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity", arXiv:2507.09089, 2025-07-12. https://arxiv.org/abs/2507.09089 : RCT, 16 developers, 246 tasks; allowing AI increased completion time by 19%, while developers estimated a 20% speedup. Limitation: mature codebases and experienced maintainers, early-2025 tools; not the formbook setting, and the post says so.

Platform specs: OG required properties are from https://ogp.me/. For LinkedIn's 1.91:1 preview, the reference file cites its help page. X's card documentation (developer.x.com) redirected to a generic overview page on 2026-10-15, so the X 2:1 size is still UNVERIFIED. `x-card.png` (1200x600) is supplied as a hedge, but the site emits a single image (og.png) for both.

## Numbers and their source files

All files are in `static/assets/blog/formbook-at-scale/data/` (copied from dotfiles `AI/skills/sdr-blog-post/examples/formbook-data/`, collected 2026-10-15), except where noted.

| Number in post | Source file |
|---|---|
| 805 runs, 567 distinct tasks, 782 claude / 23 codex, attempts 683/114/8, 618 finished / 187 running | `newbox_runs_formbook.csv` (dotfiles only; not published because it has account emails), aggregated to `runs_by_agent.csv` |
| 299 boxes released, 219 Hetzner / 80 AWS; Oct 14 163 (117/46); Oct 15 136 (102/34) to 04:32 UTC | `boxes_released_per_day.csv` |
| audit log starts 2026-10-14T15:56Z; 506 runs with no recorded release | dotfiles `formbook-data/README.org` (gaps 3 and 4); 805 - 299 = 506 |
| Peak 90 concurrent boxes at 2026-10-14T23:23:51Z, fleet-wide; daily peaks 20/25/90/47; 278 of 280 samples with a value | `fleet_throughput_series.csv` |
| 722 commits (561 non-merge), Oct 6 to 14 | `formbook-data/README.org` (722, 561); per-day 1/2/26/532 from `formbook_git_by_day.csv` |
| 417,591 lines added | `formbook_git_by_day.csv` (sum of `lines_added`: 95,791 + 14,547 + 19,281 + 287,972) |
| Templates 0 / 1 / 32 / 489 | `formbook_git_by_day.csv` (`cumulative_templates_typst_main`) |
| README: 479 template folders, 233 courts, 453 with an exemplar | formbook `README.md` at HEAD b8e3465 (cloned 2026-10-15) |
| 96.9M tokens, 1,436 turns, 84.8M cache read, 11.5M input, 0.54M output, 23:04Z Oct 13 to 04:16Z Oct 15 | `tokens_summary.json` (84,794,757 / 11,500,237 / 544,843 / total 96,861,850) |
| Box-side tokens and total cost not recorded; Hetzner-only peak not computable | `formbook-data/README.org` gaps 1 and 3 |
| CFC-FORM-002/003/005 rule rows | formbook `courts/federal-circuit/court-of-federal-claims/complaint/README.md` and `typst/uscfc-complaint.typ` |

Data note: the dotfiles README says "783 claude", but the CSV has 782 claude runs (782 + 23 = 805). The post uses the CSV value.

## Known deviations

- Skill step 10 says to open a draft MR. This box's instructions forbid pushing, so the work is a local commit on branch `blog/formbook-at-scale` with no MR.
- The skill says to render charts with `bin/chart check/build`, but that script isn't in the dotfiles checkout. The charts are rendered with vega@6 + vega-lite@6 + resvg (see README.md in this folder).
- The `<!-- review package -->` comment at the end of the post exists to satisfy `sdr-blog-post-lint` (it looks for og/HN/distribution tokens in the body). It's hidden in the HTML but **visible in `/posts/formbook-at-scale/llms.txt`**, so delete it before publishing.
