import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
function Login(props) {
  const { loginUser, setLoginUser, login } = useContext(UserContext);

  const handleChange = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    return login(loginUser);
  };
  return (
    <div className="row login-row pt-5">
      <div className="col-12 col-md-6 mx-auto">
        <form
          onSubmit={handleSubmit}
          className="shadow-lg p-3 rounded bg-light"
        >
          <span className="h3 d-block text-center mb-3">Login</span>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              value={loginUser.email || ''}
              onChange={handleChange}
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              value={loginUser.password || ''}
              onChange={handleChange}
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
