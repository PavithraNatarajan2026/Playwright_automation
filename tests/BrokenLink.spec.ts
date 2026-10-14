import {test, expect} from '@playwright/test';
test('Broken link',async ({page}) => {
    await page.goto('https://practice-automation.com/');
    await page.getByRole('link', { name: 'Broken Link' }).click();
    await expect(page).toHaveURL('https://practice-automation.com/broken-links/');
    await expect(page.getByRole('heading', { name: 'Broken Link' })).toBeVisible();
});