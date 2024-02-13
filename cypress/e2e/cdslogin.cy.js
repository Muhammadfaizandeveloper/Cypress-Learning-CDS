
import LoginPage from '../PageObject/cdslogin.cy';
import cdslogin from '../fixtures/cdslogin.json';

describe('Login Test', () => {
  beforeEach(() => {
    // Assuming your application is served at http://localhost:3000
        LoginPage.visitSite();
  });

  it('should login with valid credentials', () => {

    // Use methods from the LoginPage Page Object
    LoginPage.typeUsername(cdslogin.email);
    LoginPage.typePassword(cdslogin.password);
    LoginPage.clickLoginButton();
    // Add assertions as needed
    LoginPage.checkDashboard();
  });

  it('should display an error with invalid credentials', () => {
    // Use methods from the LoginPage Page Object
    LoginPage.typeUsername(cdslogin.email);
    LoginPage.typePassword('wrong password');
    LoginPage.clickLoginButton();
    // Add assertions as needed
    LoginPage.checkErrorMsg();
  });

});
