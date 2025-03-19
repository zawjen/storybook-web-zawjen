import { test, expect } from "@playwright/test";
import moment from "moment";
import momentHijri from "moment-hijri";

test.describe("DatePicker", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000");

    // Find the button and click it to toggle calendar
    const calendarButton = await page.locator(
      '[data-testid="calendar-button"]'
    );
    await calendarButton.click();
  });

  test("renders DatePicker component", async ({ page }) => {
    const inputElement = await page.locator('input[type="text"]'); // Use the appropriate selector
    await expect(inputElement).toBeVisible();
  });

  test("toggles between Gregorian and Hijri calendars", async ({ page }) => {
    // Wait for the switch text to appear
    await expect(page.locator("text=Switch to Gregorian")).toBeVisible();

    // Click the toggle button
    const toggleButton = await page.locator("text=Switch to Gregorian");
    await toggleButton.click();

    // Wait for the Gregorian calendar content to appear
    await expect(page.locator("text=SU")).toBeVisible();
    await expect(page.locator("text=Switch to Hijri")).toBeVisible();
  });

  test("displays loading spinner when toggling calendars", async ({ page }) => {
    // Trigger calendar toggle
    const toggleButton = await page.locator("text=Switch to Gregorian");
    toggleButton.click();

    // Check for loading spinner
    const loadingSpinner = await page.locator('[role="status"]');
    await expect(loadingSpinner).toBeVisible();

    // Wait for the loading spinner to disappear
    await expect(loadingSpinner).toBeHidden();
  });

  test("allows selecting a date in the Gregorian calendar", async ({
    page,
  }) => {
    // Toggle to the Gregorian calendar
    const toggleButton = await page.locator("text=Switch to Gregorian");
    await toggleButton.click();

    // Wait for the Gregorian DatePicker to be visible
    await expect(page.locator("text=SU")).toBeVisible();

    // Simulate date selection
    const currentDate = moment().locale("en");
    await page
      .locator(`button:has-text("${currentDate.format("DD")}")`)
      .click();

    // Check for loading spinner
    const loadingSpinner = await page.locator('[role="status"]');
    await expect(loadingSpinner).toBeVisible();

    // Wait for the loading spinner to disappear
    await expect(loadingSpinner).toBeHidden();

    await expect(page.locator("input")).toHaveValue(
      `${currentDate.format("YYYY/MM/DD")}`
    );
  });

  test("allows selecting a date in the Hijri calendar", async ({ page }) => {
    // Simulate selecting HijriDatePicker

    // Wait for the Gregorian DatePicker to be visible
    await expect(page.locator("text=س")).toBeVisible();

    const currentDate = momentHijri().locale("ar");
    await page
      .locator(`button:has-text("${currentDate.locale("en").format("DD")}")`)
      .click();

    // Check for loading spinner
    const loadingSpinner = await page.locator('[role="status"]');
    await expect(loadingSpinner).toBeVisible();

    // Wait for the loading spinner to disappear
    await expect(loadingSpinner).toBeHidden();

    await expect(page.locator("input")).toHaveValue(
      `${currentDate.locale("ar").format("iYYYY/iMM/iDD")}`
    );
  });
});
