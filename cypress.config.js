const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));
  //require('cypress-mochawesome-reporter/plugin')(on);
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: '75drjy',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 10000,
    screenshotOnRunFailure: true,
    baseUrl: "https://parabank.parasoft.com/parabank",
    excludeSpecPattern: "**/2-advanced-examples/*",
    specPattern: 'cypress/e2e/BDD/features/*.feature',
    trashAssetsBeforeRuns: true,
    filterSpecs: true,
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    setupNodeEvents,
    retries: {
      runMode: 0
    }
  },
});
