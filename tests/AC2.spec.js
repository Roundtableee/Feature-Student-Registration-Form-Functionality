const { test, expect } = require('@playwright/test');

test('AC2: Cannot submit when mandatory fields are blank (4 attempts, each missing one different field)', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');

  const submit = async () => {
    const btn = page.getByRole('button', { name: 'Submit' });
    await btn.scrollIntoViewIfNeeded();
    await btn.click();
  };

  const modal = page.getByText('Thanks for submitting the form');

  // Attempt 1: Missing First Name
  await page.getByPlaceholder('First Name').fill('');
  await page.getByPlaceholder('Last Name').fill('User');
  await page.getByText('Male', { exact: true }).click();
  await page.getByPlaceholder('Mobile Number').fill('0123456789');
  await submit();
  await expect(modal).toBeHidden();

  // Attempt 2: Missing Last Name
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.getByPlaceholder('First Name').fill('Test');
  await page.getByPlaceholder('Last Name').fill('');
  await page.getByPlaceholder('Mobile Number').fill('0123456789');
  await submit();
  await expect(modal).toBeHidden();

  // Attempt 3: Missing Gender
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.getByPlaceholder('First Name').fill('Test');
  await page.getByPlaceholder('Last Name').fill('User');
  await page.getByPlaceholder('Mobile Number').fill('0123456789');
  await submit();
  await expect(modal).toBeHidden();

  // Attempt 4: Missing Mobile
  await page.goto('https://demoqa.com/automation-practice-form');
  await page.getByPlaceholder('First Name').fill('Test');
  await page.getByPlaceholder('Last Name').fill('User');
  await page.getByText('Male', { exact: true }).click();
  await page.getByPlaceholder('Mobile Number').fill('');
  await submit();
  await expect(modal).toBeHidden();
});