const { test, expect } = require('@playwright/test');

test('LocateMultipleElemes', async({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');

    // Đảm bảo rằng các phần tử đã được tải
    await page.waitForSelector("//div[@id='tbodyid']//h4/a");

    // Lấy tất cả các sản phẩm bằng XPath
    const products = await page.$$("//div[@id='tbodyid']//h4/a");

    console.log('Found products:');

    for (const product of products) {
        const prodName = await product.textContent();
        console.log(prodName);
    }

    console.log('Finished displaying products');
});