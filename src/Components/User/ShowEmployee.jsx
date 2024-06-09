import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DashNav from './DashNav';

const ShowEmployee = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
                const response = await axios.get('https://crud-backend-lmk8.onrender.com/employees', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setEmployees(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching employees:', error);
                setError('Error fetching employees');
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    return (
        <div className="container-fluid p-0 m-0">
            <div className="row p-0 m-0">
                <div className="col-md-12 fs-2 text-center fw-bold mb-2">
                    Employees
                </div>
            </div>
            <div className="row p-0 m-0">
                <div className="col-md-1">
                    <DashNav />
                </div>
                <div className="col-md-11 m-0">
                    <div className="row shadow m-0">
                        <div className="table-responsive">
                            {loading && <div>Loading...</div>}
                            {error && <div>{error}</div>}
                            {!loading && !error && (
                                <>
                                    {employees.length === 0 ? (
                                        <p>No employees found.</p>
                                    ) : (
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Mobile</th>
                                                    <th>Email</th>
                                                    <th>Address</th>
                                                    <th>Age</th>
                                                    <th>Salary</th>
                                                    <th>Joining Date</th>
                                                    <th>Retired Date</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {employees.map(employee => (
                                                    <tr key={employee._id}>
                                                        <td>{employee.fname}</td>
                                                        <td>{employee.lname}</td>
                                                        <td>{employee.mobile}</td>
                                                        <td>{employee.email}</td>
                                                        <td>{employee.address}</td>
                                                        <td>{employee.age}</td>
                                                        <td>{employee.salary}</td>
                                                        <td>{employee.joining_date}</td>
                                                        <td>{employee.retired_date}</td>
                                                        <td>{employee.status}</td>
                                                        <td><button className='btn text-white'>Edit</button> / <button className='btn text-white'>Del</button></td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowEmployee;
