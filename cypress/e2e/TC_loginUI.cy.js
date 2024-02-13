import objLogin from "../PageObject/login";

describe("Login UI", () => {
  beforeEach(() => {
    objLogin.openLoginPage();
  });

  it("Verify Email Field is visible", () => {
    objLogin.verifyEmailField();
  });

  it("Verify Password Field is visible", () => {
    objLogin.verifyPasswordField();
  });

  it("Verify Forgot Password CTA is visible", () => {
    objLogin.verifyForgotPasswordCTA();
  });

  it.only("Verify Login button is visible", () => {
    objLogin.verifyLoginButton();
  });
});
