beforeEach(function () {
    cy.visit('/')
    cy.fixture('testdata').as('testdata')
})