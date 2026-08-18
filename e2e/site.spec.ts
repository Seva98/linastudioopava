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

test("team page contains every supplied instructor profile", async ({ page }) => {
  await page.goto("/tym");
  for (const name of ["Karolína Valalíková", "Sára Nemeth", "Mirek Danišovič", "Kateřina Ostapenko"]) {
    await expect(page.getByRole("heading", { level: 2, name })).toBeVisible();
  }
});

test("desktop instructor portraits keep one size while alternating sides", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "desktop-only alternating layout");
  await page.goto("/tym");
  const profiles = page.locator(".instructor-profile");
  const widths: number[] = [];

  for (let index = 0; index < await profiles.count(); index += 1) {
    const profile = profiles.nth(index);
    const imageBox = await profile.locator(".instructor-profile__media").boundingBox();
    const contentBox = await profile.locator(".instructor-profile__content").boundingBox();
    expect(imageBox).not.toBeNull();
    expect(contentBox).not.toBeNull();
    widths.push(imageBox!.width);
    expect(index % 2 === 0 ? imageBox!.x < contentBox!.x : imageBox!.x > contentBox!.x).toBe(true);
  }

  expect(Math.max(...widths) - Math.min(...widths)).toBeLessThan(1);
});

test("pricing tables and studio gallery are populated", async ({ page }) => {
  await page.goto("/cenik");
  await expect(page.locator(".pricing-card table")).toHaveCount(3);
  await expect(page.locator(".pricing-card tbody tr")).toHaveCount(9);

  await page.goto("/studio");
  await expect(page.locator(".studio-gallery__item")).toHaveCount(9);
});

test("contact details are followed by a responsive Google map", async ({ page }) => {
  await page.goto("/kontakt");
  const map = page.getByTitle("Mapa Lina Studio Opava");
  await expect(map).toBeVisible();
  await expect(map).toHaveAttribute("src", /maps\.google\.com\/maps/);
  await expect(map).toHaveAttribute("src", /q=49\.9405867,17\.8974933/);
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
