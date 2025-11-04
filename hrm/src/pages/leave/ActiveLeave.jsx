import React, { useState } from "react";
import { FaTrash, FaRocket } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLeave } from "../../context/LeaveContext";

const ActiveLeave = () => {
  const { leaves, deleteLeave } = useLeave();
  const [activeTab, setActiveTab] = useState("myLeaves");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // ✅ Filter based on tab
  const tabFilteredLeaves =
    activeTab === "myLeaves"
      ? leaves
      : leaves.filter((l) => l.status.includes("Pending"));

  // ✅ Search filter
  const filteredLeaves = tabFilteredLeaves.filter(
    (leave) =>
      leave.type.toLowerCase().includes(search.toLowerCase()) ||
      leave.reason.toLowerCase().includes(search.toLowerCase())
  );

  // ✅ Status color
  const getStatusColor = (status) => {
    if (status === "Approved") return "text-green-500";
    if (status === "Rejected") return "text-red-500";
    return "text-yellow-500"; // Pending
  };

  return (
    <div className="p-4 sm:p-6 bg-black min-h-screen text-white">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => setActiveTab("myLeaves")}
          className={`px-4 py-2 rounded text-sm sm:text-base ${
            activeTab === "myLeaves" ? "bg-gray-700" : "bg-gray-900"
          }`}
        >
          My Leaves
        </button>
        <button
          onClick={() => setActiveTab("pending")}
          className={`px-4 py-2 rounded text-sm sm:text-base ${
            activeTab === "pending" ? "bg-gray-700" : "bg-gray-900"
          }`}
        >
          Pending for Approval
        </button>
      </div>

      {/* Search + Apply */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-4">
        <input
          type="text"
          placeholder="Search by leave type or reason"
          className="px-3 py-2 rounded bg-gray-900 border border-gray-700 w-full sm:w-1/3 text-white text-sm sm:text-base"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => navigate("/leaves/request")}
          className="flex items-center justify-center gap-2 bg-white text-black px-4 py-2 rounded shadow text-sm sm:text-base"
        >
          <FaRocket /> Apply New Leave
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-gray-900 text-white rounded text-sm sm:text-base">
          <thead className="bg-white text-black">
            <tr>
              <th className="p-2 sm:p-3 text-left">Leave Type</th>
              <th className="p-2 sm:p-3 text-left">From</th>
              <th className="p-2 sm:p-3 text-left">To</th>
              <th className="p-2 sm:p-3 text-left">Reason</th>
              <th className="p-2 sm:p-3 text-left">Status</th>
              <th className="p-2 sm:p-3 text-left">Comment</th>
              <th className="p-2 sm:p-3 text-left hidden md:table-cell">Approval ID</th>
              <th className="p-2 sm:p-3 text-left hidden md:table-cell">Decision Date</th>
              <th className="p-2 sm:p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredLeaves.length > 0 ? (
              filteredLeaves.map((leave) => (
                <tr key={leave.id} className="border-b border-gray-700">
                  <td className="p-2 sm:p-3">{leave.type}</td>
                  <td className="p-2 sm:p-3">{leave.startDate}</td>
                  <td className="p-2 sm:p-3">{leave.endDate}</td>
                  <td className="p-2 sm:p-3">{leave.reason}</td>
                  <td
                    className={`p-2 sm:p-3 font-semibold ${getStatusColor(
                      leave.status
                    )}`}
                  >
                    {leave.status}
                  </td>
                  <td className="p-2 sm:p-2">{leave.comment || "-"}</td>
                  <td className="p-2 sm:p-3 hidden md:table-cell">
                    {leave.approvalId || "-"}
                  </td>
                  <td className="p-2 sm:p-3 hidden md:table-cell">
                    {leave.decisionDate || "-"}
                  </td>
                  <td className="p-2 sm:p-3">
                    <button
                      onClick={() => deleteLeave(leave.id)}
                      className="bg-red-700 p-2 rounded hover:bg-red-600"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center p-4 text-gray-400">
                  No leaves found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveLeave;