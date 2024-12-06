const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

// Simulated state variables
let onStorePage = false;
let productsViewed = false;
let disclaimerDisplayed = false;
let disclaimerText = "";

Given('I am on the store page for extrenal purchase disclaimer', function () {
  // Simulate being on the store page
  onStorePage = true;
  disclaimerDisplayed = false;
  disclaimerText = "";
});

When('I view the list of products', function () {
  if (!onStorePage) {
    throw new Error('Not on the store page');
  }
  // Simulate viewing the list of products
  productsViewed = true;
  // Simulate the display of the disclaimer
  disclaimerText = "Please note that purchases are made through external sites. We are not responsible for external transactions.";
  disclaimerDisplayed = true;
});

Then('I should see a disclaimer about external purchases', function () {
  assert.strictEqual(productsViewed, true, 'Products were not viewed');
  assert.strictEqual(disclaimerDisplayed, true, 'Disclaimer is not displayed');

  const expectedDisclaimer = "Please note that purchases are made through external sites. We are not responsible for external transactions.";

  assert.strictEqual(disclaimerText, expectedDisclaimer, 'Disclaimer text does not match expected text');
});
