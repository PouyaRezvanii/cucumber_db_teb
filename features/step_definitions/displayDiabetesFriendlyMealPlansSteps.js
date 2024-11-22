const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

// Simulated state variables
let onMealPlansPage = false;
let contentViewed = false;
let mealPlans = [];

Given('I am on the meal plans page', function () {
  // Simulate navigating to the meal plans page
  onMealPlansPage = true;
  mealPlans = [];
});

When('I view the content', function () {
  if (!onMealPlansPage) {
    throw new Error('Not on the meal plans page');
  }
  // Simulate viewing the content
  contentViewed = true;
  // Simulate loading diabetes-friendly meal plans and diet programs
  mealPlans = [
    { id: 1, name: "Low-Carb Breakfast Plan", description: "Start your day with low-carb meals to manage blood sugar levels." },
    { id: 2, name: "Balanced Lunch Plan", description: "Enjoy balanced lunches with the right mix of proteins and vegetables." },
    { id: 3, name: "Healthy Dinner Plan", description: "End your day with healthy dinners that support diabetes management." },
    { id: 4, name: "Snack Smart Program", description: "Choose smart snacks to keep your energy levels stable." }
  ];
});

Then('I should see diabetes-friendly meal plans and diet programs', function () {
  assert.strictEqual(contentViewed, true, 'Content was not viewed on the meal plans page');
  assert.ok(mealPlans.length > 0, 'No meal plans are displayed');

  const expectedMealPlans = [
    { name: "Low-Carb Breakfast Plan", description: "Start your day with low-carb meals to manage blood sugar levels." },
    { name: "Balanced Lunch Plan", description: "Enjoy balanced lunches with the right mix of proteins and vegetables." },
    { name: "Healthy Dinner Plan", description: "End your day with healthy dinners that support diabetes management." },
    { name: "Snack Smart Program", description: "Choose smart snacks to keep your energy levels stable." }
  ];

  expectedMealPlans.forEach(expected => {
    const plan = mealPlans.find(p => p.name === expected.name);
    assert.ok(plan, `Meal plan "${expected.name}" is not displayed`);
    assert.strictEqual(plan.description, expected.description, `Description for "${expected.name}" does not match`);
  });
});
