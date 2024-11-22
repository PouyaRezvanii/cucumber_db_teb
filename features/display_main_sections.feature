@displayMainSections
Feature: Display Main Sections on Landing Page

  As a new visitor,
  I want to see a preview of the main sections, such as "Store," "Meal Plans," and "Exercise Programs," with short descriptions and quick links

  Scenario: Display previews of main sections on landing page
    Given I am on the landing page
    When I scroll down
    Then I should see previews of the main sections with short descriptions and links to each section
