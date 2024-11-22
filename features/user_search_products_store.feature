@userSearchProductsStore
Feature: User Search for Products in the Store

  As a regular user,
  I want to search for products in the store by name or category to find what I need quickly.

  Scenario: Search for products by keyword or category in the store
    Given I am on the store page
    When I enter a keyword "Glucose Monitor" or select a category "Health Devices" in the search bar
    Then only products that match the search criteria should be displayed
