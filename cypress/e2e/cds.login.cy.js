
import LoginPage from '../PageObject/cdslogin.cy.js';
import cdslogin from '../fixtures/cdslogin.json';

describe('Login Test', () => {
  beforeEach(() => {
        LoginPage.visitSite();
  });

  it('should login with valid credentials', () => {

    LoginPage.typeUsername(cdslogin.email);
    LoginPage.typePassword(cdslogin.password);
    LoginPage.clickLoginButton();
    LoginPage.checkDashboard();
  });

  it('should display an error with invalid credentials', () => {

    LoginPage.typeUsername(cdslogin.email);
    LoginPage.typePassword(cdslogin.invalid_Password);
    LoginPage.clickLoginButton();
    LoginPage.checkErrorMsg(cdslogin.invalid_Password);
  });

});
