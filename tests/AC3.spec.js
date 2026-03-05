const { test, expect } = require('@playwright/test');

test('AC3: City options depend on selected State', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');

    // Select state and check for corresponding city options
    await page.locator('#state').click();
    await page.getByRole('option', { name: 'NCR' }).click();
    await page.locator('#city').click();
    await expect(page.getByRole('option', { name: 'Delhi' })).toBeVisible();
    await expect(page.getByRole('option', { name: 'Gurgaon' })).toBeVisible();
    await expect(page.getByRole('option', { name: 'Noida' })).toBeVisible();

    // Select different state and check for different city options
    await page.locator('#state').click();
    await page.getByRole('option', { name: 'Haryana' }).click();
    await page.locator('#city').click();
    await expect(page.getByRole('option', { name: 'Karnal' })).toBeVisible();
    await expect(page.getByRole('option', { name: 'Panipat' })).toBeVisible();
});