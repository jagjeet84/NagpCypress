import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I navigate to demosite', () => {
    cy.origin(Cypress.env('RAHULACEDEMYURL'), () => {
        cy.visit(Cypress.env('RAHULACEDEMYURL'))
    })
})

Given('I click on OpenTab button', () => {
    cy.origin(Cypress.env('RAHULACEDEMYURL'), () => {
        cy.get('#opentab').invoke("removeAttr", "target").click()
    })
});

Given('I should be navigated to rahulshetty page', () => {
    cy.origin(Cypress.env('RAHULACEDEMYNEWTABURL'), () => {
        cy.visit('/')
        cy.get('div[class="logo pull-left"] img').should('have.attr', 'src', 'assets/images/rs_logo.png')
    })
});

Given('I click on OpenWindow button and validate the popup opened', () => {
    cy.origin(Cypress.env('RAHULACEDEMYURL'), () => {
        cy.window().then((win) => {
            // Replace window.open(url, target)-function with our own arrow function
            cy.spy(win, 'open', url => {
                // change window location to be same as the popup url
                win.location.href = Cypress.config().baseUrl + url
                cy.log(Cypress.config().baseUrl + url)
            }).as("popup") // alias it with popup, so we can wait refer it with @popup
        })
        cy.get('#openwindow').click()
        cy.get('@popup').should('be.called')
    })
});