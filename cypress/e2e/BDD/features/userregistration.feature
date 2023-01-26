Feature: To Test User Registration functionality

Scenario: Validate User get registered 
Given user navigate to WebApp
When I click on Register link under login button
And I fill all the details in signup form
And I click on Register click
Then user should see "Your account was created successfully. You are now logged in." message
