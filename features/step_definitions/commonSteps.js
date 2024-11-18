const { Given, Then } = require('@cucumber/cucumber');
const assert = require('assert');

global.currentUser = null;
global.confirmationMessage = null;
global.productCatalog = [];
global.categoryCatalog = []; // Added global category catalog for sharing data across steps

Given('I am logged in as an admin', function () {
  currentUser = { role: 'admin' };
  if (currentUser.role !== 'admin') {
    throw new Error('User is not an admin');
  }
});

// Removed duplicate step definition for confirmation message
