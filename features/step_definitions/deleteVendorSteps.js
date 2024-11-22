const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

// Simulated state variables
let onVendorManagementPage = false;
let vendors = [
  { id: 1, name: "Existing Vendor", website: "https://existingvendor.com" },
  { id: 2, name: "Healthy Supplies Inc.", website: "https://healthysupplies.com" }
];
let vendorToDelete = null;
let deletionSuccess = false;

Given('I am on the vendor management page', function () {
  // Simulate navigating to the vendor management page
  onVendorManagementPage = true;
});

When('I delete a vendor with name {string}', function (vendorName) {
  if (!onVendorManagementPage) {
    throw new Error('Not on the vendor management page');
  }
  // Find the vendor to delete
  const vendorIndex = vendors.findIndex(vendor => vendor.name === vendorName);
  if (vendorIndex === -1) {
    throw new Error(`Vendor with name "${vendorName}" not found`);
  }
  vendorToDelete = vendors[vendorIndex];
  // Simulate deleting the vendor
  vendors.splice(vendorIndex, 1);
  deletionSuccess = true;
});

Then('the vendor should be removed from the system', function () {
  assert.strictEqual(deletionSuccess, true, 'Vendor deletion was not successful');
  
  const vendorExists = vendors.some(vendor => vendor.id === vendorToDelete.id);
  assert.strictEqual(vendorExists, false, `Vendor "${vendorToDelete.name}" was not removed from the system`);
});
