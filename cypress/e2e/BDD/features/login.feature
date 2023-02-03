Feature: To Test Login functionality

  @regression
  Scenario: Verify Login functionality with incorrect credentials
    When I enter username as "srlock" and Password as "Jasjeet876"
    And I click on Login button
    Then I should see "An internal error has occurred and has been logged." message

  Scenario: Verify Login functionality with correct credentials
    When I click on Register link under login button
    And I fill all the details in signup form and click Register
    And I enter username as "sherlock" and Password as "holmes"
    And I click on Login button
    Then I should be navigated to AccountsOverview
