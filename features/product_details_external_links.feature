@productDetailsExternalLinks
Feature: Product Details with External Links

  As a diabetic patient,
  I want to see product details and be redirected to the original seller's website for purchasing.

  Scenario: Redirect to external website when clicking purchase link
    Given I am viewing a product on the product page
    When I click on the purchase link
    Then I should be redirected to the external website to purchase the product
