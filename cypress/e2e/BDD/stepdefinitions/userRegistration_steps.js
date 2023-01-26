import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"; 
import loginPage from "../../PageObject/LoginPage";
import UserRegistration from "../../PageObject/UserRegistration"

let userRegistration = new UserRegistration()
let login = new loginPage()

When('I click on Register link under login button', () => {
	login.getRegisterLink().click()
});

Given('I fill all the details in signup form', () => {
	cy.registernewuser()
});

Given('I click on Register click', () => {
	userRegistration.getRegisterButton().click()
});
