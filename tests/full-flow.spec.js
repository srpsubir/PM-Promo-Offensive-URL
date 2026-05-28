import { test, expect } from '@playwright/test';
import { goToResults } from './helpers.js';

test('completes full 5-step flow and renders results page', async ({ page }) => {
  await goToResults(page);

  // Results page key elements are visible
  await expect(page.locator('.r-title')).toBeVisible();
  await expect(page.locator('.exec-hero')).toBeVisible();
  await expect(page.locator('.pl-flow')).toBeVisible();
  await expect(page.locator('.narr-wrap')).toBeVisible();
  await expect(page.locator('.cta')).toBeVisible();
});

test('tags row shows selected model and domain on results page', async ({ page }) => {
  await goToResults(page);

  const tags = page.locator('.r-tags .tag');
  await expect(tags.filter({ hasText: 'Subscription' })).toBeVisible();
  await expect(tags.filter({ hasText: 'Acquisition' })).toBeVisible();
});

test('"Try a different profile" restarts the flow', async ({ page }) => {
  await goToResults(page);
  await page.getByRole('button', { name: 'Try a different profile' }).click();
  await expect(page.getByText('What does your company sell?')).toBeVisible();
});
