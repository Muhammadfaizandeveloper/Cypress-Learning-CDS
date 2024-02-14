class LoginMethod {
  openApplication(element) {
    cy.visit(element);
  }

  visisbilityFromAttribute(element, type, text) {
    cy.get(element).should("have.attr", type, text);
  }

  visibilityFrmText(element, text) {
    cy.get(element).should("have.text", text);
  }

  clickElement(element) {
    cy.get(element).click();
  }

  enter(element, text) {
    cy.get(element).type(text);
  }
}

export default new LoginMethod();
