const { Given, When, Then } = require('@cucumber/cucumber'); // وارد کردن گام‌ها از cucumber
const assert = require('assert');

// کدهای شما ادامه می‌یابد


let categoryCatalog = []; // Simulate category catalog
let newCategory = null;
let addCategoryConfirmationMessage = null;

When('I navigate to the add new category page', function () {
  if (!currentUser || currentUser.role !== 'admin') {
    throw new Error('Admin is not logged in');
  }
  // Simulate navigation
  navigateToAddCategoryPage = true;
});

When('I enter the category details:', function (dataTable) {
  newCategory = {};
  dataTable.rows().forEach(([field, value]) => {
    newCategory[field] = value;
  });

  if (!newCategory.name) {
    throw new Error('Category details are incomplete');
  }
});

When('I submit the category form', function () {
  if (newCategory && Object.keys(newCategory).length > 0) {
    // Simulate adding the new category to the catalog
    const categoryId = `${Date.now()}`; // Generate unique ID
    newCategory.id = categoryId;
    categoryCatalog.push(newCategory);
    addCategoryConfirmationMessage = "Category successfully added"; // Set the confirmation message here
  } else {
    addCategoryConfirmationMessage = "Category submission failed"; // Set failure message here
  }
});

Then('I should see a confirmation message "Category successfully added"', function () {
  assert.strictEqual(addCategoryConfirmationMessage, "Category successfully added");
});

Then('the new category should be listed in the category catalog', function () {
  const categoryExists = categoryCatalog.some(
    category => category.name === newCategory.name
  );
  assert.ok(categoryExists, 'Category not found in catalog');
});
