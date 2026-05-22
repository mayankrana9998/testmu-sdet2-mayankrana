import { expect, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class DashboardPage extends BasePage {
  private title = this.page.locator('.title');
  private sortDropdown = this.page.locator('[data-test="product-sort-container"]');
  private inventoryItems = this.page.locator('.inventory_item');

  constructor(page: Page) {
    super(page);
  }

  async assertLoaded(): Promise<void> {
    await expect(this.title).toHaveText(/products/i);
    await expect(this.inventoryItems.first()).toBeVisible();
  }

  async sortByVisibleText(option: string): Promise<void> {
    await this.sortDropdown.selectOption({ label: option });
  }

  async assertItemCountAtLeast(count: number): Promise<void> {
    await expect(this.inventoryItems).toHaveCount(count, { timeout: 15000 });
  }
}
