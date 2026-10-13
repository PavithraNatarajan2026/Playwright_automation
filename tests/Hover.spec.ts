import { test, expect } from '@playwright/test';

test('Verify hover operations', async ({ page }) => {
    await page.goto('https://practice-automation.com/');
    await page.getByRole('link', { name: 'Hover' }).click();
    await expect(page).toHaveURL('https://practice-automation.com/hover/');
    await page.getByText('Mouse over me').hover();
});