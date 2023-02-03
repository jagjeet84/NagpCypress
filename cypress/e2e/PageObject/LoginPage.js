/// <reference types="cypress" />

class loginPage {

    visit() {
        cy.visit('/')
    }

    getUsername() {
        return cy.get("input[name='username']", { timeout: 10000 })
    }

    getPassword() {
        return cy.get("input[name='password']", { timeout: 10000 })
    }

    getSubmit() {
        return cy.get("input[value='Log In']", { timeout: 10000 })
    }

    getMessage() {
        return cy.get("#mainPanel #rightPanel > p", { timeout: 10000 })
    }

    getRegisterLink() {
        return cy.contains("Register")
    }

    getLogoutLink() {
        return cy.contains("Log Out")
    }
}

export default loginPage