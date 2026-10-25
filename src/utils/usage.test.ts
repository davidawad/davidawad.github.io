import { describe, expect, it } from "vitest";
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
} from "./usage";

describe("contentType", () => {
  it.each([
    ["/", "home"],
    ["/ar/", "home"],
    ["/posts/", "post-list"],
    ["/posts/2/", "post-list"],
    ["/posts/game-theory-of-law/", "post"],
    ["/zh/posts/something/", "post"],
    ["/tags/ai/", "tag"],
    ["/search/", "search"],
    ["/404", "error"],
    ["/engineering/", "section"],
    ["/about/", "section"],
    ["/colophon/", "page"],
  ])("%s -> %s", (path, want) => expect(contentType(path)).toBe(want));
});

describe("locale", () => {
  it("reads the prefix", () => {
    expect(locale("/ar/posts/x/")).toBe("ar");
    expect(locale("/zh")).toBe("zh");
    expect(locale("/posts/x/")).toBe("en");
  });
});

describe("linkType", () => {
  const o = "https://davidaw.ad";
  it("classifies", () => {
    expect(linkType("/posts/x/", o)).toBe("internal");
    expect(linkType("/tags/ai/", o)).toBe("tag");
    expect(linkType("/posts/x/llms.txt", o)).toBe("llm");
    expect(linkType("https://github.com/davidawad", o)).toBe("outbound");
    expect(linkType("https://x.com/intent/post?url=abc", o)).toBe("share");
    expect(linkType("https://x.com/realdavidawad", o)).toBe("outbound");
    expect(linkType("mailto:?subject=See", o)).toBe("share");
    expect(linkType("mailto:me@davidaw.ad", o)).toBe("email");
  });
});

describe("navArea", () => {
  it("prefers the innermost meaningful ancestor", () => {
    expect(navArea([{ tag: "a" }, { tag: "article", id: "article" }, { tag: "main", id: "main-content" }])).toBe("post-body");
    expect(navArea([{ tag: "a" }, { tag: "nav" }, { tag: "header" }])).toBe("nav");
    expect(navArea([{ tag: "a" }, { tag: "div" }, { tag: "header" }])).toBe("header");
    expect(navArea([{ tag: "a" }, { tag: "nav", label: "breadcrumb" }])).toBe("breadcrumb");
    expect(navArea([{ tag: "a" }, { tag: "footer" }])).toBe("footer");
    expect(navArea([{ tag: "a" }, { tag: "body" }])).toBe("other");
  });
});

describe("scroll milestones", () => {
  it("emits each mark once", () => {
    expect(newMilestones(60, new Set())).toEqual([25, 50]);
    expect(newMilestones(60, new Set([25, 50]))).toEqual([]);
    expect(newMilestones(100, new Set([25, 50]))).toEqual([75, 100]);
  });
  it("computes percent read", () => {
    expect(percentRead(0, 1000, 500)).toBe(50);
    expect(percentRead(-900, 1000, 500)).toBe(100);
    expect(percentRead(800, 1000, 500)).toBe(0);
    expect(percentRead(0, 0, 500)).toBe(100);
  });
});

describe("buckets and ratings", () => {
  it("buckets", () => {
    expect(wordBucket(120)).toBe("<300");
    expect(wordBucket(1500)).toBe("1000-2499");
    expect(charsBucket(400)).toBe("300+");
    expect(expectedSeconds(230)).toBe(60);
  });
  it("rates vitals", () => {
    expect(vitalRating("LCP", 2000)).toBe("good");
    expect(vitalRating("CLS", 0.2)).toBe("needs-improvement");
    expect(vitalRating("INP", 900)).toBe("poor");
  });
});
