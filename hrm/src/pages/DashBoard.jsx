import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import AddEmployeeModal from "../components/AddEmployeeModal";
import {
  FaCalendarCheck,
  FaUsers,
  FaSearch,
  FaBell,
  FaArrowRight,
  FaBolt,
  FaPlusCircle,
  FaFileInvoiceDollar,
  FaUserCircle,
  FaCalendarAlt
} from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 sm:p-10 font-sans">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-extrabold text-white mb-4 sm:mb-0">
            Welcome back, <span className="text-indigo-400">{user?.name || "User"}</span>!
          </h1>
          <button
            onClick={logout}
            className="bg-red-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 text-lg font-medium"
          >
            Logout
          </button>
        </div>

        {/* Dashboard Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10">
          {/* Attendance Summary */}
          <DashboardCard icon={<FaCalendarCheck className="text-indigo-400" />} title="Attendance Summary">
            <p><span className="font-semibold text-green-400">Total Days Present:</span> 22</p>
            <p><span className="font-semibold text-red-400">Total Days Absent:</span> 2</p>
          </DashboardCard>

          {/* Employee Directory */}
          <DashboardCard icon={<FaUsers className="text-teal-400" />} title="Employee Directory">
            <p className="mb-3">Find contact information for your colleagues.</p>
            <Link to="/directory" className="text-blue-400 hover:text-blue-300 underline flex items-center">
              Browse Directory <FaSearch className="ml-2" />
            </Link>
          </DashboardCard>

          {/* New Employee */}
          <div className="bg-gray-800 p-5 rounded-xl shadow-lg text-center">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Employee"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold mb-1">{user?.name || "John Doe"}</h3>
            <p className="text-gray-400 mb-1">Software Developer</p>
            <p className="text-gray-500 text-sm mb-3">{user?.email || "johndoe@example.com"}</p>
            <Link to="/profile" className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700">
              View Profile
            </Link>
          </div>

          {/* Leave Summary */}
          <DashboardCard icon={<MdFlightTakeoff className="text-purple-400" />} title="Leave Summary">
            <p><span className="font-semibold text-yellow-400">Leaves Taken:</span> 4</p>
            <p><span className="font-semibold text-blue-400">Remaining Leaves:</span> 8</p>
          </DashboardCard>

          {/* Notifications */}
          <DashboardCard icon={<FaBell className="text-pink-400" />} title="Notifications">
            <p><span className="font-semibold">HR Announcements:</span> 2 New</p>
            <p><span className="font-semibold">System Messages:</span> 1</p>
            <Link to="/notifications" className="text-indigo-400 hover:text-indigo-300 underline mt-2 inline-block">
              View All Notifications <FaArrowRight className="inline ml-2" />
            </Link>
          </DashboardCard>

          {/* Quick Actions */}
          <DashboardCard icon={<FaBolt className="text-green-400" />} title="Quick Actions">
            <ul className="space-y-2">
              <li>
                <Link to="/apply-leave" className="text-blue-400 hover:text-blue-300 flex items-center">
                  <FaPlusCircle className="mr-2" /> Apply for Leave
                </Link>
              </li>
              <li>
                <Link to="/view-payslips" className="text-blue-400 hover:text-blue-300 flex items-center">
                  <FaFileInvoiceDollar className="mr-2" /> View Payslips
                </Link>
              </li>
              <li>
                <Link to="/profile" className="text-blue-400 hover:text-blue-300 flex items-center">
                  <FaUserCircle className="mr-2" /> Update Profile
                </Link>
              </li>
            </ul>
          </DashboardCard>

          {/* Upcoming Events */}
          <DashboardCard icon={<FaCalendarAlt className="text-orange-400" />} title="Upcoming">
            <ul className="space-y-2">
              <li><span className="font-semibold">Aug 15:</span> Independence Day <span className="text-xs text-gray-400">(Holiday)</span></li>
              <li><span className="font-semibold">Sep 10:</span> Team Meeting <span className="text-xs text-gray-400">(10:00 AM)</span></li>
              <li><span className="font-semibold">Oct 2:</span> Gandhi Jayanti <span className="text-xs text-gray-400">(Holiday)</span></li>
            </ul>
          </DashboardCard>
        </div>

        {/* Add Employee Modal */}
        {showModal && <AddEmployeeModal onClose={() => setShowModal(false)} />}
      </div>
    </div>
  );
};

const DashboardCard = ({ icon, title, children }) => (
  <div className="bg-gray-800 p-5 rounded-xl shadow-lg transform transition duration-300 hover:scale-[1.02] hover:shadow-xl">
    <h2 className="text-xl font-bold mb-3 flex items-center">
      {icon} <span className="ml-3">{title}</span>
    </h2>
    <div className="text-gray-300 text-sm space-y-1">{children}</div>
  </div>
);

export default Dashboard;

