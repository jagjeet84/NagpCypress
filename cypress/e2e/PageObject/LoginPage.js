/// <reference types="cypress" />

class loginPage{

    visit(){
        cy.visit('/')
    }

    getUsername(){
       return cy.get("input[name='username']")   
    }

    getPassword(){
        return cy.get("input[name='password']")
    }

    getSubmit(){
        return cy.get("input[type='submit']")
    }

    getErrorMessage(){
     return cy.get("#mainPanel #rightPanel > p")
    }
}

export default loginPage