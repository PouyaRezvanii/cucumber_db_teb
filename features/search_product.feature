@search
Feature: Admin can search for products in the catalog

  Scenario: Admin successfully searches for a product by name
    Given I am logged in as an admin
    When I search for a product named "Product 1"
    Then I should see the product "Product 1" in the results
