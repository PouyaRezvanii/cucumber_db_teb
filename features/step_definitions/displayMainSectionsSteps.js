const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

// Simulated state variables
let onLandingPage = false;
let scrolledDown = false;
let mainSectionPreviews = [];

Given('I am on the landing page', function () {
  // Simulate being on the landing page
  onLandingPage = true;
  mainSectionPreviews = [];
});

When('I scroll down', function () {
  if (!onLandingPage) {
    throw new Error('Not on the landing page');
  }
  // Simulate scrolling down the page
  scrolledDown = true;
  // Simulate loading main section previews
  mainSectionPreviews = [
    { name: "Store", description: "Browse our products tailored for diabetic patients.", link: "/store" },
    { name: "Meal Plans", description: "Find meal plans that suit your dietary needs.", link: "/meal-plans" },
    { name: "Exercise Programs", description: "Explore exercise routines to maintain your health.", link: "/exercise-programs" }
  ];
});

Then('I should see previews of the main sections with short descriptions and links to each section', function () {
  assert.strictEqual(scrolledDown, true, 'Did not scroll down the landing page');
  assert.strictEqual(mainSectionPreviews.length, 3, 'Main section previews are not displayed correctly');

  const expectedSections = [
    { name: "Store", description: "Browse our products tailored for diabetic patients.", link: "/store" },
    { name: "Meal Plans", description: "Find meal plans that suit your dietary needs.", link: "/meal-plans" },
    { name: "Exercise Programs", description: "Explore exercise routines to maintain your health.", link: "/exercise-programs" }
  ];

  expectedSections.forEach(expected => {
    const section = mainSectionPreviews.find(sec => sec.name === expected.name);
    assert.ok(section, `Section "${expected.name}" is not displayed`);
    assert.strictEqual(section.description, expected.description, `Description for "${expected.name}" does not match`);
    assert.strictEqual(section.link, expected.link, `Link for "${expected.name}" does not match`);
  });
});
