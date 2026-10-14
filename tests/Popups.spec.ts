import { test, expect } from '@playwright/test';

test('Handle alert popup', async ({ page }) => {

  await page.goto('https://practice-automation.com');
await expect(page.getByRole('link' , { name: 'Popups' })).toBeVisible();
  await page.getByRole('link' , { name: 'Popups' }).click();
  await expect(page.getByRole('heading' , { name: 'Popups' })).toBeVisible();
     await expect(page).toHaveURL('https://practice-automation.com/popups/');

 
 const alertButton = page.getByRole('button', { name: 'Alert Popup'});

await expect(alertButton).toBeVisible();

page.once('dialog', async (dialog) => {
  expect(dialog.type()).toBe('alert');
  expect(dialog.message()).not.toBe('');
  await dialog.accept();
});

await alertButton.click();

const confirmButton = page.getByRole('button', {name: 'Confirm Popup'});

await expect(confirmButton).toBeVisible();

page.once('dialog', async (dialog) => {
  expect(dialog.type()).toBe('confirm');
  expect(dialog.message()).not.toBe('');
  await dialog.accept();
});

await confirmButton.click();

await expect(confirmButton).toBeVisible();

page.once('dialog', async (dialog) => {
  expect(dialog.type()).toBe('confirm');
  await dialog.dismiss();
});

await confirmButton.click();

const promptButton = page.getByRole('button', {name: 'Prompt Popup'});

await expect(promptButton).toBeVisible();

page.once('dialog', async (dialog) => {
  expect(dialog.type()).toBe('prompt');
  expect(dialog.message()).not.toBe('');
  await dialog.accept('Hello Playwright');
});

await promptButton.click();

await expect(promptButton).toBeVisible();

page.once('dialog', async (dialog) => {
  expect(dialog.type()).toBe('prompt');
  await dialog.dismiss();
});

await promptButton.click();
});