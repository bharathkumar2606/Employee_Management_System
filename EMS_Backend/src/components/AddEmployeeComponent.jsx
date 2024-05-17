import React, { useState } from 'react';
import EmployeeService from '../services/EmployeeService';

const AddEmployeeComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailId: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    const employee = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      emailId: formData.emailId

      
    };
    EmployeeService.createEmployee(employee).then((res) => {
      console.log('Employee added successfully:', res.data);
      // Optionally, you can redirect the user to another page or perform any other action after adding the employee
    }).catch((error) => {
      console.error('Error adding employee:', error);
    });

    window.close('/add-emp');
        window.open('/')
  };

  return (
    <div>
      <h2 className="text-center mb-5">Add Employee</h2>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            required
            className="form-control"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Enter first name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Enter last name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailId">Email:</label>
          <input
            type="email"
            className="form-control"
            id="emailId"
            name="emailId"
            value={formData.emailId}
            onChange={handleInputChange}
            placeholder="Enter email"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={saveEmployee}
        >
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployeeComponent;
