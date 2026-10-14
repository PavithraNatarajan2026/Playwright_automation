import {test,expect} from '@playwright/test';
test('Verify iframe',async({page})=>{
    await page.goto('https://practice-automation.com/');
    await page.getByRole('link',{name:'iFrames'}).click();
    await expect(page).toHaveURL('https://practice-automation.com/iframes/');
    const iframe1 = page.frameLocator('iframe').nth(0);
  await expect(iframe1.locator('body')).toBeVisible();
  await iframe1.locator('body').hover();
  await page.mouse.wheel(0, 500);
  await iframe1.locator('body').click();
  const iframe2 = page.frameLocator('iframe').nth(1);
  await expect(iframe2.locator('body')).toBeVisible();
  await iframe2.locator('body').hover();
  await page.mouse.wheel(0, 300);
  console.log(await iframe2.locator('body').innerText());
});