import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../../PageObject/LoginPage";

let login = new loginPage()

Given('I navigate to WebApp', function () {
    cy.visit('/')
})

Given('I enter username as {string} and Password as {string}', (username, password) => {
    login.getUsername().type(username)
    login.getPassword().type(password)
})

When('I click on Login button', function () {
    login.getSubmit().click()
})

Then('I should see {string} message', (value) => {
    login.getMessage().should("have.text", value)
});

Given('I click logout link', () => {
    login.getLogoutLink().click()
});
