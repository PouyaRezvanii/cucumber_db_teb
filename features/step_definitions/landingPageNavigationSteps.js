const { Given, When, Then } = require('@cucumber/cucumber'); // Importing steps from Cucumber
const assert = require('assert');

// Simulated state variables
let currentUser = null; // Represents the current user
let navigationOptionsDisplayed = false; // Flag to check if navigation options are displayed
let navigationLinks = []; // Stores the navigation links present on the landing page

Given('I am on the landing page for navigation', function () {
  // Simulate being on the landing page
  currentUser = { role: 'visitor' }; // Could be 'diabetic patient' or 'visitor'
  navigateToLandingPage = true;
  navigationOptionsDisplayed = false; // Reset the navigation options flag
  navigationLinks = []; // Reset the navigation links
});

When('I look for navigation options', function () {
  if (!navigateToLandingPage) {
    throw new Error('Landing page is not loaded');
  }
  // Simulate fetching navigation links from the landing page
  // In a real scenario, this would involve DOM manipulation or API calls
  navigationLinks = ["Store", "Meal Plans", "Exercise Programs"];
  navigationOptionsDisplayed = true;
});

Then('I should see clearly labeled links to sections like the store, meal plans, and exercise programs', function () {
  // Verify that navigation options are displayed
  assert.strictEqual(navigationOptionsDisplayed, true, 'Navigation options are not displayed on the landing page');

  // Define the expected links
  const expectedLinks = ["Store", "Meal Plans", "Exercise Programs"];

  // Check if all expected links are present in the navigationLinks array
  expectedLinks.forEach(link => {
    const linkExists = navigationLinks.includes(link);
    assert.ok(linkExists, `Expected navigation link "${link}" is not present`);
  });
});
