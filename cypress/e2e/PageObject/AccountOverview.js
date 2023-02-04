/// <reference types="cypress" />

class AccountOverview {
    
    getAccountOverviewHeader() {
        return cy.get("#rightPanel .title")
    }

    getBillPaymentComplete() {
        return cy.get('[ng-show="showResult"] > .title')
    }

    getBillPayLink() {
        return cy.contains('Bill Pay')
    }

    getUpdateContactInfoLink() {
        return cy.contains('Update Contact Info')
    }
}
export default AccountOverview