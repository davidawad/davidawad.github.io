/**
 * src/data/equations.ts
 *
 * The "beloved equations" set for the sitewide floating-equations background
 * effect (davidaw_ad-292) — a superset of math/finance/physics/CS equations
 * David wants drifting behind the site, ported from the visual concept in
 * the talkinghead video pipeline's equation_effect.py bumper. Rendered from
 * LaTeX at request time via KaTeX (not pre-rendered images), so they scale
 * crisply at any size.
 */

export type EquationCategory = "math" | "physics" | "finance" | "cs";

export type FloatingEquation = {
  latex: string;
  label: string;
  category: EquationCategory;
};

export const FLOATING_EQUATIONS: FloatingEquation[] = [
  // Math
  { latex: "e^{i\\pi} + 1 = 0", label: "Euler's identity", category: "math" },
  { latex: "a^2 + b^2 = c^2", label: "Pythagorean theorem", category: "math" },
  {
    latex: "\\int_a^b f'(x)\\,dx = f(b) - f(a)",
    label: "Fundamental theorem of calculus",
    category: "math",
  },
  {
    latex: "\\int_{-\\infty}^{\\infty} e^{-x^2}\\,dx = \\sqrt{\\pi}",
    label: "Gaussian integral",
    category: "math",
  },
  {
    latex: "\\varphi = \\frac{1+\\sqrt{5}}{2}",
    label: "Golden ratio",
    category: "math",
  },
  {
    latex: "\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}",
    label: "Basel problem",
    category: "math",
  },

  // Physics
  { latex: "E = mc^2", label: "Mass-energy equivalence", category: "physics" },
  { latex: "F = ma", label: "Newton's second law", category: "physics" },
  {
    latex: "i\\hbar\\frac{\\partial}{\\partial t}\\Psi = \\hat{H}\\Psi",
    label: "Schrödinger equation",
    category: "physics",
  },
  {
    latex: "\\Delta x \\, \\Delta p \\geq \\frac{\\hbar}{2}",
    label: "Heisenberg uncertainty principle",
    category: "physics",
  },
  {
    latex: "\\nabla \\cdot \\mathbf{E} = \\frac{\\rho}{\\varepsilon_0}",
    label: "Gauss's law",
    category: "physics",
  },
  {
    latex: "F = G\\frac{m_1 m_2}{r^2}",
    label: "Newton's law of gravitation",
    category: "physics",
  },

  // Finance
  {
    latex:
      "\\frac{\\partial V}{\\partial t} + \\frac{1}{2}\\sigma^2 S^2 \\frac{\\partial^2 V}{\\partial S^2} + rS\\frac{\\partial V}{\\partial S} - rV = 0",
    label: "Black-Scholes equation",
    category: "finance",
  },
  { latex: "f^* = \\frac{bp - q}{b}", label: "Kelly criterion", category: "finance" },
  {
    latex: "A = P\\left(1+\\frac{r}{n}\\right)^{nt}",
    label: "Compound interest",
    category: "finance",
  },
  {
    latex: "E[R_i] = R_f + \\beta_i (E[R_m]-R_f)",
    label: "Capital asset pricing model",
    category: "finance",
  },
  { latex: "PV = \\frac{FV}{(1+r)^n}", label: "Present value", category: "finance" },
  {
    latex: "S = \\frac{E[R_p]-R_f}{\\sigma_p}",
    label: "Sharpe ratio",
    category: "finance",
  },

  // Computer science
  {
    latex: "H(X) = -\\sum_i p(x_i)\\log_2 p(x_i)",
    label: "Shannon entropy",
    category: "cs",
  },
  {
    latex: "P(A|B) = \\frac{P(B|A)P(A)}{P(B)}",
    label: "Bayes' theorem",
    category: "cs",
  },
  { latex: "\\text{P} \\overset{?}{=} \\text{NP}", label: "P vs NP", category: "cs" },
  { latex: "O(n \\log n)", label: "Linearithmic time complexity", category: "cs" },
  {
    latex: "\\sigma(x) = \\frac{1}{1+e^{-x}}",
    label: "Logistic (sigmoid) function",
    category: "cs",
  },
  {
    latex: "\\text{softmax}(x_i) = \\frac{e^{x_i}}{\\sum_j e^{x_j}}",
    label: "Softmax function",
    category: "cs",
  },
];
