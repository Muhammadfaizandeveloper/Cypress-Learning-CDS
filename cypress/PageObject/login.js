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

  enterRegisteredEmail() {
    cy.get(this.email).type(data.registered_Email);
  }

  enterUnnregisteredEmail() {
    cy.get(this.email).type(data.unregistered_Email);
  }

  enterInvalidEmail() {
    cy.get(this.email).type(data.invalid_Email);
  }

  enterRegisteredPassword() {
    cy.get(this.password).type(data.registered_Password);
  }

  enterUnregisteredPassword() {
    cy.get(this.password).type(data.unregistered_Password);
  }

  enterInvalidPassword() {
    cy.get(this.password).type(data.invalid_Password);
  }

  clickForgotPasswordCTA() {
    cy.get(this.forgotPassword).click();
  }

  clickLogin() {
    cy.get(this.loginBtn).click();
  }

  verifyUnregisteredError() {
    cy.get(this.unregisteredLoginError).should(
      "have.text",
      "Invalid or Inactive User"
    );
  }

  verifyRequireEmailError() {
    cy.get(this.emailRequireError).should(
      "have.text",
      "The Username field is required."
    );
  }

  verifyRequirePassowordError() {
    cy.get(this.passwordRequireError).should(
      "have.text",
      "The Password field is required."
    );
  }

  verifyInvalidEmailError() {
    cy.get(this.invalidEmailError).should(
      "have.text",
      "Please enter a valid email address."
    );
  }

  verifyInvalidPasswordError() {
    cy.get(this.invalidPasswordError).should(
      "have.text",
      "The field Password must be a string or array type with a minimum length of '8'."
    );
  }

  verifyWrongPasswordError() {
    cy.get(this.wrongLoginError).should(
      "have.text",
      "Username or Password is incorrect"
    );
  }
}

export default new login();
