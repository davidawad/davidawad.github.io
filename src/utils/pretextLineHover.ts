import { prepareWithSegments, layoutWithLines, type LayoutLine } from "@chenglou/pretext";

/**
 * Wraps the text content of `el` into `.pretext-line` spans using pretext's
 * computed line breaks, preserving any inline child elements (strong, em, a,
 * code, etc.) by clipping them at line boundaries.
 *
 * The original innerHTML is stored in `data-pretext-original` so it can be
 * restored before re-measuring (e.g. on resize).
 */
export function wrapWithLineSpans(el: HTMLElement, lines: LayoutLine[]): void {
  // Build flat list of direct child nodes with character offsets.
  interface Run {
    node: ChildNode;
    start: number;
    end: number;
  }
  const runs: Run[] = [];
  let pos = 0;
  for (const child of Array.from(el.childNodes)) {
    const len = child.textContent?.length ?? 0;
    runs.push({ node: child, start: pos, end: pos + len });
    pos += len;
  }

  const lineSpans: HTMLElement[] = [];
  let charPos = 0;
  for (const line of lines) {
    const lineStart = charPos;
    const lineEnd = charPos + line.text.length;
    charPos = lineEnd;

    const span = document.createElement("span");
    span.className = "pretext-line";

    for (const run of runs) {
      if (run.end <= lineStart || run.start >= lineEnd) continue;
      const clipStart = Math.max(run.start, lineStart) - run.start;
      const clipEnd = Math.min(run.end, lineEnd) - run.start;

      if (run.node.nodeType === Node.TEXT_NODE) {
        span.appendChild(
          document.createTextNode(run.node.textContent!.slice(clipStart, clipEnd))
        );
      } else {
        // Shallow clone keeps tag + all attributes (href, class, etc.).
        const clone = (run.node as Element).cloneNode(false) as Element;
        clone.textContent = run.node.textContent!.slice(clipStart, clipEnd);
        span.appendChild(clone);
      }
    }
    lineSpans.push(span);
  }

  el.innerHTML = "";
  for (const span of lineSpans) el.appendChild(span);
}

/**
 * Returns true if the element should be skipped for line-hover wrapping.
 * Skips elements that:
 *  - have already been processed
 *  - contain KaTeX (shallow cloning destroys its nested render structure)
 *  - have no non-whitespace text
 *  - have no measured client width yet
 */
export function shouldSkip(el: HTMLElement): boolean {
  if (el.dataset.pretextDone) return true;
  if (el.querySelector(".katex")) return true;
  if (!(el.textContent ?? "").trim()) return true;
  if (!el.clientWidth) return true;
  return false;
}

/**
 * Restores an element that was previously wrapped by `applyLineHover`,
 * using the saved `data-pretext-original` attribute.
 */
export function restoreElement(el: HTMLElement): void {
  el.innerHTML = el.dataset.pretextOriginal ?? "";
  delete el.dataset.pretextDone;
  delete el.dataset.pretextOriginal;
}

const SELECTORS = ["p", "h1", "h2", "h3", "h4", "h5", "h6"];

export function applyLineHover(): void {
  const article = document.getElementById("article");
  if (!article) return;

  const elements = article.querySelectorAll<HTMLElement>(SELECTORS.join(","));

  for (const el of elements) {
    if (shouldSkip(el)) continue;

    const text = el.textContent ?? "";
    const style = window.getComputedStyle(el);
    const font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    const maxWidth = el.clientWidth;
    const lineHeight =
      parseFloat(style.lineHeight) || parseFloat(style.fontSize) * 1.5;

    el.dataset.pretextOriginal = el.innerHTML;

    const prepared = prepareWithSegments(text, font);
    const { lines } = layoutWithLines(prepared, maxWidth, lineHeight);

    if (lines.length <= 1) {
      delete el.dataset.pretextOriginal;
      continue;
    }

    wrapWithLineSpans(el, lines);
    el.dataset.pretextDone = "1";
  }
}

export function resetAndReapply(): void {
  const article = document.getElementById("article");
  if (!article) return;
  const done = article.querySelectorAll<HTMLElement>("[data-pretext-done]");
  for (const el of done) restoreElement(el);
  applyLineHover();
}
