@update
Feature: Admin can update existing product details

  Scenario: Admin successfully updates a product's details
    Given I am logged in as an admin
    And a product named "Old Product" exists in the catalog for update
    When I update the product details for "Old Product" with the following information:
      | field       | value                             |
      | name        | "Updated Product"                 |
      | description | "An updated product for diabetes" |
      | category    | "health"                          |
      | vendor      | "Vendor Y"                        |
      | price       | "150"                             |
      | productUrl  | "https://updated.link"            |
    Then I should see a confirmation message for updating product "Product successfully updated"
    And the product should reflect the updated information
