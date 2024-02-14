import objLogin from "../fixtures/login.json";
import methodLogin from "../Methods/Login";

describe("Login UI", () => {
  beforeEach(() => {
    methodLogin.openApplication(objLogin.baseUrl);
  });

  it("Verify Email Field is visible", () => {
    methodLogin.visisbilityFromAttribute(
      objLogin.emailField,
      "placeholder",
      "Your Email"
    );
  });

  it("Verify Password Field is visible", () => {
    methodLogin.visisbilityFromAttribute(
      objLogin.passwordField,
      "placeholder",
      "8-10 Characters"
    );
  });

  it("Verify Forgot Password CTA is visible", () => {
    methodLogin.visisbilityFromAttribute(
      objLogin.CTA_forgot,
      "href",
      "/Password"
    );
  });

  it("Verify Login button is visible", () => {
    methodLogin.visibilityFrmText(objLogin.lginBtn, "Login");
  });
});
