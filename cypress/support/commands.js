// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loginPage from "../e2e/PageObject/LoginPage"
import UserRegistration from "../e2e/PageObject/UserRegistration"

Cypress.Commands.add('login', (email, password) => {
    let login = new loginPage()
    login.getUsername().type(email)
    login.getPassword().type(password)
    login.getSubmit().click()
 })

 Cypress.Commands.add('registernewuser', () => {
    cy.fixture('example').then(function(regdata){
    let userRegistration = new UserRegistration()
    userRegistration.getFirstNameTextfield().type(regdata.userregistration.firstname)
    userRegistration.getLastNameTextfield().type(regdata.userregistration.lastname)
    userRegistration.getAddressTextfield().type(regdata.userregistration.address)
    userRegistration.getCityTextfield().type(regdata.userregistration.city)
    userRegistration.getStateTextfield().type(regdata.userregistration.state)
    userRegistration.getZipCodeTextfield().type(regdata.userregistration.zipcode)
    userRegistration.getPhoneTextfield().type(regdata.userregistration.phone)
    userRegistration.getSSNTextfield().type(regdata.userregistration.ssn)
    userRegistration.getUsernameTextfield().type(regdata.userregistration.username)
    userRegistration.getPasswordTextfield().type(regdata.userregistration.password)
    userRegistration.getConfirmPasswordTextfield().type(regdata.userregistration.password)
     })
    
 })