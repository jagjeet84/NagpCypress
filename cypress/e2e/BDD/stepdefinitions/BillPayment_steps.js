import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import AccountOverview from "../../PageObject/AccountOverview"
import BillPayment from "../../PageObject/BillPayment"

let accountOverview = new AccountOverview()
let billPayment = new BillPayment()

Given('I fill all the details in Bill Payment Service form and click Send Payment', function () {
	cy.fillbillinginformation()
});

Then('I should be navigated to Bill Payment Complete', () => {
	accountOverview.getBillPaymentComplete().should("have.text", "Bill Payment Complete")
});

Given('I should see Billpayment message correctly', function () {
	let message = `Bill Payment to ${this.testdata.billpayment.payeename} in the amount of $${this.testdata.billpayment.amount} from account`
	billPayment.getBillSuccessfulMessage().should('include.text', message)
});