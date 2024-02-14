const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.redirectionLimit = 50;
      return config;
    },
  },
});
