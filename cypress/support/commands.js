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

import BillPayment from "../e2e/PageObject/BillPayment"
import loginPage from "../e2e/PageObject/LoginPage"
import UserRegistration from "../e2e/PageObject/UserRegistration"

Cypress.Commands.add('login', (email, password) => {
    let login = new loginPage()
    login.getUsername().type(email)
    login.getPassword().type(password)
    login.getSubmit().click()
})

Cypress.Commands.add('registernewuser', function () {
    const randomNumber = Math.floor(Math.random() * 1000 + 1);
    let userRegistration = new UserRegistration()
    let login = new loginPage()
    userRegistration.getTitle().then(($el) => {
        if ($el.text() === "Signing up is easy!") {
            userRegistration.getFirstNameTextfield().type(this.testdata.userregistration.firstname)
            userRegistration.getLastNameTextfield().type(this.testdata.userregistration.lastname)
            userRegistration.getAddressTextfield().type(this.testdata.userregistration.address)
            userRegistration.getCityTextfield().type(this.testdata.userregistration.city)
            userRegistration.getStateTextfield().type(this.testdata.userregistration.state)
            userRegistration.getZipCodeTextfield().type(this.testdata.userregistration.zipcode)
            userRegistration.getPhoneTextfield().type(this.testdata.userregistration.phone)
            userRegistration.getSSNTextfield().type(this.testdata.userregistration.ssn)
            const username = this.testdata.userregistration.username + randomNumber
            const password = this.testdata.userregistration.password + randomNumber
            userRegistration.getUsernameTextfield().type(username)
            userRegistration.getPasswordTextfield().type(password)
            userRegistration.getConfirmPasswordTextfield().type(password)
            userRegistration.getRegisterButton().click()
            Cypress.env("USERNAME", username)
            Cypress.env("PASSWORD", password)
        } else if ($el.text() === "Accounts Overview") {
            login.getLogoutLink().click();
        }
        else if ($el.text() === "Error!") {
            login.getRegisterLink().click()
            userRegistration.getFirstNameTextfield().type(this.testdata.userregistration.firstname)
            userRegistration.getLastNameTextfield().type(this.testdata.userregistration.lastname)
            userRegistration.getAddressTextfield().type(this.testdata.userregistration.address)
            userRegistration.getCityTextfield().type(this.testdata.userregistration.city)
            userRegistration.getStateTextfield().type(this.testdata.userregistration.state)
            userRegistration.getZipCodeTextfield().type(this.testdata.userregistration.zipcode)
            userRegistration.getPhoneTextfield().type(this.testdata.userregistration.phone)
            userRegistration.getSSNTextfield().type(this.testdata.userregistration.ssn)
            const username = this.testdata.userregistration.username + randomNumber
            const password = this.testdata.userregistration.password + randomNumber
            userRegistration.getUsernameTextfield().type(username)
            userRegistration.getPasswordTextfield().type(password)
            userRegistration.getConfirmPasswordTextfield().type(password)
            userRegistration.getRegisterButton().click()
            login.getLogoutLink().click();
            Cypress.env("USERNAME", username)
            Cypress.env("PASSWORD", password)
        }
    })
})

Cypress.Commands.add('fillbillinginformation', function () {
    let billPayment = new BillPayment()
    billPayment.getPayeeName().type(this.testdata.billpayment.payeename)
    billPayment.getAddress().type(this.testdata.billpayment.address)
    billPayment.getCity().type(this.testdata.billpayment.city)
    billPayment.getState().type(this.testdata.billpayment.state)
    billPayment.getZipCode().type(this.testdata.billpayment.zipcode)
    billPayment.getPhone().type(this.testdata.billpayment.phone)
    billPayment.getAccount().type(this.testdata.billpayment.account)
    billPayment.getVerifyAccount().type(this.testdata.billpayment.account)
    billPayment.getAmount().type(this.testdata.billpayment.amount)
    billPayment.getSendPayment().click()
})