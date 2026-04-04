import {test, expect } from '@playwright/test';

test.only('Learn Selectors', async ({ page }) => {
    // navigate to the webpage
    await page.goto('http://127.0.0.1:5500/my-project/tests/clickMe.html');
    // 1 selector by ID
    await page.locator('#clickMeButton').click();
    // 2 selector by class
    await page.locator('.button-style').click();
    // 3 selector by tag and class
    await page.locator('button.button-style').click();
    // 4 selector by attribute
    await page.locator('[data-action="increment"]').click();
    await page.locator('[class="button-style"]').click();
    await page.locator('[id="clickMeButton"]').click();
    // 5 partial attribute selector
    await page.locator ('[role*="but"]').click();
    // 6 selector by text
    await page.locator('text=Click Me').click();
    // 7 combine selector for precision class and text   - find excat text match
    await page.locator('.button-style:text("Click Me")').click();

    // 8 find element containing specific text - has-text
    await page.locator('button:has-text("Click Me")').click();

    // 9 atribute and text combination
    await page.locator('[data-action="increment"]:text("Click Me")').click();

    //10 role selector
    await page.getByRole('button', { name: 'Click Me' }).click();

    //11 role selector with partial name match
    await page.getByRole('button', { name: /Click/ }).click();

    //12 role selector with exact name match
    await page.getByRole('button', { name: 'Click Me' }).click();

    // 13 role selector with case-insensitive partial match
    await page.getByRole('button', { name: /click/i }).click();

    // 15 role selector with regex for partial match
    await page.getByRole('button', { name: /Click/ }).click();

    //assert the counter value    const counterValue = await page.locator('#counter').textContent();
    await expect(page.locator('#counter')).toHaveText('16');
    

    await page.pause();
})