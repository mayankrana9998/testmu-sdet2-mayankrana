import { APIResponse, expect } from '@playwright/test';

export async function expectStatus(response: APIResponse, code: number): Promise<void> {
  expect(response.status()).toBe(code);
}

export async function expectResponseTime(start: number, maxMs: number): Promise<void> {
  const elapsed = Date.now() - start;
  expect(elapsed).toBeLessThan(maxMs);
}
