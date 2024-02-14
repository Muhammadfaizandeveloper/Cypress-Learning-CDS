import objLogin from "../PageObject/login";
import objDashboard from "../PageObject/dashboard";
import data from "../fixtures/cdslogin.json";

describe("Login Functionality", () => {
  beforeEach(() => {
    objLogin.openLoginPage();
  });

  it("Verify user can login with registered email", () => {
    objLogin.enterEmail(data.registered_Email);
    objLogin.enterPassword(data.registered_Password);
    objLogin.clickLogin();
    objDashboard.verifydashboardScreen();
  });

  it("Verify login with unregistered email", () => {
    objLogin.enterEmail(data.unregistered_Email);
    objLogin.enterPassword(data.unregistered_Password);
    objLogin.clickLogin();
    objLogin.verifyErrorMsgs(objLogin.unregisteredLoginError, data.unregistered_User_Error);
  });

  it("Verify click lgin button without entering email and a password", () => {
    objLogin.clickLogin();
    objLogin.verifyErrorMsgs(objLogin.emailRequireError,data.email_Required_Error);
    objLogin.verifyErrorMsgs(objLogin.passwordRequireError,data.password_Required_Error);
  });

  it("Verify click login without entering email", () => {
    objLogin.enterPassword(data.registered_Password);
    objLogin.clickLogin();
    objLogin.verifyErrorMsgs(objLogin.emailRequireError, data.email_Required_Error);
  });

  it("Verify click login without entering password", () => {
    objLogin.enterEmail(data.registered_Email);
    objLogin.clickLogin();
    objLogin.verifyErrorMsgs(objLogin.passwordRequireError,data.password_Required_Error);
  });

  it("Verify enter invalid email", () => {
    objLogin.enterEmail(data.invalid_Email);
    objLogin.clickLogin();
    objLogin.verifyErrorMsgs(objLogin.invalidEmailError,data.invalid_Email_Error);
  });

  it("Verify enter invalid password", () => {
    objLogin.enterPassword(data.invalid_Password);
    objLogin.clickLogin();
    objLogin.verifyErrorMsgs(objLogin.invalidPasswordError,data.invalid_Password_Error);
  });

  it("Enter wrong password for register email", () => {
    objLogin.enterEmail(data.registered_Email);
    objLogin.enterPassword(data.unregistered_Password);
    objLogin.clickLogin();
    objLogin.verifyErrorMsgs(objLogin.wrongLoginError,data.wrong_Login_Error);
  });
});
