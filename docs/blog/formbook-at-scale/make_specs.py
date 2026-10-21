"""Build the Vega-Lite v6 specs for the formbook-at-scale post from the data pack.

Usage: python3 -I make_specs.py <data-dir> <out-dir>
  data-dir: static/assets/blog/formbook-at-scale/data (copied from dotfiles
            AI/skills/sdr-blog-post/examples/formbook-data/)
  out-dir:  static/assets/blog/formbook-at-scale/charts
Every plotted value is read from a CSV in data-dir; nothing is typed in by hand.
"""

import csv
import datetime as dt
import json
import sys
import textwrap
from pathlib import Path

SCHEMA = "https://vega.github.io/schema/vega-lite/v6.json"
INK = "#111418"
INK_2 = "#52514e"
NAVY = "#1e3a8a"  # site --accent (light mode)
SERIES = ["#2a78d6", "#eb6834"]  # validated categorical slots 1-2
FONT = "IBM Plex Mono, ui-monospace, monospace"
CONFIG = {
    "background": "#ffffff",
    "padding": 16,
    "font": FONT,
    "view": {"stroke": None},
    "title": {"anchor": "start", "fontSize": 16, "color": INK, "subtitleColor": INK_2,
              "subtitleFontSize": 12, "offset": 12},
    "axis": {"labelColor": INK_2, "titleColor": INK_2, "labelFontSize": 11,
             "titleFontSize": 11, "titleFontWeight": "normal", "domainColor": "#adb5bd",
             "tickColor": "#adb5bd", "gridColor": "#e9ecef"},
    "legend": {"labelColor": INK_2, "titleColor": INK_2, "labelFontSize": 11,
               "titleFontSize": 11, "orient": "top", "direction": "horizontal"},
}
W, H = 640, 300


def rows(path):
    with open(path, newline="") as f:
        return list(csv.DictReader(f))


def spec(title, subtitle, source, body, desc):
    """A chart with the site config; the source line is the subtitle's last row."""
    s = {
        "$schema": SCHEMA,
        "description": desc,
        "title": {"text": title,
                  "subtitle": textwrap.wrap(subtitle, 84) + textwrap.wrap(source, 84)},
        "width": W,
        "height": H,
        "config": CONFIG,
    }
    s.update(body)
    return s


def days(start, end):
    d = dt.date.fromisoformat(start)
    while d <= dt.date.fromisoformat(end):
        yield d.isoformat()
        d += dt.timedelta(days=1)


