// Shared navigation helpers — call these in sequence to reach any step

export async function pickModel(page, title = 'Subscription') {
  await page.goto('/');
  await page.getByText(title, { exact: false }).first().click();
  await page.getByRole('button', { name: 'Continue' }).click();
}

export async function pickCustomerType(page, title = 'Business customers') {
  await page.getByText(title, { exact: false }).first().click();
  await page.getByRole('button', { name: 'Continue' }).click();
}

export async function pickDomain(page, title = 'Acquisition') {
  await page.getByText(title, { exact: false }).first().click();
  await page.getByRole('button', { name: 'Continue' }).click();
}

export async function pickMetric(page, text = 'Conversion rate') {
  await page.getByText(text, { exact: false }).first().click();
  await page.getByRole('button', { name: 'Continue' }).click();
}

// Navigate straight to results with minimal selections
export async function goToResults(page) {
  await pickModel(page);
  await pickCustomerType(page);
  await pickDomain(page);
  await pickMetric(page);
  await page.fill('input[type="email"]', 'test@example.com');
  await page.getByRole('button', { name: 'Show me' }).click();
}
