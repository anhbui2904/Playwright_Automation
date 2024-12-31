const { test, expect } = require('@playwright/test');

test('AssertionsTest', async({ page }) => {

    await page.goto('https://demo.nopcommerce.com/register');

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    //await expect(page).toHaveTitle('nopCommerce demo store. Register');

    const logoElement = page.locator('.header-logo');
    //await expect(logoElement).toBeVisible();

    const searchStoreBox = page.locator('#small-searchterm');
    await expect(searchStoreBox).toBeEnabled();

    const maleRadioButton = page.locator('#gender-male');
    await maleRadioButton.click();
    await expect(maleRadioButton).toBeChecked();

    const newsletterCheckBox = page.locator('#Newsletter');
    await expect(newsletterCheckBox).not.toBeChecked(); // Assuming it starts unchecked

    const regButton = page.locator('#register-button');
    await expect(regButton).toHaveAttribute('type', 'submit'); // Correct spelling of 'HaveAttribute'

    await expect(page.locator('.page-title h1')).toHaveText('Register');

    await expect(page.locator('.page-title h1')).toContainText('Reg');
    const emailInput = page.locator('#Email');
    await emailInput.fill('test@demo.com');
    await expect(emailInput).toHaveValue('test@demo.com');
});