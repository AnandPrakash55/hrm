import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  MdDashboard,
  MdPeople,
  MdPersonAdd,
  MdWork,
  MdOutlineCalendarToday,
  MdAccessTime,
  MdEventNote,
  MdApartment,
  MdSettings,
  MdLogout,
  MdExpandLess,
  MdExpandMore,
} from "react-icons/md";

// SidebarLink component (main links)
const SidebarLink = ({ to, icon: Icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg transition ${
        isActive ? "bg-gray-800 text-white" : "text-gray-300 hover:bg-gray-700"
      }`}
    >
      <Icon className="text-lg" />
      <span>{label}</span>
    </Link>
  );
};

// Sidebar child link (for dropdown menus)
const SidebarChildLink = ({ to, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`px-3 py-1 rounded transition ${
        isActive
          ? "text-white font-medium underline"
          : "text-gray-400 hover:text-white hover:underline"
      }`}
    >
      {label}
    </Link>
  );
};

// Main Sidebar
const Sidebar = () => {
  const [openProjects, setOpenProjects] = useState(false);
  const [openLeaves, setOpenLeaves] = useState(false);
  const [openAttendance, setOpenAttendance] = useState(false);

  return (
    <div className="bg-gray-900 text-gray-200 w-64 min-h-screen p-4">
      {/* Dashboard */}
      <SidebarLink to="/dashboard" icon={MdDashboard} label="Dashboard" />

      {/* Employees */}
      <SidebarLink to="/employees" icon={MdPeople} label="Employees" />
      <SidebarLink to="/employees/add" icon={MdPersonAdd} label="Add Employee" />

      {/* Projects Dropdown */}
      <div>
        <button
          onClick={() => setOpenProjects(!openProjects)}
          className="flex items-center justify-between w-full px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          <span className="flex items-center gap-3">
            <MdWork className="text-lg" />
            <span>Projects</span>
          </span>
          {openProjects ? <MdExpandLess /> : <MdExpandMore />}
        </button>

        {openProjects && (
          <div className="ml-8 mt-1 flex flex-col space-y-1">
            <SidebarChildLink to="/projects/details" label="Project Details" />
            <SidebarChildLink to="/projects/add" label="Add Project" />
            <SidebarChildLink to="/projects/timesheet" label="Fill Timesheet" />
          </div>
        )}
      </div>

      {/* Leaves Dropdown */}
      <div>
        <button
          onClick={() => setOpenLeaves(!openLeaves)}
          className="flex items-center justify-between w-full px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          <span className="flex items-center gap-3">
            <MdOutlineCalendarToday className="text-lg" />
            <span>Leaves</span>
          </span>
          {openLeaves ? <MdExpandLess /> : <MdExpandMore />}
        </button>

        {openLeaves && (
          <div className="ml-8 mt-1 flex flex-col space-y-1">
            {/* ✅ Fixed: matches App.jsx */}
            <SidebarChildLink to="/leaves/active" label="Leave List" />
            <SidebarChildLink to="/leaves/request" label="Request Leave" />
          </div>
        )}
      </div>

      {/* ✅ Attendance Dropdown */}
      <div>
        <button
          onClick={() => setOpenAttendance(!openAttendance)}
          className="flex items-center justify-between w-full px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          <span className="flex items-center gap-3">
            <MdAccessTime className="text-lg" />
            <span>Attendance</span>
          </span>
          {openAttendance ? <MdExpandLess /> : <MdExpandMore />}
        </button>

        {openAttendance && (
          <div className="ml-8 mt-1 flex flex-col space-y-1">
            <SidebarChildLink to="/attendance/details" label="Attendance Details" />
            <SidebarChildLink to="/attendance/add" label="Add Attendance" />
          </div>
        )}
      </div>

      {/* Events */}
      <SidebarLink to="/events" icon={MdEventNote} label="Events" />

      {/* Departments */}
      <SidebarLink to="/departments" icon={MdApartment} label="Departments" />

      {/* Settings */}
      <SidebarLink to="/settings" icon={MdSettings} label="Settings" />

      {/* Logout */}
      <SidebarLink to="/logout" icon={MdLogout} label="Logout" />
    </div>
  );
};

export default Sidebar;

