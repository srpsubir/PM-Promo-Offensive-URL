import { test, expect } from '@playwright/test';
import { pickModel, pickCustomerType, pickDomain } from './helpers.js';

test('step 1 Continue is disabled until a model is selected', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('button', { name: 'Continue' })).toBeDisabled();
  await page.getByText('Subscription', { exact: false }).first().click();
  await expect(page.getByRole('button', { name: 'Continue' })).toBeEnabled();
});

test('step 2 Continue is disabled until customer type is selected', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Subscription', { exact: false }).first().click();
  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page.getByRole('button', { name: 'Continue' })).toBeDisabled();
  await page.getByText('Business customers', { exact: false }).first().click();
  await expect(page.getByRole('button', { name: 'Continue' })).toBeEnabled();
});

test('step 4 Continue is disabled until at least one metric is selected', async ({ page }) => {
  await pickModel(page);
  await pickCustomerType(page);
  await page.getByText('Acquisition', { exact: false }).first().click();
  await page.getByRole('button', { name: 'Continue' }).click();

  await expect(page.getByRole('button', { name: 'Continue' })).toBeDisabled();
  await page.getByText('Conversion rate', { exact: false }).first().click();
  await expect(page.getByRole('button', { name: 'Continue' })).toBeEnabled();
});
