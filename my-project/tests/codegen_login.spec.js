import { test, expect } from '@playwright/test';

test('This code from codegen', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByRole('textbox', { name: 'Username' }).fill('student');
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();
  await expect(page.getByRole('article')).toContainText('Congratulations student. You successfully logged in!');
  await page.getByRole('link', { name: 'Log out' }).click();

  
});