// pageObjects/Users.js
import { generateRandomEmail } from "../support/randomemail";
// import cdslogin from '../fixtures/cdslogin.json';
class Users {
  // Define selectors
  userNavBar = '.nav-item[onclick="UsersClick()"]';
  addUserButton = ".btn-1.btn-primary-icon";
  firstnameInput = "#firstName";
  lastnameInput = "#lastName";
  emailInput = "#exampleFormControlInput3";
  userroleSelect = 'select[class="custom-select"]';
  loginButton = ".btn.btn-primary-1";
  dashboard = ".logo-nav h5";
  errorMsg = ".field-validation-error";

  // Define methods

  clickuserNavBar() {
    cy.wait(4000);
    cy.get(this.userNavBar).click({ force: true });
  }
  selelctuserrole() {
    // cy.get(this.userroleSelect).select('4');
    cy.get('select[class="custom-select"]')
      .select("4")
      .should("have.value", "4");
  }
  selectclient() {
    cy.get('select[id="Client_Id"]')
      .select("77", { force: true })
      .should("have.value", "77");
  }
  activecheckbox() {
    cy.get("#active-checkbox").check();
  }
  clicksavebutton() {
    cy.get('button[type="submit"]').click();
  }
  verifyUserCreated(email) {
    cy.get("#search-string").type(email);
    cy.get("table").find("tr").contains("td", email).should("exist");
  }
  addUser() {
    cy.get(this.addUserButton).click();
    // cy.get(this.firstnameInput).type(cdslogin.firstname);
    // cy.get(this.lastnameInput).type(cdslogin.lastname);
    const randomEmail = generateRandomEmail();
    cy.get('input[type="email"]').type(randomEmail);
    this.selelctuserrole();
    this.selectclient();
    this.clicksavebutton();
    this.verifyUserCreated(randomEmail);
  }

  deleteUser(email) {
    // Find and click the delete icon with explicit wait
    cy.get("table")
      .find("tr")
      .contains("td", email)
      .parent("tr")
      .find(".right-icon")
      .click();
    cy.on("window:confirm", () => true);
    cy.get("table").find("tr").contains("td", email).should("not.exist");
  }

  calculateRowsandCols() {
    cy.get('select[name="user-dataTable_length"]>option').each(
      ($currentrow) => {
        const optionValue = $currentrow.val(); // Assuming you want the value attribute
        cy.get('select[name="user-dataTable_length"]')
          .select(optionValue)
          .should("have.value", optionValue);
        cy.wait(4000);
        cy.get("#user-dataTable tbody tr").should("have.length", optionValue);
      }
    );
    cy.get("#user-dataTable>thead>tr>th").should("have.length", "7");

    // cy.get('select[name="user-dataTable_length"]>option:nth-child(1)').invoke('text').then((text) => {
    //   const ten = text.trim();
    //   cy.get('#user-dataTable>tbody>tr').should('have.length', ten);
    // });

    // cy.get('select[name="user-dataTable_length"]>option:nth-child(2)').invoke('text').then((text) => {
    //   const tfive = text.trim();
    //   cy.get('select[name="user-dataTable_length"]').select(tfive).should('have.value', tfive);
    //   cy.wait(4000);
    //   cy.get('#user-dataTable tbody tr').should('have.length', tfive);
    // });

    // cy.get('select[name="user-dataTable_length"]>option:nth-child(3)').invoke('text').then((text) => {
    //   const fify = text.trim();
    //   cy.get('select[name="user-dataTable_length"]').select(fify).should('have.value', fify);
    //   cy.wait(4000);
    //   cy.get('#user-dataTable tbody tr').should('have.length', fify);
    // });

    // cy.get('select[name="user-dataTable_length"]>option:nth-child(4)').invoke('text').then((text) => {
    //   const hundrd = text.trim();
    //   cy.get('select[name="user-dataTable_length"]').select(hundrd).should('have.value', hundrd);
    //   cy.wait(4000);
    //   cy.get('#user-dataTable tbody tr').should('have.length', hundrd);
    // });
  }

  calculatePaginatedPages() {
    let startRange, endRange, totalPages;
    cy.wait(4000);
    cy.get('select[id="activeuser"]').select("false", { force: true });
    cy.wait(4000);
    return cy.get("#user-dataTable_info").then((element) => {
      // cy.log(element);
      const text = element.text(); // Assuming the text is "Showing 1 to 10 of 33 entries"
      // cy.log(text);
      const match = text.match(/Showing (\d+) to (\d+) of (\d+) entries/);
      if (match) {
        startRange = match[1]; // "10"
        endRange = match[2]; // "33"
        totalPages = Math.ceil(endRange / startRange);
        return totalPages;
      } else {
        console.error("Unable to extract start and end range values.");
      }
    });
  }

  deleteAllUnactiveUsers() {
    cy.get('select[id="activeuser"]').select("false", { force: true });
    cy.wait(400);
    cy.get("table tbody tr").each(($el, index, $list) => {
      cy.get('select[id="activeuser"]').select("false", { force: true });
      cy.wait(400);
      const email = $el.find("td:nth-child(2)").text();
      if (email) {
        cy.get("table")
          .find("tr")
          .contains("td", email)
          .parent("tr")
          .find(".right-icon")
          .click();
        cy.on("window:confirm", () => true);
      }
    });
  }

  checkErrorMsg() {
    cy.get(this.errorMsg).should(
      "contain.text",
      "Username or Password is incorrect"
    );
  }
}

// Export the class instance
export default new Users();
