const { Given, When, Then } = require('@cucumber/cucumber'); 
const assert = require('assert');

let categoryCatalog = []; // Simulate category catalog
let deleteCategoryConfirmationMessage = null;
let deletedCategory = null;

Given('a category named {string} exists in the category catalog', function (categoryName) {
  // Check if category exists in the catalog
  const category = categoryCatalog.find(cat => cat.name === categoryName);
  if (!category) {
    // If category doesn't exist, create it
    categoryCatalog.push({ id: `${Date.now()}`, name: categoryName });
  }
});

When('I delete the category named {string}', function (categoryName) {
  const categoryIndex = categoryCatalog.findIndex(cat => cat.name === categoryName);
  if (categoryIndex !== -1) {
    deletedCategory = categoryCatalog.splice(categoryIndex, 1)[0]; // Remove the category
    deleteCategoryConfirmationMessage = "Category successfully deleted"; // Set the confirmation message
  } else {
    deleteCategoryConfirmationMessage = "Category not found"; // If category doesn't exist
  }
});

Then('I should see a confirmation message "Category successfully deleted"', function () {
  assert.strictEqual(deleteCategoryConfirmationMessage, "Category successfully deleted");
});

Then('the category named {string} should not be listed in the category catalog', function (categoryName) {
  const categoryExists = categoryCatalog.some(cat => cat.name === categoryName);
  assert.ok(!categoryExists, 'Category was not deleted');
});
