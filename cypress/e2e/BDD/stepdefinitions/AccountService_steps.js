import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AccountOverview from "../../PageObject/AccountOverview"

let accountOverview = new AccountOverview()

Then('I should be navigated to AccountsOverview', () => {
	accountOverview.getAccountOverviewHeader().should("have.text", "Accounts Overview")
});

Then('I click on Bill Pay link', () => {
	accountOverview.getBillPayLink().click()
});

Then('I click on Update Contact Info link', () => {
	accountOverview.getUpdateContactInfoLink().click()
});
