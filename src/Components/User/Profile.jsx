import React from "react";
import DashNav from "./DashNav";

const Profile = () => {
  const userDetail = localStorage.getItem('user');
  const userData = JSON.parse(userDetail);
  return (
    <>
      <div className="container-fluid p-0 m-0">
        <div className="row p-0 m-0">
          <div className="col-md-12 fs-2 text-center fw-bold mb-2">User Profile</div>
        </div>
        <div className="row p-0 m-0 ">
          <div className="col-md-1">
            <DashNav />
          </div>
          <div className="col-md-11  p-4">
            <h1>Hello , {userData.name}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
