import React from "react";
import { useEmployees } from "../context/EmployeeContext"; // ✅ FIX
import { useAuth } from "../context/AuthContext";

const PendingEmployees = () => {
  const { user } = useAuth();
  const { employees, approveEmployee, rejectEmployee } = useEmployees(); // ✅ FIX

  if (user?.role !== "hr") {
    return <p>Access denied. HR only.</p>;
  }

  const pendingEmployees = employees.filter(emp => emp.status === "pending");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pending Employee Approvals</h1>
      {pendingEmployees.length === 0 ? (
        <p>No pending approvals</p>
      ) : (
        <ul>
          {pendingEmployees.map(emp => (
            <li
              key={emp.id}
              className="flex justify-between items-center p-2 border-b"
            >
              <span>
                {emp.name} - {emp.email}
              </span>
              <div>
                <button
                  onClick={() => approveEmployee(emp.id)}
                  className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                >
                  Approve
                </button>
                <button
                  onClick={() => rejectEmployee(emp.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Reject
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PendingEmployees;
