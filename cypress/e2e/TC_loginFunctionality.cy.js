import objLogin from "../PageObject/login";
import objDashboard from "../PageObject/dashboard";

describe("Login Functionality", () => {
  beforeEach(() => {
    objLogin.openLoginPage();
  });

  it("Verify user can login with registered email", () => {
    objLogin.enterRegisteredEmail();
    objLogin.enterRegisteredPassword();
    objLogin.clickLogin();
    objDashboard.verifydashboardScreen();
  });

  it("Verify login with unregistered email", () => {
    objLogin.enterUnnregisteredEmail();
    objLogin.enterUnregisteredPassword();
    objLogin.clickLogin();
    objLogin.verifyUnregisteredError();
  });

  it("Veify click lgin button without entering email and a password", () => {
    objLogin.clickLogin();
    objLogin.verifyRequireEmailError();
    objLogin.verifyRequirePassowordError();
  });

  it("Verify click login without entering email", () => {
    objLogin.enterRegisteredPassword();
    objLogin.clickLogin();
    objLogin.verifyRequireEmailError();
  });

  it("Verify click login without entering password", () => {
    objLogin.enterRegisteredEmail();
    objLogin.clickLogin();
    objLogin.verifyRequirePassowordError();
  });

  it("Verify enter invalid email", () => {
    objLogin.enterInvalidEmail();
    objLogin.clickLogin();
    objLogin.verifyInvalidEmailError();
  });

  it("Verify enter invalid password", () => {
    objLogin.enterInvalidPassword();
    objLogin.clickLogin();
    objLogin.verifyInvalidPasswordError();
  });

  it("Enter wrong password for register email", () => {
    objLogin.enterRegisteredEmail();
    objLogin.enterUnregisteredPassword();
    objLogin.clickLogin();
    objLogin.verifyWrongPasswordError();
  });
});
