import React, { createContext, useContext, useState } from "react";

const LeaveContext = createContext();

export const LeaveProvider = ({ children }) => {
  const [leaves, setLeaves] = useState([
    {
      id: 1,
      type: "Sick",
      startDate: "2024-05-01",
      endDate: "2024-05-02",
      reason: "Reason for my leave 1",
      status: "Approved",
    },
    {
      id: 2,
      type: "Casual",
      startDate: "2024-05-02",
      endDate: "2024-05-03",
      reason: "Reason for my leave 2",
      status: "Rejected",
    },
  ]);

  // Add new leave
  const addLeave = (leave) => {
    setLeaves((prev) => [
      ...prev,
      { id: Date.now(), status: "Pending HR", ...leave },
    ]);
  };

  // Delete leave
  const deleteLeave = (id) => {
    setLeaves((prev) => prev.filter((l) => l.id !== id));
  };

  return (
    <LeaveContext.Provider value={{ leaves, addLeave, deleteLeave }}>
      {children}
    </LeaveContext.Provider>
  );
};

export const useLeave = () => useContext(LeaveContext);
