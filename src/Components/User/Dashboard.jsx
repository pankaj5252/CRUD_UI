import DashNav from "./DashNav";
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Dashboard = () => {

  const [employeeCount, setEmployeeCount] = useState(0);

  const fetchEmployeeCount = async () => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    };
    try {
      const response = await axios.get('https://crud-backend-lmk8.onrender.com/api/count', config);
      setEmployeeCount(response.data.count);
    } catch (error) {
      console.error('Error fetching employee count:', error);
    }
  };

  useEffect(() => {
    fetchEmployeeCount();
  }, []);


  const userDetail = localStorage.getItem('user');
  const userData = JSON.parse(userDetail);
  return (
    <>
      <div className="container-fluid p-0 m-0">
        <div className="row p-0 m-0">
          <div className="col-md-12 fs-2 text-center fw-bold mb-2">
            DashBoard - {userData.name}
          </div>
        </div>
        <div className="row p-0 m-0 ">
          <div className="col-md-1">
            <DashNav />
          </div>
          <div className="col-md-11 p-4">
            <div className="row">
              <div className="col-md-4 d-flex justify-content-center text-center">
                <div className="shadow w-100 p-3 mt-3">Active Employee : 50</div>
              </div>
              <div className="col-md-4 d-flex justify-content-center text-center">
                <div className="shadow w-100 p-3 mt-3">Not Active Employee : 50</div>
              </div>
              <div className="col-md-4 d-flex justify-content-center text-center">
                <div className="shadow w-100 p-3 mt-3">Total Employee : {employeeCount}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
