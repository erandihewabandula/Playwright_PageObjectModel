import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';
import { LogoutPage } from '../../pages/logout';

test('User can logout', async ({ page }) => {

    // Step 1: Create LoginPage object and perform login
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await loginPage.verifyLoginSuccessful(); // ✅ Verify login worked

    // Step 2: Create LogoutPage object and perform logout
    const Logout = new LogoutPage(page);
    await Logout.logout(); // Click logout button

    // Step 3: Verify back on login page
    await expect(page).toHaveURL('https://the-internet.herokuapp.com/login')

});