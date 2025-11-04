import React, { useState } from "react";
import { FaBriefcase } from "react-icons/fa"; // suitcase/briefcase icon
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const LeavesMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-white w-64 bg-gray-900 p-2">
      {/* Main Menu Item */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 py-2 hover:bg-gray-800 rounded"
      >
        <span className="flex items-center space-x-2">
          <FaBriefcase />
          <span>Leaves</span>
        </span>
        {isOpen ? <FaChevronDown /> : <FaChevronRight />}
      </button>

      {/* Sub Menu */}
      {isOpen && (
        <div className="ml-8 mt-1 space-y-1">
          <a
            href="#"
            className="block px-2 py-1 hover:bg-gray-800 rounded text-gray-300"
          >
            Active Leaves
          </a>
          <a
            href="#"
            className="block px-2 py-1 hover:bg-gray-800 rounded text-gray-300"
          >
            Request Leave
          </a>
        </div>
      )}
    </div>
  );
};

export default LeavesMenu;
