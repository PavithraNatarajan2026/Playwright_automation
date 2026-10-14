import {test,expect} from '@playwright/test';
test('Form Fields', async ({ page }) => {
await page.goto('https://practice-automation.com');
await expect(page.locator("//a[text()='Form Fields']")).toBeVisible();
await page.locator("//a[text()='Form Fields']").click();
await expect(page.locator("//h1[text()='Form Fields']")).toBeVisible();
//empty input field validation
await expect(page.locator("//button[@data-cy='submit-btn']")).toBeVisible();
await page.getAttribute("//button[@data-cy='submit-btn']","enabled");
await page.locator("//button[@data-cy='submit-btn']").click();
await page.getAttribute("//p[text()=' * Required']","validationMessage");
//input fields
await expect(page.locator("//input[@name='name-input']")).toBeVisible();
await page.locator("//input[@name='name-input']").click();
await page.locator("//input[@name='name-input']").fill('Pavithra');
await expect(page.locator("//label[text()='Password ']")).toBeVisible();
await page.locator("//input[@type='password']").click();
await page.locator("//input[@type='password']").fill('Pavithra@123');
await expect(page.locator("//label[text()='What is your favorite drink?']")).toBeVisible();
await page.locator("(//input[@type='checkbox'])[1]").click();
await page.locator("(//input[@type='checkbox'])[2]").click();
await page.locator("(//input[@type='checkbox'])[3]").click();
await page.locator("(//input[@type='checkbox'])[5]").click();
await expect(page.locator("//label[text()='What is your favorite color?']")).toBeVisible();
await page.locator("(//input[@type='radio'])[2]").click();
await page.locator("(//input[@type='radio'])[4]").click();
await expect(page.locator("//label[text()='Do you like automation?']")).toBeVisible();
await expect(page.locator("//select[@name='automation']")).toBeVisible();
await page.locator("//select[@name='automation']").click();
await page.locator("//select[@name='automation']").selectOption('No');
});