class forgotPassword {
  verifyForgotPasswordScreen() {
    cy.url().should("include", "/Password");
  }
}

export default new forgotPassword();
