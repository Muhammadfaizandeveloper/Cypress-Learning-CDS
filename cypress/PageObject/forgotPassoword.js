import data from "../fixtures/cdslogin.json";

class forgotPassword {
  verifyForgotPasswordScreen() {
    cy.url().should("include", "/Password");
  }
}

export default new forgotPassword();
