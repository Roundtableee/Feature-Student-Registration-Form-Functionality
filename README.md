# Feature: Student Registration Form Functionality (Playwright)

End-to-end tests for the DemoQA Student Registration Form using Playwright.
Target page: https://demoqa.com/automation-practice-form

## Tech stack
- Node.js
- Playwright Test (`@playwright/test`)

## Project structure
- `tests/` Playwright specs covering AC1–AC7
- `playwright.config.js` Test configuration (headless, timeouts, viewport, slowMo)
- `test_picture.jpg` Fixture used for upload validation

## Acceptance criteria coverage
- AC1: Submit valid data successfully (`tests/AC1.spec.js`)
- AC2: Mandatory fields required (`tests/AC2.spec.js`)
- AC3: City options depend on State (`tests/AC3.spec.js`)
- AC4: Subjects shown as removable tags (`tests/AC4.spec.js`)
- AC5: Submission modal displays entered data (`tests/AC5.spec.js`)
- AC6-1: Mobile validation (10 digits) (`tests/AC6-1.spec.js`)
- AC6-2: Email validation (`tests/AC6-2.spec.js`)
- AC6-3: DOB defaults to today and can be changed (`tests/AC6-3.spec.js`)
- AC7: City disabled until State selected (`tests/AC7.spec.js`)

## Setup

- npm init -y
- npm i -D @playwright/test
- npx playwright install

