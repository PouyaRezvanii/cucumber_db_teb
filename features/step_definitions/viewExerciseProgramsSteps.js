const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

// Simulated state variables
let onExerciseProgramsPage = false;
let pageOpened = false;
let recommendedExercisePrograms = [];

Given('I am on the exercise programs page', function () {
  // Simulate navigating to the exercise programs page
  onExerciseProgramsPage = true;
  recommendedExercisePrograms = [];
});

When('I open the page', function () {
  if (!onExerciseProgramsPage) {
    throw new Error('Not on the exercise programs page');
  }
  // Simulate opening the exercise programs page
  pageOpened = true;
  // Simulate loading recommended exercise programs
  recommendedExercisePrograms = [
    { id: 1, name: "Beginner Yoga", description: "Gentle yoga routines for beginners." },
    { id: 2, name: "Cardio for Diabetics", description: "Cardio exercises tailored for diabetic patients." },
    { id: 3, name: "Strength Training", description: "Strength training programs to improve muscle health." }
  ];
});

Then('I should see a list of recommended exercise programs', function () {
  assert.strictEqual(pageOpened, true, 'Exercise programs page was not opened');
  assert.ok(recommendedExercisePrograms.length > 0, 'No recommended exercise programs are displayed');

  const expectedPrograms = [
    { name: "Beginner Yoga", description: "Gentle yoga routines for beginners." },
    { name: "Cardio for Diabetics", description: "Cardio exercises tailored for diabetic patients." },
    { name: "Strength Training", description: "Strength training programs to improve muscle health." }
  ];

  expectedPrograms.forEach(expected => {
    const program = recommendedExercisePrograms.find(p => p.name === expected.name);
    assert.ok(program, `Exercise program "${expected.name}" is not displayed`);
    assert.strictEqual(program.description, expected.description, `Description for "${expected.name}" does not match`);
  });
});
