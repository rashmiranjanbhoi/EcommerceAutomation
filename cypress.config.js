const { defineConfig } = require("cypress");
const { lighthouse, prepareAudit } = require('@cypress-audit/lighthouse');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
     "baseUrl": "http://localhost:8080",
     "chromeWebSecurity": false,
     "env": {
      "HTTP_PROXY": "http://localhost:8080",
      "HTTPS_PROXY": "http://localhost:8080"
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on('before:browser:launch', (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });
    
      on('task', {
        lighthouse: lighthouse({
          timeout: 120000, // Increase timeout to 2 minutes
        }),
      });
      // implement node event listeners here
    },
  },
});
