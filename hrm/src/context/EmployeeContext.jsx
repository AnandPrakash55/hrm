// src/context/EmployeeContext.jsx
// src/context/EmployeeContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const EmployeeContext = createContext();

// ✅ use this hook everywhere in components
export const useEmployees = () => useContext(EmployeeContext);

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);

  // Load employees from localStorage when app starts
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  // Save employees to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  // Add a new employee → pending by default
  const addEmployee = (employee) => {
    setEmployees((prev) => [
      ...prev,
      { id: Date.now(), ...employee, status: "pending" },
    ]);
  };

  // HR approves employee
  const approveEmployee = (id) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === id ? { ...emp, status: "approved" } : emp
      )
    );
  };

  // HR rejects employee
  const rejectEmployee = (id) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === id ? { ...emp, status: "rejected" } : emp
      )
    );
  };

  return (
    <EmployeeContext.Provider
      value={{ employees, addEmployee, approveEmployee, rejectEmployee }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
