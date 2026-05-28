import { test, expect } from '@playwright/test';
import { pickModel, pickCustomerType } from './helpers.js';

test('deselecting a domain removes its exclusive metrics from step 4', async ({ page }) => {
  await pickModel(page);
  await pickCustomerType(page);

  // Select both domains
  await page.getByText('Acquisition', { exact: false }).first().click();
  await page.getByText('Engagement & Retention', { exact: false }).first().click();
  await page.getByRole('button', { name: 'Continue' }).click();

  // Select an Acquisition-only metric
  await page.getByText('Signup rate', { exact: false }).first().click();
  const signupPill = page.locator('.pill', { hasText: 'Signup rate' }).first();
  await expect(signupPill).toHaveClass(/sel/);

  // Go back to step 3 and deselect Acquisition
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByText('Acquisition', { exact: false }).first().click();

  // Acquisition should be deselected now
  const acquisitionCard = page.locator('.card', { hasText: 'Acquisition' }).first();
  await expect(acquisitionCard).not.toHaveClass(/sel/);

  // Go to step 4 — Signup rate pill should not exist at all (domain removed)
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.locator('.pill', { hasText: 'Signup rate' })).toHaveCount(0);
});
