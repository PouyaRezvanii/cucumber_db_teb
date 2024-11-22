@mobileFriendlyDesign
Feature: Mobile-Friendly Design

  As a diabetic patient who frequently uses mobile devices,
  I want the website to be responsive and optimized for mobile use.

  Scenario: Ensure all pages display correctly and are usable on a mobile screen
    Given I am accessing the website on a mobile device
    When I navigate through the site
    Then all pages should display correctly and be easily usable on a mobile screen
