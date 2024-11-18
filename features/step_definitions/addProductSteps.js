const { When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let newProduct = null;

When('I navigate to the add new product page', function () {
  if (!currentUser || currentUser.role !== 'admin') {
    throw new Error('Admin is not logged in');
  }
});

When('I enter the product details:', function (dataTable) {
  newProduct = {};
  dataTable.rows().forEach(([field, value]) => {
    newProduct[field] = value;
  });

  if (!newProduct.name || !newProduct.description || !newProduct.category) {
    throw new Error('Product details are incomplete');
  }
});

When('I submit the product form', function () {
  if (newProduct && Object.keys(newProduct).length > 0) {
    productCatalog.push(newProduct);
    confirmationMessage = "Product successfully added";
  } else {
    confirmationMessage = "Product submission failed";
  }
});

Then('I should see a confirmation message for adding product {string}', function (expectedMessage) {
  assert.strictEqual(confirmationMessage, expectedMessage);
});

Then('the new product should be listed in the product catalog', function () {
  const productExists = productCatalog.some(
    product => product.name === newProduct.name && product.description === newProduct.description
  );
  assert.ok(productExists, 'Product not found in catalog');
});
