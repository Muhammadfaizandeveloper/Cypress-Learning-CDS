import data from "../fixtures/cdslogin.json";
class login {
  baseUrl = "http://10.0.2.243:1004/";
  email = 'input[placeholder="Your Email"]';
  password = 'input[placeholder="8-10 Characters"]';
  forgotPassword = 'a[href="/Password"]';
  loginBtn = "button.btn.btn-primary-1";
  emailRequireError = "span[data-valmsg-for='Username']";
  invalidEmailError = ".text-danger.field-validation-error";
  passwordRequireError = "span[data-valmsg-for='Password']";
  invalidPasswordError = ".text-danger.field-validation-error";
  unregisteredLoginError = 'span[data-valmsg-for="Error"]';
  wrongLoginError = ".text-danger.field-validation-error";

  openLoginPage() {
    cy.visit(this.baseUrl);
  }

  verifyEmailField() {
    cy.get(this.email).should("have.attr", "placeholder", "Your Email");
  }

  verifyPasswordField() {
    cy.get(this.password).should("have.attr", "placeholder", "8-10 Characters");
  }

  verifyForgotPasswordCTA() {
    cy.get(this.forgotPassword).should("have.attr", "href", "/Password");
  }

  verifyLoginButton() {
    cy.get(this.loginBtn).contains("Login");
  }

  enterEmail(email) {
    cy.get(this.email).type(email);
  }

  enterPassword(password) {
    cy.get(this.password).type(password);
  }

  clickLogin() {
    cy.get(this.loginBtn).click();
  }

  verifyErrorMsgs(locator, errorMsg) {
    cy.get(locator).should(
      "have.text",errorMsg
    );
  }
}

export default new login();
