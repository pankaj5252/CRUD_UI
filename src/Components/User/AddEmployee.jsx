import React, { useState } from 'react';
import axios from 'axios';
import DashNav from './DashNav';

const AddEmployee = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        mobile: '',
        email: '',
        address: '',
        age: '',
        salary: '',
        joining_date: '',
        date_of_birth: '',
        status: 'Registered'
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true)
        const token = localStorage.getItem('token');
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };
        try {
            const response = await axios.post('https://crud-backend-lmk8.onrender.com/addEmployee', formData, config);
            console.log('Employee added:', response.data);
            setFormData({
                fname: '',
                lname: '',
                mobile: '',
                email: '',
                address: '',
                age: '',
                salary: '',
                joining_date: '',
                date_of_birth: '',
                status: 'Registered'
            });
        } catch (error) {
            console.error('Error adding employee:', error);
        } finally {
            setLoading(false);
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
                <div className="row p-0 m-0">
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
                                                <div className="col-md-4 col-6">
                                                    <label htmlFor="fname" className='form-label mt-1'>First Name</label>
                                                    <input type="text" name="fname" id="fname" className='form-control inp bg-transparent' value={formData.fname} onChange={handleChange} placeholder="First Name" required />
                                                </div>
                                                <div className="col-md-4 col-6">
                                                    <label htmlFor="lname" className='form-label mt-1'>Last Name</label>
                                                    <input type="text" name="lname" id="lname" className='form-control inp bg-transparent' value={formData.lname} onChange={handleChange} placeholder="Last Name" required />
                                                </div>
                                                <div className="col-md-4 col-6">
                                                    <label htmlFor="mobile" className='form-label mt-1'>Mobile</label>
                                                    <input type="text" name="mobile" id="mobile" className='form-control inp bg-transparent' value={formData.mobile} onChange={handleChange} placeholder="Mobile" required />
                                                </div>

                                                <div className="col-md-4 col-6">
                                                    <label htmlFor="email" className='form-label mt-1'>Email</label>
                                                    <input type="email" name="email" id="email" className='form-control inp bg-transparent' value={formData.email} onChange={handleChange} placeholder="Email" required />
                                                </div>
                                                <div className="col-md-4 col-6">
                                                    <label htmlFor="address" className='form-label mt-1'>Address</label>
                                                    <input type="text" name="address" id="address" className='form-control inp bg-transparent' value={formData.address} onChange={handleChange} placeholder="Address" required />
                                                </div>
                                                <div className="col-md-4 col-6">
                                                    <label htmlFor="age" className='form-label mt-1'>Age 'Must be 18+'</label>
                                                    <input type="number" name="age" id="age" className='form-control inp bg-transparent' value={formData.age} onChange={handleChange} placeholder="Age" required />
                                                </div>

                                                <div className="col-md-4 col-6">
                                                    <label htmlFor="salary" className='form-label mt-1'>Salary</label>
                                                    <input type="number" name="salary" id="salary" className='form-control inp bg-transparent' value={formData.salary} onChange={handleChange} placeholder="Salary" required />
                                                </div>
                                                <div className="col-md-4 col-6">
                                                    <label htmlFor="joining_date" className='form-label mt-1'>Joining Date</label>
                                                    <input type="date" name="joining_date" id="joining_date" className='form-control inp bg-transparent' value={formData.joining_date} onChange={handleChange} placeholder="Joining Date" required />
                                                </div>
                                                <div className="col-md-4 col-6">
                                                    <label htmlFor="date_of_birth" className='form-label mt-1'>Retired Date</label>
                                                    <input type="date" name="date_of_birth" id="date_of_birth" className='form-control inp bg-transparent' value={formData.date_of_birth} onChange={handleChange} placeholder="Retired Date" required />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <label htmlFor="status" className='form-label mt-1'>Status</label>
                                                    <p>Registered</p>
                                                </div>
                                            </div>
                                            <div className="row mt-3 bg-transparent">
                                                <div className="col-md-12 text-center">
                                                    {loading ? <button type="submit" className="btn text-white inp w-25">Loading</button> : <button type="submit" className="btn text-white inp w-25">Submit</button>}
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
