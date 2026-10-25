// Reader-usage analytics (davidaw_ad-o6u): how people read and move through
// the site, sent as GA4 events through the gtag that astro-google-analytics
// loads. No text content, names or emails are sent; only paths, buckets and
// counts. Survives ClientRouter navigations: document-level listeners are
// bound once, per-page state resets on astro:page-load.

import {
  charsBucket,
  contentType,
  expectedSeconds,
  linkType,
  locale,
  navArea,
  newMilestones,
  percentRead,
  vitalRating,
  wordBucket,
} from "@utils/usage";

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    __usageBound?: boolean;
  }
}

// astro-google-analytics keeps its gtag function private, so push to the same
// dataLayer the way gtag does (gtag.js only reads Arguments objects).
function gtag(..._args: unknown[]): void {
  // eslint-disable-next-line prefer-rest-params
  (window.dataLayer = window.dataLayer || []).push(arguments);
}

function send(name: string, params: Params = {}): void {
  gtag("event", name, { ...pageParams(), ...params });
}

interface PageState {
  path: string;
  type: string;
  article: HTMLElement | null;
  words: number;
  scrollSeen: Set<number>;
  timeSeen: Set<number>;
  visibleMs: number;
  visibleSince: number | null;
  completed: boolean;
  started: number;
  timer?: number;
}

let page: PageState | null = null;

function pageParams(): Params {
  if (!page) return {};
  const a = page.article;
  return {
    content_type: page.type,
    site_locale: locale(page.path),
    post_tags: a?.dataset.usageTags || undefined,
    post_year: a?.dataset.usageYear || undefined,
    word_bucket: a ? wordBucket(page.words) : undefined,
  };
}

function visibleSeconds(p: PageState): number {
  const live = p.visibleSince === null ? 0 : performance.now() - p.visibleSince;
  return Math.round((p.visibleMs + live) / 1000);
}

function checkTime(): void {
  if (!page) return;
  const s = visibleSeconds(page);
  for (const mark of [15, 60, 180, 600]) {
    if (s >= mark && !page.timeSeen.has(mark)) {
      page.timeSeen.add(mark);
      send("read_time", { seconds: mark });
    }
  }
  maybeComplete();
}

function maybeComplete(): void {
  if (!page || page.completed || !page.article || !page.scrollSeen.has(100)) return;
  // "Read" = reached the end and spent at least half the expected reading time.
  if (visibleSeconds(page) >= expectedSeconds(page.words) / 2) {
    page.completed = true;
    send("read_complete", { seconds: visibleSeconds(page) });
  }
}

function onScroll(): void {
  if (!page) return;
  const target = page.article ?? document.documentElement;
  const rect = target.getBoundingClientRect();
  const pct = percentRead(rect.top, rect.height, window.innerHeight);
  for (const m of newMilestones(pct, page.scrollSeen)) {
    page.scrollSeen.add(m);
    send("read_progress", { percent: m });
  }
  maybeComplete();
}

function onVisibility(): void {
  if (!page) return;
  if (document.visibilityState === "hidden" && page.visibleSince !== null) {
    page.visibleMs += performance.now() - page.visibleSince;
    page.visibleSince = null;
  } else if (document.visibilityState === "visible" && page.visibleSince === null) {
    page.visibleSince = performance.now();
  }
}

function ancestors(el: Element): { tag: string; id?: string; cls?: string; label?: string }[] {
  const out = [];
  for (let n: Element | null = el; n && n !== document.body; n = n.parentElement) {
    out.push({ tag: n.tagName, id: n.id, cls: typeof n.className === "string" ? n.className : "", label: n.getAttribute("aria-label") ?? "" });
  }
  return out;
}

