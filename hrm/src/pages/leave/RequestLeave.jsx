import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLeave } from "../../context/LeaveContext";
import { MdOutlineCalendarToday } from "react-icons/md";

const RequestLeave = () => {
  const { addLeave } = useLeave();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    startDate: "",
    endDate: "",
    type: "",
    reason: "",
    document: null, // for PDF
    emergencyName: "",
    emergencyPhone: "",
  });

  // calculate number of leave days
  const getLeaveDays = () => {
    if (!form.startDate || !form.endDate) return 0;
    const start = new Date(form.startDate);
    const end = new Date(form.endDate);
    const diff = (end - start) / (1000 * 60 * 60 * 24) + 1;
    return diff > 0 ? diff : 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.startDate ||
      !form.endDate ||
      !form.type ||
      !form.reason ||
      !form.emergencyName ||
      !form.emergencyPhone
    ) {
      alert("All fields are required!");
      return;
    }

    const leaveDays = getLeaveDays();
    if (leaveDays > 3 && !form.document) {
      alert("You must upload a supporting PDF document for leave longer than 3 days.");
      return;
    }

    addLeave(form);
    navigate("/leaves/active");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
      <div className="w-full max-w-lg bg-gray-800 shadow-xl rounded-2xl p-8">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <MdOutlineCalendarToday className="text-indigo-400 text-2xl" />
          <h2 className="text-2xl font-bold text-white">Leave Application</h2>
        </div>
        <hr className="border-gray-700 mb-6" />

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* From Date */}
          <div>
            <label className="block text-gray-300 mb-1 font-medium">From *</label>
            <input
              type="date"
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              value={form.startDate}
              onChange={(e) => setForm({ ...form, startDate: e.target.value })}
            />
          </div>

          {/* To Date */}
          <div>
            <label className="block text-gray-300 mb-1 font-medium">To *</label>
            <input
              type="date"
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              value={form.endDate}
              onChange={(e) => setForm({ ...form, endDate: e.target.value })}
            />
          </div>

          {/* Leave Type */}
          <div>
            <label className="block text-gray-300 mb-1 font-medium">Leave Type *</label>
            <select
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            >
              <option value="">Select leave type</option>
              <option value="Sick">Sick Leave</option>
              <option value="Casual">Casual Leave</option>
              <option value="Earned">Earned Leave</option>
              <option value="Maternity">Maternity Leave</option>
            </select>
          </div>

          {/* Reason */}
          <div>
            <label className="block text-gray-300 mb-1 font-medium">Reason *</label>
            <textarea
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none h-24"
              value={form.reason}
              onChange={(e) => setForm({ ...form, reason: e.target.value })}
            />
          </div>

          {/* Emergency Contact */}
          
          <div>
            <label className="block text-gray-300 mb-1 font-medium">Emergency Contact Phone *</label>
            <input
              type="tel"
              pattern="[0-9]{10}"
              placeholder="Enter 10-digit phone number"
              className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              value={form.emergencyPhone}
              onChange={(e) => setForm({ ...form, emergencyPhone: e.target.value })}
            />
          </div>

          {/* Upload Document (only if > 3 days) */}
          {getLeaveDays() > 3 && (
            <div>
              <label className="block text-gray-300 mb-1 font-medium">
                Upload Supporting Document (PDF) *
              </label>
              <input
                type="file"
                accept="application/pdf"
                className="w-full p-3 rounded-lg border border-gray-600 bg-gray-900 text-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                onChange={(e) => setForm({ ...form, document: e.target.files[0] })}
              />
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between pt-4">
            <button
              type="button"
              className="px-5 py-2.5 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white transition duration-200"
              onClick={() => navigate("/leaves/active")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition duration-200"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestLeave;
