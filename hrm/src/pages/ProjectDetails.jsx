import React, { useState } from "react";

const ProjectDetails = () => {
  const [projects, setProjects] = useState([
    { name: "Website Redesign", startDate: "2025-08-01", endDate: "2025-09-01", manager: "Anand", hours: 40 },
    { name: "Mobile App", startDate: "2025-08-05", endDate: "2025-09-15", manager: "Gagana", hours: 60 },
   
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 5;

  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [newProject, setNewProject] = useState({
    name: "",
    startDate: "",
    endDate: "",
    manager: "",
    hours: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Pagination
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  // Handle input
  const handleChange = (e) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  // Add or Edit project
  const handleSaveProject = () => {
    if (!newProject.name) return alert("Project Name is required!");

    if (isEditing && editIndex !== null) {
      // Update existing project
      const updatedProjects = [...projects];
      updatedProjects[editIndex] = newProject;
      setProjects(updatedProjects);
    } else {
      // Add new project
      setProjects([...projects, newProject]);
    }

    // Reset modal
    setNewProject({ name: "", startDate: "", endDate: "", manager: "", hours: "" });
    setIsEditing(false);
    setEditIndex(null);
    setShowModal(false);
  };

  // Open modal for editing
  const handleEdit = (index) => {
    const projectToEdit = projects[index];
    setNewProject(projectToEdit);
    setIsEditing(true);
    setEditIndex(index);
    setShowModal(true);
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen text-white">
      {/* Title */}
      <h2 className="text-2xl font-bold mb-4">Project(s) Details</h2>

      <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        {/* Add Project Button */}
        <div className="flex justify-end p-4">
          <button
            className="bg-white text-black font-medium px-4 py-2 rounded-lg hover:bg-gray-200 transition"
            onClick={() => {
              setShowModal(true);
              setIsEditing(false);
              setNewProject({ name: "", startDate: "", endDate: "", manager: "", hours: "" });
            }}
          >
            + Add New Project
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="bg-gray-700 text-gray-300">
                <th className="p-3">Name</th>
                <th className="p-3">Start Date</th>
                <th className="p-3">Expected End Date</th>
                <th className="p-3">Project Manager</th>
                <th className="p-3">Hours Logged</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentProjects.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center text-gray-400 p-6">
                    No projects found
                  </td>
                </tr>
              ) : (
                currentProjects.map((project, index) => {
                  const actualIndex = indexOfFirst + index; // Adjust for pagination
                  return (
                    <tr key={actualIndex} className="border-b border-gray-700">
                      <td className="p-3">{project.name}</td>
                      <td className="p-3">{project.startDate}</td>
                      <td className="p-3">{project.endDate}</td>
                      <td className="p-3">{project.manager}</td>
                      <td className="p-3">{project.hours}</td>
                      <td className="p-3">
                        <button
                          onClick={() => handleEdit(actualIndex)}
                          className="text-blue-400 hover:underline"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center p-4 text-gray-400 text-sm">
          <p>
            Showing {projects.length === 0 ? "0" : `${indexOfFirst + 1} to ${Math.min(indexOfLast, projects.length)}`} of {projects.length} projects
          </p>
          <div className="flex gap-3">
            <button
              className="px-3 py-1 rounded bg-gray-700 text-gray-400 hover:bg-gray-600 disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>
              Page {projects.length === 0 ? "0" : currentPage} of {totalPages}
            </span>
            <button
              className="px-3 py-1 rounded bg-gray-700 text-gray-400 hover:bg-gray-600 disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={currentPage === totalPages || projects.length === 0}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg w-96">
            <h3 className="text-xl font-bold mb-4">
              {isEditing ? "Edit Project" : "Add New Project"}
            </h3>
            <div className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Project Name"
                value={newProject.name}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-gray-700 text-white"
              />
              <input
                type="date"
                name="startDate"
                value={newProject.startDate}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-gray-700 text-white"
              />
              <input
                type="date"
                name="endDate"
                value={newProject.endDate}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-gray-700 text-white"
              />
              <input
                type="text"
                name="manager"
                placeholder="Project Manager"
                value={newProject.manager}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-gray-700 text-white"
              />
              <input
                type="number"
                name="hours"
                placeholder="Hours Logged"
                value={newProject.hours}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-gray-700 text-white"
              />
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => {
                  setShowModal(false);
                  setIsEditing(false);
                  setEditIndex(null);
                }}
                className="px-4 py-2 rounded bg-gray-600 hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveProject}
                className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-500"
              >
                {isEditing ? "Update Project" : "Save Project"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
