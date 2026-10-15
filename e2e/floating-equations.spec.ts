import { expect, test } from "@playwright/test";

test("homepage renders visible, animated floating equations", async ({ page }) => {
  await page.goto("/");
  if (process.env.FLOATING_EQUATIONS_SCREENSHOT) {
    await page.screenshot({ path: process.env.FLOATING_EQUATIONS_SCREENSHOT, fullPage: true });
  }

  const layer = page.locator("#floating-equations");
  const equations = layer.locator(".floating-equation .katex");

  await expect(layer).toBeVisible();
  await expect(equations.first()).toBeVisible();
  expect(await equations.count()).toBeGreaterThan(0);

  const equation = layer.locator(".floating-equation").first();
  const initialTransform = await equation.evaluate(el => getComputedStyle(el).transform);
  await page.waitForTimeout(150);
  const nextTransform = await equation.evaluate(el => getComputedStyle(el).transform);
  expect(nextTransform).not.toBe(initialTransform);
});
