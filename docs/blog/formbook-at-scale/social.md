# Social copy: "Building formbook at scale with a fleet of coding agents"

DRAFT, NOT PUBLISHED. Nothing here has been posted, and David decides after review whether any of it goes out at all.

- Post: `src/data/blog/en/formbook-at-scale.md` (draft: true)
- URL once published: https://davidaw.ad/posts/formbook-at-scale
- Card: `static/assets/blog/formbook-at-scale/og.png` (1200x630, OG/LinkedIn) and `x-card.png` (1200x600, 2:1 for X)
- Card alt text: Card reading "Building formbook at scale: 805 agent runs, 489 court templates, mostly in two days" over a line of fleet-wide concurrent boxes peaking at 90.

## Distribution plan

Three channels, in this order:

1. **Hacker News**: original title, article URL, no commentary in the title. Best fit for the engineering half (atomic claims, mechanical verify, the honest gaps, the METR result).
2. **X**: a short thread built on the "what makes a task safe to fan out" checklist, with the fleet-concurrency chart.
3. **LinkedIn**: the legal-access angle (justice gap and pro se numbers) and the ask for lawyers to review tier 1 forms.

Quotable line: "A dumb shell script catches an agent being wrong long before a human has to look."

Repurposing: the fleet-concurrency chart (`charts/fleet-concurrency.png`) and the templates step chart work as standalone images; the checklist section is the thread.

## Hacker News

- Title: Building formbook at scale with a fleet of coding agents
- URL: https://davidaw.ad/posts/formbook-at-scale
- Optional first comment (David's call; plain, no vote request):

> Author here. formbook is an open set of Typst court-filing templates, each checked against a real filed document. The post covers how the work was split so hundreds of agent runs couldn't collide (atomic branch claims, one folder per unit, a verify script that fails on any file outside the folder), plus the numbers and what they don't show: box-side tokens and total cost weren't recorded, and the 90-box peak is fleet-wide. Happy to answer questions about the verify checks.

## X (thread)

1/ formbook went from 0 to 489 court-filing templates in nine calendar days, almost all of it in a two-day burst. 805 coding-agent runs on throwaway boxes did the typing. The interesting part is why they didn't trip over each other. https://davidaw.ad/posts/formbook-at-scale

2/ One unit = one court + one document type = one folder. Claiming a unit creates a remote branch; if the branch exists, the push fails. Two agents can't own the same unit.

3/ A verify script fails the unit if the layout is incomplete, any sample renders with a Typst warning, the template contains text copied from a sample, or any file outside the folder changed.

4/ Every template is checked against a real filed court document from a public docket, with a red/blue overlay of our render on top of it.

5/ What I can't tell you: box-side tokens and total cost weren't recorded, and the 90-box peak is fleet-wide (formbook-only isn't computable). METR's RCT found AI tools made experienced devs 19% slower, so I'm not claiming a speedup.

6/ Want your court in formbook? Point your agent at the repo and run `sh tools/contribute.sh pick`. https://github.com/davidawad/formbook

Attach `x-card.png` to 1/ and `charts/fleet-concurrency.png` to 5/.

## LinkedIn

Low-income Americans got no legal help, or not enough, for 92% of their civil legal problems (LSC Justice Gap, 2022). A lot of them still have to file something, and every court has its own rules for margins, captions and certificates.

formbook is an open collection of court-filing templates: write your filing in Markdown, get a PDF that follows the court's rules, checked against a real filed example. In nine calendar days it went from zero to 489 templates, most of them in a two-day burst of 805 coding-agent runs.

I wrote up how that worked (small isolated units, atomic claims, a verify script that blocks the obvious cheats) and what my data can't show, including cost.

Lawyers: if you know a court's rules cold, a tier 1 review of one court's form is the most useful thing you could give the project.

https://davidaw.ad/posts/formbook-at-scale
