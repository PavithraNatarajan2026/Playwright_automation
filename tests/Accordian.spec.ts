import {test, expect} from '@playwright/test';
test('Check Accordion',async ({page}) => {
    await page.goto('https://practice-automation.com/');
    await page.getByRole('link', { name: 'Accordion' }).click();
    await expect(page).toHaveURL(/\/accordion\/$/);
    await expect(page.getByRole('heading', { name: 'Accordion' })).toBeVisible();
    await expect(page.getByText('Click to see more')).toBeVisible();
    await page.getByText('Click to see more').click();
    await expect(page.getByText('This is the content of the first accordion.')).toBeVisible();
});