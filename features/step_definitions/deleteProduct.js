const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let productCatalog = [{ name: 'Old Product', description: 'An old product' }];
let confirmationMessage = "";

When('a product named {string} exists in the catalog for deletion', function (productName) {
  const productExists = productCatalog.some(product => product.name === productName);
  if (!productExists) {
    throw new Error(`Product ${productName} does not exist`);
  }
});

When('I delete the product named {string}', function (productName) {
  productCatalog = productCatalog.filter(product => product.name !== productName);
  confirmationMessage = "Product successfully deleted";
});

Then('I should see a confirmation message for deleting product {string}', function (expectedMessage) {
  assert.strictEqual(confirmationMessage, expectedMessage);
});

Then('the product named {string} should not be listed in the product catalog', function (productName) {
  const productExists = productCatalog.some(product => product.name === productName);
  assert.ok(!productExists, 'Product still found in catalog');
});
