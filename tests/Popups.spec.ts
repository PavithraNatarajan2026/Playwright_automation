import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practice-automation.com/');
  await expect(page.getByText('Welcome to your software')).toBeVisible();
  await expect(page.getByRole('link', { name: 'Popups' })).toBeVisible();
  await page.getByRole('link', { name: 'Popups' }).click();
  await expect(page.getByRole('heading', { name: 'Popups' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Alert Popup' })).toBeVisible();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Alert Popup' }).click();
  await expect(page.getByRole('button', { name: 'Confirm Popup' })).toBeVisible();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Confirm Popup' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Confirm Popup' }).click();
  await expect(page.getByRole('button', { name: 'Prompt Popup' })).toBeVisible();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Prompt Popup' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Prompt Popup' }).click();
  await page.getByText('<< click me to see a tooltip').click();
  await page.getByText('Cool text').click();
});