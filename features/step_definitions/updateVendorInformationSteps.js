const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

// Simulated state variables
let onVendorManagementPage = false;
let vendors = [
  { id: 1, name: "Existing Vendor", website: "https://existingvendor.com" },
  { id: 2, name: "Healthy Supplies Inc.", website: "https://healthysupplies.com" }
];
let vendorToUpdate = null;
let updatedVendorDetails = {};

Given('I am on the vendor management page for updating a vendor', function () {
  // Simulate navigating to the vendor management page
  onVendorManagementPage = true;
});

When('I update vendor information:', function (dataTable) {
  if (!onVendorManagementPage) {
    throw new Error('Not on the vendor management page');
  }
  // Simulate selecting a vendor to update (e.g., vendor with id 2)
  vendorToUpdate = vendors.find(vendor => vendor.id === 2);
  if (!vendorToUpdate) {
    throw new Error('Vendor to update not found');
  }

  // Update vendor details based on the dataTable
  dataTable.rows().forEach(([field, value]) => {
    vendorToUpdate[field] = value.replace(/"/g, ''); // Remove quotes
    updatedVendorDetails[field] = value.replace(/"/g, '');
  });
});

Then('the updated information should be reflected in the vendor details', function () {
  assert.ok(vendorToUpdate, 'Vendor to update is not selected');

  // Verify each updated field
  Object.keys(updatedVendorDetails).forEach(field => {
    assert.strictEqual(
      vendorToUpdate[field],
      updatedVendorDetails[field],
      `Vendor ${field} was not updated correctly`
    );
  });

  // Optionally, verify the updated vendor appears correctly in the vendors list
  const updatedVendor = vendors.find(vendor => vendor.id === vendorToUpdate.id);
  assert.ok(updatedVendor, 'Updated vendor does not exist in the vendors list');
});
