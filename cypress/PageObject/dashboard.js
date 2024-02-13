import data from "../fixtures/cdslogin.json";
class dashboard {
  header = "div[class='logo-nav'] h5";

  verifydashboardScreen() {
    cy.get(this.header).should("have.text", "Dashboard");
  }
}

export default new dashboard();
