import {test, expect} from '@playwright/test';
test('Check Accordion',async ({page}) => {
    await page.goto('https://practice-automation.com/');
    await page.getByRole('link', { name: 'Accordion' }).click();
    await expect(page).toHaveURL(/\/accordions\/$/);
    await expect(page.getByRole('heading', { name: 'Accordion' })).toBeVisible();
    await expect(page.getByText('Click to see more')).toBeVisible();
    await page.getByText('Click to see more').click();
    await page.waitForTimeout(1000);
    await expect(page.getByText('This is an accordion item.')).toBeVisible();
});