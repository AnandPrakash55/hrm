import React, { createContext, useContext, useState } from "react";

const AttendanceContext = createContext();

export const AttendanceProvider = ({ children }) => {
  const [attendance, setAttendance] = useState([]);

  // Add new record
  const addAttendance = (record) => {
    setAttendance((prev) => [...prev, { id: Date.now(), ...record }]);
  };

  // Remove record
  const removeAttendance = (id) => {
    setAttendance((prev) => prev.filter((item) => item.id !== id));
  };

  // Update record
  const updateAttendance = (id, updatedRecord) => {
    setAttendance((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...updatedRecord } : item))
    );
  };

  return (
    <AttendanceContext.Provider
      value={{ attendance, addAttendance, removeAttendance, updateAttendance }}
    >
      {children}
    </AttendanceContext.Provider>
  );
};

// ✅ Custom hook
export const useAttendance = () => {
  return useContext(AttendanceContext);
};
