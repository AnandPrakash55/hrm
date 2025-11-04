import React from "react";

const AddressDetails = ({ formData, onChange }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <input name="addressLine1" placeholder="Enter Address Line 1" value={formData.addressLine1} onChange={onChange} className="p-2 rounded bg-black border border-gray-600" />
      <input name="addressLine2" placeholder="Enter Address Line 2" value={formData.addressLine2} onChange={onChange} className="p-2 rounded bg-black border border-gray-600" />
      <input name="city" placeholder="Enter City" value={formData.city} onChange={onChange} className="p-2 rounded bg-black border border-gray-600" />
      <input name="state" placeholder="Enter State" value={formData.state} onChange={onChange} className="p-2 rounded bg-black border border-gray-600" />
      <input name="zipCode" placeholder="Enter Zip Code" value={formData.zipCode} onChange={onChange} className="p-2 rounded bg-black border border-gray-600" />
      <select name="country" value={formData.country} onChange={onChange} className="p-2 rounded bg-black border border-gray-600">
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
      </select>
    </div>
  );
};

export default AddressDetails;
