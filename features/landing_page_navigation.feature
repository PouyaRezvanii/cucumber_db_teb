@landingPageNavigation
Feature: Landing Page for Easy Navigation

  As a diabetic patient or new visitor,
  I want the landing page to have a clear layout with links to different sections like the store, meal plans, and exercise programs

  Scenario: Display navigation links on the landing page
    Given I am on the landing page
    When I look for navigation options
    Then I should see clearly labeled links to sections like the store, meal plans, and exercise programs
