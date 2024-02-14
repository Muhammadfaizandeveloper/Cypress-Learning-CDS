import objLogin from "../fixtures/login.json";
import methodLogin from "../Methods/Login";
import objDashboard from "../PageObject/dashboard";
import objPassword from "../PageObject/forgotPassoword";

describe("Login Functionality", () => {
  beforeEach(() => {
    methodLogin.openApplication(objLogin.baseUrl);
  });

  it("Verify user can login with registered email", () => {
    methodLogin.enter(objLogin.emailField, objLogin.registered_Email);
    methodLogin.enter(objLogin.passwordField, objLogin.registered_Password);
    methodLogin.clickElement(objLogin.lginBtn);
    objDashboard.verifydashboardScreen();
  });

  it("Verify login with unregistered email", () => {
    methodLogin.enter(objLogin.emailField, objLogin.unregistered_Email);
    methodLogin.enter(objLogin.passwordField, objLogin.unregistered_Password);
    methodLogin.clickElement(objLogin.lginBtn);
    methodLogin.visibilityFrmText(
      objLogin.unregUserError,
      objLogin.unRegUserErrorText
    );
  });

  it("Veify click lgin button without entering email and a password", () => {
    methodLogin.clickElement(objLogin.lginBtn);
    methodLogin.visibilityFrmText(
      objLogin.reqEmailError,
      objLogin.reqEmailErrorText
    );
    methodLogin.visibilityFrmText(
      objLogin.reqPasswordError,
      objLogin.reqPasswordErrorText
    );
  });

  it("Verify click login without entering email", () => {
    methodLogin.enter(objLogin.passwordField, objLogin.registered_Password);
    methodLogin.clickElement(objLogin.lginBtn);
    methodLogin.visibilityFrmText(
      objLogin.reqEmailError,
      objLogin.reqEmailErrorText
    );
  });

  it("Verify click login without entering password", () => {
    methodLogin.enter(objLogin.emailField, objLogin.registered_Email);
    methodLogin.clickElement(objLogin.lginBtn);
    methodLogin.visibilityFrmText(
      objLogin.reqPasswordError,
      objLogin.reqPasswordErrorText
    );
  });

  it("Verify enter invalid email", () => {
    methodLogin.enter(objLogin.emailField, objLogin.invalid_Email);
    methodLogin.clickElement(objLogin.lginBtn);
    methodLogin.visibilityFrmText(
      objLogin.invalidEmailError,
      objLogin.invalidEmailErrorText
    );
  });

  it("Verify enter invalid password", () => {
    methodLogin.enter(objLogin.passwordField, objLogin.invalid_Password);
    methodLogin.clickElement(objLogin.lginBtn);
    methodLogin.visibilityFrmText(
      objLogin.invalidPasswordError,
      objLogin.invalidPasswordErrorText
    );
  });

  it("Enter wrong password for register email", () => {
    methodLogin.enter(objLogin.emailField, objLogin.registered_Email);
    methodLogin.enter(objLogin.passwordField, objLogin.unregistered_Password);
    methodLogin.clickElement(objLogin.lginBtn);
    methodLogin.visibilityFrmText(
      objLogin.wrongLoginError,
      objLogin.wrongInputErrorText
    );
  });

  it("Verify click forgot email", () => {
    methodLogin.clickElement(objLogin.CTA_forgot);
    objPassword.verifyForgotPasswordScreen();
  });
});
