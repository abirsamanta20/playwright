import {test, expect } from '@playwright/test';

test.describe.only('Assertions in Playwright', () => {

    test('Learn Assertions', async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/');
        //to have the url
        await expect(page).toHaveURL('https://the-internet.herokuapp.com/');
        //to have the title
        await expect(page).toHaveTitle('The Internet');
        //to have the text content
        await expect(page.locator('h1')).toHaveText('Welcome to the-internet');
       

        await page.pause();
    });
   
});

