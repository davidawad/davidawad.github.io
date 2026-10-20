"""Draw the OG (1200x630) and X (1200x600) cards for the formbook-at-scale post as SVG.

Usage: python3 -I make_og.py <data-dir> <out-dir>
Writes og.svg and x-card.svg; render_charts.mjs-style resvg turns them into PNG
(see README.md in this folder). The sparkline is the fleet concurrency series.
"""

import csv
import sys
from pathlib import Path

NAVY, INK, INK_2, ORANGE, BG = "#1e3a8a", "#111418", "#52514e", "#eb6834", "#fefbfb"
FONT = "IBM Plex Mono"


def card(w, h, series):
    pad = 64
    vals = [v for _, v in series]
    peak_i = max(range(len(vals)), key=vals.__getitem__)
    # Sparkline box along the bottom of the card.
    sx0, sx1, sy0, sy1 = pad, w - pad, h - 340, h - 96
    step = (sx1 - sx0) / (len(vals) - 1)
    top = max(vals)
    pts = [(sx0 + i * step, sy1 - (v / top) * (sy1 - sy0)) for i, v in enumerate(vals)]
    path = "M" + " L".join(f"{x:.1f},{y:.1f}" for x, y in pts)
    px, py = pts[peak_i]
    return f"""<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}">
  <rect width="{w}" height="{h}" fill="{BG}"/>
  <rect x="0" y="0" width="{w}" height="10" fill="{NAVY}"/>
  <text x="{pad}" y="{pad + 44}" font-family="{FONT}" font-weight="bold" font-size="54" fill="{NAVY}">Building formbook at scale</text>
  <text x="{pad}" y="{pad + 100}" font-family="{FONT}" font-size="30" fill="{INK}">805 agent runs. 489 court templates.</text>
  <text x="{pad}" y="{pad + 142}" font-family="{FONT}" font-size="30" fill="{INK}">Mostly in two days.</text>
  <line x1="{sx0}" y1="{sy1}" x2="{sx1}" y2="{sy1}" stroke="#ced4da" stroke-width="2"/>
  <path d="{path}" fill="none" stroke="{NAVY}" stroke-width="3" stroke-linejoin="round"/>
  <circle cx="{px:.1f}" cy="{py:.1f}" r="9" fill="{ORANGE}" stroke="{BG}" stroke-width="3"/>
  <text x="{px - 18:.1f}" y="{py + 8:.1f}" text-anchor="end" font-family="{FONT}" font-weight="bold" font-size="24" fill="{INK}">peak 90 boxes</text>
  <text x="{pad}" y="{h - 52}" font-family="{FONT}" font-size="22" fill="{INK_2}">fleet-wide concurrent boxes, Oct 12 to 15, 2026</text>
  <text x="{w - pad}" y="{h - 52}" text-anchor="end" font-family="{FONT}" font-weight="bold" font-size="24" fill="{NAVY}">davidaw.ad</text>
</svg>
"""


def main(data_dir, out_dir):
    with open(Path(data_dir) / "fleet_throughput_series.csv", newline="") as f:
        series = [(r["as_of"], int(float(r["boxes"]))) for r in csv.DictReader(f)
                  if r["boxes"] not in ("", "None", "null")]
    out = Path(out_dir)
    (out / "og.svg").write_text(card(1200, 630, series))
    (out / "x-card.svg").write_text(card(1200, 600, series))


if __name__ == "__main__":
    main(*sys.argv[1:3])
