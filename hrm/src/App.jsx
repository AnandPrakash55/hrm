// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Pages
import SplashScreen from "./pages/SplashScreen";  
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/DashBoard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import PendingEmployees from "./pages/PendingEmployees";
import ActiveLeave from "./pages/leave/ActiveLeave";   
import RequestLeave from "./pages/leave/RequestLeave"; 
import ProjectDetails from "./pages/ProjectDetails";
import AddProject from "./pages/AddProject";
import FillTimesheet from "./pages/FillTimesheet";
import AttendanceDetails from "./pages/attendance/AttendanceDetails";
import AddAttendance from "./pages/attendance/AddAttendance";

// Contexts
import { AuthProvider } from "./context/AuthContext";
import { EmployeeProvider } from "./context/EmployeeContext";
import { ProjectProvider } from "./context/ProjectContext";
import { LeaveProvider } from "./context/LeaveContext";

// Layout
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <EmployeeProvider>
        <ProjectProvider>
          <LeaveProvider>
            <Router>
              <Toaster position="top-center" />
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<SplashScreen />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Dashboard */}
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute allowedRoles={["admin", "hr", "employee"]}>
                      <Layout><Dashboard /></Layout>
                    </ProtectedRoute>
                  }
                />

                {/* Employees */}
                <Route
                  path="/employees"
                  element={
                    <ProtectedRoute allowedRoles={["admin", "hr"]}>
                      <Layout><Employees /></Layout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/add-employee"
                  element={
                    <ProtectedRoute allowedRoles={["admin"]}>
                      <Layout><AddEmployee /></Layout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/pending-employees"
                  element={
                    <ProtectedRoute allowedRoles={["hr"]}>
                      <Layout><PendingEmployees /></Layout>
                    </ProtectedRoute>
                  }
                />

                {/* Leaves */}
                <Route
                  path="/leaves/active"
                  element={
                    <ProtectedRoute allowedRoles={["employee", "hr", "admin"]}>
                      <Layout><ActiveLeave /></Layout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/leaves/request"
                  element={
                    <ProtectedRoute allowedRoles={["employee"]}>
                      <Layout><RequestLeave /></Layout>
                    </ProtectedRoute>
                  }
                />

                {/* Projects */}
                <Route
                  path="/projects/details"
                  element={
                    <ProtectedRoute allowedRoles={["admin", "employee"]}>
                      <Layout><ProjectDetails /></Layout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/projects/add"
                  element={
                    <ProtectedRoute allowedRoles={["admin"]}>
                      <Layout><AddProject /></Layout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/projects/timesheet"
                  element={
                    <ProtectedRoute allowedRoles={["employee"]}>
                      <Layout><FillTimesheet /></Layout>
                    </ProtectedRoute>
                  }
                />

                {/* Attendance */}
                <Route
                  path="/attendance/details"
                  element={
                    <ProtectedRoute allowedRoles={["hr", "admin"]}>
                      <Layout><AttendanceDetails /></Layout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/attendance/add"
                  element={
                    <ProtectedRoute allowedRoles={["employee"]}>
                      <Layout><AddAttendance /></Layout>
                    </ProtectedRoute>
                  }
                />

                {/* Profile, Settings, Notifications */}
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute allowedRoles={["employee", "hr", "admin"]}>
                      <Layout><Profile /></Layout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/settings"
                  element={
                    <ProtectedRoute allowedRoles={["employee", "hr", "admin"]}>
                      <Layout><Settings /></Layout>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/notifications"
                  element={
                    <ProtectedRoute allowedRoles={["employee", "hr", "admin"]}>
                      <Layout><Notifications /></Layout>
                    </ProtectedRoute>
                  }
                />

                {/* Catch-all */}
                <Route path="*" element={<Navigate to="/login" />} />
              </Routes>
            </Router>
          </LeaveProvider>
        </ProjectProvider>
      </EmployeeProvider>
    </AuthProvider>
  );
}

export default App;
