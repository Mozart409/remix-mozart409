import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Mozart409/);
});

test("has social links", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  // getByRole('link', { name: 'Twitter / X' });

  await expect(
    page.getByRole("main").getByRole("link", { name: "GitHub" }),
  ).toBeVisible();
  await expect(
    page.getByRole("main").getByRole("link", { name: "Twitter / X" }),
  ).toBeVisible();
});

test("has experience", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  await expect(
    page.getByTestId("text-on-picture", { text: "Rust" }),
  );
});
