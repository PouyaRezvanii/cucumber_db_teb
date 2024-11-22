const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

// Simulated state variables
let onStorePage = false;
let searchKeyword = "";
let selectedCategory = "";
let allProducts = [];
let searchResults = [];

Given('I am on the store page', function () {
  // Simulate navigating to the store page
  onStorePage = true;
  
  // Initialize the product list
  allProducts = [
    { id: 1, name: "Glucose Monitor Pro", category: "Health Devices" },
    { id: 2, name: "Insulin Pump", category: "Health Devices" },
    { id: 3, name: "Diabetic-Friendly Snacks", category: "Food" },
    { id: 4, name: "Fitness Tracker", category: "Wearables" },
    { id: 5, name: "Blood Pressure Monitor", category: "Health Devices" },
    { id: 6, name: "Healthy Meal Plan Book", category: "Books" }
  ];
  
  searchResults = [];
});

When('I enter a keyword {string} or select a category {string} in the search bar', function (keyword, category) {
  if (!onStorePage) {
    throw new Error('Not on the store page');
  }
  
  // Simulate entering a keyword and selecting a category
  searchKeyword = keyword.toLowerCase();
  selectedCategory = category.toLowerCase();
  
  // Perform search based on keyword and category
  searchResults = allProducts.filter(product => {
    const matchesKeyword = product.name.toLowerCase().includes(searchKeyword);
    const matchesCategory = product.category.toLowerCase() === selectedCategory;
    return matchesKeyword || matchesCategory;
  });
});

Then('only products that match the search criteria should be displayed', function () {
  assert.ok(searchResults.length > 0, 'No products matched the search criteria');
  
  // Define expected results based on the keyword "Glucose Monitor" or category "Health Devices"
  const expectedProducts = [
    { id: 1, name: "Glucose Monitor Pro", category: "Health Devices" },
    { id: 2, name: "Insulin Pump", category: "Health Devices" },
    { id: 5, name: "Blood Pressure Monitor", category: "Health Devices" }
  ];
  
  assert.strictEqual(searchResults.length, expectedProducts.length, 'Number of search results does not match expected');
  
  expectedProducts.forEach(expectedProduct => {
    const productExists = searchResults.some(
      product => product.id === expectedProduct.id &&
                 product.name === expectedProduct.name &&
                 product.category === expectedProduct.category
    );
    assert.ok(productExists, `Expected product "${expectedProduct.name}" in category "${expectedProduct.category}" is not present in search results`);
  });
});
