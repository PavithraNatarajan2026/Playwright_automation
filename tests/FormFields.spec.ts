import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice-automation.com/');
  await expect(page.getByRole('link', { name: 'JavaScript Delays' })).toBeVisible();
  await page.getByRole('link', { name: 'JavaScript Delays' }).click();
  await expect(page.getByRole('heading', { name: 'JavaScript Delays' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Start' })).toBeVisible();
  await page.getByRole('button', { name: 'Start' }).click();
  await expect(page.locator('#delay')).toContainText('Liftoff!');
  await page.getByRole('button', { name: 'Start' }).click();
});