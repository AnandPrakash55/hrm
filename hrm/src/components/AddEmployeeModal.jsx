import React, { useState } from "react";
import { useEmployees } from "../context/EmployeeContext";

const AddEmployeeModal = ({ onClose }) => {
  const { addEmployee } = useEmployees();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    manager: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(form);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Add New Employee</h2>
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Name" onChange={handleChange} required />
          <input name="email" placeholder="Email" onChange={handleChange} required />
          <input name="phone" placeholder="Phone" onChange={handleChange} required />
          <input name="designation" placeholder="Designation" onChange={handleChange} required />
          <input name="manager" placeholder="Manager" onChange={handleChange} />
          <button type="submit">Add</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
