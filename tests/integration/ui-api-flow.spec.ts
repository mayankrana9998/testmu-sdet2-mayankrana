import { test, expect, request } from '@playwright/test';
import { env } from '../../config/env';

test('Integration: verify API product appears in UI payload page', async ({ page }) => {
  const context = await request.newContext({ baseURL: env.apiUserBaseUrl });
  const response = await context.get('/products/1');
  expect(response.ok()).toBeTruthy();
  const product = await response.json();

  await page.goto(`${env.apiUserBaseUrl}/products/1`);
  await expect(page.locator('body')).toContainText(product.title);
});
