/// <reference types="cypress" />

class AccountOverview{

getAccountOverviewHeader(){
    return cy.get("#rightPanel h1")
}
}

export default AccountOverview