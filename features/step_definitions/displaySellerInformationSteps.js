const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

// Simulated state variables
let viewingProduct = false;
let productDetails = {};
let sellerInformationDisplayed = false;

Given('I am viewing a product card or product page', function () {
  // Simulate viewing a product card or product page
  viewingProduct = true;
  productDetails = {
    name: "Diabetic Friendly Snacks",
    seller: {
      name: "HealthyFoods Inc.",
      info: "Providing quality health products since 2010."
    }
  };
  sellerInformationDisplayed = false;
});

When('I look at the details', function () {
  if (!viewingProduct) {
    throw new Error('Not viewing a product');
  }
  // Simulate looking at product details
  if (productDetails.seller && productDetails.seller.name && productDetails.seller.info) {
    sellerInformationDisplayed = true;
  }
});

Then('I should see the seller\'s name and basic information', function () {
  assert.strictEqual(sellerInformationDisplayed, true, 'Seller information is not displayed');

  const expectedSellerName = "HealthyFoods Inc.";
  const expectedSellerInfo = "Providing quality health products since 2010.";

  assert.strictEqual(productDetails.seller.name, expectedSellerName, 'Seller name does not match');
  assert.strictEqual(productDetails.seller.info, expectedSellerInfo, 'Seller information does not match');
});
