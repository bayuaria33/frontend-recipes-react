import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../../Storage/Action/auth";
import { useDispatch, useSelector } from "react-redux";
import Alert from "react-bootstrap/Alert";


export default function Register() {
  const regis_state = useSelector((state) => state.regisReducer);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const postData = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password);
    let data = {
      name,
      email,
      password,
    };
    dispatch(registerUser(data, navigate));
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

              <form className="col" onSubmit={postData}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    name="name"
                    onChange={(e)=>setName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email"
                    name="email"
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    name="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="d-flex">
                  <label>
                    <input
                      type="checkbox"
                      className="me-3 my-3"
                      style={{ accentColor: "#efc81a" }}
                      required
                    />
                    I agree to terms & conditions
                  </label>
                </div>
                {regis_state.isLoading && (
                  <div className="d-flex justify-content-center">
                    <div
                      className="spinner-border text-warning my-3"
                      role="status"
                    ></div>
                  </div>
                )}
                {regis_state.isError && (
                  <Alert variant="danger">Registration Failed, please try again</Alert>
                )}
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
                  <Link to={"/login"} style={{ color: "#efc81a" }} className="ms-1">
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
