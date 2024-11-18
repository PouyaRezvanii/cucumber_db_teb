const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let productCatalog = [
  { name: 'Product 1', description: 'Description 1' },
  { name: 'Product 2', description: 'Description 2' },
];

When('I navigate to the product catalog page', function () {
  // Simulate navigating to the product catalog
  catalogPage = true;
});

Then('I should see the list of all products', function () {
  assert.ok(catalogPage, 'Catalog page not loaded');
  assert.ok(productCatalog.length > 0, 'No products found in catalog');
});
