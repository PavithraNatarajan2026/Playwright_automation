import { test, expect } from '@playwright/test';

test('Verify all gestures', async ({ page }) => {
    await page.goto('https://practice-automation.com/gestures/');
    await expect(page).toHaveURL('https://practice-automation.com/gestures/');

    const box = page.locator('#moveMe');
    await expect(box).toBeVisible();
    const boxBounds = await box.boundingBox();
    if (!boxBounds) {
        throw new Error('Move box is not visible');
    }

    await page.mouse.move(boxBounds.x + boxBounds.width / 2, boxBounds.y + boxBounds.height / 2);
    await page.mouse.down();
    await page.mouse.move(boxBounds.x + boxBounds.width / 2 + 120, boxBounds.y + boxBounds.height / 2 + 60, { steps: 15 });
    await page.mouse.up();
    await expect(box).toBeVisible();

    const image = page.locator('#dragMe');
    await expect(image).toBeVisible();
    const imageBounds = await image.boundingBox();
    if (!imageBounds) {
        throw new Error('Drag image is not visible');
    }

    const dropZone = page.locator('#div2');
    await expect(dropZone).toBeVisible();
    const dropZoneBounds = await dropZone.boundingBox();
    if (!dropZoneBounds) {
        throw new Error('Drop zone is not visible');
    }

    await page.mouse.move(imageBounds.x + imageBounds.width / 2, imageBounds.y + imageBounds.height / 2);
    await page.mouse.down();
    await page.mouse.move(dropZoneBounds.x + dropZoneBounds.width / 2, dropZoneBounds.y + dropZoneBounds.height / 2, { steps: 15 });
    await page.mouse.up();
    await expect(image).toBeVisible();

    const map = page.locator('.wp-block-jetpack-map');
    await expect(map).toBeVisible();
    const mapBounds = await map.boundingBox();
    if (!mapBounds) {
        throw new Error('Map is not visible');
    }

    await page.mouse.move(mapBounds.x + mapBounds.width / 2, mapBounds.y + mapBounds.height / 2);
    await page.mouse.down();
    await page.mouse.move(mapBounds.x + mapBounds.width / 2 + 100, mapBounds.y + mapBounds.height / 2 + 80, { steps: 15 });
    await page.mouse.up();
    await expect(map).toBeVisible();
});