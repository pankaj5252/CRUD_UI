import React, { useState } from 'react';
import axios from 'axios';
import DashNav from './DashNav';

const AddEmployee = () => {
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        mobile: '',
        email: '',
        address: '',
        age: '',
        salary: '',
        joining_date: '',
        retired_date: '',
        status: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const token = localStorage.getItem('token'); // Get the authentication token from localStorage or wherever it's stored
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };
        console.log(config);
        console.log(formData);
        try {
            const response = await axios.post('https://crud-backend-lmk8.onrender.com/addEmployee', formData, config);
            console.log('Employee added:', response.data);
            // Optionally, reset the form
            setFormData({
                fname: '',
                lname: '',
                mobile: '',
                email: '',
                address: '',
                age: '',
                salary: '',
                joining_date: '',
                retired_date: '',
                status: ''
            });
        } catch (error) {
            console.error('Error adding employee:', error);
        }
    };

    return (
        <>
            <div className="container-fluid p-0 m-0">
                <div className="row p-0 m-0">
                    <div className="col-md-12 fs-2 text-center fw-bold mb-2">
                        Add Employee
                    </div>
                </div>
                <div className="row p-0 m-0 ">
                    <div className="col-md-1">
                        <DashNav />
                    </div>
                    <div className="col-md-11 p-4">
                        <div className="row">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 shadow p-2">
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <input type="text" name="fname" className='form-control mt-2 bg-transparent' value={formData.fname} onChange={handleChange} placeholder="First Name" required />
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="text" name="lname" className='form-control mt-2 bg-transparent' value={formData.lname} onChange={handleChange} placeholder="Last Name" required />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <input type="text" name="mobile" className='form-control mt-2 bg-transparent' value={formData.mobile} onChange={handleChange} placeholder="Mobile" required />
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="email" name="email" className='form-control mt-2 bg-transparent' value={formData.email} onChange={handleChange} placeholder="Email" required />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <input type="text" name="address" className='form-control mt-2 bg-transparent' value={formData.address} onChange={handleChange} placeholder="Address" required />
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="number" name="age" className='form-control mt-2 bg-transparent' value={formData.age} onChange={handleChange} placeholder="Age" required />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <input type="number" name="salary" className='form-control mt-2 bg-transparent' value={formData.salary} onChange={handleChange} placeholder="Salary" required />
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="date" name="joining_date" className='form-control mt-2 bg-transparent' value={formData.joining_date} onChange={handleChange} placeholder="Joining Date" required />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <input type="date" name="retired_date" className='form-control mt-2 bg-transparent' value={formData.retired_date} onChange={handleChange} placeholder="Retired Date" required />
                                                </div>
                                                <div className="col-md-6">
                                                    <input type="text" name="status" className='form-control mt-2 bg-transparent' value={formData.status} onChange={handleChange} placeholder="Status" required />
                                                </div>
                                            </div>
                                            <div className="row mt-2 bg-transparent">
                                                <div className="col-md-12 text-center">
                                                    <button type="submit" className="btn text-white w-25">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AddEmployee;
