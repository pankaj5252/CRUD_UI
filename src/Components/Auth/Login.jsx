import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // State to track loading
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const changeHandler = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "https://crud-backend-lmk8.onrender.com/login",
        formData
      );
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        toast.success("Login successful!", {
          position: "top-right",
        });
        setTimeout(() => {
          navigate("/user/dashboard");
        }, 1000);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Invalid credentials, please try again.");
      toast.error("Invalid credentials, please try again.", {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="container p-4 mb-5 mt-4">
        <div className="row justify-content-center">
          <div className="col-md-4"></div>
          <div className="col-md-4 shadow">
            <h1 className="text-center mb-4 mt-2">Login Now</h1>
            <Fade>
              <form onSubmit={handleSubmit}>
                {error && <div className="alert alert-danger">{error}</div>}
                <label className="form-label" htmlFor="username">
                  Username:
                </label>
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="text"
                    id="username"
                    value={formData.username}
                    onChange={changeHandler}
                    className="form-control bg-transparent"
                  />
                </div>
                <label className="form-label" htmlFor="password">
                  Password:
                </label>
                <div data-mdb-input-init className="form-outline mb-4">
                  <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={changeHandler}
                    className="form-control bg-transparent"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn text-white btn-block mb-4"
                  >
                    {loading ? "Loading..." : "Sign in"}
                  </button>
                </div>
                <div className="text-center pb-3">
                  <p>
                    Not a member?{" "}
                    <Link to="/register" className="text-primary">
                      Register
                    </Link>
                  </p>
                  <p>or sign up with:</p>
                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-google"></i>
                  </button>
                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-github"></i>
                  </button>
                </div>
              </form>
            </Fade>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
