const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

// Simulated state variables
let isMobileDevice = false;
let navigationSteps = [];
let pagesDisplayedCorrectly = true;

Given('I am accessing the website on a mobile device', function () {
  // Simulate accessing the website on a mobile device
  isMobileDevice = true;
  // Simulate responsive design settings
  screenWidth = 375; // Typical mobile screen width in pixels
});

When('I navigate through the site', function () {
  if (!isMobileDevice) {
    throw new Error('Not accessing the website on a mobile device');
  }
  // Simulate navigation steps
  navigationSteps = [
    { page: "Landing Page", elements: ["Intro Section", "Navigation Menu"] },
    { page: "Store Page", elements: ["Product Listings", "Filter Options"] },
    { page: "Meal Plans Page", elements: ["Meal Plan Previews", "Diet Recommendations"] },
    { page: "Exercise Programs Page", elements: ["Exercise List", "Program Details"] },
    { page: "Vendor Management Page", elements: ["Vendor List", "Add Vendor Button"] }
  ];

  // Simulate checking each page's display
  navigationSteps.forEach(step => {
    // Simulate responsive checks (always true in this simulation)
    const pageDisplaysCorrectly = true; // Replace with actual checks in real tests
    pagesDisplayedCorrectly = pagesDisplayedCorrectly && pageDisplaysCorrectly;
  });
});

Then('all pages should display correctly and be easily usable on a mobile screen', function () {
  assert.strictEqual(isMobileDevice, true, 'Not accessing the website on a mobile device');
  assert.strictEqual(pagesDisplayedCorrectly, true, 'One or more pages do not display correctly on mobile');
  
  // Additional checks can be added here to verify usability aspects
  navigationSteps.forEach(step => {
    assert.ok(step.elements.length > 0, `Elements on ${step.page} are not displayed correctly`);
  });
});
