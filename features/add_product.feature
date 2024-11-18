@add
Feature: Admin can add new products to the store

  As an admin,
  So that I can keep the product catalog updated with new offerings,
  I want to be able to add new products by entering details such as product name, description, image, category, vendor, and external purchase link.

  Scenario: Admin successfully adds a new product
    Given I am logged in as an admin
    When I navigate to the add new product page
    And I enter the product details:
      | field       | value                        |
      | name        | "New Product"                |
      | description | "A new product for diabetes" |
      | image       | "product_image_url"          |
      | category    | "drug"                       |
      | vendor      | "Vendor X"                   |
      | price       | "100"                        |
      | productUrl  | "https://product.link"       |
    And I submit the product form
    Then I should see a confirmation message for adding product "Product successfully added"
    And the new product should be listed in the product catalog
