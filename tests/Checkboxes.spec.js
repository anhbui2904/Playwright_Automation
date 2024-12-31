const { test, expect } = require('@playwright/test')

test("Handle checkboxes", async({ page }) => {
    await page.goto('http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');

    await page.locator("//input[@id='option-3' and @type='checkbox']").check();

    //expect(await page.locator("//input[@id='option-1' and @type='checkbox']")).toBeChecked();
    //expect(await page.locator("//input[@id='option-1' and @type='checkbox']").isChecked()).toBeTruthy();
})