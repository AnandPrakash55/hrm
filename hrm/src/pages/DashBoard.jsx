import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 sm:p-10 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white rounded-xl shadow-lg p-6 mb-8 transform transition-transform duration-300 hover:scale-[1.01]">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4 sm:mb-0">
            Welcome back, <span className="text-indigo-600">{user?.name || "User"}</span>!
          </h1>
          <button
            onClick={logout}
            className="bg-red-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition-all duration-200 text-lg font-medium"
          >
            Logout
          </button>
        </div>

        {/* Dashboard Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Attendance Summary Card */}
          <div className="bg-white p-5 rounded-xl shadow-lg border border-blue-200 transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 flex items-center">
              <i className="fas fa-calendar-check text-indigo-500 mr-2 sm:mr-3"></i> Attendance Summary
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-1 sm:mb-2">
              <span className="font-semibold text-green-600">Total Days Present:</span> 22
            </p>
            <p className="text-gray-700 text-base sm:text-lg">
              <span className="font-semibold text-red-600">Total Days Absent:</span> 2
            </p>
          </div>

          {/* Employee Directory Card */}
          <div className="bg-white p-5 rounded-xl shadow-lg border border-teal-200 transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 flex items-center">
              <i className="fas fa-users text-teal-500 mr-2 sm:mr-3"></i> Employee Directory
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-3 sm:mb-4">Find contact information for your colleagues.</p>
            <Link
              to="/directory"
              className="text-blue-500 hover:text-blue-700 underline text-base sm:text-lg font-medium flex items-center"
            >
              Browse Directory <i className="fas fa-search ml-1 sm:ml-2"></i>
            </Link>
          </div>

          {/* New Employee Card */}
          <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-200 transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl text-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Employee"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{user?.name || "John Doe"}</h3>
            <p className="text-gray-600 mb-2">Software Developer</p>
            <p className="text-gray-500 text-sm mb-3">{user?.email || "johndoe@example.com"}</p>
            <Link
              to="/profile"
              className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
            >
              View Profile
            </Link>
          </div>

          {/* Leave Summary Card */}
          <div className="bg-white p-5 rounded-xl shadow-lg border border-purple-200 transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 flex items-center">
              <i className="fas fa-plane-departure text-purple-500 mr-2 sm:mr-3"></i> Leave Summary
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-1 sm:mb-2">
              <span className="font-semibold text-yellow-600">Leaves Taken:</span> 4
            </p>
            <p className="text-gray-700 text-base sm:text-lg">
              <span className="font-semibold text-blue-600">Remaining Leaves:</span> 8
            </p>
          </div>

          {/* Notifications Card */}
          <div className="bg-white p-5 rounded-xl shadow-lg border border-pink-200 transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl flex flex-col justify-between">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 flex items-center">
                <i className="fas fa-bell text-pink-500 mr-2 sm:mr-3"></i> Notifications
              </h2>
              <p className="text-gray-700 text-base sm:text-lg mb-1 sm:mb-2">
                <span className="font-semibold">HR Announcements:</span> 2 New
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-3 sm:mb-4">
                <span className="font-semibold">System Messages:</span> 1
              </p>
            </div>
            <Link
              to="/notifications"
              className="text-indigo-600 hover:text-indigo-800 underline text-base sm:text-lg font-medium self-end"
            >
              View All Notifications <i className="fas fa-arrow-right ml-1"></i>
            </Link>
          </div>

          {/* Quick Actions Card */}
          <div className="bg-white p-5 rounded-xl shadow-lg border border-green-200 transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 flex items-center">
              <i className="fas fa-bolt text-green-500 mr-2 sm:mr-3"></i> Quick Actions
            </h2>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/apply-leave" className="text-blue-500 hover:text-blue-700 text-base sm:text-lg flex items-center">
                  <i className="fas fa-plus-circle mr-2"></i> Apply for Leave
                </Link>
              </li>
              <li>
                <Link to="/view-payslips" className="text-blue-500 hover:text-blue-700 text-base sm:text-lg flex items-center">
                  <i className="fas fa-file-invoice-dollar mr-2"></i> View Payslips
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-blue-500 hover:text-blue-700 text-base sm:text-lg flex items-center">
                  <i className="fas fa-user-circle mr-2"></i> Update Profile
                </Link>
              </li>
            </ul>
          </div>

          {/* Upcoming Events/Holidays Card */}
          <div className="bg-white p-5 rounded-xl shadow-lg border border-orange-200 transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 flex items-center">
              <i className="fas fa-calendar-alt text-orange-500 mr-2 sm:mr-3"></i> Upcoming
            </h2>
            <ul className="space-y-2 sm:space-y-3">
              <li className="text-gray-700 text-base sm:text-lg">
                <span className="font-semibold">Aug 15:</span> Independence Day <span className="text-xs sm:text-sm text-gray-500">(Holiday)</span>
              </li>
              <li className="text-gray-700 text-base sm:text-lg">
                <span className="font-semibold">Sep 10:</span> Team Meeting <span className="text-xs sm:text-sm text-gray-500">(10:00 AM)</span>
              </li>
              <li className="text-gray-700 text-base sm:text-lg">
                <span className="font-semibold">Oct 2:</span> Gandhi Jayanti <span className="text-xs sm:text-sm text-gray-500">(Holiday)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
