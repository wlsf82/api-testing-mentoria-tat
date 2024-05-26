const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      API_URL: 'http://localhost:3001',
      requestMode: true
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
