import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Mozart409/);
});

test("has social links", async ({ page }) => {
  await page.goto("/");

  // getByRole('link', { name: 'Twitter / X' });

  await expect(
    page.getByRole("main").getByRole("link", { name: "GitHub" }),
  ).toBeVisible();
  await expect(
    page.getByRole("main").getByRole("link", { name: "Twitter / X" }),
  ).toBeVisible();
});

test("has experience", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByTestId("text-on-picture")).toContainText("Rust");
});

test("has hero section content", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", { name: "Welcome to my" }),
  ).toBeVisible();
  await expect(page.getByRole("heading", { name: "website" })).toBeVisible();
  await expect(page.getByAltText("Munich Background")).toBeVisible();
});

test("has footer", async ({ page }) => {
  await page.goto("/");

  const footer = page.locator("footer");
  await expect(footer).toBeVisible();
});

test("displays country information when header is present", async ({ page }) => {
  await page.setExtraHTTPHeaders({ "cf-ipcountry": "US" });
  await page.goto("/");

  await expect(
    page.getByText(/You are visiting this website from/),
  ).toBeVisible();
});

test("social links have correct hrefs", async ({ page }) => {
  await page.goto("/");

  const githubLink = page.getByTestId("social-github");
  const twitterLink = page.getByTestId("social-twitter");

  await expect(githubLink).toHaveAttribute(
    "href",
    "https://github.com/mozart409",
  );
  await expect(twitterLink).toHaveAttribute(
    "href",
    "https://twitter.com/marc_van_sax",
  );
});

test("has responsive design elements", async ({ page }) => {
  await page.goto("/");

  // Test mobile viewport
  await page.setViewportSize({ width: 375, height: 667 });
  await expect(page.getByRole("main")).toBeVisible();

  // Test desktop viewport
  await page.setViewportSize({ width: 1920, height: 1080 });
  await expect(page.getByRole("main")).toBeVisible();
});

test("desktop navigation has logo, home link and email button visible", async ({ page }) => {
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto("/");

  // Logo should be visible
  await expect(page.getByRole("banner").getByRole("link").first()).toBeVisible();
  
  // Home link should be visible
  await expect(page.getByRole("banner").getByRole("link", { name: "Home" })).toBeVisible();
  
  // Email me button should be visible
  await expect(page.getByRole("banner").getByRole("link", { name: "Email me" })).toBeVisible();
});

test("mobile navigation has only logo and email button visible", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto("/");

  // Logo should be visible
  await expect(page.getByRole("banner").getByRole("link").first()).toBeVisible();
  
  // Home link should NOT be visible (hidden on mobile with md:flex class)
  await expect(page.getByRole("banner").getByRole("link", { name: "Home" })).not.toBeVisible();
  
  // Email me button should be visible
  await expect(page.getByRole("banner").getByRole("link", { name: "Email me" })).toBeVisible();
});
