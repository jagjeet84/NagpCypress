Feature: To Test Login functionality

    Scenario: Verify Login functionality with incorrect credentials
    Given user navigate to WebApp
    And user enter username as "Sherlock" and Password as "Jagjeet876"
    When user click on Login button
    Then user should see "An internal error has occurred and has been logged." message 

  Scenario: Verify Login functionality with correct credentials
    Given user navigate to WebApp
    And user enter username as "sherlock" and Password as "holmes"
    When user click on Login button
    Then user should be navigate to AccountsOverview
