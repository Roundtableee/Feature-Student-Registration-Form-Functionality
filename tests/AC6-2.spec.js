const { test, expect } = require('@playwright/test');

test('AC6-2: Email must contain "@" and a valid domain extension.', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');


  await page.getByPlaceholder('First Name').fill('Test');
  await page.getByPlaceholder('Last Name').fill('User');
  await page.getByText('Male', { exact: true }).click();
  await page.getByPlaceholder('Mobile Number').fill('0123456789');

  // Missing '@'
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('testgmail.com');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Thanks for submitting the form')).toBeHidden();

  // Missing '.com'
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('test@gmail');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Thanks for submitting the form')).toBeHidden();

  // valid email
  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('test@gmail.com');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Thanks for submitting the form')).toBeVisible();
});