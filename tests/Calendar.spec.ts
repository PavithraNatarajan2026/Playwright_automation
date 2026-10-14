import { test, expect } from '@playwright/test';

test.describe('Describe functionality', () => {
test('Select a date using the calendar', async ({ page }) => {
  await page.goto('https://practice-automation.com/');

  await page.getByRole('link', { name: 'Calendars' }).click();

  await expect(page).toHaveURL('https://practice-automation.com/calendars/');

  await page.getByLabel('Select or enter a date').click();

  await page.getByRole('button', { name: /Month picker/ }).click();

  await page.getByRole('button', { name: 'November', exact: true }).click();

  await page.getByRole('button', { name: /Year Picker/ }).click();

  await page.getByRole('button', { name: '2026', exact: true }).click();

  await page.getByRole('button', { name: /Sun Nov 15 2026/ }).click();

  await expect(page.getByRole('textbox', { name: 'Select or enter a date' })).toHaveValue('2026-11-15');

  await page.getByRole('button', { name: 'Submit' }).click();
});

test('Verify all click events', async ({ page }) => {
  await page.goto('https://practice-automation.com/');
  await expect(page.getByRole('link', { name: 'Click Events' })).toBeVisible();
  await page.getByRole('link', { name: 'Click Events' }).click();
  await page.goto('https://practice-automation.com/click-events/');

  await page.getByRole('button', { name: 'Cat' }).click();
  await expect(page.getByText('Meow!')).toBeVisible();
  await page.getByRole('button', { name: 'Dog' }).click();
  await expect(page.getByText('Woof!')).toBeVisible();
  await page.getByRole('button', { name: 'Pig' }).click();
  await expect(page.getByText('Oink!')).toBeVisible();
  await page.getByRole('button', { name: 'Cow' }).click();
  await expect(page.getByText('Moo!')).toBeVisible();
});
});