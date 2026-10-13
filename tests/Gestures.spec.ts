import { test, expect } from '@playwright/test';

test('Verify gestures', async ({ page }) => {
    await page.goto('https://practice-automation.com/gestures/');

    const box = page.getByText('You can move me around');
    await expect(box).toBeVisible();
    await box.hover();
    await page.mouse.down();
    await page.mouse.move(350, 300, { steps: 10 });
    await page.mouse.up();
    await expect(box).toBeVisible();

    const image = page.locator('img').first();
    await expect(image).toBeVisible();
    await image.dragTo(page.locator('body'));
    await expect(image).toBeVisible();

    const map = page.getByText(/map/i).first();
    await expect(map).toBeVisible();
    await map.hover();
    await page.mouse.wheel(0, 300);
});