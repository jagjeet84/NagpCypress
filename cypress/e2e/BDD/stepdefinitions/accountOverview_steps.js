import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"; 
import AccountOverview from "../../PageObject/AccountOverview"

let accountOverview = new AccountOverview()

Then('user should be navigate to AccountsOverview', () => {
	accountOverview.getAccountOverviewHeader().should("have.text","Accounts Overview")
});
