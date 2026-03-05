const { test, expect } = require('@playwright/test');

test('AC7: City cannot be selected until State is selected', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');

  // Verify that the City dropdown is disabled until a State is selected
  const cityControl = page.locator('#city [aria-disabled]').first();
  await expect(cityControl).toHaveAttribute('aria-disabled', 'true');

  // 1) NCR -> Delhi
  await page.locator('#state').click();
  await page.getByText('NCR', { exact: true }).click();

  await page.locator('#city').click();
  await expect(page.getByText('Delhi', { exact: true })).toBeVisible();
  

  // 2) Haryana -> Karnal
  await page.locator('#state').click();
  await page.getByText('Haryana', { exact: true }).click();

  await page.locator('#city').click();
  await expect(page.getByText('Karnal', { exact: true })).toBeVisible();
  

  // 3) Uttar Pradesh -> Lucknow
  await page.locator('#state').click();
  await page.getByText('Uttar Pradesh', { exact: true }).click();

  await page.locator('#city').click();
  await expect(page.getByText('Lucknow', { exact: true })).toBeVisible();
  

  // 4) Rajasthan -> Jaipur
  await page.locator('#state').click();
  await page.getByText('Rajasthan', { exact: true }).click();

  await page.locator('#city').click();
  await expect(page.getByText('Jaipur', { exact: true })).toBeVisible();
  
});