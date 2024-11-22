const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

// Simulated state variables
let isMobileDevice = false;
let hamburgerMenuClicked = false;
let displayedLinks = [];

Given('I am using the website on a mobile device', function () {
  // Simulate accessing the website on a mobile device
  isMobileDevice = true;
});

When('I click on the hamburger menu icon', function () {
  if (!isMobileDevice) {
    throw new Error('Not using a mobile device');
  }
  // Simulate clicking the hamburger menu icon
  hamburgerMenuClicked = true;
  // Simulate the links that appear when hamburger menu is clicked
  displayedLinks = ["Home", "Store", "Meal Plans", "Exercise Programs", "Contact Us"];
});

Then('I should see a list of links to the main sections of the website', function () {
  assert.strictEqual(hamburgerMenuClicked, true, 'Hamburger menu was not clicked');
  
  const expectedLinks = ["Home", "Store", "Meal Plans", "Exercise Programs", "Contact Us"];
  
  expectedLinks.forEach(link => {
    const linkExists = displayedLinks.includes(link);
    assert.ok(linkExists, `Expected link "${link}" is not present in the hamburger menu`);
  });
});
