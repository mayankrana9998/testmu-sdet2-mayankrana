import { expect, Page } from '@playwright/test';
import { BasePage } from './base.page';

export class LoginPage extends BasePage {
  private username = this.page.getByTestId('username');
  private password = this.page.getByTestId('password');
  private loginButton = this.page.getByTestId('login-button');
  private error = this.page.locator('[data-test="error"]');

  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.goto('/');
  }

  async login(user: string, pass: string): Promise<void> {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginButton.click();
  }

  async assertErrorContains(message: string): Promise<void> {
    await expect(this.error).toContainText(message);
  }
}
