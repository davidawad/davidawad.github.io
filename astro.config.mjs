import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import sitemap from "@astrojs/sitemap";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { SITE } from "./src/config.js";
import {
  DEFAULT_LOCALE,
  LOCALES_TO_LANG,
  SUPPORTED_LOCALES,
} from "./src/i18n/config.js";

// This project's node_modules directory can be a symlink (for example inside
// a git worktree, where it points back at the main checkout's real
// node_modules). Vite's default server.fs.allow only covers the project root
// plus ancestors of this config file, and it does not follow a symlink whose
// realpath escapes that root, so every asset actually served out of
// node_modules (self-hosted fontsource fonts, KaTeX fonts, the dev toolbar
// entry, etc.) gets rejected as "outside of Vite serving allow list". Resolve
// node_modules to its real path and allow it explicitly so this works from
// the main checkout (a no-op realpath) and from any worktree alike, without
// per-worktree config.
const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const nodeModulesRealPath = fs.realpathSync(
  path.join(projectRoot, "node_modules")
);

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  outDir: "public",
  publicDir: "static",
  integrations: [
    react(),
    mdx(),
    sitemap({
      filter: page => SITE.showArchives || !page.endsWith("/archives"),
      i18n: {
        defaultLocale: DEFAULT_LOCALE,
        locales: LOCALES_TO_LANG,
      },
    }),
  ],
  markdown: {
    remarkPlugins: [
      remarkMath,
      [
        remarkToc,
        {
          heading:
            "(table[ -]of[ -])?contents?|toc|محتويات|المحتويات|جدول المحتويات",
        },
      ],
      [remarkCollapse, { test: "Table of contents" }],
    ],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      themes: { light: "min-light", dark: "night-owl" },
      defaultColor: false,
      wrap: false,
      transformers: [
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationDiff({ matchAlgorithm: "v3" }),
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
    server: {
      fs: {
        allow: [projectRoot, nodeModulesRealPath],
      },
    },
  },
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: SUPPORTED_LOCALES,
  },
  env: {
    schema: {
      PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({
        access: "public",
        context: "client",
        optional: true,
      }),
    },
  },
  experimental: {
    preserveScriptOrder: true,
  },
});
