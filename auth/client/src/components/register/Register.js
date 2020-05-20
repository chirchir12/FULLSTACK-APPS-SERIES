import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

function Register(props) {
  const { newUser, setNewUser, register } = useContext(UserContext);

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newUser);
  };

  return (
    <div className="row register-row  py-3">
      <div className="col-12 col-md-7 mx-auto">
        <form
          onSubmit={handleSubmit}
          className="shadow-lg p-3 rounded bg-light"
        >
          <span className="h3 d-block text-center mb-3">Register</span>
          <div className="form-row">
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="firstname">Firstname</label>
                <input
                  id="firstname"
                  name="firstName"
                  type="text"
                  value={newUser.firstName || ''}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="First name"
                  required
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label htmlFor="lastname">Lastname</label>
                <input
                  id="lastname"
                  name="lastName"
                  type="text"
                  value={newUser.lastName || ''}
                  onChange={handleChange}
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                  required
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
              type="text"
              value={newUser.email || ''}
              onChange={handleChange}
              aria-describedby="emailHelp"
            />
          </div>
          <div class="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              name="password"
              type="password"
              value={newUser.password || ''}
              onChange={handleChange}
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>
          <div class="form-group">
            <label htmlFor="cpassword"> Confirm Password</label>
            <input
              type="password"
              name="cpassword"
              type="password"
              value={newUser.cpassword || ''}
              onChange={handleChange}
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
