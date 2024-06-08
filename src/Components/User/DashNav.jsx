import React from "react";
import { NavLink } from "react-router-dom";

const DashNav = () => {
  return (
    <>
      <ul className="nav flex-column d-none d-md-flex text-center">
        <li className="nav-item">
          <NavLink
            to="/user/dashboard"
            className={({ isActive }) =>
              isActive ? "nav-link active  pt-5" : " pt-5 nav-link"
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
              isActive ? "nav-link active  pt-5" : " pt-5 nav-link"
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
              isActive ? "nav-link active  pt-5" : " pt-5 nav-link"
            }
            aria-label="Add Employee"
          >
            <i className="fa-solid fa-plus"></i>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/user/profile"
            className={({ isActive }) =>
              isActive ? "nav-link active  pt-5" : " pt-5 nav-link"
            }
            aria-label="User Profile"
          >
            <i className="fa-solid fa-user"></i>
          </NavLink>
        </li>
      </ul>

      {/* Mobile view */}
      <ul className="nav flex-inline justify-content-between text-center fixed-bottom w-100 d-md-none">
        <li className="nav-item">
          <NavLink
            to="/user/showemployee"
            className={({ isActive }) =>
              isActive ? "nav-link active  pt-5" : " pt-5 nav-link"
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
              isActive ? "nav-link active  pt-5" : " pt-5 nav-link"
            }
            aria-label="Add Employee"
          >
            <i className="fa-solid fa-plus"></i>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/user/dashboard"
            className={({ isActive }) =>
              isActive ? "nav-link active  pt-5" : " pt-5 nav-link"
            }
            aria-label="Dashboard"
          >
            <i className="fa-solid fa-house"></i>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/user/profile"
            className={({ isActive }) =>
              isActive ? "nav-link active  pt-5" : " pt-5 nav-link"
            }
            aria-label="User Profile"
          >
            <i className="fa-solid fa-user"></i>
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default DashNav;
