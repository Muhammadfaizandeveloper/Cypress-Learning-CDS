// pageObjects/LoginPage.js
import data from '../fixtures/cdslogin.json';
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
    typeUsername(email) {
      cy.get(this.usernameInput).type(email);
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
    
    checkErrorMsg(password) {
        const passwordString = String(password);
        if (passwordString.length > 7) {
            cy.get(this.errorMsg).should('contain.text', 'Username or Password is incorrect');
        } else {
            cy.get('.text-danger.field-validation-error', { timeout: 10000 }).should('exist');
            cy.get('.text-danger.field-validation-error').should('contain.text', "The field Password must be a string or array type with a minimum length of '8'.");
        }
    }
    
  }
  
  // Export the class instance
  export default new LoginPage();
  