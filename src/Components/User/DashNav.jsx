import React from "react";
import { NavLink } from "react-router-dom";

const DashNav = () => {
  return (
    <ul className="nav flex-column text-center">
      <li className="nav-item">
        <NavLink
          to="/user/dashboard"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          aria-label="Dashboard"
        >
          <i className="fa-solid fa-house"></i>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/user/showemployee"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          aria-label="Show Employee"
        >
          <i className="fa-solid fa-bars"></i>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/user/addemployee"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          aria-label="Add Employee"
        >
          <i className="fa-solid fa-plus"></i>
        </NavLink>
      </li>
    </ul>
  );
};

export default DashNav;
