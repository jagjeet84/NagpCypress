import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ContactInfo from "../../PageObject/ContactInfo"

let contactInfo = new ContactInfo()
Given('I should see the correct result as added during the User Registration', function () {
    contactInfo.getFirstName().should('have.value', this.testdata.userregistration.firstname)
    contactInfo.getLastName().should('have.value', this.testdata.userregistration.lastname)
    contactInfo.getAddress().should('have.value', this.testdata.userregistration.address)
    contactInfo.getCity().should('have.value', this.testdata.userregistration.city)
    contactInfo.getState().should('have.value', this.testdata.userregistration.state)
    contactInfo.getZipCode().should('have.value', this.testdata.userregistration.zipcode)
    contactInfo.getPhoneNumber().should('have.value', this.testdata.userregistration.phone)
});
