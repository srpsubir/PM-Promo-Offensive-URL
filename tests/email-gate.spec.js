import { test, expect } from '@playwright/test';
import { pickModel, pickCustomerType, pickDomain, pickMetric } from './helpers.js';

async function reachStep5(page) {
  await pickModel(page);
  await pickCustomerType(page);
  await pickDomain(page);
  await pickMetric(page);
}

test('Show me button is disabled with no email entered', async ({ page }) => {
  await reachStep5(page);
  await expect(page.getByRole('button', { name: 'Show me' })).toBeDisabled();
});

test('Show me button is disabled with an invalid email (no @ symbol)', async ({ page }) => {
  await reachStep5(page);
  await page.fill('input[type="email"]', 'notanemail');
  await expect(page.getByRole('button', { name: 'Show me' })).toBeDisabled();
});

test('Show me button is enabled with a valid email', async ({ page }) => {
  await reachStep5(page);
  await page.fill('input[type="email"]', 'test@example.com');
  await expect(page.getByRole('button', { name: 'Show me' })).toBeEnabled();
});

test('gate scenario quote matches selected domain', async ({ page }) => {
  await pickModel(page);
  await pickCustomerType(page);
  // Pick Engagement & Retention specifically
  await page.getByText('Engagement & Retention', { exact: false }).first().click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await pickMetric(page, 'Churn rate');

  // The gate quote should be the retention variant, not the resolution time one
  await expect(page.locator('.gate-scenario-q')).not.toContainText('resolution time');
  await expect(page.locator('.gate-scenario-q')).toContainText('DAU/MAU');
});