function onClick(e: MouseEvent): void {
  const el = e.target as Element | null;
  const a = el?.closest?.("a[href]") as HTMLAnchorElement | null;
  if (a) {
    const href = a.getAttribute("href") ?? "";
    const type = linkType(href, location.origin);
    let path = "";
    try {
      const u = new URL(href, location.href);
      path = u.origin === location.origin ? u.pathname : u.hostname;
    } catch {
      path = "";
    }
    send("link_click", { link_type: type, nav_area: navArea(ancestors(a)), link_path: path });
    if (type === "tag") send("tag_click", { tag: path.replace(/^.*\/tags\//, "").replace(/\/.*$/, "") });
    return;
  }
  if (el?.closest?.("#theme-btn")) {
    // theme.ts flips the theme in its own click handler; read it after.
    setTimeout(() => send("theme_change", { theme: document.documentElement.getAttribute("data-theme") ?? "" }), 0);
  }
}

function onCopy(): void {
  const sel = document.getSelection();
  const n = sel?.toString().length ?? 0;
  if (n === 0) return;
  const node = sel?.anchorNode;
  const inCode = !!(node && (node.nodeType === 1 ? (node as Element) : node.parentElement)?.closest("pre, code"));
  send("text_copy", { chars_bucket: charsBucket(n), in_code: inCode });
}

let searchTimer: number | undefined;
function onInput(e: Event): void {
  const t = e.target as HTMLInputElement | null;
  if (!t?.matches?.(".pagefind-ui__search-input")) return;
  window.clearTimeout(searchTimer);
  searchTimer = window.setTimeout(() => {
    const q = t.value.trim().toLowerCase();
    if (q.length >= 3) send("search", { search_term: q.slice(0, 100) });
  }, 1500);
}

function observeVitals(): void {
  if (!("PerformanceObserver" in window)) return;
  let lcp = 0;
  let cls = 0;
  let inp = 0;
  const watch = (type: string, f: (e: PerformanceEntry) => void) => {
    try {
      new PerformanceObserver(list => list.getEntries().forEach(f)).observe({ type, buffered: true } as PerformanceObserverInit);
    } catch {
      /* unsupported entry type */
    }
  };
  watch("largest-contentful-paint", e => (lcp = e.startTime));
  watch("layout-shift", e => {
    const s = e as PerformanceEntry & { value: number; hadRecentInput: boolean };
    if (!s.hadRecentInput) cls += s.value;
  });
  watch("event", e => (inp = Math.max(inp, e.duration)));
  let sent = false;
  addEventListener("visibilitychange", () => {
    if (document.visibilityState !== "hidden" || sent) return;
    sent = true;
    const report = (name: "LCP" | "CLS" | "INP", v: number) =>
      send("web_vital", { metric_name: name, metric_value: name === "CLS" ? Math.round(v * 1000) / 1000 : Math.round(v), rating: vitalRating(name, v), transport_type: "beacon" });
    if (lcp) report("LCP", lcp);
    report("CLS", cls);
    if (inp) report("INP", inp);
  });
}

function startPage(): void {
  // astro:page-load also fires for the first page; ignore that duplicate.
  if (page && page.path === location.pathname && performance.now() - page.started < 2000) return;
  if (page?.timer) window.clearInterval(page.timer);
  const article = document.getElementById("article");
  page = {
    path: location.pathname,
    type: contentType(location.pathname),
    article,
    words: article ? (article.textContent ?? "").split(/\s+/).filter(Boolean).length : 0,
    scrollSeen: new Set(),
    timeSeen: new Set(),
    visibleMs: 0,
    visibleSince: document.visibilityState === "visible" ? performance.now() : null,
    completed: false,
    started: performance.now(),
  };
  page.timer = window.setInterval(checkTime, 5000);
  if (page.type === "error") send("error_page", { page_referrer: document.referrer ? new URL(document.referrer).hostname : "" });
  onScroll();
}

if (!window.__usageBound) {
  window.__usageBound = true;
  addEventListener("scroll", onScroll, { passive: true });
  document.addEventListener("visibilitychange", onVisibility);
  document.addEventListener("click", onClick, { capture: true });
  document.addEventListener("copy", onCopy);
  document.addEventListener("input", onInput);
  document.addEventListener("astro:page-load", startPage);
  observeVitals();
  startPage();
}
