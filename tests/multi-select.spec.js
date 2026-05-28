import { test, expect } from '@playwright/test';
import { pickModel, pickCustomerType } from './helpers.js';

test('step 3 allows multiple domains to be selected simultaneously', async ({ page }) => {
  await pickModel(page);
  await pickCustomerType(page);

  // Select two domains
  await page.getByText('Acquisition', { exact: false }).first().click();
  await page.getByText('Engagement & Retention', { exact: false }).first().click();

  // Both should show as selected (have .sel class)
  const acquisitionCard = page.locator('.card', { hasText: 'Acquisition' }).first();
  const retentionCard = page.locator('.card', { hasText: 'Engagement & Retention' }).first();
  await expect(acquisitionCard).toHaveClass(/sel/);
  await expect(retentionCard).toHaveClass(/sel/);
});

test('step 3 prevents deselecting the last remaining domain', async ({ page }) => {
  await pickModel(page);
  await pickCustomerType(page);

  // Select one domain then try to deselect it
  await page.getByText('Acquisition', { exact: false }).first().click();
  await page.getByText('Acquisition', { exact: false }).first().click();

  // Should still be selected (can't remove the last one)
  const card = page.locator('.card', { hasText: 'Acquisition' }).first();
  await expect(card).toHaveClass(/sel/);
});

test('step 4 shows metric group headers when multiple domains are selected', async ({ page }) => {
  await pickModel(page);
  await pickCustomerType(page);

  // Select two domains
  await page.getByText('Acquisition', { exact: false }).first().click();
  await page.getByText('Engagement & Retention', { exact: false }).first().click();
  await page.getByRole('button', { name: 'Continue' }).click();

  // Group labels should be visible
  await expect(page.locator('.metrics-group-label', { hasText: 'Acquisition' })).toBeVisible();
  await expect(page.locator('.metrics-group-label', { hasText: 'Engagement' })).toBeVisible();
});
