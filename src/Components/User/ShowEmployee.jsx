import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DashNav from './DashNav';

const ShowEmployee = () => {
    const [originalEmployees, setOriginalEmployees] = useState([]); // Store original list separately
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('https://crud-backend-lmk8.onrender.com/employees', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setEmployees(response.data);
                setOriginalEmployees(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching employees');
                setLoading(false);
            }
        };
        fetchEmployees();
    }, []);

    const deleteEmployee = async (id) => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`https://crud-backend-lmk8.onrender.com/employees/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setEmployees(employees.filter(employee => employee._id !== id));
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    };

    const searchHandle = (e) => {
        const search = e.target.value.toLowerCase();
        setSearchTerm(search);

        if (search.trim() === '') {
            setEmployees(originalEmployees);
        } else {
            const filtered = originalEmployees.filter((employee) => {
                return employee.fname && employee.fname.toLowerCase().includes(search);
            });
            setEmployees(filtered);
        }
    };

    const changeStatus = (e) => {
        console.log(e);
    }
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
                        <div className="col-md-4 text-center p-3"></div>
                        <div className="col-md-4 col-6 text-center p-3">
                            <input
                                type="text"
                                className='rounded w-100 search p-2'
                                value={searchTerm}
                                onChange={searchHandle}
                                placeholder='Search Employee By Name'
                            />
                        </div>
                        <div className="col-md-4 col-6 p-3 d-flex align-items-center justify-content-center">
                        </div>
                        <hr />
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
                                                    <th>Birth of Date</th>
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
                                                        <td>{employee.date_of_birth}</td>
                                                        <td><div className="btn btn-sm text-white" onClick={() => changeStatus(employee._id)}>{employee.status}</div></td>
                                                        <td>
                                                            <button className='btn text-white'><i className="fa-regular fa-pen-to-square text-success"></i></button> / {' '}
                                                            <button className='btn text-white' onClick={() => deleteEmployee(employee._id)}>
                                                                <i className="fa-solid fa-trash text-danger"></i>
                                                            </button>
                                                        </td>
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
