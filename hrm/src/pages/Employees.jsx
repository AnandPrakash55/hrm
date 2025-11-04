import React, { useState } from "react";
import { FaSearch, FaPlus } from "react-icons/fa";
import { useEmployees } from "../context/EmployeeContext";
import AddEmployeeModal from "../components/AddEmployeeModal";

const Employees = () => {
  const { employees } = useEmployees();
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase()) ||
      emp.phone.includes(search)
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-4">Employee(s) Details</h1>

      {/* Search Bar + Add Button */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2 w-full max-w-md">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search by employee name, email, or phone"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none text-white w-full"
          />
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="ml-4 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg flex items-center"
        >
          <FaPlus className="mr-2" /> Add New Employee
        </button>
      </div>

      {/* Employee Table */}
      <div className="overflow-x-auto bg-gray-800 rounded-lg">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-700">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Phone</th>
              <th className="px-4 py-2 text-left">Designation</th>
              <th className="px-4 py-2 text-left">Manager</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((emp) => (
                <tr key={emp.id} className="border-b border-gray-700">
                  <td className="px-4 py-2">{emp.name}</td>
                  <td className="px-4 py-2">{emp.email}</td>
                  <td className="px-4 py-2">{emp.phone}</td>
                  <td className="px-4 py-2">{emp.designation}</td>
                  <td className="px-4 py-2">{emp.manager}</td>
                  <td className="px-4 py-2 text-blue-400 hover:underline cursor-pointer">
                    Edit | Delete
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-4 py-4 text-center text-gray-400">
                  No employee(s) found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Employee Modal */}
      {showModal && <AddEmployeeModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default Employees;
