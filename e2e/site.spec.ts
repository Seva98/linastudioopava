import { expect, test } from "@playwright/test";

const routes = ["/", "/studio", "/lekce", "/tym", "/cenik", "/kontakt"];

for (const route of routes) {
  test(`${route} renders without horizontal overflow`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator("h1")).toHaveCount(1);
    const levels = await page.locator("h1, h2, h3, h4, h5, h6").evaluateAll((headings) =>
      headings.map((heading) => Number(heading.tagName.slice(1))),
    );
    expect(levels[0]).toBe(1);
    expect(levels.every((level, index) => index === 0 || level <= levels[index - 1] + 1)).toBe(true);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(overflow).toBe(false);
  });
}

test("all visible booking links target iSport", async ({ page }) => {
  await page.goto("/");
  const links = page.getByRole("link", { name: /rezervovat lekci|zobrazit rozvrh|zobrazit celý rozvrh/i });
  const count = await links.count();
  expect(count).toBeGreaterThan(2);
  for (let index = 0; index < count; index += 1) {
    await expect(links.nth(index)).toHaveAttribute("href", "https://www.isportsystem.cz");
  }
});

test("mobile navigation exposes every marketing page", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "mobile-only behavior");
  await page.goto("/");
  await page.getByRole("button", { name: "Otevřít menu" }).click();
  for (const label of ["Studio", "Lekce", "Tým", "Ceník", "Kontakt"]) {
    await expect(page.getByRole("navigation", { name: "Mobilní navigace" }).getByRole("link", { name: label })).toBeVisible();
  }
});

test("development component gallery is available", async ({ page }) => {
  await page.goto("/component-gallery");
  await expect(page.getByRole("heading", { level: 1, name: "Design systém" })).toBeVisible();
});

test("content images are optimized, described, and load after scrolling", async ({ page }) => {
  await page.goto("/");
  await page.locator("footer").scrollIntoViewIfNeeded();
  const images = page.locator('img[src*="/_next/image"]');
  await expect(images.first()).toBeVisible();
  const count = await images.count();
  expect(count).toBeGreaterThan(10);

  for (let index = 0; index < count; index += 1) {
    const image = images.nth(index);
    await image.scrollIntoViewIfNeeded();
    await expect(image).toHaveAttribute("alt", /\S{3,}/);
    await expect.poll(() => image.evaluate((element) => (element as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
  }
});

test("keyboard navigation exposes a visible focus target", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name === "mobile", "touch-device emulation does not use keyboard focus modality");
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.locator(":focus-visible")).toBeVisible();
});
