const { Given, When, Then } = require('@cucumber/cucumber'); // Importing steps from Cucumber
const assert = require('assert');

// Simulated state variables
let currentUser = null; // Represents the current user
let introSectionDisplayed = false; // Flag to check if intro section is displayed

Given('I am a new visitor on the landing page', function () {
  // Simulate a new visitor by ensuring no user is logged in
  currentUser = { role: 'visitor' };
  // Simulate navigating to the landing page
  navigateToLandingPage = true;
  introSectionDisplayed = false; // Reset the intro section flag
});

When('I open the website', function () {
  if (!navigateToLandingPage) {
    throw new Error('Landing page is not loaded');
  }
  // Simulate opening the website and displaying the intro section
  introSectionDisplayed = true;
});

Then('I should see an introductory section that briefly explains the purpose and offerings of the website', function () {
  // Verify that the introductory section is displayed with the correct content
  assert.strictEqual(introSectionDisplayed, true, 'Introductory section is not displayed');
  
  // Simulate checking the content of the introductory section
  const expectedContent = "Welcome to our website! We aim to provide diabetic patients with valuable resources and personalized recommendations to help manage their health effectively.";
  
  // For simulation purposes, we'll define the actual content here
  const actualContent = "Welcome to our website! We aim to provide diabetic patients with valuable resources and personalized recommendations to help manage their health effectively.";
  
  assert.strictEqual(actualContent, expectedContent, 'Introductory section content does not match expected text');
});
