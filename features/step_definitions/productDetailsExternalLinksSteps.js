const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

// Simulated state variables
let onProductPage = false;
let purchaseLinkClicked = false;
let redirectedToExternal = false;
let externalUrl = "";

Given('I am viewing a product on the product page', function () {
  // Simulate being on the product page
  onProductPage = true;
  purchaseLinkClicked = false;
  redirectedToExternal = false;
  externalUrl = "";
});

When('I click on the purchase link', function () {
  if (!onProductPage) {
    throw new Error('Not on the product page');
  }
  // Simulate clicking the purchase link
  purchaseLinkClicked = true;
  // Simulate redirection to the external website
  externalUrl = "https://www.externalseller.com/purchase-product";
  redirectedToExternal = true;
});

Then('I should be redirected to the external website to purchase the product', function () {
  assert.strictEqual(purchaseLinkClicked, true, 'Purchase link was not clicked');
  assert.strictEqual(redirectedToExternal, true, 'Did not redirect to external website');
  assert.strictEqual(externalUrl, "https://www.externalseller.com/purchase-product", 'Redirection URL does not match expected external website');
});
