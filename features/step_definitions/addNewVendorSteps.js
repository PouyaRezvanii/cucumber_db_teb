const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

// Simulated state variables
let onVendorManagementPage = false;
let vendors = [
  { id: 1, name: "Existing Vendor", website: "https://existingvendor.com" }
];
let newVendor = null;

Given('I am on the vendor management page', function () {
  // Simulate navigating to the vendor management page
  onVendorManagementPage = true;
});

When('I submit a new vendor\'s details:', function (dataTable) {
  if (!onVendorManagementPage) {
    throw new Error('Not on the vendor management page');
  }
  // Simulate submitting new vendor details
  const vendorDetails = {};
  dataTable.rows().forEach(([field, value]) => {
    vendorDetails[field] = value.replace(/"/g, ''); // Remove quotes
  });

  if (!vendorDetails.name || !vendorDetails.website) {
    throw new Error('Vendor details are incomplete');
  }

  // Simulate adding the new vendor to the vendors list
  const vendorId = vendors.length + 1;
  newVendor = { id: vendorId, name: vendorDetails.name, website: vendorDetails.website };
  vendors.push(newVendor);
});

Then('the vendor should be listed for product association', function () {
  assert.ok(newVendor, 'New vendor was not added');

  // Simulate checking the vendor list for the new vendor
  const vendorExists = vendors.some(vendor => vendor.id === newVendor.id && vendor.name === newVendor.name && vendor.website === newVendor.website);
  assert.ok(vendorExists, 'New vendor is not listed for product association');
});
