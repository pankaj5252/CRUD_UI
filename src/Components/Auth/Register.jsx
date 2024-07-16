import React, { useState } from "react";
import axios from "axios";
import { Fade } from "react-awesome-reveal";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure you import the toastify CSS

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Email address is invalid";
    }
    if (!formData.username) formErrors.username = "Username is required";
    if (!formData.password) {
      formErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      try {
        const response = await axios.post(
          "https://crud-backend-lmk8.onrender.com/register",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200 || response.status === 201) {
          toast.success("Registration successful!", {
            position: "top-right",
          });
          setTimeout(() => {
            navigate('/login')
          }, 1000);
        } else {
          toast.error("Registration failed. Please try again.", {
            position: "top-right",
          });
        }
      } catch (error) {
        if (error.response) {
          toast.error(`Error: ${error.response.data.message}`, {
            position: "top-right",
          });
        } else {
          toast.error("An unexpected error occurred. Please try again.", {
            position: "top-right",
          });
        }
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="container p-4 mb-5 mt-4">
      <div className="row justify-content-center">
        <div className="col-md-3"></div>
        <div className="col-md-6 shadow p-4">
          <h1 className="text-center mb-3 mt-2">Register Now</h1>
          <Fade>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control bg-transparent"
                />
                {errors.name && (
                  <small className="text-danger">{errors.name}</small>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control bg-transparent"
                />
                {errors.email && (
                  <small className="text-danger">{errors.email}</small>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="username">
                  Username:
                </label>
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="form-control bg-transparent"
                />
                {errors.username && (
                  <small className="text-danger">{errors.username}</small>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="password">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control bg-transparent"
                />
                {errors.password && (
                  <small className="text-danger">{errors.password}</small>
                )}
              </div>
              <div className="text-center">
                <button type="submit" className="btn text-white btn-block mb-3">
                  {loading ? "Loading..." : "Sign Up"}
                </button>
              </div>
              <div className="text-center">
                <p>
                  Already a member?{" "}
                  <Link to="/login" className="text-primary">
                    Login
                  </Link>
                </p>
                <p>or sign up with:</p>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-google"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-twitter"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </form>
          </Fade>
        </div>
        <div className="col-md-3"></div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
