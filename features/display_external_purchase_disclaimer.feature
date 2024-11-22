@displayExternalPurchaseDisclaimer
Feature: Display External Purchase Disclaimer

  As a diabetic patient,
  I want a clear disclaimer on the store page stating that products are linked to external sites for purchase.

  Scenario: Display disclaimer about external purchases on the store page
    Given I am on the store page
    When I view the list of products
    Then I should see a disclaimer about external purchases
