// cypress/support/emailUtils.js

// Function to generate a random email
export const generateRandomEmail = () => {
    const randomUsername = Math.random().toString(36).substring(7);
    return `${randomUsername}@gmail.com`;
  };


  