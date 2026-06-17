exports.LoginPage = class LoginPage {

    // Define locators and methods for the login page

    // As we are refereing to the Element Locators and actions in the Login page, here we have to pass the Login page
    //  to this class. Hence need to create a Constructor. 

    constructor(page) {

        this.page = page;

        this.username_textbox = page.getByRole('textbox', { name: 'Username' })
        this.password_textbox = page.getByRole('textbox', { name: 'Password' })
        this.login_button = page.getByRole('button', { name: ' Login' })
    }



    // Method/ functions to perform login action. This can be done in two ways -

    //[01] Single Function for all the actions

    async gotoLoginPage() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(username, password) { // Instead of hardcoding username or password, as we are passing the username and password to this function, we need to add these as parameters in the function definition.
        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }


    /*
    //[02] Separate functions for each action - attomic functions
    enterUsername (){
    
    }
    
    
    
    enterPassword (){
    
    }
    
    
    
    clickOnLogin(){
    
    }
    
    */



}   