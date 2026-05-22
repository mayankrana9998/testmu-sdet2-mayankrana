import { Locator, expect } from '@playwright/test';

export async function waitForVisible(locator: Locator): Promise<void> {
  await expect(locator).toBeVisible();
}

export async function retry<T>(fn: () => Promise<T>, retries = 2): Promise<T> {
  let lastError: unknown;
  for (let i = 0; i <= retries; i += 1) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
}
