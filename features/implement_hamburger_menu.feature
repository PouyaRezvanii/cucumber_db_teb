@implementHamburgerMenu
Feature: Implement Hamburger Menu for Mobile

  As a mobile user,
  I want to access a collapsible hamburger menu with quick links to main sections of the website

  Scenario: Display hamburger menu with main section links on mobile device
    Given I am using the website on a mobile device
    When I click on the hamburger menu icon
    Then I should see a list of links to the main sections of the website
