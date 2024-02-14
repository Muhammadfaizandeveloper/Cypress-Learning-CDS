import objLogin from "../fixtures/login.json";
import method from "../Methods/Common";
import objDashboard from "../fixtures/dashboard.json";

const login = (email, password) => {
  method.enter(objLogin.emailField, email);
  method.enter(objLogin.passwordField, password);
  method.clickElement(objLogin.lginBtn);
};

const verifyErrorMessage = (element, text) => {
  method.visibilityFrmText(element, text);
};

describe("Login Functionality", () => {
  beforeEach(() => {
    method.openApplication(objLogin.baseUrl);
  });

  it("Verify user can login with registered email", () => {
    login(objLogin.registered_Email, objLogin.registered_Password);
    verifyErrorMessage(objDashboard.header, "Dashboard");
  });

  it("Verify login with unregistered email", () => {
    login(objLogin.unregistered_Email, objLogin.unregistered_Password);
    verifyErrorMessage(objLogin.unregUserError, objLogin.unRegUserErrorText);
  });

  it("Veify click login button without entering email and a password", () => {
    method.clickElement(objLogin.lginBtn);
    verifyErrorMessage(objLogin.reqEmailError, objLogin.reqEmailErrorText);
    verifyErrorMessage(
      objLogin.reqPasswordError,
      objLogin.reqPasswordErrorText
    );
  });

  it("Verify click login without entering email", () => {
    method.enter(objLogin.passwordField, objLogin.registered_Password);
    method.clickElement(objLogin.lginBtn);
    verifyErrorMessage(objLogin.reqEmailError, objLogin.reqEmailErrorText);
  });

  it("Verify click login without entering password", () => {
    method.enter(objLogin.emailField, objLogin.registered_Email);
    method.clickElement(objLogin.lginBtn);
    verifyErrorMessage(
      objLogin.reqPasswordError,
      objLogin.reqPasswordErrorText
    );
  });

  it("Verify enter invalid email", () => {
    method.enter(objLogin.emailField, objLogin.invalid_Email);
    method.clickElement(objLogin.lginBtn);
    verifyErrorMessage(
      objLogin.invalidEmailError,
      objLogin.invalidEmailErrorText
    );
  });

  it("Verify enter invalid password", () => {
    method.enter(objLogin.passwordField, objLogin.invalid_Password);
    method.clickElement(objLogin.lginBtn);
    verifyErrorMessage(
      objLogin.invalidPasswordError,
      objLogin.invalidPasswordErrorText
    );
  });

  it("Enter wrong password for register email", () => {
    login(objLogin.registered_Email, objLogin.unregistered_Password);
    verifyErrorMessage(objLogin.wrongLoginError, objLogin.wrongInputErrorText);
  });

  it("Verify click forgot email", () => {
    method.clickElement(objLogin.CTA_forgot);
    method.verifyUrl("/Password");
  });
});
