import { test, expect } from '@playwright/test';

test('Verify all gestures', async ({ page }) => {
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

    const map = page.locator('iframe').last();
    await expect(map).toBeVisible();
    await map.hover();
    await page.mouse.move(400, 300);
    await page.mouse.down();
    await page.mouse.move(500, 300, { steps: 10 });
    await page.mouse.up();
    await expect(map).toBeVisible();
});