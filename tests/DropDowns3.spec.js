const { test, expect } = require('@playwright/test')

for(const option of options) {
    let value
}

test("Handle dropdowns", async({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const content = await page.locator("#country").textContent();
    await page.waitForTimeout(5000);
})

