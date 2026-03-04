const { test, expect } = require('@playwright/test');

test('AC6-1: Mobile must be exactly 10 digits (no letters/symbols)', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');


  await page.getByPlaceholder('First Name').fill('Test');
  await page.getByPlaceholder('Last Name').fill('User');
  await page.getByText('Male', { exact: true }).click();
  
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('test@gmail.com');
  // 9 digits
  await page.getByPlaceholder('Mobile Number').fill('012345678');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Thanks for submitting the form')).toBeHidden();

  // 11 digits
  await page.getByPlaceholder('Mobile Number').fill('01234567890');
  
  await expect(page.getByPlaceholder('Mobile Number')).toHaveValue('0123456789');;

  // 9 digits + 1 alphabetic character
  await page.getByPlaceholder('Mobile Number').fill('012345678a');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Thanks for submitting the form')).toBeHidden();

  // 9 digits + 1 special symbols
  await page.getByPlaceholder('Mobile Number').fill('012345678@');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Thanks for submitting the form')).toBeHidden();

  // 10 digits (valid)
  await page.getByPlaceholder('Mobile Number').fill('0123456789');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Thanks for submitting the form')).toBeVisible();
});