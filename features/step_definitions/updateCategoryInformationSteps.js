const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

// Simulated state variables
let onCategoryManagementPage = false;
let categories = [
  { id: 1, name: "Food" },
  { id: 2, name: "Supplements" }
];
let updatedCategory = null;

Given('I am on the category management page', function () {
  // Simulate navigating to the category management page
  onCategoryManagementPage = true;
});

When('I update a category name', function () {
  if (!onCategoryManagementPage) {
    throw new Error('Not on the category management page');
  }
  // Simulate updating the category name
  // For example, updating category with id 1 from "Food" to "Healthy Foods"
  const categoryToUpdate = categories.find(cat => cat.id === 1);
  if (categoryToUpdate) {
    categoryToUpdate.name = "Healthy Foods";
    updatedCategory = categoryToUpdate;
  } else {
    throw new Error('Category to update not found');
  }
});

Then('the new name should appear across the site', function () {
  assert.ok(updatedCategory, 'Category was not updated');

  // Simulate checking the category name across different parts of the site
  const siteSections = [
    { section: "Landing Page", categories: categories },
    { section: "Store Page", categories: categories },
    { section: "Product Listings", categories: categories }
  ];

  siteSections.forEach(section => {
    const categoryExists = section.categories.some(cat => cat.name === updatedCategory.name);
    assert.ok(categoryExists, `Updated category name "${updatedCategory.name}" does not appear in ${section.section}`);
  });
});
