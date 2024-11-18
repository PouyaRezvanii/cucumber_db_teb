const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let productCatalog = [
  { name: 'Product 1', description: 'Description 1' },
  { name: 'Product 2', description: 'Description 2' },
];
let searchResults = [];

When('I search for a product named {string}', function (productName) {
  // Simulate search functionality
  searchResults = productCatalog.filter(product => product.name === productName);
});

Then('I should see the product {string} in the results', function (productName) {
  const productFound = searchResults.some(product => product.name === productName);
  assert.ok(productFound, `${productName} not found in search results`);
});
