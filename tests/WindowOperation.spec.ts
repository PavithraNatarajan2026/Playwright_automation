import { test, expect } from '@playwright/test';

test('Verify window operations', async ({ page, context }) => {
    await page.goto('https://practice-automation.com/');
    await page.getByRole('link', { name: 'Window Operations' }).click();
  await page.goto('https://practice-automation.com/window-operations/');

  const originalPage = page;

  const newTabPromise = context.waitForEvent('page');
  await page.getByRole('button', { name: 'New Tab' }).click();
  const newTab = await newTabPromise;

  await newTab.waitForLoadState();
  await expect(newTab).not.toHaveURL('about:blank');
  await newTab.close();

  await expect(originalPage).toHaveURL('https://practice-automation.com/window-operations/');

  await page.getByRole('button', { name: 'Replace Window' }).click();
  await expect(page).not.toHaveURL('https://practice-automation.com/window-operations/');

  await page.goto('https://practice-automation.com/window-operations/');

  const newWindowPromise = context.waitForEvent('page');
  await page.getByRole('button', { name: 'New Window' }).click();
  const newWindow = await newWindowPromise;

  await newWindow.waitForLoadState();
  await expect(newWindow).not.toHaveURL('about:blank');
  await newWindow.close();
});