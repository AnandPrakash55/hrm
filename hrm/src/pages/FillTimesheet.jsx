import React, { useState } from "react";

const FillTimesheet = () => {
  const [date, setDate] = useState("");
  const [showForm, setShowForm] = useState(false);

  // Sample project options
  const projects = ["Project A", "Project B", "Project C"];

  return (
    <div className="p-6 bg-black min-h-screen text-white">
      {!showForm ? (
        <>
          {/* List View */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Timesheet Entries</h1>
            <button
              onClick={() => setShowForm(true)}
              className="bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-200"
            >
              Add New Timesheet
            </button>
          </div>

          {/* Filter Section */}
          <div className="flex items-center gap-4 mb-6">
            <label className="text-sm">Filter by Entry Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="px-3 py-2 rounded bg-black border border-gray-600 text-white"
            />
            <button
              onClick={() => setDate("")}
              className="text-sm text-yellow-300 hover:underline"
            >
              Clear
            </button>
          </div>

          {/* Timesheet Table */}
          <div className="overflow-x-auto rounded-lg border border-gray-700">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-gray-800 text-gray-300">
                  <th className="px-4 py-2 text-left">Project</th>
                  <th className="px-4 py-2 text-left">Start Date</th>
                  <th className="px-4 py-2 text-left">End Date</th>
                  <th className="px-4 py-2 text-left">Hours</th>
                  <th className="px-4 py-2 text-left">Entry Date</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="6" className="px-4 py-6 text-center text-gray-400">
                    Showing 1 to 0 of 0 entries
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-300">
            <p>Showing 1 to 0 of 0 entries</p>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 rounded bg-gray-800 hover:bg-gray-700">
                Previous
              </button>
              <span>Page 1 of 1</span>
              <button className="px-3 py-1 rounded bg-gray-800 hover:bg-gray-700">
                Next
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Timesheet Form View */}
          <div className="mb-6 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">From Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 rounded bg-black border border-gray-600 text-white"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">To Date</label>
              <input
                type="date"
                className="w-full px-3 py-2 rounded bg-black border border-gray-600 text-white"
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto border border-gray-700 rounded-lg">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-green-600 text-white">
                  <th className="px-4 py-2">#</th>
                  <th className="px-4 py-2 text-left">Project</th>
                  <th className="px-4 py-2">Monday</th>
                  <th className="px-4 py-2">Tuesday</th>
                  <th className="px-4 py-2">Wednesday</th>
                  <th className="px-4 py-2">Thursday</th>
                  <th className="px-4 py-2">Friday</th>
                  <th className="px-4 py-2">Total Hrs</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((row) => (
                  <tr key={row} className="border-b border-gray-700">
                    <td className="px-4 py-2">{row}</td>
                    <td className="px-4 py-2">
                      <select className="px-2 py-1 rounded bg-black border border-gray-600 text-white">
                        <option>Select</option>
                        {projects.map((proj, i) => (
                          <option key={i}>{proj}</option>
                        ))}
                      </select>
                    </td>
                    {[...Array(5)].map((_, i) => (
                      <td key={i} className="px-4 py-2">
                        <input
                          type="number"
                          min="0"
                          defaultValue="0"
                          className="w-16 text-center rounded bg-black border border-gray-600 text-white"
                        />
                      </td>
                    ))}
                    <td className="px-4 py-2 text-center">0</td>
                  </tr>
                ))}
                <tr className="bg-green-600 font-bold">
                  <td className="px-4 py-2 text-center" colSpan="2">
                    Total
                  </td>
                  {[...Array(6)].map((_, i) => (
                    <td key={i} className="px-4 py-2 text-center">
                      0
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={() => setShowForm(false)}
              className="px-4 py-2 rounded bg-gray-800 hover:bg-gray-700"
            >
              Back
            </button>
            <button className="px-4 py-2 rounded bg-white text-black shadow hover:bg-gray-200">
              Save Timesheet
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default FillTimesheet;


