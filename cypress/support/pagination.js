export const calculateTotalPages = () => {
    let startRange, endRange, totalPages;
    cy.get('select[id="activeuser"]').select('false', { force: true });
    cy.wait(4000);
    cy.get('#user-dataTable_info').then((element) => {
      const text = element.text(); // Assuming the text is "Showing 1 to 10 of 33 entries"
      const match = text.match(/Showing (\d+) to (\d+) of (\d+) entries/);
      if (match) {
        startRange = match[1]; // "10"
        endRange = match[2];   // "33"
        totalPages = Math.ceil(endRange / startRange);
        return totalPages;
        
      } else {
        console.error('Unable to extract start and end range values.');
      }
  
    });
  };



// cypress/support/pagination.js

// export const calculateTotalPages = () => {
//   return cy.get('select[id="activeuser"]').select('false', { force: true })
//     .wait(4000)
//     .get('#user-dataTable_info')
//     .invoke('text')
//     .then((text) => {
//       const match = text.match(/Showing (\d+) to (\d+) of (\d+) entries/);
//       if (match) {
//         const startRange = parseInt(match[1], 10);
//         const endRange = parseInt(match[2], 10);
//         const totalPages = Math.ceil(endRange / startRange);
//         return totalPages;
//       } else {
//         console.error('Unable to extract start and end range values.');
//         return null; // or another meaningful value in case of an error
//       }
//     });
// };
