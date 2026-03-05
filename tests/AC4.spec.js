const { test, expect } = require('@playwright/test');

test('AC4: Subjects are shown as removable tags', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');
  
  //Fill subjects
  const subjects = page.locator('.subjects-auto-complete__input-container');
  await subjects.click();
  await page.locator('#subjectsInput').fill('Maths');
  await page.locator('#subjectsInput').press('Enter');

  await page.locator('#subjectsInput').fill('Physics');
  await page.locator('#subjectsInput').press('Enter');
  
  // Verify that the selected subjects are displayed as tags with a remove button
  await expect(page.getByText('Physics', { exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Remove Physics' })).toBeVisible();
  await expect(page.getByText('Maths', { exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Remove Maths' })).toBeVisible();
  await page.getByRole('button', { name: 'Remove Physics' }).click();
  await expect(page.getByText('Physics', { exact: true })).toBeHidden();
});