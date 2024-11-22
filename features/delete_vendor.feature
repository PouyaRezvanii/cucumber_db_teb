@deleteVendor
Feature: Delete a Vendor

  As an admin,
  I want to delete vendors whose products are no longer available or who no longer partner with us.

  Scenario: Admin deletes a vendor successfully
    Given I am on the vendor management page
    When I delete a vendor with name "Healthy Supplies Inc."
    Then the vendor should be removed from the system
