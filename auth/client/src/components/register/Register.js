import React from 'react';
function Register(props) {
  return (
    <div className="row register-row  py-3">
      <div className="col-12 col-md-7 mx-auto">
        <form className="shadow-lg p-5 rounded">
          <span className="h3 d-block text-center mb-3">Register</span>
          <div className="form-row">
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="firstname">Firstname</label>
                <input
                  id="firstname"
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="lastname">Lastname</label>
                <input
                  id="lastname"
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="form-group">
            <label htmlFor="cpassword"> Confirm Password</label>
            <input
              type="password"
              name="cpassword"
              className="form-control"
              id="cpassword"
            />
          </div>

          <button type="submit" className="btn btn-style">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
