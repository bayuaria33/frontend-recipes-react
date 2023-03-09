import React from 'react'

export default function register() {
  return (
    <div className="container pale-bg">
    <div className="row justify-content-center pale-bg">
      <div className="col-xl-5 col-lg-6 col-md-8 col-sm-12">
        <div className="card border-0 text-poppins">
          <div className="card-body">

            <div className="card-title">
              <p className="text-poppins-large text-center mb-5">Recipe</p>
              <p className="text-poppins-large text-center mt-5">Let's Get Started</p>
            </div>

            <div className="col">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your password"
                />
              </div>
              <div className="d-flex">
                <label>
                  <input
                    type="checkbox"
                    className="me-3 my-3"
                    style={{accentColor: "#efc81a"}}
                  />I agree to terms & conditions</label
                >
              </div>
              <div className="d-flex">
                <button className="btn btn-warning w-100 text-white" data-toggle="modal" data-target="#registerSuccessModal">
                  Register Account
                </button>
              </div>  
            </div>
          </div>
          <div
            className="card-footer mt-5 border-top-0"
            style={{backgroundColor: "#fff"}}
          >
            <div className="form-group text-center">
              <label
                >Already have an account?
                <a href="/auth/login.html" style={{color: "#efc81a"}}>Login here</a></label
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
