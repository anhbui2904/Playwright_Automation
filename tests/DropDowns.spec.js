const { test, expect } = require('@playwright/test')

test("Handle dropdowns", async({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("#country").selectOption({ label: 'India' });
    await page.waitForTimeout(5000);
})