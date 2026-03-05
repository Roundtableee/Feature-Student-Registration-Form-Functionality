const { test, expect } = require('@playwright/test');

test('AC6.3: Date of Birth defaults to current date and user can select a new date', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');

  const dobInput = page.locator('#dateOfBirthInput');

  const expectedDefault = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
    .format(new Date())
    .replace(',', '');
    
  // Verify that the Date of Birth field defaults to the current date
  await expect(dobInput).toHaveValue(expectedDefault);

  // Select a new date (e.g., January 1, 2000) and verify the input updates
  await page.locator('#dateOfBirthInput').click();
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('combobox').nth(1).selectOption('2000');
  await page.getByRole('combobox').first().click();
  await page.getByRole('combobox').first().selectOption('0');
  await page.getByRole('gridcell', { name: 'Choose Saturday, January 1st,' }).click();
  await expect(dobInput).toHaveValue('01 Jan 2000');
});