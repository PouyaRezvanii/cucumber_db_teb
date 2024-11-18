@addCategory
Feature: Admin can add new categories for products

  Scenario: Admin successfully adds a new category
    Given I am logged in as an admin
    When I navigate to the add new category page
    And I enter the category details:
      | field     | value           |
      | name      | "Food"          |
    And I submit the category form
    Then I should see a confirmation message "Category successfully added"
    And the new category should be listed in the category catalog

