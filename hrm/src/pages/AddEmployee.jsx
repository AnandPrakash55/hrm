import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PersonalDetails from "../components/PersonalDetails";
import AddressDetails from "../components/AddressDetails";
import JobInformation from "../components/JobInformation";


const AddEmployee = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const steps = [
    "Personal Details",
    "Address Details",
    "Job Information",
    "Experience Details",
    "Documents",
    "Bank Acc. Details",
    "Financial Details"
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    pan: "",
    aadhar: "",
    fatherName: "",
    motherName: "",
    secondaryPhone: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    nationality: "",
    passportNumber: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      console.log("Submitting employee:", formData);
      // API call to save employee
      navigate("/employees");
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      navigate("/employees");
    }
  };

  return (
    <div className="p-5 text-white">
      <h1 className="text-2xl font-bold mb-4">Add New Employee</h1>

      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        {steps.map((label, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded ${
              index === step ? "bg-gray-700" : "bg-gray-900"
            }`}
            onClick={() => setStep(index)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Step Content */}
      {step === 0 && (
        <div className="grid grid-cols-2 gap-4">
          <input
            name="firstName"
            placeholder="Enter First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="p-2 rounded bg-black border border-gray-600"
          />
          <input
            name="lastName"
            placeholder="Enter Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="p-2 rounded bg-black border border-gray-600"
          />
          <input
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 rounded bg-black border border-gray-600"
          />
          <input
            name="phone"
            placeholder="Enter Phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-2 rounded bg-black border border-gray-600"
          />
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="p-2 rounded bg-black border border-gray-600"
          />
          <input
            name="pan"
            placeholder="Enter PAN Number"
            value={formData.pan}
            onChange={handleChange}
            className="p-2 rounded bg-black border border-gray-600"
          />
          <input
            name="aadhar"
            placeholder="Enter Aadhar Number"
            value={formData.aadhar}
            onChange={handleChange}
            className="p-2 rounded bg-black border border-gray-600"
          />
          <input
            name="fatherName"
            placeholder="Enter Father Name"
            value={formData.fatherName}
            onChange={handleChange}
            className="p-2 rounded bg-black border border-gray-600"
          />
          <input
            name="motherName"
            placeholder="Enter Mother Name"
            value={formData.motherName}
            onChange={handleChange}
            className="p-2 rounded bg-black border border-gray-600"
          />
          <input
            name="secondaryPhone"
            placeholder="Enter Secondary Phone"
            value={formData.secondaryPhone}
            onChange={handleChange}
            className="p-2 rounded bg-black border border-gray-600"
          />
          <input
            name="emergencyContactName"
            placeholder="Enter Emergency Contact Name"
            value={formData.emergencyContactName}
            onChange={handleChange}
            className="p-2 rounded bg-black border border-gray-600"
          />
          <input
            name="emergencyContactNumber"
            placeholder="Enter Emergency Contact Number"
            value={formData.emergencyContactNumber}
            onChange={handleChange}
            className="p-2 rounded bg-black border border-gray-600"
          />
          <select
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            className="p-2 rounded bg-black border border-gray-600"
          >
            <option value="">Select Nationality</option>
            <option value="Indian">Indian</option>
            <option value="American">American</option>
          </select>
          <input
            name="passportNumber"
            placeholder="Enter Passport Number"
            value={formData.passportNumber}
            onChange={handleChange}
            className="p-2 rounded bg-black border border-gray-600"
          />
        </div>
      )}

      {/* Buttons */}
      <div className="mt-4 flex justify-between">
        <button onClick={handleBack} className="px-4 py-2 bg-gray-600 rounded">
          Back
        </button>
        <button onClick={handleNext} className="px-4 py-2 bg-blue-600 rounded">
          {step === steps.length - 1 ? "Submit" : "Add Next"}
        </button>
      </div>
    </div>
  );
};

export default AddEmployee;