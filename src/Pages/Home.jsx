import { Bounce } from "react-awesome-reveal";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleNavigate = () => {
    navigate('/user/dashboard');
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 home d-flex align-items-center justify-content-center">
            <Bounce>
              <div className="text-center">
                <h1>Welcome TO The React CRUD Application</h1>
                {isLoggedIn ? (
                  <button className="btn fs-1 text-white mt-3" onClick={handleNavigate}>
                    Dashboard
                  </button>
                ) : (
                  <Link to="/login" className="btn fs-1 text-white mt-3">
                    Login
                  </Link>
                )}
              </div>
            </Bounce>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
