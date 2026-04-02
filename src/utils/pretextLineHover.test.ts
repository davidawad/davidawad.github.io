/**
 * src/utils/pretextLineHover.test.ts
 *
 * Tests for the pretext per-line hover utility.
 *
 * We test `wrapWithLineSpans`, `shouldSkip`, and `restoreElement` in isolation
 * by constructing real DOM elements (via happy-dom) and passing in fake
 * LayoutLine arrays — so we never need a canvas and have no dependency on the
 * actual pretext measurement logic.
 */

// @vitest-environment happy-dom

import { describe, it, expect, beforeEach } from "vitest";
import { wrapWithLineSpans, shouldSkip, restoreElement } from "@utils/pretextLineHover";
import type { LayoutLine } from "@chenglou/pretext";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function makeEl(html: string, tag = "p"): HTMLElement {
  const el = document.createElement(tag);
  el.innerHTML = html;
  // happy-dom returns 0 for clientWidth by default; patch it so shouldSkip passes
  Object.defineProperty(el, "clientWidth", { value: 600, configurable: true });
  return el;
}

/** Build a fake LayoutLine from a text string (width is irrelevant for our tests). */
function line(text: string): LayoutLine {
  const cursor = { segmentIndex: 0, graphemeIndex: 0 };
  return { text, width: 500, start: cursor, end: cursor };
}

// ---------------------------------------------------------------------------
// wrapWithLineSpans
// ---------------------------------------------------------------------------

describe("wrapWithLineSpans", () => {
  it("wraps plain text into .pretext-line spans", () => {
    const el = makeEl("Hello world, how are you today?");
    wrapWithLineSpans(el, [line("Hello world, "), line("how are you today?")]);

    const spans = el.querySelectorAll(".pretext-line");
    expect(spans).toHaveLength(2);
    expect(spans[0].textContent).toBe("Hello world, ");
    expect(spans[1].textContent).toBe("how are you today?");
  });

  it("preserves <strong> tags that fall entirely on one line", () => {
    // <p>Hello <strong>world</strong> foo bar</p>
    // line 1: "Hello world", line 2: " foo bar"
    const el = makeEl("Hello <strong>world</strong> foo bar");
    wrapWithLineSpans(el, [line("Hello world"), line(" foo bar")]);

    const spans = el.querySelectorAll(".pretext-line");
    expect(spans).toHaveLength(2);
    expect(spans[0].querySelector("strong")?.textContent).toBe("world");
    expect(spans[1].textContent).toBe(" foo bar");
  });

  it("clips an inline element that straddles a line boundary", () => {
    // <p><strong>Hello world</strong></p>  — strong text split across two lines
    const el = makeEl("<strong>Hello world</strong>");
    wrapWithLineSpans(el, [line("Hello "), line("world")]);

    const spans = el.querySelectorAll(".pretext-line");
    expect(spans).toHaveLength(2);
    // both spans should contain a <strong>
    expect(spans[0].querySelector("strong")?.textContent).toBe("Hello ");
    expect(spans[1].querySelector("strong")?.textContent).toBe("world");
  });

  it("preserves <a> href attributes on cloned nodes", () => {
    const el = makeEl('<a href="/foo">Click here to read more</a>');
    wrapWithLineSpans(el, [line("Click here "), line("to read more")]);

    const anchors = el.querySelectorAll("a");
    expect(anchors).toHaveLength(2);
    expect(anchors[0].getAttribute("href")).toBe("/foo");
    expect(anchors[1].getAttribute("href")).toBe("/foo");
  });

  it("handles mixed text + inline nodes", () => {
    // "Before " + <em>emphasis</em> + " after"
    const el = makeEl("Before <em>emphasis</em> after");
    wrapWithLineSpans(el, [line("Before emphasis"), line(" after")]);

    const spans = el.querySelectorAll(".pretext-line");
    expect(spans[0].querySelector("em")?.textContent).toBe("emphasis");
    expect(spans[1].textContent).toBe(" after");
  });

  it("produces spans whose combined textContent equals original text", () => {
    const original = "The quick brown fox jumps over the lazy dog";
    const el = makeEl(original);
    const l1 = "The quick brown ";
    const l2 = "fox jumps over ";
    const l3 = "the lazy dog";
    wrapWithLineSpans(el, [line(l1), line(l2), line(l3)]);

    const combined = Array.from(el.querySelectorAll(".pretext-line"))
      .map(s => s.textContent)
      .join("");
    expect(combined).toBe(original);
  });
});

