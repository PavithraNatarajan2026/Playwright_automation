import { test, expect } from '@playwright/test';

test('Verify table data', async ({ page }) => {
    await page.goto('https://practice-automation.com/');    
    await page.getByRole('link', { name: 'Tables' }).click();
  await page.goto('https://practice-automation.com/tables/');

  const table = page.locator('table').first();

  await expect(table).toBeVisible();

  await expect(table.getByRole('cell', { name: 'Oranges', exact: true }) ).toBeVisible();

  await expect( table.getByRole('cell', { name: 'Laptop', exact: true }) ).toBeVisible();

  await expect(table.getByRole('cell', { name: 'Marbles', exact: true })).toBeVisible();

  const laptopRow = table.getByRole('row', { name: /Laptop/ });
await expect( laptopRow.getByRole('cell', { name: '$1200.00', exact: true })).toHaveText('$1200.00');

  const orangeRow = table.getByRole('row', { name: /Oranges/ });
  await expect( orangeRow.getByRole('cell', { name: '$3.99', exact: true })).toHaveText('$3.99');

  const marbleRow = table.getByRole('row', { name: /Marbles/ });
  await expect(  marbleRow.getByRole('cell', { name: '$1.25', exact: true }) ).toHaveText('$1.25');

  await expect(table.getByRole('row')).toHaveCount(4);

  const sortableTable = page.locator('table').filter({ hasText: 'India' });
  await expect(sortableTable).toBeVisible();

  await sortableTable.getByRole('columnheader', { name: 'Country' }).click();

  const firstDataRow = sortableTable.locator('tbody tr').first();

  await expect(firstDataRow).toContainText('Bangladesh');
});