const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Increase redirection limit
      config.redirectionLimit = 50; // Adjust the limit as needed
      return config;
    },
  },
});
