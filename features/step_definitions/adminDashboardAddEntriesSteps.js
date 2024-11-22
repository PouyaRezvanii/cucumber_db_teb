const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

// Simulated state variables
let isLoggedIn = false;
let onAdminDashboard = false;
let currentAddSection = null;
let formsDisplayed = {
  categories: false,
  products: false,
  vendors: false
};
let formDetails = {};

// Mock data for forms
const formTemplates = {
  categories: ['name', 'description'],
  products: ['name', 'category', 'price', 'description'],
  vendors: ['name', 'website', 'contact']
};

Given('I am logged into the admin dashboard', function () {
  // Simulate logging into the admin dashboard
  isLoggedIn = true;
  onAdminDashboard = true;
});

When('I navigate to the {string} section for {string}', function (action, entity) {
  if (!isLoggedIn || !onAdminDashboard) {
    throw new Error('Not logged into the admin dashboard');
  }
  
  if (action.toLowerCase() !== 'add') {
    throw new Error(`Unsupported action "${action}"`);
  }
  
  if (!['categories', 'products', 'vendors'].includes(entity.toLowerCase())) {
    throw new Error(`Unsupported entity "${entity}"`);
  }
  
  // Simulate navigating to the Add section for the specified entity
  currentAddSection = entity.toLowerCase();
  
  // Simulate form display
  formsDisplayed[currentAddSection] = true;
  
  // Initialize form details based on the entity
  formDetails[currentAddSection] = formTemplates[currentAddSection].reduce((acc, field) => {
    acc[field] = `${field} input`;
    return acc;
  }, {});
});

Then('I should see a form where I can input and save relevant details for the new entry', function () {
  // Verify that forms for all entities are displayed
  ['categories', 'products', 'vendors'].forEach(entity => {
    assert.strictEqual(formsDisplayed[entity], true, `Form for "${entity}" is not displayed`);
    
    const expectedFields = formTemplates[entity];
    const actualFields = formDetails[entity];
    
    expectedFields.forEach(field => {
      assert.ok(actualFields[field], `Form field "${field}" is missing for "${entity}"`);
    });
  });
  
  // Simulate saving the forms (assuming success)
  // In a real test, here would be the code to submit the forms and verify the entries are saved
});
