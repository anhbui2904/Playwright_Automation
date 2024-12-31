const { test, expect } = require('@playwright/test')

test('AssertionsTest', async({ page }) => {

    await page.goto('https://demo.nopcommerce.com/register')

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    const logoElement = await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    const searchStoreBox = await page.locator('#small-searchterm')
    await expect(searchStoreBox).toBeEnabled()

    const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click()
    await expect(maleRadioButton).toBeChecked()

    const newsletterCheckBox = await page.locator('#Newsletter')
    await expect(newsletterCheckBox).toBeChecked()

    const regButton = await page.locator('#register-button')
    await expect(regButton).toHaveAtrribute('type', 'submit')

    await expect(await page.locator('.page-title h1')).toHaveText('Register')

    await expect(await page.locator('.page-title h1')).toContainText('Reg')
    const emailInput = await page.locator('#Email')
    await emailInput.fill('test@demo.com');
    await expect(emailInput).toHaveValue('test@demo.com')

})