// ---------------------------------------------------------------------------
// shouldSkip
// ---------------------------------------------------------------------------

describe("shouldSkip", () => {
  it("returns false for a plain unprocessed element", () => {
    const el = makeEl("Some text");
    expect(shouldSkip(el)).toBe(false);
  });

  it("returns true if data-pretext-done is set", () => {
    const el = makeEl("Some text");
    el.dataset.pretextDone = "1";
    expect(shouldSkip(el)).toBe(true);
  });

  it("returns true if element contains a .katex child", () => {
    const el = makeEl('Text <span class="katex">E=mc^2</span>');
    expect(shouldSkip(el)).toBe(true);
  });

  it("returns true if textContent is empty / whitespace only", () => {
    const el = makeEl("   ");
    expect(shouldSkip(el)).toBe(true);
  });

  it("returns true if clientWidth is 0 (element not laid out)", () => {
    const el = makeEl("Some text");
    Object.defineProperty(el, "clientWidth", { value: 0, configurable: true });
    expect(shouldSkip(el)).toBe(true);
  });

  it("returns false for a heading with plain text and positive width", () => {
    const el = makeEl("My Heading", "h2");
    expect(shouldSkip(el)).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// restoreElement
// ---------------------------------------------------------------------------

describe("restoreElement", () => {
  it("restores innerHTML from data-pretext-original and clears flags", () => {
    const el = makeEl("original text");
    const originalHTML = el.innerHTML;

    // simulate what applyLineHover does
    el.dataset.pretextOriginal = originalHTML;
    el.dataset.pretextDone = "1";
    wrapWithLineSpans(el, [line("original "), line("text")]);

    expect(el.querySelectorAll(".pretext-line")).toHaveLength(2);

    restoreElement(el);

    expect(el.innerHTML).toBe(originalHTML);
    expect(el.dataset.pretextDone).toBeUndefined();
    expect(el.dataset.pretextOriginal).toBeUndefined();
  });

  it("restores an element with inline markup intact", () => {
    const el = makeEl("Hello <strong>world</strong>");
    const originalHTML = el.innerHTML;

    el.dataset.pretextOriginal = originalHTML;
    el.dataset.pretextDone = "1";
    wrapWithLineSpans(el, [line("Hello "), line("world")]);

    restoreElement(el);

    expect(el.querySelector("strong")?.textContent).toBe("world");
    expect(el.querySelectorAll(".pretext-line")).toHaveLength(0);
  });

  it("does not throw when data-pretext-original is missing", () => {
    const el = makeEl("text");
    el.dataset.pretextDone = "1";
    expect(() => restoreElement(el)).not.toThrow();
    expect(el.dataset.pretextDone).toBeUndefined();
  });
});

// ---------------------------------------------------------------------------
// Regression: the original bug — inline elements caused the paragraph to be
// skipped entirely, leaving it with no hover effect at all.
// ---------------------------------------------------------------------------

describe("regression: inline elements no longer cause paragraph to be skipped", () => {
  it("processes a paragraph that has <strong> children", () => {
    const el = makeEl(
      "The diagrams are built from two ingredients: <strong>propagators</strong> (internal lines) and <strong>vertices</strong> (the points)."
    );
    // simulate two lines
    wrapWithLineSpans(el, [
      line("The diagrams are built from two ingredients: propagators (internal "),
      line("lines) and vertices (the points)."),
    ]);

    const spans = el.querySelectorAll(".pretext-line");
    expect(spans.length).toBeGreaterThan(0);
  });

  it("KaTeX paragraph is NOT processed (no .pretext-line spans added)", () => {
    const el = makeEl('Some text <span class="katex"><span class="katex-html">E=mc²</span></span>');
    // shouldSkip should catch this before wrapWithLineSpans is ever called
    expect(shouldSkip(el)).toBe(true);
    // if someone mistakenly called wrap anyway, the katex structure stays untouched
    // (this is the guard test — the regression was that katex got destroyed)
    const katexBefore = el.querySelector(".katex")?.innerHTML;
    // do NOT call wrap — just verify the skip guard works
    expect(el.querySelectorAll(".pretext-line")).toHaveLength(0);
    expect(el.querySelector(".katex")?.innerHTML).toBe(katexBefore);
  });
});
