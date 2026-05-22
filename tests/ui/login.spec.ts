import { test, expect } from '@playwright/test';
import users from '../../test-data/login-users.json';
import { LoginPage } from '../../pages/login.page';
import { DashboardPage } from '../../pages/dashboard.page';

test.describe('UI - Login & Dashboard', () => {
  for (const user of users) {
    test(`login validation for ${user.username || 'empty-user'} @smoke`, async ({ page, browserName }) => {
      test.skip(browserName === 'firefox' && !user.valid, 'Limit noisy negative check in firefox');
      const login = new LoginPage(page);
      await login.open();
      await login.login(user.username, user.password);

      if (user.valid) {
        const dashboard = new DashboardPage(page);
        await dashboard.assertLoaded();
        await dashboard.sortByVisibleText('Price (low to high)');
        await expect(page).toHaveURL(/inventory/);
      } else {
        await login.assertErrorContains('Epic sadface');
      }
    });
  }

  test('dashboard inventory smoke on multiple browsers @smoke', async ({ page }) => {
    const login = new LoginPage(page);
    const dashboard = new DashboardPage(page);
    await login.open();
    await login.login('standard_user', 'secret_sauce');
    await dashboard.assertLoaded();
    await expect(page.locator('.inventory_item')).toHaveCount(6);
  });
});
