@viewExercisePrograms
Feature: View Exercise Programs

  As a diabetic patient,
  I want to access exercise programs that are suitable for my condition.

  Scenario: Display list of recommended exercise programs on the exercise programs page
    Given I am on the exercise programs page
    When I open the page
    Then I should see a list of recommended exercise programs
