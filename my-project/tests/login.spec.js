import {test, expect} from "@playwright/test";

test('This is my first test case',async ({page}) =>{
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.locator('#username').fill('student');
    await page.locator('#password').fill('Password123')
    // await page.locator('#submit').click();
    await page.getByRole('button', { name: /submit/i }).click();
    await expect (page.locator('h1.post-title')).toContainText('Logged In Successfully');
    await expect (page.locator('p.has-text-align-center')).toBeVisible('Congratulations student. You successfully logged in!')
    await page.locator('a.wp-block-button__link has-text-color has-background has-very-dark-gray-background-color:has-text("Log out")').click();
    await page.pause();
});