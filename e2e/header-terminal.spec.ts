import { expect, test } from "@playwright/test";

test("engineering terminal searches, lists, opens a project and completes commands", async ({ page }) => {
  await page.goto("/engineering");
  const input = page.getByRole("textbox", { name: "Terminal command" });
  const output = page.locator(".live-lines");

  await input.fill("grep rust");
  await input.press("Enter");
  await expect(output).toContainText("whatsapp-link-rs");

  await input.fill("ls");
  await input.press("Enter");
  await expect(output).toContainText("thoth");

  await input.fill("man thoth");
  await input.press("Enter");
  await expect(output).toContainText("Terminal-based note-taking");
  await expect(output.getByRole("link", { name: /github.com\/DavidAwad\/thoth/ })).toHaveAttribute("href", "https://github.com/DavidAwad/thoth");

  await input.fill("cd eng");
  await input.press("Tab");
  await expect(input).toHaveValue("cd engineering");
  await input.press("Enter");
  await expect(output.getByRole("link", { name: /open \/engineering/i })).toHaveAttribute("href", "/engineering");
});

test("terminal history recalls commands and Escape returns focus to the page", async ({ page }) => {
  await page.goto("/engineering");
  const input = page.getByRole("textbox", { name: "Terminal command" });
  await input.fill("help");
  await input.press("Enter");
  await input.press("ArrowUp");
  await expect(input).toHaveValue("help");
  await input.press("Escape");
  await expect(input).not.toBeFocused();
});
