const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 60_000,
  expect: { timeout: 10_000 },
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    launchOptions: { slowMo: 500 },
    actionTimeout: 10_000,
    navigationTimeout: 30_000
  }
});