import React from "react";
import DashNav from "./DashNav";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid p-0 m-0">
        <div className="row p-0 m-0">
          <div className="col-md-12 fs-2 text-center fw-bold mb-2">
            DashBoard
          </div>
        </div>
        <div className="row p-0 m-0 ">
          <div className="col-md-1">
            <DashNav />
          </div>
          <div className="col-md-11 p-4">
            <div className="row">
              <div className="col-md-4 d-flex justify-content-center text-center">
                <div className="shadow w-100 p-3 mt-3">Total Employee : 50</div>
              </div>
              <div className="col-md-4 d-flex justify-content-center text-center">
                <div className="shadow w-100 p-3 mt-3">Total Employee : 50</div>
              </div>
              <div className="col-md-4 d-flex justify-content-center text-center">
                <div className="shadow w-100 p-3 mt-3">Total Employee : 50</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
