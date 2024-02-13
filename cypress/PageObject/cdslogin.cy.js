// pageObjects/LoginPage.js

class LoginPage {

    siteurl = 'http://10.0.2.243:1004/';
    // Define selectors
    usernameInput = '.form-control.custom-input-1';
    passwordInput = '.form-control.custom-input-password';
    loginButton = '.btn.btn-primary-1';
    dashboard =   '.logo-nav h5';
    errorMsg ='.field-validation-error';
  
    // Define methods

    visitSite(site) {
        cy.visit(this.siteurl);
    }
    typeUsername(username) {
      cy.get(this.usernameInput).type(username);
    }
  
    typePassword(password) {
      cy.get(this.passwordInput).type(password);
    }
  
    clickLoginButton() {
      cy.get(this.loginButton).click();
    }
    
    checkDashboard( ) {
        cy.get(this.dashboard).should('contain.text', 'Dashboard');
    }

    // checkDashboard( ) {
    //     cy.url().should('include', '/Dashboard');
    // }
    
    checkErrorMsg(){
      cy.get(this.errorMsg).should('contain.text','Username or Password is incorrect');
    }
  }
  
  // Export the class instance
  export default new LoginPage();
  