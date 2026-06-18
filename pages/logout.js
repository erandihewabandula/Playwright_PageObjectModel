exports.LogoutPage = class LogoutPage{
     constructor(page) {

        this.page = page;
        this.logoutButton = page.getByRole('link', { name: 'Logout' });
    }

    async logout() {
        await this.logoutButton.click(); // Here we are calling the method to perform the logout action, which is defined in the Logout page class. We are clicking on the logout button to perform the logout action. 
    }

}