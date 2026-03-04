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

  await expect(dobInput).toHaveValue(expectedDefault);

 
  await page.locator('#dateOfBirthInput').click();
  await page.getByRole('combobox').nth(1).click();
  await page.getByRole('combobox').nth(1).selectOption('2000');
  await page.getByRole('gridcell', { name: 'Choose Saturday, March 4th,' }).click();
  await expect(dobInput).toHaveValue('04 Mar 2000');
});