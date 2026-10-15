---
author: David Awad
pubDatetime: 2026-10-15T12:00:00Z
title: Building formbook at scale with a fleet of coding agents
slug: formbook-at-scale
postSlug: formbook-at-scale
featured: false
draft: false
tags:
  - law
  - computing
  - ai
ogImage: "/assets/blog/formbook-at-scale/og.png"
description: "How 805 coding-agent runs on throwaway boxes took formbook from zero to 489 court-filing templates, mostly in two days, and what the data can't tell you."
canonicalURL: "https://davidaw.ad/posts/formbook-at-scale/"
---

formbook went from zero to 489 Typst court-filing templates in nine calendar days (Oct 6 to Oct 14, 2026), and almost all of it landed in a two-day burst. A fleet of coding agents did the typing over 805 runs on throwaway cloud boxes.

It worked because each task was a small, isolated folder that a script could check against a real filed court document. That's the part worth stealing: a dumb shell script catches an agent being wrong long before a human has to look.

The repo is [formbook on GitHub](https://github.com/davidawad/formbook), and your agent is welcome in it.

---

## Why would anyone need hundreds of court templates?

Most people with a legal problem don't have a lawyer. The [Legal Services Corporation's 2022 Justice Gap study](https://justicegap.lsc.gov/) (a NORC survey of about 5,000 adults) found low-income Americans got no help, or not enough, for 92% of their civil legal problems.

Plenty of them end up in court anyway. The [U.S. Courts report on pro se civil litigation](https://www.uscourts.gov/data-news/judiciary-news/2021/02/11/just-facts-trends-pro-se-civil-litigation-2000-2019) (published Feb 2021) found that 27 percent of civil cases filed in federal district courts from 2000 to 2019 had at least one self-represented party.

Set aside prisoner petitions and the [same report](https://www.uscourts.gov/data-news/judiciary-news/2021/02/11/just-facts-trends-pro-se-civil-litigation-2000-2019) still puts it at 11 percent of civil cases. That's a lot of people formatting a filing alone.

Formatting is the silly part that bites. Every court publishes its own rules for margins, type size, captions and certificates, and they don't agree with each other. (For how much law school prepares you for any of this, see [my review of NWCU](https://davidaw.ad/posts/nwcu-review).)

So formbook is an open collection of templates (GPL v3), one folder per court and document type.

Its README counts 479 template folders across 233 courts at the [time of my checkout](https://github.com/davidawad/formbook), covering federal, state, bankruptcy and the U.S. Supreme Court.

> My git count says 489 templates at the last commit of Oct 14, and the README says 479. They're counted at different times by different tools, and I use the git count in the charts below.

The [same README](https://github.com/davidawad/formbook) says 453 of those folders ship with a real filed exemplar PDF to compare against, as of that same time.

---

## What does one unit of work look like?

One court, one document type, one folder. The layout is `courts/<circuit-or-body>/<court>/<doctype>/`, so the Court of Federal Claims complaint lives here:

```
courts/federal-circuit/court-of-federal-claims/complaint/
  README.md
  typst/main.typ
  typst/uscfc-complaint.typ
  exemplars/FILED-EXAMPLE-*.pdf
  exemplars/SOURCE.md
  samples/INPUT-*.md
  samples/OUTPUT-*.pdf
  samples/OVERLAY-*.pdf
```

Everything the template needs is in that folder. Nothing reaches out to a shared file somewhere else in the repo.

The folder's README lists the governing rules, each with a requirement ID that points at a line of the template. Three of them, from the folder's README and `typst/uscfc-complaint.typ`:

| Requirement | Rule | Template line |
|---|---|---|
| CFC-FORM-002 | Text no smaller than 12 point, per RCFC 5.5(c)(2) | `#let type-size = 12pt` |
| CFC-FORM-003 | Margins at least 1 inch on each side, per RCFC 5.5(c)(3) | `#let page-margin = 1in` |
| CFC-FORM-005 | Every page numbered, centred at the bottom, per RCFC 5.5(c)(6) | `numbering: "1"` |

The template itself is a Typst function, `uscfc-complaint(meta, body)`. It generates the caption, tables of contents and authorities, spacing, fonts, certificates and the signature block from the rules. It holds no case-specific text and no coordinates measured off somebody's filed PDF.

The `exemplars/` folder holds a real filed document, and `SOURCE.md` records its public URL (here, a CourtListener RECAP document). The `samples/` folder holds Markdown inputs with YAML front matter for the court, caption, parties and signature block.

Rendering is one command:

```sh
sh tools/render.sh <doctype-dir> samples/INPUT-x.md
```

That runs `typst compile` with vendored fonts (`--ignore-system-fonts`) and vendored packages. Any Typst warning counts as a failure, which sounds harsh until you remember nobody reads warnings.

The `OVERLAY` PDF draws our render over the filed exemplar in red and blue. A misplaced caption jumps out of it without any squinting.

Quality comes in tiers. Tier 1 is the court's mandated form, and it has to be perfect and traceable to a cited rule every time. Tier 2 is professional convention, and tier 3 is one filer's personal style, which nobody chases.

---

## Why did this split cleanly across hundreds of agents?

Two agents can't step on each other, and a script decides whether each one did its job.

The work queue is `data/worklist.json`, one entry per unit. Every unit has an ID like `ca1.amicus-brief` and a kind: `new-template`, `add-exemplar`, `new-doctype` or `deepen`.

Claiming a unit means creating a remote branch called `contrib/<id>`. The push fails if that branch already exists, so the claim is atomic and two parallel agents can't both win. Without write access, the claim is a draft PR from a fork.

`pick` chooses pseudo-randomly within the best priority class. That sounds like a detail. It's what keeps parallel agents from grabbing the same top item and losing the same race.

Then there's the mechanical floor, `sh tools/contribute.sh verify <id>`. It fails the unit if:

- the folder layout is incomplete, or `SOURCE.md` is missing a URL for any exemplar
- any INPUT sample doesn't render warning-free, or its OUTPUT isn't committed
- an exemplar exists with no OVERLAY next to it
- a `deepen` unit renders shorter than the doctype's `min_pages`
- `typst/` contains text copied from a sample's front matter, or a docket number
- any file outside the unit's own folder changed

That last check is what makes fan-out safe. An agent can do whatever it wants inside its folder, and if it touches anything else, verify kneecaps it.

Passing verify means the unit is shaped right and renders. Whether the layout is correct is still a maintainer's call, made with the overlay open.

> Programmer's note: the laziest way to match a filed brief is to paste the filed brief into the template. The "no copied text" check exists so that shortcut fails.

Each run also got its own fresh cloud box (a "newbox" run in my tooling), torn down when the run ended. Nothing leaked between runs because nothing survived them.

---

## How did 805 agent runs turn into 489 templates in a two-day burst?

Here's the running total of templates (folders with a `typst/main.typ`) on master, day by day.

![Step chart of cumulative formbook court templates per day: 0 on Oct 6, 1 on Oct 7, flat until 32 on Oct 13, then 489 on Oct 14.](/assets/blog/formbook-at-scale/charts/templates-cumulative.svg)

_Source: [formbook_git_by_day.csv](/assets/blog/formbook-at-scale/data/formbook_git_by_day.csv), from `git log` on formbook master._

Zero on Oct 6, one the next day, then nothing for five days. It hit 32 on Oct 13 and 489 by the end of Oct 14.

The commits per day tell the same story. Master took 722 commits over those nine days (561 of them non-merge), adding 417,591 lines of text.

![Bar chart of non-merge commits per day on formbook master: 1 on Oct 6, 2 on Oct 7, none Oct 8 to 12, 26 on Oct 13, 532 on Oct 14.](/assets/blog/formbook-at-scale/charts/commits-per-day.svg)

_Source: [formbook_git_by_day.csv](/assets/blog/formbook-at-scale/data/formbook_git_by_day.csv)._

> Every commit carries my name, so git can't tell you which ones an agent wrote. I'd love to claim I typed 532 commits in one day. I didn't.

On the agent side, I count 805 newbox runs on 567 distinct formbook tasks over those days. Claude (through Claude Code) handled 782 runs and Codex handled 23.

![Bar chart of formbook agent runs by agent: Claude 782 runs (97.1%), Codex 23 runs (2.9%).](/assets/blog/formbook-at-scale/charts/agent-split.svg)

_Source: [runs_by_agent.csv](/assets/blog/formbook-at-scale/data/runs_by_agent.csv), aggregated from the newbox run records._

Retries happened, but not often: 683 runs were first attempts, 114 were second attempts and 8 were third attempts. At collection time, 618 runs had finished and 187 were still marked as running.

Boxes came and went fast. The release log shows 299 boxes torn down over two days (Oct 14 to 15), 219 on Hetzner and 80 on AWS.

![Stacked bar chart of boxes released per day: Oct 14, 117 Hetzner and 46 AWS; Oct 15 to 04:32 UTC, 102 Hetzner and 34 AWS.](/assets/blog/formbook-at-scale/charts/boxes-per-day.svg)

_Source: [boxes_released_per_day.csv](/assets/blog/formbook-at-scale/data/boxes_released_per_day.csv)._

That's 163 releases on Oct 14 (117 Hetzner, 46 AWS) and 136 releases on Oct 15 up to 04:32 UTC (102 Hetzner, 34 AWS).

The whole fleet peaked at 90 concurrent boxes at 23:23 UTC on Oct 14. The peak per day was 20 on Oct 12, 25 on Oct 13, 90 on Oct 14 and 47 on Oct 15.

![Line chart of fleet-wide concurrent boxes per 20-minute sample, Oct 12 to 15, peaking at 90 at 23:23 UTC on Oct 14.](/assets/blog/formbook-at-scale/charts/fleet-concurrency.svg)

_Source: [fleet_throughput_series.csv](/assets/blog/formbook-at-scale/data/fleet_throughput_series.csv), sampled at roughly 20-minute intervals._

> That peak is fleet-wide. It counts every project running on my agent fleet at that time, on both providers, so don't read it as 90 formbook boxes.

On my own machine (the orchestration side), my local token ledger shows 96.9M tokens over a 29-hour window, from 23:04 UTC on Oct 13 to 04:16 UTC on Oct 15. Over those 1,436 turns, cache reads were 84.8M, input 11.5M and output 0.54M ([summary](/assets/blog/formbook-at-scale/data/tokens_summary.json)).

---

## What can't I tell you?

A fair amount, and I'd rather say so than round it off.

I don't know what formbook cost. Token usage on the boxes isn't recorded anywhere, so the 96.9M figure is a count of my machine's sessions only ([ledger summary](/assets/blog/formbook-at-scale/data/tokens_summary.json)). Those models weren't priced in my cost registry either, so even that slice has no dollar figure.

I don't know the formbook-only concurrency peak. Per-box creation times aren't recorded, so I can't compute a Hetzner-only peak or separate formbook from the rest of the fleet at any point in time.

I also can't account for most of the boxes. Of the 805 runs, 506 have no recorded release: 187 were still running, and the rest were released before the deletion audit log started at 15:56 UTC on Oct 14.

And I can't tell you agents made me some number of times faster. I have no control group, and the best controlled evidence I know of points the other way.

[METR's July 2025 randomized trial](https://arxiv.org/abs/2507.09089) (Becker et al., 16 experienced open-source developers, 246 tasks in mature repos they knew well) found that allowing AI tools increased completion time by 19%. The developers believed the tools had sped them up by 20%.

That's a humbling result. formbook's tasks were new, small, isolated folders with a mechanical check at the end. METR measured work in large mature codebases, and I wouldn't extrapolate from [my case](https://github.com/davidawad/formbook) to theirs.

---

## What makes a task safe to fan out to agents?

Here's the checklist I'd use again, taken straight from how formbook works:

- **The unit lives in its own folder.** Verify fails if any file outside that folder changes.
- **Claims are atomic.** Creating a remote branch either succeeds or fails, so two agents can't own one unit.
- **Picking is randomized within a priority class.** Parallel agents spread out instead of racing for the top item.
- **There's a real reference document.** A filed court document from a public URL gives the agent (and the reviewer) a target to overlay against.
- **The check is a script.** Layout, warning-free rendering, committed outputs and overlays are all checked mechanically.
- **The check blocks the obvious cheats.** Copying sample text or docket numbers into the template fails verify.
- **Warnings are failures.** A render with any Typst warning fails.
- **Every box is disposable.** One fresh box per run, torn down after, so a bad run can't poison the next.
- **A human still reviews layout.** Passing verify means the unit is shaped and renders; a maintainer judges it against the overlay.

If your task fails most of that list, more agents will mostly get you more mess per hour. (I wrote about smelling that mess from the outside in [technical due diligence](https://davidaw.ad/posts/4-13-technical-diligence).)

---

## Want your court in formbook? Point your agent at the repo

<!-- [CTA] -->

Anyone can contribute, including your own coding agent. Clone [davidawad/formbook](https://github.com/davidawad/formbook) and run the loop:

```sh
sh tools/contribute.sh pick            # get a unit; you take the one you are given
sh tools/contribute.sh claim <id>      # atomic claim (branch contrib/<id>, or a draft PR from a fork)
sh tools/contribute.sh brief <id>      # prints the exact task
sh tools/contribute.sh verify <id>     # mechanical floor
sh tools/contribute.sh submit <id>     # reruns verify, opens the PR
```

Lawyers, this part is for you too. If you know a court's rules cold, a careful tier 1 review of one court's form does more for the project than another hundred renders per day.

Two ground rules from [CONTRIBUTING.md](https://github.com/davidawad/formbook/blob/master/CONTRIBUTING.md). Exemplars have to be public court records, and if an AI did substantial work on your PR, say so in the PR. (I'd be a hypocrite to ask for anything less after 805 runs in two days.)

If you made it to the end of this blog post, thank you, I'm tremendously grateful. The agents read 233 courts' worth of margin rules in a two-day sprint and still don't get a JD out of it. Ah well.
