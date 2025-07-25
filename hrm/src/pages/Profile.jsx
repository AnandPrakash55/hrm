import React from "react";
import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Personal Info</h2>
          <p><strong>Name:</strong> {user?.name}</p>
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Role:</strong> {user?.role}</p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Job Info</h2>
          <p><strong>Title:</strong> {user?.role === 'Admin' ? 'HR Manager' : 'Software Engineer'}</p>
          <p><strong>Department:</strong> {user?.role === 'Admin' ? 'HR' : 'Development'}</p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p><strong>Phone:</strong> +91-9876543210</p>
          <p><strong>Address:</strong> Delhi, India</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Documents</h2>
          <ul className="list-disc list-inside">
            <li>Resume.pdf</li>
            <li>ID Card.jpg</li>
            <li>Joining Letter.pdf</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
