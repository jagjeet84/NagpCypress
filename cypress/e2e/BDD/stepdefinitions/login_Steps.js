import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../PageObject/LoginPage";

let login = new LoginPage()

Given('I navigate to WebApp', function () {
    cy.visit('/')
})

Given('I enter correct credentials', () => {
    login.getUsername().type(Cypress.env('USERNAME'))
    login.getPassword().type(Cypress.env('PASSWORD'))
})

Given('I enter incorrect credentials', () => {
    cy.log(Cypress.env('USERNAME'))
    login.getUsername().type(Cypress.env('PASSWORD'))
    login.getPassword().type('abc')
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
