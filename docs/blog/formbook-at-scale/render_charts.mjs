// Render every *.vl.json in a directory to SVG and 2x PNG.
// Usage: NODE_PATH=<dir with vega@6 + vega-lite@6 + @resvg/resvg-js> node render_charts.mjs <charts-dir> <font.ttf>...
// (vega and vega-lite are not site dependencies; install them in a scratch dir.)
import { createRequire } from "node:module";
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const require = createRequire(path.join(process.env.NODE_PATH ?? ".", "noop.js"));
const vega = await import(require.resolve("vega"));
const vl = await import(require.resolve("vega-lite"));
const { Resvg } = require("@resvg/resvg-js");

const [dir, ...fontFiles] = process.argv.slice(2);
for (const file of readdirSync(dir).filter(f => f.endsWith(".vl.json")).sort()) {
  const spec = JSON.parse(readFileSync(path.join(dir, file), "utf8"));
  const { spec: compiled } = vl.compile(spec);
  const view = new vega.View(vega.parse(compiled), { renderer: "none" });
  const svg = await view.toSVG();
  view.finalize();
  const base = path.join(dir, file.replace(/\.vl\.json$/, ""));
  writeFileSync(`${base}.svg`, svg);
  const png = new Resvg(svg, {
    fitTo: { mode: "zoom", value: 2 },
    font: { fontFiles, loadSystemFonts: false, defaultFontFamily: "IBM Plex Mono" },
  }).render().asPng();
  writeFileSync(`${base}.png`, png);
  console.log(`${file} -> ${path.basename(base)}.svg, .png`);
}
