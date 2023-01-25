import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"; 
import loginPage from "../../PageObject/LoginPage";
import loginpage from "../../PageObject/LoginPage"

let login = new loginPage()

Given('user navigate to WebApp', function(){
    cy.visit('/')
})

Given('user enter username as {string} and Password as {string}', (username, password)=>{
    login.getUsername().type(Cypress.env("USERNAME"))
    login.getPassword().type(Cypress.env("PASSWORD"))
})

When('user click on Login button', function(){
    login.getSubmit().click()
})


Then('user should see {string} error message', (value) => {
	login.getErrorMessage().should("have.text", value)
});
