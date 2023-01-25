Feature: To Test Login functionality

    Scenario: Verify Login functionality with incorrect credentials
    Given user navigate to WebApp
    And user enter username as "Sherlock" and Password as "Holmes"
    When user click on Login button
    Then user should see "An internal error has occurred and has been logged." error message 
