Feature: To Test Login functionality

  Scenario: Verify Login functionality with incorrect credentials
    When user enter username as "srlock" and Password as "Jasjeet876"
    And user click on Login button
    Then user should see "An internal error has occurred and has been logged." message

  Scenario: Verify Login functionality with correct credentials
    When I click on Register link under login button
    And I fill all the details in signup form and click Register
    And user enter username as "sherlock" and Password as "holmes"
    And user click on Login button
    Then user should be navigate to AccountsOverview
