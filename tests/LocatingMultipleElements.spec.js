const { test, expect } = require('@playwright/test');
test('LocateMultipleElemes', async({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html')

    /*const links = await page.$$('a');
    for (const link of links) {
        const linktext = await link.textContent();
        console.log(linktext);
    }*/
    //page.waitForSelector("//div[@id='tbodyid']//h4/a");
    const products = await page.$$("//div[@id='tbodyid']//h4/a")
    for (const product of products) {
        const productName = await product.textContent();
        console.log(productName)
    }
})