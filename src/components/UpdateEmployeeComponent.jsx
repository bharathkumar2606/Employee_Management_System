import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const UpdateEmployeeComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then((employee) => {
        console.log("Hello"+employee);
        setFirstName(employee.firstName);
        setLastName(employee.lastName);
        setEmailId(employee.emailId);
      })
      .catch((error) => {
        console.error("Error fetching employee:", error);
        setError("Error fetching employee data: " + error.message);
      });
  }, [id]);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailId(event.target.value);
  };

  const saveOrupdateEmployee = async (event) => {
    event.preventDefault();
    const updatedEmployee = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
    };

    
    try {
      await EmployeeService.UpdateEmployee(updatedEmployee, id);
      navigate("/employees");
    } catch (error) {
      console.error("Error updating employee:", error);
      setError("Error updating employee: " + error.message);
    }
  };

  const cancel = () => {
    navigate("/employees");
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Update Employee</h3>
            <div className="card-body">
              {error && <div className="alert alert-danger">{error}</div>}
              <form>
                <div className="form-group">
                  <label>First Name:</label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={handleFirstNameChange}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name:</label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={handleLastNameChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    placeholder="Email Address"
                    name="emailId"
                    className="form-control"
                    value={emailId}
                    onChange={handleEmailChange}
                  />
                </div>
                <button className="btn btn-success" onClick={saveOrupdateEmployee}> 
                  Save
                </button>
                <button
                  className="btn btn-danger"
                  onClick={cancel}
                  style={{ marginLeft: "10px" }}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployeeComponent;