@adminDashboardAddEntries
Feature: Admin Dashboard for Adding Categories, Products, and Vendors

  As an admin,
  I want an organized dashboard to add new categories, products, and vendors efficiently.

  Scenario: Admin navigates to Add sections and sees input forms
    Given I am logged into the admin dashboard
    When I navigate to the "Add" section for categories, products, or vendors
    Then I should see a form where I can input and save relevant details for the new entry
