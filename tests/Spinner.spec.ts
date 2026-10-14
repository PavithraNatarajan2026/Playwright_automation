import { test, expect } from '@playwright/test';

test('Verify Spinner event', async ({ page }) => {
  await page.goto('https://practice-automation.com/');

  await page.getByRole('link', { name: 'Spinner' }).click();
  await expect(page).toHaveURL('https://practice-automation.com/spinners/' );

  await expect(page.locator('.spinner-hidden')).toBeVisible();
});