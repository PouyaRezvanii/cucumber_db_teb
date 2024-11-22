@updateVendorInformation
Feature: Update Vendor Information

  As an admin,
  I want to edit vendor details to ensure accuracy.

  Scenario: Admin updates vendor information successfully
    Given I am on the vendor management page
    When I update vendor information:
      | field    | value                        |
      | name     | "Healthy Supplies International" |
      | website  | "https://healthysuppliesintl.com" |
    Then the updated information should be reflected in the vendor details
