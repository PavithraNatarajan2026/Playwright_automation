import { test, expect } from '@playwright/test';

test('Handle Slider', async ({ page }) => {

  await page.goto('https://practice-automation.com/');

  const sliderLink = page.getByRole('link', { name: 'Sliders' });

  await expect(sliderLink).toBeVisible();
  await sliderLink.click();

  await expect( page.getByRole('heading', { name: 'Sliders' })).toBeVisible();

  await expect(page).toHaveURL('https://practice-automation.com/sliders/');

  const slider = page.locator('input[type="range"]');

  await expect(slider).toBeVisible();

  const initialValue = await slider.inputValue();

  await slider.focus();
  await page.keyboard.press('ArrowRight');

  const updatedValue = await slider.inputValue();

  expect(updatedValue).not.toBe(initialValue);
});