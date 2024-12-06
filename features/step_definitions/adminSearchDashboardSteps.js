const { Given, When, Then } = require('@cucumber/cucumber');
const { Before } = require('@cucumber/cucumber');
const assert = require('assert');

// Simulated state variables
let onAdminDashboard = false;
let searchKeyword = "";
let allItems = [];
let searchResults = [];

// Initialize simulated items
Before(function () {
  allItems = [
    { type: "Product", name: "Health Tracker Watch" },
    { type: "Category", name: "Health Supplements" },
    { type: "Vendor", name: "HealthPlus Vendors" },
    { type: "Product", name: "Fitness Band" },
    { type: "Category", name: "Fitness Equipment" },
    { type: "Vendor", name: "FitLife Suppliers" }
  ];
});

Given('I am on the admin dashboard', function () {
  // Simulate navigating to the admin dashboard
  onAdminDashboard = true;
  searchKeyword = "";
  searchResults = [];
});

When('I type a keyword {string} in the search bar', function (keyword) {
  if (!onAdminDashboard) {
    throw new Error('Not on the admin dashboard');
  }
  // Simulate typing a keyword in the search bar
  searchKeyword = keyword;
  // Simulate searching items
  searchResults = allItems.filter(item => item.name.toLowerCase().includes(searchKeyword.toLowerCase()));
});

Then('relevant items matching the keyword should be displayed', function () {
  assert.strictEqual(onAdminDashboard, true, 'Not on the admin dashboard');
  assert.strictEqual(searchKeyword.length > 0, true, 'No keyword entered in the search bar');
  
  // Define expected results based on the keyword "Health"
  const expectedResults = [
    { type: "Product", name: "Health Tracker Watch" },
    { type: "Category", name: "Health Supplements" },
    { type: "Vendor", name: "HealthPlus Vendors" }
  ];

  assert.strictEqual(searchResults.length, expectedResults.length, 'Number of search results does not match expected');

  expectedResults.forEach(expectedItem => {
    const itemExists = searchResults.some(
      item => item.type === expectedItem.type && item.name === expectedItem.name
    );
    assert.ok(itemExists, `Expected item "${expectedItem.name}" of type "${expectedItem.type}" is not present in search results`);
  });
});
