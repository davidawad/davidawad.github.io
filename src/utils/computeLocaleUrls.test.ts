import { describe, it, expect } from "vitest";
import { computeLocaleUrls } from "@utils/computeLocaleUrls";

const LOCALES = ["en", "ar", "zh"];

const ALL_THREE: Record<string, Set<string>> = {
  en: new Set(["ark-capacitor"]),
  ar: new Set(["ark-capacitor-ar"]),
  zh: new Set(["ark-capacitor"]),
};

const EN_AR_ONLY: Record<string, Set<string>> = {
  en: new Set(["fight-tickets"]),
  ar: new Set(["fight-tickets-ar"]),
  zh: new Set(),
};

const EN_ONLY: Record<string, Set<string>> = {
  en: new Set(["en-only"]),
  ar: new Set(),
  zh: new Set(),
};

// ---------------------------------------------------------------------------
// Post pages — all three translations present
// ---------------------------------------------------------------------------

describe("computeLocaleUrls — post with all three translations", () => {
  it("from EN: routes all three locales correctly", () => {
    const r = computeLocaleUrls("/posts/ark-capacitor", "en", ALL_THREE, LOCALES);
    expect(r.en).toBe("/posts/ark-capacitor");
    expect(r.ar).toBe("/ar/posts/ark-capacitor-ar");
    expect(r.zh).toBe("/zh/posts/ark-capacitor");
  });

  it("from AR: strips -ar suffix, routes all three locales correctly", () => {
    const r = computeLocaleUrls("/posts/ark-capacitor-ar", "ar", ALL_THREE, LOCALES);
    expect(r.en).toBe("/posts/ark-capacitor");
    expect(r.ar).toBe("/ar/posts/ark-capacitor-ar");
    expect(r.zh).toBe("/zh/posts/ark-capacitor");
  });

  it("from ZH: same base slug as EN, routes all three locales correctly", () => {
    const r = computeLocaleUrls("/posts/ark-capacitor", "zh", ALL_THREE, LOCALES);
    expect(r.en).toBe("/posts/ark-capacitor");
    expect(r.ar).toBe("/ar/posts/ark-capacitor-ar");
    expect(r.zh).toBe("/zh/posts/ark-capacitor");
  });
});

// ---------------------------------------------------------------------------
// Post pages — EN + AR only (no ZH translation)
// ---------------------------------------------------------------------------

describe("computeLocaleUrls — post with EN + AR only", () => {
  it("from EN: ZH falls back to /zh/posts listing", () => {
    const r = computeLocaleUrls("/posts/fight-tickets", "en", EN_AR_ONLY, LOCALES);
    expect(r.en).toBe("/posts/fight-tickets");
    expect(r.ar).toBe("/ar/posts/fight-tickets-ar");
    expect(r.zh).toBe("/zh/posts");
  });

  it("from AR: ZH falls back to /zh/posts listing", () => {
    const r = computeLocaleUrls("/posts/fight-tickets-ar", "ar", EN_AR_ONLY, LOCALES);
    expect(r.en).toBe("/posts/fight-tickets");
    expect(r.ar).toBe("/ar/posts/fight-tickets-ar");
    expect(r.zh).toBe("/zh/posts");
  });
});

// ---------------------------------------------------------------------------
// Post pages — EN only (no AR, no ZH)
// ---------------------------------------------------------------------------

describe("computeLocaleUrls — post with EN only", () => {
  it("AR and ZH both fall back to their listing pages", () => {
    const r = computeLocaleUrls("/posts/en-only", "en", EN_ONLY, LOCALES);
    expect(r.en).toBe("/posts/en-only");
    expect(r.ar).toBe("/ar/posts");
    expect(r.zh).toBe("/zh/posts");
  });
});

// ---------------------------------------------------------------------------
// Non-post pages
// ---------------------------------------------------------------------------

describe("computeLocaleUrls — non-post pages", () => {
  const empty = {};

  it("root /  →  locale-prefixed roots", () => {
    const r = computeLocaleUrls("/", "en", empty, LOCALES);
    expect(r.en).toBe("/");
    expect(r.ar).toBe("/ar/");
    expect(r.zh).toBe("/zh/");
  });

  it("/about  →  locale-prefixed about pages", () => {
    const r = computeLocaleUrls("/about", "en", empty, LOCALES);
    expect(r.en).toBe("/about");
    expect(r.ar).toBe("/ar/about");
    expect(r.zh).toBe("/zh/about");
  });

  it("/posts listing  →  locale-prefixed listing pages", () => {
    const r = computeLocaleUrls("/posts", "en", empty, LOCALES);
    expect(r.en).toBe("/posts");
    expect(r.ar).toBe("/ar/posts");
    expect(r.zh).toBe("/zh/posts");
  });

  it("/investing  →  locale-prefixed investing pages", () => {
    const r = computeLocaleUrls("/investing", "en", empty, LOCALES);
    expect(r.en).toBe("/investing");
    expect(r.ar).toBe("/ar/investing");
    expect(r.zh).toBe("/zh/investing");
  });
});
