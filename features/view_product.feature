@view
Feature: Admin can view the product catalog

  Scenario: Admin successfully views the product catalog
    Given I am logged in as an admin
    When I navigate to the product catalog page
    Then I should see the list of all products
