import { Page, expect } from '@playwright/test';
import { env } from '../config/env';

export class BasePage {
  constructor(protected readonly page: Page) {}

  async goto(path = ''): Promise<void> {
    await this.page.goto(`${env.baseUIUrl}${path}`);
  }

  async assertTitleContains(text: string): Promise<void> {
    await expect(this.page).toHaveTitle(new RegExp(text, 'i'));
  }
}
