import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import '../index.css';
import 'bootstrap'; // Import Bootstrap JavaScript
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import AddEmployeeComponent from './AddEmployeeComponent';
import UpdateEmployeeComponent from './UpdateEmployeeComponent';
class ListEmployeeComponents extends Component {

    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);

    }


    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        });

    }
    addEmployee() {
        EmployeeService.getEmployeeById(1).then((res) => {
            this.setState({ employees: res.data });
        });
        window.location.href = '/add';
    }

    editEmployee(id) {
        //this.props.history.push(`/update/${id}`);
        window.location.href = `/update/${id}`;
    }
    
    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id)
            .then(() => {
                this.setState({ employees: this.state.employees.filter(employee => employee.id !== id) });
                window.alert("Deleted Successfully.");
            })
            .catch(error => {
                console.error("Error deleting employee:", error);
                window.alert("An error occurred while deleting the employee.");
            });
    }
    


    render() {

        return (

            <div>



                <button className='btn btn-primary mx-2 my-3' onClick={this.addEmployee}>Add Employee Details</button>

                <h1 className='text-center'>Employees List</h1>
                <div className='row'>
                    <table className='table table-striped table-bordered'>

                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Mail Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.emailId}</td>
                                            <td >


                                                <button onClick={() => this.editEmployee(employee.id)} className='btn btn-info mr-2'> edit </button>

                                                <button onClick={() => this.deleteEmployee(employee.id)} className='btn btn-danger mr-2'> remove </button>


                                            </td>
                                        </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ListEmployeeComponents;