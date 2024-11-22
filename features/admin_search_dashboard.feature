@adminSearchDashboard
Feature: Admin Search in the Dashboard

  As an admin,
  I want to quickly locate and manage specific items in the dashboard, such as products, categories, or vendors.

  Scenario: Admin searches for items in the dashboard
    Given I am on the admin dashboard
    When I type a keyword "Health" in the search bar
    Then relevant items matching the keyword should be displayed
