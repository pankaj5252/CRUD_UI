import React from "react";
import DashNav from "./DashNav";

const AddEmployee = () => {
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
          <div className="col-md-11 p-4">Add</div>
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
