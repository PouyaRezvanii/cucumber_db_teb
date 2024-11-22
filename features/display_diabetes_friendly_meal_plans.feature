@displayDiabetesFriendlyMealPlans
Feature: Display Diabetes-Friendly Meal Plans and Diet Programs

  As a diabetic patient,
  I want to access meal plans and diet recommendations tailored specifically for diabetes management.

  Scenario: Display diabetes-friendly meal plans and diet programs on the meal plans page
    Given I am on the meal plans page
    When I view the content
    Then I should see diabetes-friendly meal plans and diet programs
