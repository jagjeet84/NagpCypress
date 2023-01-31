/// <reference types="cypress" />

class AccountOverview{

getAccountOverviewHeader(){
    return cy.get("#rightPanel .title")
}
}

export default AccountOverview