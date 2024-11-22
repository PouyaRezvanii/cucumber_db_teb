@addNewVendor
Feature: Add a New Vendor

  As an admin,
  I want to add new vendors with details such as name and website link.

  Scenario: Admin adds a new vendor successfully
    Given I am on the vendor management page
    When I submit a new vendor's details:
      | field   | value                      |
      | name    | "Healthy Supplies Inc."    |
      | website | "https://healthysupplies.com" |
    Then the vendor should be listed for product association
