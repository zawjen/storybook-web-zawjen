import { test, expect } from "@playwright/test";

test.describe("YearRange Component Tests", () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the page where the component is rendered
    await page.goto("http://localhost:3000");
  });

  test("should toggle calendar type on button click", async ({ page }) => {
    // Verify initial state (Hijri calendar)
    let button = await page.getByRole("button", {
      name: "Switch to Gregorian Calendar",
    });
    const initialText = await button.innerText();
    expect(initialText).toBe("Switch to Gregorian Calendar");

    // Click to switch to Gregorian calendar
    await button.click();

    button = await page.getByRole("button", {
      name: "Switch to Hijri Calendar",
    });

    // Verify that the calendar has switched
    const switchedText = await button.innerText();
    expect(switchedText).toBe("Switch to Hijri Calendar");
  });

  test("should update year range on slider change", async ({ page }) => {
    // Get the initial year range values
    const yearRangeText = await page.locator(".flex.justify-between span");
    const initialYearRange = await yearRangeText.allTextContents();
    const initialStartYear = parseInt(initialYearRange[0], 10);
    const initialEndYear = parseInt(initialYearRange[1], 10);

    const minThumb = await page.getByRole("slider", { name: "Minimum" });
    const maxThumb = await page.getByRole("slider", { name: "Maximum" });

    const minThumbBox = await minThumb.boundingBox();
    const maxThumbBox = await maxThumb.boundingBox();

    if (minThumbBox) {
      // Perform the mouse actions
      await page.mouse.move(minThumbBox.x, minThumbBox.y);
      await page.mouse.down();
      await page.mouse.move(minThumbBox.x + 50, minThumbBox.y);
      await page.mouse.up();
    }

    if (maxThumbBox) {
      // Perform the mouse actions
      await page.mouse.move(maxThumbBox.x, maxThumbBox.y);
      await page.mouse.down();
      await page.mouse.move(maxThumbBox.x - 50, maxThumbBox.y);
      await page.mouse.up();
    }

    // Get the updated year range after slider move
    const updatedYearRange = await yearRangeText.allTextContents();
    const updatedStartYear = parseInt(updatedYearRange[0], 10);
    const updatedEndYear = parseInt(updatedYearRange[1], 10);

    // Assert that the year range has changed
    expect(updatedStartYear).not.toBe(initialStartYear);
    expect(updatedEndYear).not.toBe(initialEndYear);
  });

  test("should correctly display Gregorian and Hijri years based on the calendar type", async ({
    page,
  }) => {
    // Check initial display (Hijri Calendar by default)
    let yearText = await page
      .locator(".flex.justify-between span")
      .first()
      .innerText();
    expect(parseInt(yearText)).toBeGreaterThanOrEqual(0); // Hijri year check (roughly positive)

    // Switch to Gregorian calendar
    const button = await page.getByRole("button", {
      name: "Switch to Gregorian Calendar",
    });
    await button.click();

    // Check year text after switching to Gregorian calendar
    yearText = await page
      .locator(".flex.justify-between span")
      .first()
      .innerText();
    expect(parseInt(yearText)).toBeGreaterThanOrEqual(1000); // Gregorian year check (roughly positive)
  });
});
