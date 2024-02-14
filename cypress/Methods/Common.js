class Common {
  openApplication(url) {
    cy.visit(url);
  }

  visisbilityFromAttribute(element, type, text) {
    cy.get(element).should("have.attr", type, text);
  }

  visibilityFrmText(element, text) {
    cy.get(element).should("have.text", text);
  }

  verifyUrl(text) {
    cy.url().should("include", text);
  }

  clickElement(element) {
    cy.get(element).click();
  }

  enter(element, text) {
    cy.get(element).type(text);
  }
}

export default new Common();
