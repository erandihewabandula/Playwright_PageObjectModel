import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login';
import { LogoutPage } from '../../pages/logout';


test('test', async ({ page }) => {

  //create a constant for the Login page class, so that we can use the methods and locators of the Login page 
  // in this test file.
  const Login = new LoginPage(page); //here we are creating an object of the LoginPage class, so that we can use the methods and locators of the Login page in this test file. 
  // You can give any name to this constant, but it is a good practice to give the name of the page as the name of the constant, so that it is easy to understand.

  await Login.gotoLoginPage(); // Here we are calling the method to navigate to the login page, which is defined in the Login page class.
  await Login.login('tomsmith', 'SuperSecretPassword!'); // Here we are calling the method to perform the login action, which is defined in the Login page class. We are passing the username and password as parameters to this function, which will be used to fill the username and password fields and click on the login button.

  // await page.goto('https://the-internet.herokuapp.com/login');
  // await page.getByRole('textbox', { name: 'Username' }).click();
  // await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  // await page.getByRole('textbox', { name: 'Password' }).click();
  // await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  // await page.getByRole('button', { name: ' Login' }).click();


   const Logout = new LogoutPage(page); 
    await Logout.logout(); 
    // await page.getByRole('link', { name: 'Logout' }).click();

});