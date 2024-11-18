const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let productCatalog = [{ name: 'Old Product', description: 'An old product' }];
let updatedProduct = null;
let confirmationMessage = "";

When('a product named {string} exists in the catalog for update', function (productName) {
  const productExists = productCatalog.some(product => product.name === productName);
  if (!productExists) {
    throw new Error(`Product ${productName} not found`);
  }
});

When('I update the product details for {string} with the following information:', function (productName, dataTable) {
  const product = productCatalog.find(p => p.name === productName);
  if (!product) {
    throw new Error(`Product ${productName} not found`);
  }

  updatedProduct = {};
  dataTable.rows().forEach(([field, value]) => {
    updatedProduct[field] = value;
  });

  // Update the product details
  product.name = updatedProduct.name || product.name;
  product.description = updatedProduct.description || product.description;
  product.category = updatedProduct.category || product.category;
  product.vendor = updatedProduct.vendor || product.vendor;
  product.price = updatedProduct.price || product.price;
  product.productUrl = updatedProduct.productUrl || product.productUrl;

  confirmationMessage = "Product successfully updated";
});

Then('I should see a confirmation message for updating product {string}', function (expectedMessage) {
  assert.strictEqual(confirmationMessage, expectedMessage);
});

Then('the product should reflect the updated information', function () {
  const product = productCatalog.find(p => p.name === updatedProduct.name);
  assert.ok(product, 'Updated product not found in catalog');
  assert.strictEqual(product.name, updatedProduct.name);
  assert.strictEqual(product.description, updatedProduct.description);
  assert.strictEqual(product.category, updatedProduct.category);
  assert.strictEqual(product.vendor, updatedProduct.vendor);
  assert.strictEqual(product.price, updatedProduct.price);
  assert.strictEqual(product.productUrl, updatedProduct.productUrl);
});
