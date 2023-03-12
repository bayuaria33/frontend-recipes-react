import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
let url = `${process.env.REACT_APP_API_URL}/auth/register/user`;

export default function Register() {
  const [credential, setCredential] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredential({
      ...credential,
      [e.target.name]: e.target.value,
    });
  };

  const registerForm = (e) => {
    e.preventDefault();
    axios
      .post(url, credential, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("Register success");
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log("Register fail");
        console.log(err);
      });
  };

  return (
    <div className="container pale-bg">
      <div className="row justify-content-center pale-bg">
        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-12">
          <div className="card border-0 text-poppins">
            <div className="card-body">
              <div className="card-title">
                <p className="text-poppins-large text-center mb-5">Recipe</p>
                <p className="text-poppins-large text-center mt-5">
                  Let's Get Started
                </p>
              </div>

              <form className="col" onSubmit={registerForm}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    name="name"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    name="password"
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex">
                  <label>
                    <input
                      type="checkbox"
                      className="me-3 my-3"
                      style={{ accentColor: "#efc81a" }}
                    />
                    I agree to terms & conditions
                  </label>
                </div>
                <div className="d-flex">
                  <button
                    className="btn btn-warning w-100 text-white"
                    type="submit"
                  >
                    Register Account
                  </button>
                </div>
              </form>
            </div>
            <div
              className="card-footer mt-5 border-top-0"
              style={{ backgroundColor: "#fff" }}
            >
              <div className="form-group text-center">
                <label>
                  Already have an account?
                  <Link to={"/login"} style={{ color: "#efc81a" }}>
                    Login here
                  </Link>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
