const { test, expect } = require('@playwright/test');

test('Simple test', async({ page }) => {
    // Navigate to a website
    await page.goto('https://example.com');

    // Check if the page title is correct
    await expect(page).toHaveTitle('Example Domain');

    // Check if a specific text is present on the page
    const content = await page.textContent('body');
    expect(content).toContain('This domain is for use in illustrative examples in documents.');
});