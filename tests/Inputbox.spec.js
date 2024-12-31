const { test, expect } = require('@playwright/test')

test('handle inputbox', async({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');

    await expect(await page.locator("//input[@id='topcartlink']")).toBeVisible();
    await expect(await page.locator("//input[@id='FirstName']")).toBeEmpty();
    await expect(await page.locator("//input[@id='FirstName']")).toBeEditable();
    await expect(await page.locator("//input[@id='FirstName']")).toBeEnabled();

    page.fill("//input[@id='name']", 'John');
    await page.waitForTimeout(5000);

})