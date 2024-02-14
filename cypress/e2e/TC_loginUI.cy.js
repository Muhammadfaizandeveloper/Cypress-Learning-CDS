import objLogin from "../fixtures/login.json";
import method from "../Methods/Common";

describe("Login UI", () => {
  beforeEach(() => {
    method.openApplication(objLogin.baseUrl);
  });

  it("Verify Email Field is visible", () => {
    method.visisbilityFromAttribute(
      objLogin.emailField,
      "placeholder",
      "Your Email"
    );
  });

  it("Verify Password Field is visible", () => {
    method.visisbilityFromAttribute(
      objLogin.passwordField,
      "placeholder",
      "8-10 Characters"
    );
  });

  it("Verify Forgot Password CTA is visible", () => {
    method.visisbilityFromAttribute(objLogin.CTA_forgot, "href", "/Password");
  });

  it("Verify Login button is visible", () => {
    method.visibilityFrmText(objLogin.lginBtn, "Login");
  });
});
