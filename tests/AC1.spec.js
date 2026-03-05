const { test, expect } = require('@playwright/test');

test('AC1: Submit valid data successfully', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');

  // Fill out the form with test data
  await page.getByPlaceholder('First Name').fill('Test');
  await page.getByPlaceholder('Last Name').fill('User');
  await page.getByText('Male', { exact: true }).click();
  await page.getByPlaceholder('Mobile Number').fill('0123456789');
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('test@gmail.com');
  await page.locator('#dateOfBirthInput').click();
  await page.getByRole('gridcell', { name: 'Choose Tuesday, March 3rd,' }).click();
  await page.locator('.subjects-auto-complete__input-container').click();
  await page.locator('#subjectsInput').fill('math');
  await page.getByRole('option', { name: 'Maths' }).click();
  await page.getByRole('checkbox', { name: 'Sports' }).check();
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('test address');
  await page.locator('#state').click();
  await page.getByRole('option', { name: 'NCR' }).click();
  await page.locator('#city').click();
  await page.getByRole('option', { name: 'Delhi' }).click();

  // Submit the form
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Thanks for submitting the form')).toBeVisible();
});