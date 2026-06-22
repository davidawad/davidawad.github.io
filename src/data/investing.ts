/**
 * src/data/investing.ts
 *
 * Single source of truth for the Investing page asset-class breakdown and the
 * founder Q&A list. Imported by both the page (src/pages/investing.astro) and
 * the LLM-text endpoint (src/pages/investing/llms.txt.ts) so the two never
 * drift.
 */

export type Investment = { name: string; href?: string };

export type AssetClass = {
  id: string;
  num: string; // [N/8]
  name: string;
  category: string; // "VC — illiquid", etc.
  philosophy: string;
  detail: string;
  publicLabel?: string;
  public?: Investment[];
};

export const assetClasses: AssetClass[] = [
  {
    id: "vc",
    num: "1/8",
    name: "Venture Capital",
    category: "VC — illiquid",
    philosophy:
      "The asset class I have publicly written about most. Deep-tech founders find my inbox because of a background in software, self-driving, and operating systems.",
    detail:
      "Market over product over team. I look for hair-on-fire problems and founders with courage plus brilliance — in that order. I deploy through angel checks and through funds, and I maintain the largest list of Arabic programming resources online.",
    publicLabel: "Publicly disclosed",
    public: [
      { name: "Groq", href: "https://groq.com" },
      { name: "Anduril", href: "https://anduril.com" },
      { name: "SpaceX", href: "https://spacex.com" },
      { name: "x.ai", href: "https://x.ai/" },
      { name: "Voyager Space", href: "https://voyagerspace.com" },
      { name: "camb.ai (fund)", href: "https://www.camb.ai/" },
      { name: "lune (fund)", href: "https://www.lunedata.io/" },
      { name: "moneyhash (fund)", href: "https://moneyhash.io/" },
      { name: "mamopay (fund)", href: "https://www.mamopay.com/" },
    ],
  },
  {
    id: "re",
    num: "2/8",
    name: "Real Estate",
    category: "RE — turnkey, leveraged",
    philosophy:
      "Long-term wealth creation through leveraged hard assets in growth markets — Texas. Inflation runs hot, so fixed-rate debt on appreciating hard assets is the position.",
    detail:
      "Strictly turnkey. No rehab, no BRRRR, no value-add. The goal is boring, predictable cash flow with minimal operational complexity. STR exists as a sub-strategy, only where regulators are unambiguous.",
  },
  {
    id: "equities",
    num: "3/8",
    name: "Equities",
    category: "Public — passive bias",
    philosophy:
      "I hold equities and remain skeptical of stock-picking edge for retail. The bulk is passive; active research is reserved for situations the index can't price.",
    detail:
      "When I do work a name, I work it like a credit analyst — DCF, unit economics, debt service coverage. I read quarterly letters from operators I respect; I do not read them all.",
  },
  {
    id: "options",
    num: "4/8",
    name: "Options",
    category: "Public — vol seller",
    philosophy:
      "Systematic vol-selling. Premium sold around catalysts — earnings, FOMC — when implied vol is rich relative to the realized distribution.",
    detail:
      "Iron condors and short strangles are the workhorses. I treat options as a separate discipline from stock-picking: different math, different risk, different psychology. The book is sized so a single bad print does not end the program.",
  },
  {
    id: "saas",
    num: "5/8",
    name: "Micro-SaaS",
    category: "PE — sub-$1M ARR",
    philosophy:
      "Cash-flowing, unsexy software businesses bought at 2-4x ARR from operators who are exhausted, not distressed. Niches with high switching costs and low CAC from word-of-mouth.",
    detail:
      "The edge is patience and a willingness to buy businesses too small for institutional PE. Operate lean. Compound at 30-50% cash-on-cash by paying fair-but-unexciting prices.",
    publicLabel: "Operating vehicle",
    public: [{ name: "axethrow.software", href: "https://axethrow.software" }],
  },
  {
    id: "pe",
    num: "6/8",
    name: "Private Equity",
    category: "PE — leveraged growth",
    philosophy:
      "PE math: DSCR, debt service coverage, cash flow under leverage scenarios. The job is to stress the capital stack and walk away when it doesn't survive an unfriendly tape.",
    detail:
      "Through Luminance Capital Partners I perform technical due diligence on PE-backed companies — code audits, fractional CTO work, exit readiness — for sponsors in New York and Dubai.",
    publicLabel: "Diligence shop",
    public: [{ name: "Luminance Capital Partners", href: "https://luminance.capital" }],
  },
  {
    id: "bonds",
    num: "7/8",
    name: "Bonds",
    category: "Fixed income — dry powder",
    philosophy:
      "Treasuries function as a cash-equivalent reserve — dry powder for opportunistic deployment into the other seven boxes when something repriced overnight.",
    detail:
      "No yield-chasing in credit. The job of this bucket is to be available, not to be exciting. A bond book that gets exciting is a bond book that failed.",
  },
  {
    id: "prediction",
    num: "8/8",
    name: "Prediction Markets",
    category: "Research — Kalshi / Polymarket",
    philosophy:
      "Active research interest. The question is whether event-implied probabilities diverge from pricing in adjacent options markets — and whether the divergence survives transaction cost.",
    detail:
      "Treated as a research area, not core capital allocation. Most of the work is the spreadsheet, not the position. The position is what's left after the spreadsheet has eaten everything that didn't pencil.",
  },
];

export const questions = [
  "What do you do? (in one sentence)",
  "How big is the market?",
  "What's your progress?",
  "What's your unique insight?",
  "What's your business model?",
  "Who's on your team?",
  "Would I work for you?",
  "How will your company 10x?",
  "What is the most likely reason you will fail?",
  "What do you want? (size of round, ask)",
];
