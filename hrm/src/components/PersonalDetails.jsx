// src/components/PersonalDetails.jsx
import React from "react";

const PersonalDetails = ({ data, onNext, onBack, onCancel }) => {
  const handleChange = (e) => {
    // Update local or parent state here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext(data); // pass current step's data up
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
      <input name="firstName" placeholder="Enter First Name" className="p-2 rounded bg-black border border-gray-600" />
      {/* ... all your other inputs from old code */}
      <div className="col-span-2 flex justify-between mt-4">
        <button type="button" onClick={onBack} className="px-4 py-2 bg-gray-600 rounded">Back</button>
        <div className="flex space-x-2">
          <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-600 rounded">Cancel</button>
          <button type="submit" className="px-4 py-2 bg-blue-600 rounded">Add Next</button>
        </div>
      </div>
    </form>
  );
};

export default PersonalDetails;

