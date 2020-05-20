import React from 'react';

function Login(props) {
  return (
    <div className="row login-row pt-5">
      <div className="col-12 col-md-6 mx-auto">
        <form className="shadow-lg p-3 rounded bg-light">
          <span className="h3 d-block text-center mb-3">Login</span>
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
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="email"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-style">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
