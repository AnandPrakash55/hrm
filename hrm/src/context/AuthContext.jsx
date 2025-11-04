// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage on app load
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const login = async (email, password) => {
    // Dummy auth logic (replace with backend API later)

    // --- Admin ---
    if (email === "admin@hrm.com" && password === "admin123") {
      const user = { name: "Admin", email, role: "admin", status: "approved" };
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      return { success: true };
    }

    // --- HR ---
    if (email === "hr@hrm.com" && password === "hr123") {
      const user = { name: "HR Manager", email, role: "hr", status: "approved" };
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      return { success: true };
    }

    // --- Employee (example with status) ---
    // In real case, fetch from EmployeeContext or backend
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    const emp = storedEmployees.find(
      (e) => e.email === email && e.password === password
    );

    if (emp) {
      if (emp.status !== "approved") {
        return { success: false, message: "Your account is pending HR approval." };
      }
      setUser(emp);
      localStorage.setItem("user", JSON.stringify(emp));
      return { success: true };
    }

    return { success: false, message: "Invalid credentials" };
  };

  const register = async ({ name, email, password, role }) => {
    // When Admin registers an employee → status is "pending"
    const newUser = { name, email, password, role, status: "pending" };

    // Save to employees list (simulate backend)
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(newUser);
    localStorage.setItem("employees", JSON.stringify(employees));

    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
