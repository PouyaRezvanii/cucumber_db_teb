@delete
Feature: Admin can delete products from the store

  Scenario: Admin successfully deletes a product
    Given I am logged in as an admin
    And a product named "Old Product" exists in the catalog for deletion
    When I delete the product named "Old Product"
    Then I should see a confirmation message for deleting product "Product successfully deleted"
    And the product named "Old Product" should not be listed in the product catalog
