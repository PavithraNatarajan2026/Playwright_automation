import { test, expect } from '@playwright/test';

test('Simple modal and form modal', async ({ page }) => {
  await page.goto('https://practice-automation.com/');

  await page.getByRole('link', { name: 'Modals' }).click();
  await expect(page).toHaveURL('https://practice-automation.com/modals/');

  await page.getByRole('button', { name: 'Simple Modal' }).click();

  const simpleModal = page.getByRole('dialog', { name: 'Simple Modal' });
  await expect(simpleModal).toBeVisible();
  await expect(simpleModal.getByText('Hi, I’m a simple modal.')).toBeVisible();

  await page.pause();
  await simpleModal.getByRole('button', { name: 'Close' }).click();
  await expect(simpleModal).toBeHidden();

  await page.getByRole('button', { name: 'Form Modal' }).click();

  const formModal = page.getByRole('dialog', { name: 'Modal Containing A Form' });
  await expect(formModal).toBeVisible();

  await formModal.getByRole('textbox', { name: 'Name' }).fill('Pavithra R');
  await formModal.getByRole('textbox', { name: 'Email' }).fill('pavi@example.com');
  await formModal.getByRole('textbox', { name: 'Message' }).fill('This is my practice message.');
  await formModal.getByRole('button', { name: 'Submit' }).click();
});