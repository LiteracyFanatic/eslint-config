// playwright: focused test should trigger
import { expect, test } from '@playwright/test';

test.only('home page', async ({ page }) => {
    await page.goto('http://localhost:3000');
    expect(page).toBeTruthy();
});
