Feature: To test the random things by Cypress

    Background:
        Given I navigate to demosite

    @regression
    Scenario: Validate origin and New Tab functionality
        When I click on OpenTab button
        Then I should be navigated to rahulshetty page

    @smoke
    Scenario: Validate origin and New Window functionality
        Then I click on OpenWindow button and validate the popup opened