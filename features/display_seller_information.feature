@displaySellerInformation
Feature: Display Seller Information on Product Card and Product Page

  As a diabetic patient,
  I want to see the seller’s name and basic information on both the product card and product page.

  Scenario: Display seller information on product card and product page
    Given I am viewing a product card or product page
    When I look at the details
    Then I should see the seller's name and basic information
