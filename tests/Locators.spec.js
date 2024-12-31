import { test, expect } from '@playwright/test'

test('Locators', async({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html")

    // Click login button using its ID
    await page.click('#login2')

    // Provide username using CSS selector
    await page.fill('#loginusername', 'pavanol')

    // Provide password using CSS selector
    await page.fill('#loginpassword', 'test@123')

    // Click login button using XPath
    await page.click("//button[normalize-space()='Log in']")

    // Verify logout link is visible
    const logoutLink = await page.locator("//a[normalize-space()='Log out']")
    await expect(logoutLink).toBeVisible()

    await page.close()
})