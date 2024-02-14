import Users from '../PageObject/Users.cy';
import LoginPage from '../PageObject/cdslogin.cy';
import cdslogin from '../fixtures/cdslogin.json';
import { generateRandomEmail } from '../support/randomemail';
import { calculateTotalPages } from '../support/pagination';
describe('Users Test', () => {
  beforeEach(() => {
        LoginPage.visitSite();
        LoginPage.typeUsername(cdslogin.email);
        LoginPage.typePassword(cdslogin.password);
        LoginPage.clickLoginButton();
  });
  it.only('Add Users', () => {

     Users.clickuserNavBar();

    //  for (let i = 1; i < 100; i++)
    //    {
    //      if (100>= i)
    //      {
    //       Users.addUser();
    //      }
    //    }
    // Users.verifyUserCreated(randomEmail);
    // Users.deleteUser(randomEmail);
    // Users.calculateRowsandCols();
   

    const totalPages = calculateTotalPages();
      for (let i = 1; i < totalPages; i++)
       {
         if (totalPages>= i)
         {
           Users.deleteAllUnactiveUsers();
         }
       }
      
       //2
      // calculateTotalPages().then((totalPages) => {
      //   for (let i = 1; i < totalPages; i++)
      //   {
      //     if (totalPages>= i)
      //     {
      //       Users.deleteAllUnactiveUsers();
      //     }
      //   }
      // });
  

  //  const totalPages = calculateTotalPages();
  //  let startRange, endRange, totalPages;
  //  cy.wait(4000);
  //  cy.get('select[id="activeuser"]').select('false', { force: true });
  //  cy.wait(4000);
  //  cy.get('#user-dataTable_info').then((element) => {
  //    const text = element.text(); // Assuming the text is "Showing 1 to 10 of 33 entries"
  //    const match = text.match(/Showing (\d+) to (\d+) of (\d+) entries/);
  //    if (match) {
  //      startRange = match[1]; // "10"
  //      endRange = match[2];   // "33"
  //      totalPages = Math.ceil(endRange / startRange);
  //      for (let i = 1; i < totalPages; i++)
  //      {
  //        if (totalPages>= i)
  //        {
  //          Users.deleteAllUnactiveUsers();
  //        }
  //      }
       
  //    } else {
  //      console.error('Unable to extract start and end range values.');
  //    }
  //   });

  });

  it('should display an error with invalid credentials', () => {
    // Use methods from the LoginPage Page Object

    LoginPage.clickLoginButton();
    // Add assertions as needed
    LoginPage.checkErrorMsg();
  });

});
