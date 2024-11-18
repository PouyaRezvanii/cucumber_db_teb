@deleteCategory
Feature: Admin can delete existing categories

  Scenario: Admin successfully deletes a category
    Given I am logged in as an admin
    And a category named "Food" exists in the category catalog
    When I delete the category named "Food"
    Then I should see a confirmation message "Category successfully deleted"
    And the category named "Food" should not be listed in the category catalog
