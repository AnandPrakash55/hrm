import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  MdDashboard,
  MdPeople,
  MdOutlineCalendarToday,
  MdOutlineWork,
  MdAccessTime,
  MdEventNote,
  MdApartment,
  MdSettings,
  MdLogout,
  MdExpandLess,
  MdExpandMore,
} from "react-icons/md";

// Sidebar link component
const SidebarLink = ({ to, icon: Icon, label, nested = false }) => {
  const location = useLocation();
  const active = location.pathname === to || location.pathname.startsWith(to);
  return (
    <Link
      to={to}
      className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
        active
          ? "bg-gray-800 text-white"
          : "text-gray-300 hover:text-white hover:bg-gray-700"
      } ${nested ? "ml-8" : ""}`}
    >
      {Icon && <Icon className="w-5 h-5 mr-3" />}
      {label}
    </Link>
  );
};

const Layout = ({ children }) => {
  const { logout } = useAuth();
  const location = useLocation();

  // Auto-open menus if current route belongs to them
  const [openEmployees, setOpenEmployees] = useState(
    location.pathname.startsWith("/employees")
  );
  const [openProjects, setOpenProjects] = useState(
    location.pathname.startsWith("/projects")
  );
  const [openLeaves, setOpenLeaves] = useState(
    location.pathname.startsWith("/leaves")
  );
  const [openAttendance, setOpenAttendance] = useState(
    location.pathname.startsWith("/attendance")
  );

  // Parent item (click + toggle)
  const CollapsibleParent = ({ to, icon: Icon, label, open, setOpen }) => {
    const isActive = location.pathname.startsWith(to);
    return (
      <Link
        to={to}
        onClick={(e) => {
          e.preventDefault(); // prevent redirect
          setOpen(!open);
        }}
        className={`flex items-center w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
          isActive
            ? "bg-gray-800 text-white"
            : "text-gray-300 hover:text-white hover:bg-gray-700"
        }`}
      >
        {Icon && <Icon className="w-5 h-5 mr-3" />}
        {label}
        <span className="ml-auto">
          {open ? <MdExpandLess /> : <MdExpandMore />}
        </span>
      </Link>
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white font-sans antialiased">
      {/* Sidebar */}
      <aside className="w-64 bg-[#111827] p-6 flex flex-col justify-between border-r border-gray-800 overflow-y-auto">
        <div>
          {/* Logo / Title */}
          <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <span className="bg-indigo-600 text-white p-2 rounded-lg">
              <MdDashboard size={20} />
            </span>
            HRMS
          </h2>

          <nav className="space-y-2">
            {/* Dashboard */}
            <SidebarLink to="/dashboard" icon={MdDashboard} label="Dashboard" />

            {/* Employees */}
            <div>
              <CollapsibleParent
                to="/employees"
                icon={MdPeople}
                label="Employees"
                open={openEmployees}
                setOpen={setOpenEmployees}
              />
              {openEmployees && (
                <div className="space-y-1">
                  <SidebarLink to="/employees" label="Employee Details" nested />
                  <SidebarLink to="/employees/add" label="Add Employee" nested />
                </div>
              )}
            </div>

            {/* Projects */}
            <div>
              <CollapsibleParent
                to="/projects"
                icon={MdOutlineWork}
                label="Projects"
                open={openProjects}
                setOpen={setOpenProjects}
              />
              {openProjects && (
                <div className="space-y-1">
                  <SidebarLink
                    to="/projects/details"
                    label="Project Details"
                    nested
                  />
                  <SidebarLink to="/projects/add" label="Add Project" nested />
                  <SidebarLink
                    to="/projects/timesheet"
                    label="Fill Timesheet"
                    nested
                  />
                </div>
              )}
            </div>

            {/* Leaves */}
            <div>
              <CollapsibleParent
                to="/leaves"
                icon={MdOutlineCalendarToday}
                label="Leaves"
                open={openLeaves}
                setOpen={setOpenLeaves}
              />
              {openLeaves && (
                <div className="space-y-1">
                  <SidebarLink to="/leaves/active" label="Active Leaves" nested />
                  <SidebarLink to="/leaves/request" label="Request Leave" nested />
                </div>
              )}
            </div>

            {/* Attendance */}
            <div>
              <CollapsibleParent
                to="/attendance"
                icon={MdAccessTime}
                label="Attendance"
                open={openAttendance}
                setOpen={setOpenAttendance}
              />
              {openAttendance && (
                <div className="space-y-1">
                  <SidebarLink
                    to="/attendance/details"
                    label="Attendance Details"
                    nested
                  />
                  <SidebarLink
                    to="/attendance/add"
                    label="Add Attendance"
                    nested
                  />
                </div>
              )}
            </div>

            {/* Other fixed menu items */}
            <SidebarLink to="/holidays" icon={MdEventNote} label="Holidays" />
            <SidebarLink
              to="/departments"
              icon={MdApartment}
              label="Departments"
            />
            <SidebarLink to="/settings" icon={MdSettings} label="Settings" />
          </nav>
        </div>

        {/* Logout */}
        <button
          onClick={logout}
          className="w-full flex items-center justify-center mt-6 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg text-sm font-medium"
        >
          <MdLogout className="mr-2" />
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto bg-gray-900">{children}</main>
    </div>
  );
};

export default Layout;
