# formbook-at-scale: post package (bead dot-y5p992)

DRAFT for David's review. Nothing here has been published, deployed or posted.

| What | Where |
|---|---|
| Post (draft: true) | `src/data/blog/en/formbook-at-scale.md` |
| Charts: Vega-Lite v6 specs, SVG, PNG (2x), `alt.json` | `static/assets/blog/formbook-at-scale/charts/` |
| OG card 1200x630, X card 1200x600 (SVG + PNG) | `static/assets/blog/formbook-at-scale/og.*`, `x-card.*` |
| Data behind every chart and number | `static/assets/blog/formbook-at-scale/data/` |
| Social copy (X, LinkedIn, HN) + distribution plan | `social.md` (this folder; not published) |
| Checklist report, headline candidates, citations, number provenance | `checklist.md` (this folder) |

## Rebuild the charts and cards

vega and vega-lite are not site dependencies, so install them in a scratch dir:

```sh
mkdir -p /tmp/vega && (cd /tmp/vega && npm init -y >/dev/null && npm i vega@6 vega-lite@6 @resvg/resvg-js@2)
A=static/assets/blog/formbook-at-scale
F="src/assets/fonts/ibm-plex-mono.regular.ttf src/assets/fonts/ibm-plex-mono.bold.ttf"
python3 -I docs/blog/formbook-at-scale/make_specs.py $A/data $A/charts
NODE_PATH=/tmp/vega/node_modules node docs/blog/formbook-at-scale/render_charts.mjs $A/charts $F
python3 -I docs/blog/formbook-at-scale/make_og.py $A/data $A
for c in og x-card; do NODE_PATH=/tmp/vega/node_modules node docs/blog/formbook-at-scale/render_card.mjs $A/$c.svg $A/$c.png $F; done
```

`make_specs.py` reads every plotted value from the CSVs. `runs_by_agent.csv` is an aggregate of the dotfiles `newbox_runs_formbook.csv`, which isn't copied here because it contains account emails.

## Before publishing

1. Delete the `REVIEW PACKAGE` HTML comment at the end of the post. It's served verbatim in `/posts/formbook-at-scale/llms.txt`.
2. Set `draft: false` and update `pubDatetime`.
3. Optional: emit `og:image:alt` / width / height from `Layout.astro` (see checklist item 18).
