const { test, expect } = require('@playwright/test');

test('AC5:submission modal correctly displays the exact data entered in the form', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  
  // Fill out the form with test data
  await page.getByPlaceholder('First Name').fill('Test');
  await page.getByPlaceholder('Last Name').fill('User');
  await page.getByText('Male', { exact: true }).click();
  await page.getByPlaceholder('Mobile Number').fill('0123456789');

  await page.getByRole('textbox', { name: 'name@example.com' }).click();
  await page.getByRole('textbox', { name: 'name@example.com' }).fill('test@gmail.com');

  await page.locator('#dateOfBirthInput').click();
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('combobox').nth(1).selectOption('2000');
  await page.getByRole('combobox').first().click();
  await page.getByRole('combobox').first().selectOption('0');
  await page.getByRole('gridcell', { name: 'Choose Saturday, January 1st,' }).click();

  await page.getByRole('button', { name: 'Choose File' }).click();
  await page.getByRole('button', { name: 'Choose File' }).setInputFiles('test_picture.jpg');

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

  await page.getByRole('button', { name: 'Submit' }).click();
  
// check modal content
  await expect(page.getByText('Thanks for submitting the form')).toBeVisible();
  
  var row = page.getByRole('cell', { name: 'Student Name' }).locator('xpath=ancestor::tr');
  await expect(row.getByRole('cell', { name: 'Test User' })).toBeVisible();

  row = page.getByRole('cell', { name: 'Student Email' }).locator('xpath=ancestor::tr');
  await expect(row.getByRole('cell', { name: 'test@gmail.com' })).toBeVisible();

  row = page.getByRole('cell', { name: 'Gender' }).locator('xpath=ancestor::tr');
  await expect(row.getByRole('cell', { name: 'Male' })).toBeVisible();

  row = page.getByRole('cell', { name: 'Date of Birth' }).locator('xpath=ancestor::tr');
  await expect(row.getByRole('cell', { name: '01 January,2000' })).toBeVisible();

  row = page.getByRole('cell', { name: 'Mobile' }).locator('xpath=ancestor::tr');
  await expect(row.getByRole('cell', { name: '0123456789' })).toBeVisible();

  row = page.getByRole('cell', { name: 'Subjects' }).locator('xpath=ancestor::tr');
  await expect(row.getByRole('cell', { name: 'Maths' })).toBeVisible();

  row = page.getByRole('cell', { name: 'Hobbies' }).locator('xpath=ancestor::tr');
  await expect(row.getByRole('cell', { name: 'Sports' })).toBeVisible();

  row = page.getByRole('cell', { name: 'Address' }).locator('xpath=ancestor::tr');
  await expect(row.getByRole('cell', { name: 'test address' })).toBeVisible();

  row = page.getByRole('cell', { name: 'State and City' }).locator('xpath=ancestor::tr');
  await expect(row.getByRole('cell', { name: 'NCR Delhi' })).toBeVisible();

  row = page.getByRole('cell', { name: 'Picture' }).locator('xpath=ancestor::tr');
  await expect(row.getByRole('cell', { name: 'test_picture.jpg' })).toBeVisible();
});