def main(data_dir, out_dir):
    data_dir, out_dir = Path(data_dir), Path(out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)
    specs = {}

    # 1. Boxes released per day, by provider (stacked).
    rel = rows(data_dir / "boxes_released_per_day.csv")
    vals = []
    for r in rel:
        day = dt.date.fromisoformat(r["date"]).strftime("%b %d")
        label = day + (" (to 04:32 UTC)" if r["date"] == "2026-10-15" else "")
        vals.append({"day": label, "provider": "Hetzner", "boxes": int(r["hetzner"])})
        vals.append({"day": label, "provider": "AWS", "boxes": int(r["aws"])})
    total = sum(int(r["releases"]) for r in rel)
    s = spec(
        f"{total} formbook boxes released in two days",
        "Unique newbox runs with a delete record, by UTC release day and provider",
        "Source: newbox runs joined to newbox audit/deletes.jsonl (log starts 2026-10-14T15:56Z). Collected 2026-10-15.",
        {
            "data": {"values": vals},
            "encoding": {
                "x": {"field": "day", "type": "nominal", "title": None, "axis": {"labelAngle": 0}},
                "y": {"field": "boxes", "type": "quantitative", "stack": "zero",
                      "title": "boxes released"},
                "color": {"field": "provider", "type": "nominal", "title": None,
                          "scale": {"domain": ["Hetzner", "AWS"], "range": SERIES}},
                "order": {"field": "provider", "sort": "descending"},
            },
            "layer": [
                {"mark": {"type": "bar", "width": 120, "stroke": "#ffffff", "strokeWidth": 2,
                          "cornerRadiusTopLeft": 4, "cornerRadiusTopRight": 4}},
                {"mark": {"type": "text", "dy": 0, "color": "#ffffff", "fontSize": 12,
                          "fontWeight": "bold"},
                 "encoding": {"y": {"field": "boxes", "type": "quantitative", "stack": "zero",
                                    "bandPosition": 0.5},
                              "text": {"field": "boxes", "type": "quantitative"},
                              "color": {"value": "#ffffff"}}},
            ],
        },
        "Stacked bar chart of formbook boxes released per day. 2026-10-14: 117 Hetzner plus 46 AWS "
        "(163). 2026-10-15 up to 04:32 UTC: 102 Hetzner plus 34 AWS (136).",
    )
    specs["boxes-per-day"] = s

    # 2-3. Git by day: fill no-commit days with zero commits and carried-forward templates.
    git = {r["date"]: r for r in rows(data_dir / "formbook_git_by_day.csv")}
    first, last = min(git), max(git)
    commits, templates, tmpl = [], [], 0
    for d in days(first, last):
        r = git.get(d)
        commits.append({"day": d, "commits": int(r["commits_no_merge"]) if r else 0})
        if r:
            tmpl = int(r["cumulative_templates_typst_main"])
        templates.append({"day": d, "templates": tmpl, "has_commit": bool(r)})
    s = spec(
        f"Non-merge commits per day: {commits[-1]['commits']} on {last} alone",
        f"formbook origin/master, {first} to {last}. Days with no bar had zero commits.",
        "Source: git log origin/master --no-merges --numstat (formbook checkout). Collected 2026-10-15.",
        {
            "data": {"values": commits},
            "layer": [
                {"mark": {"type": "bar", "color": NAVY, "cornerRadiusTopLeft": 4,
                          "cornerRadiusTopRight": 4, "width": 44}},
                {"mark": {"type": "text", "dy": -8, "color": INK, "fontSize": 12},
                 "transform": [{"filter": "datum.commits > 0"}],
                 "encoding": {"text": {"field": "commits", "type": "quantitative"}}},
            ],
            "encoding": {
                "x": {"field": "day", "type": "ordinal", "title": None,
                      "axis": {"labelAngle": 0, "labelExpr": "slice(datum.value, 5)"}},
                "y": {"field": "commits", "type": "quantitative", "title": "commits (no merges)"},
            },
        },
        "Bar chart of non-merge commits per day on formbook master: 1 on Oct 6, 2 on Oct 7, "
        "none Oct 8 to 12, 26 on Oct 13, 532 on Oct 14.",
    )
    specs["commits-per-day"] = s

    s = spec(
        f"Court templates: 0 to {templates[-1]['templates']}, mostly in two days",
        "Folders with a typst/main.typ under courts/, at each day's last commit",
        "Source: formbook origin/master tree per day (flat days carry the last value). Collected 2026-10-15.",
        {
            "data": {"values": templates},
            "encoding": {
                "x": {"field": "day", "type": "temporal", "title": None,
                      "axis": {"format": "%b %-d", "tickCount": "day", "labelAngle": 0}},
                "y": {"field": "templates", "type": "quantitative",
                      "title": "templates (cumulative)"},
            },
            "layer": [
                {"mark": {"type": "line", "interpolate": "step-after", "color": NAVY,
                          "strokeWidth": 2}},
                {"mark": {"type": "point", "filled": True, "size": 70, "color": NAVY,
                          "stroke": "#ffffff", "strokeWidth": 2},
                 "transform": [{"filter": "datum.has_commit"}]},
                {"mark": {"type": "text", "align": "right", "dx": -8, "dy": -12, "color": INK,
                          "fontSize": 12},
                 "transform": [{"filter": "datum.has_commit && datum.templates > 0"}],
                 "encoding": {"text": {"field": "templates", "type": "quantitative"}}},
            ],
        },
        "Step chart of cumulative court templates in formbook: 0 on Oct 6, 1 on Oct 7, "
        "flat until 32 on Oct 13, then 489 on Oct 14.",
    )
    specs["templates-cumulative"] = s

    # 4. Claude vs codex run split (aggregated from newbox_runs_formbook.csv).
    split = rows(data_dir / "runs_by_agent.csv")
    n = sum(int(r["runs"]) for r in split)
    vals = [{"agent": r["agent"], "runs": int(r["runs"]),
             "label": f"{r['runs']} runs ({100 * int(r['runs']) / n:.1f}%)"} for r in split]
    s = spec(
        f"{n} agent runs: almost all of them Claude",
        "newbox runs on formbook tasks (fb-*), by agent (Claude Code or Codex)",
        "Source: newbox state runs/*.json filtered to formbook. Collected 2026-10-15.",
        {
            "data": {"values": vals},
            "height": 120,
            "encoding": {
                "y": {"field": "agent", "type": "nominal", "title": None,
                      "sort": ["claude", "codex"], "axis": {"labelFontSize": 13}},
                "x": {"field": "runs", "type": "quantitative", "title": "runs"},
            },
            "layer": [
                {"mark": {"type": "bar", "cornerRadiusTopRight": 4,
                          "cornerRadiusBottomRight": 4, "height": 36},
                 "encoding": {"color": {"field": "agent", "type": "nominal", "legend": None,
                                        "scale": {"domain": ["claude", "codex"],
                                                  "range": SERIES}}}},
                {"mark": {"type": "text", "align": "left", "dx": 6, "color": INK,
                          "fontSize": 12},
                 "encoding": {"text": {"field": "label"}}},
            ],
        },
        "Horizontal bar chart of formbook agent runs by agent: claude 782 runs (97.1%), "
        "codex 23 runs (2.9%), 805 total.",
    )
    specs["agent-split"] = s

    # 5. Fleet concurrency with the peak marked.
    fleet = [r for r in rows(data_dir / "fleet_throughput_series.csv")
             if r["boxes"] not in ("", "None", "null")]
    vals = [{"t": r["as_of"], "boxes": int(float(r["boxes"]))} for r in fleet]
    peak = max(vals, key=lambda v: v["boxes"])
    s = spec(
        f"Fleet peak: {peak['boxes']} concurrent boxes at {peak['t'][11:16]} UTC, {peak['t'][:10]}",
        "Boxes alive across the whole fleet (all projects, Hetzner and AWS), ~20-minute samples",
        f"Source: fleet-throughput series.jsonl, {len(vals)} samples with a box count "
        "(2 null samples dropped). Collected 2026-10-15.",
        {
            "layer": [
                {"data": {"values": vals},
                 "mark": {"type": "line", "color": NAVY, "strokeWidth": 2},
                 "encoding": {
                     "x": {"field": "t", "type": "temporal", "title": "UTC",
                           "axis": {"format": "%b %-d %H:%M", "tickCount": 8}},
                     "y": {"field": "boxes", "type": "quantitative",
                           "title": "concurrent boxes"}}},
                {"data": {"values": [peak]},
                 "mark": {"type": "point", "filled": True, "size": 90, "color": SERIES[1],
                          "stroke": "#ffffff", "strokeWidth": 2},
                 "encoding": {"x": {"field": "t", "type": "temporal"},
                              "y": {"field": "boxes", "type": "quantitative"}}},
                {"data": {"values": [peak]},
                 "mark": {"type": "text", "align": "right", "dx": -10, "dy": 2, "color": INK,
                          "fontSize": 12, "fontWeight": "bold"},
                 "encoding": {"x": {"field": "t", "type": "temporal"},
                              "y": {"field": "boxes", "type": "quantitative"},
                              "text": {"value": f"peak {peak['boxes']} boxes"}}},
            ],
        },
        f"Line chart of fleet-wide concurrent boxes from {vals[0]['t'][:10]} to {vals[-1]['t'][:10]}. "
        f"It stays under 30 until Oct 14, then climbs to a peak of {peak['boxes']} at "
        f"{peak['t'][11:16]} UTC on {peak['t'][:10]}.",
    )
    specs["fleet-concurrency"] = s

    alt = {}
    for name, s in specs.items():
        (out_dir / f"{name}.vl.json").write_text(json.dumps(s, indent=2) + "\n")
        alt[name] = {"title": s["title"]["text"], "alt": s["description"]}
    (out_dir / "alt.json").write_text(json.dumps(alt, indent=2) + "\n")
    print(json.dumps(alt, indent=2))


if __name__ == "__main__":
    main(*sys.argv[1:3])
