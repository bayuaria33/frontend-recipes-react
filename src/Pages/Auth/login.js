import React from "react";
import axios from "axios";
import { useState} from "react";
import { Link } from "react-router-dom";
let url = `${process.env.REACT_APP_API_URL}/auth/login/`;
//sct47890@nezid.com
//123
export default function Login() {

  const[credential, setCredential] = useState({
    email:"",
    password:""
  })

  const handleChange = (e) => {
    setCredential({
      ...credential,
      [e.target.name]: e.target.value,
    });
  };

  const loginForm = (e) => {
    e.preventDefault();
    axios
      .post(url, credential, {
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then((res) => {
        console.log("Login success");
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log("Login fail");
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
                <p className="text-poppins-large text-center mt-5">Welcome</p>
              </div>
              <form className="col" onSubmit={loginForm}>
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
                    className="form-control "
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
                    href="/landing/landing.html"
                    className="btn btn-warning w-100 text-white"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer mt-5 border-top-0 bg-white">
              <div className="form-group text-center">
                <label>
                  Don't have an account?{" "}
                  <Link to={"/register"} style={{color: "#efc81a"}}>Register</Link>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
