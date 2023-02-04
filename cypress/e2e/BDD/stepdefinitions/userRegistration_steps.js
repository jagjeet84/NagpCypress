import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AccountOverview from "../../PageObject/AccountOverview";
import loginPage from "../../PageObject/LoginPage";
import UserRegistration from "../../PageObject/UserRegistration"

let login = new loginPage()

When('I click on Register link under login button', () => {
	login.getRegisterLink().click()
});

Given('I fill all the details in signup form and click Register', () => {
	cy.registernewuser()
});