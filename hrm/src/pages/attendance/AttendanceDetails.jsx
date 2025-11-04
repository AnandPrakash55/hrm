import React, { useState } from "react";

const AttendanceDetails = () => {
  const [search, setSearch] = useState("");

  // Dummy data (replace with API later)
  const attendances = [
    {
      id: 1,
      employee: "Adams Luis (PHP890)",
      date: "Mar 6, 2024",
      day: "Wednesday",
      checkIn: "12:36 PM",
      inDate: "Mar 6, 2024",
      checkOut: "10:53 AM",
      outDate: "Mar 10, 2024",
      shift: "Night shift",
      workType: "Hybrid Work",
    },
    {
      id: 2,
      employee: "Jane Doe (PHP902)",
      date: "Jan 17, 2024",
      day: "Wednesday",
      checkIn: "02:02 PM",
      inDate: "Jan 17, 2024",
      checkOut: "None",
      outDate: "None",
      shift: "Regular Shift",
      workType: "None",
    },
    {
      id: 3,
      employee: "Adams Luis (PHP890)",
      date: "Jan 12, 2024",
      day: "Friday",
      checkIn: "12:39 PM",
      inDate: "Jan 12, 2024",
      checkOut: "12:39 PM",
      outDate: "Jan 13, 2024",
      shift: "Hybrid Work",
      workType: "Hybrid Work",
    },
    {
      id: 4,
      employee: "Kathleen Florence (PHP870)",
      date: "Dec 21, 2023",
      day: "Thursday",
      checkIn: "08:30 AM",
      inDate: "Dec 21, 2023",
      checkOut: "07:30 PM",
      outDate: "Dec 21, 2023",
      shift: "Regular Shift",
      workType: "Regular Shift",
    },
  ];

  // Filter logic
  const filtered = attendances.filter((a) =>
    a.employee.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Attendances</h1>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-2 border rounded-md text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
            + Create
          </button>
        </div>
      </div>

      {/* ✅ Only one tab now */}
      <div className="flex gap-4 border-b mb-4">
        <button className="pb-2 border-b-2 border-blue-600 text-blue-600 font-medium">
          Validate Attendances
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-md rounded-lg border">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-700 text-left">
            <tr>
              <th className="px-4 py-2">Employee</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Day</th>
              <th className="px-4 py-2">Check-In</th>
              <th className="px-4 py-2">In Date</th>
              <th className="px-4 py-2">Check-Out</th>
              <th className="px-4 py-2">Out Date</th>
              <th className="px-4 py-2">Shift</th>
              <th className="px-4 py-2">Work Type</th>
              <th className="px-4 py-2">Confirmation</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => (
              <tr
                key={row.id}
                className="border-t hover: transition-colors"
              >
                <td className="px-4 py-2">{row.employee}</td>
                <td className="px-4 py-2">{row.date}</td>
                <td className="px-4 py-2">{row.day}</td>
                <td className="px-4 py-2">{row.checkIn}</td>
                <td className="px-4 py-2">{row.inDate}</td>
                <td className="px-4 py-2">{row.checkOut}</td>
                <td className="px-4 py-2">{row.outDate}</td>
                <td className="px-4 py-2">{row.shift}</td>
                <td className="px-4 py-2">{row.workType}</td>
                <td className="px-4 py-2">
                  <button className="bg-green-500 text-white px-3 py-1 rounded-md text-xs">
                    Validate
                  </button>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan="10" className="text-center py-4 text-gray-500">
                  No records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
        <span>Page 1 of 1</span>
        <div className="flex gap-2">
          <button className="px-2 py-1 border rounded">1</button>
        </div>
      </div>
    </div>
  );
};

export default AttendanceDetails;
