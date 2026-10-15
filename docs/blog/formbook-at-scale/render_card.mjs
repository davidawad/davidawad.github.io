// Render a card SVG to PNG at 1x (its own pixel size), with the site's IBM Plex Mono.
// Usage: NODE_PATH=<dir with @resvg/resvg-js> node render_card.mjs <in.svg> <out.png> <font.ttf>...
import { createRequire } from "node:module";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const require = createRequire(path.join(process.env.NODE_PATH ?? ".", "noop.js"));
const { Resvg } = require("@resvg/resvg-js");

const [input, output, ...fontFiles] = process.argv.slice(2);
const png = new Resvg(readFileSync(input, "utf8"), {
  font: { fontFiles, loadSystemFonts: false, defaultFontFamily: "IBM Plex Mono" },
}).render();
writeFileSync(output, png.asPng());
console.log(`${output}: ${png.width}x${png.height}`);
