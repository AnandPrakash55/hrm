import React, { useState } from "react";
import toast from "react-hot-toast";

const Settings = () => {
  const [contact, setContact] = useState({
    phone: "+91-9876543210",
    address: "Delhi, India",
  });

  const [passwords, setPasswords] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handleContactChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const updateContact = (e) => {
    e.preventDefault();
    toast.success("Contact info updated!");
  };

  const changePassword = (e) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      toast.error("New passwords do not match");
      return;
    }
    toast.success("Password changed successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-6">Settings</h1>

        <form onSubmit={updateContact} className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Update Contact Info</h2>
          <input
            type="text"
            name="phone"
            value={contact.phone}
            onChange={handleContactChange}
            placeholder="Phone"
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="text"
            name="address"
            value={contact.address}
            onChange={handleContactChange}
            placeholder="Address"
            className="w-full p-2 mb-3 border rounded"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Save Contact Info
          </button>
        </form>

        <form onSubmit={changePassword}>
          <h2 className="text-xl font-semibold mb-2">Change Password</h2>
          <input
            type="password"
            name="current"
            placeholder="Current Password"
            onChange={handlePasswordChange}
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="password"
            name="new"
            placeholder="New Password"
            onChange={handlePasswordChange}
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="password"
            name="confirm"
            placeholder="Confirm New Password"
            onChange={handlePasswordChange}
            className="w-full p-2 mb-3 border rounded"
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
