@updateCategoryInformation
Feature: Update Category Information

  As an admin,
  I want to edit category names to better reflect product types.

  Scenario: Admin updates a category name
    Given I am on the category management page
    When I update a category name
    Then the new name should appear across the site
