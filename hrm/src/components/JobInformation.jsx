// src/components/JobInformation.jsx
import React from "react";

const JobInformation = ({ onNext, onBack, onCancel }) => {
  return (
    <div>
      <h2 className="mb-4 text-xl">Job Information</h2>
      <p className="mb-4">This is where job fields will go.</p>
      <div className="flex justify-between">
        <button onClick={onBack} className="px-4 py-2 bg-gray-600 rounded">Back</button>
        <div className="flex space-x-2">
          <button onClick={onCancel} className="px-4 py-2 bg-gray-600 rounded">Cancel</button>
          <button onClick={() => onNext({})} className="px-4 py-2 bg-blue-600 rounded">Add Next</button>
        </div>
      </div>
    </div>
  );
};

export default JobInformation;
