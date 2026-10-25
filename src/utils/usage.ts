// Pure helpers for the reader-usage analytics in src/scripts/usage.ts.
// Kept DOM-light so they can be unit tested.

export type ContentType =
  | "home"
  | "post"
  | "post-list"
  | "tag"
  | "section"
  | "search"
  | "error"
  | "page";

const SECTIONS = ["engineering", "investing", "lawyering", "businesses", "publications", "reading", "about"];

/** Classify a pathname (locale prefixes /ar and /zh are ignored). */
export function contentType(pathname: string): ContentType {
  const p = pathname.replace(/^\/(ar|zh)(?=\/|$)/, "") || "/";
  if (p === "/" || p === "") return "home";
  if (/^\/(404|418|500)\/?$/.test(p)) return "error";
  if (/^\/search\/?$/.test(p)) return "search";
  if (/^\/tags\//.test(p)) return "tag";
  if (/^\/posts\/?(\d+\/?)?$/.test(p)) return "post-list";
  if (/^\/posts\/[^/]+/.test(p)) return "post";
  const first = p.split("/").filter(Boolean)[0] ?? "";
  if (SECTIONS.includes(first)) return "section";
  return "page";
}

/** Locale of a pathname: "ar", "zh" or "en". */
export function locale(pathname: string): string {
  const m = pathname.match(/^\/(ar|zh)(?=\/|$)/);
  return m ? m[1] : "en";
}

export type LinkType = "internal" | "outbound" | "share" | "email" | "tag" | "anchor" | "llm";

const SHARE_HOSTS = /(^|\.)(x\.com|twitter\.com|t\.me|facebook\.com|linkedin\.com|reddit\.com|news\.ycombinator\.com)$/;

/** What kind of link this is, relative to the current origin. */
export function linkType(href: string, origin: string): LinkType {
  if (/^mailto:\?/.test(href)) return "share";
  if (/^mailto:/.test(href)) return "email";
  let url: URL;
  try {
    url = new URL(href, origin);
  } catch {
    return "internal";
  }
  if (url.origin === origin) {
    if (url.hash && url.pathname === new URL(origin).pathname) return "anchor";
    if (/\/llms\.txt$/.test(url.pathname)) return "llm";
    if (/\/tags\//.test(url.pathname)) return "tag";
    return "internal";
  }
  if (SHARE_HOSTS.test(url.hostname) && /(intent|share|submit|sharer)/.test(url.pathname + url.search)) return "share";
  return "outbound";
}

/** Which part of the page a clicked element sits in, from its ancestors' tags, ids and classes. */
export function navArea(ancestors: { tag: string; id?: string; cls?: string; label?: string }[]): string {
  for (const a of ancestors) {
    const tag = a.tag.toLowerCase();
    const id = a.id ?? "";
    const cls = a.cls ?? "";
    const label = (a.label ?? "").toLowerCase();
    if (label.includes("breadcrumb")) return "breadcrumb";
    if (label.includes("pagination") || /pagination/.test(cls)) return "pagination";
    if (/language|lang-switch/.test(id + " " + cls + " " + label)) return "language";
    if (id === "article") return "post-body";
    if (/share/.test(cls + " " + label)) return "share";
    if (tag === "header") return "header";
    if (tag === "footer") return "footer";
    if (id === "toc" || /toc/.test(cls)) return "toc";
    if (/card/.test(cls) || tag === "li" && /post/.test(cls)) return "post-card";
    if (tag === "nav") return "nav";
    if (id === "main-content" || tag === "main") return "main";
  }
  return "other";
}

/** Scroll milestones newly crossed going from `seen` (already sent) to `pct`. */
export function newMilestones(pct: number, seen: ReadonlySet<number>, marks: number[] = [25, 50, 75, 100]): number[] {
  return marks.filter(m => pct >= m && !seen.has(m));
}

/** Percent of an element scrolled through, from its rect and the viewport height. */
export function percentRead(top: number, height: number, viewport: number): number {
  if (height <= 0) return 100;
  const seen = Math.min(Math.max(viewport - top, 0), height);
  return Math.round((seen / height) * 100);
}

/** Expected reading seconds at 230 words per minute. */
export function expectedSeconds(words: number): number {
  return Math.round((words / 230) * 60);
}

export function wordBucket(words: number): string {
  if (words < 300) return "<300";
  if (words < 1000) return "300-999";
  if (words < 2500) return "1000-2499";
  return "2500+";
}

export function charsBucket(n: number): string {
  if (n < 50) return "<50";
  if (n < 300) return "50-299";
  return "300+";
}

/** web.dev thresholds for Core Web Vitals. */
export function vitalRating(name: "LCP" | "CLS" | "INP", value: number): "good" | "needs-improvement" | "poor" {
  const t = { LCP: [2500, 4000], CLS: [0.1, 0.25], INP: [200, 500] }[name];
  return value <= t[0] ? "good" : value <= t[1] ? "needs-improvement" : "poor";
}
