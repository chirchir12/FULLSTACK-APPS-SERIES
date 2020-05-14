import React, { useContext } from 'react';
import { DataContext } from '../Context/DataContext';
import { useHistory } from 'react-router-dom';
function Create(props) {
  const history = useHistory();
  const { saveEmployee, newEmployee, setnewEmployee } = useContext(DataContext);

  // handle input changes
  const handleChnage = (event) => {
    setnewEmployee({ ...newEmployee, [event.target.name]: event.target.value });
  };
  // handle form submission
  const handleSubmission = (event) => {
    event.preventDefault();
    saveEmployee(newEmployee);
    history.push('/')
  };
  return (
    <div className="row mt-4">
      <div className="col-12 col-md-6 mx-auto">
        <h1 className="h4">Create New Employee</h1>
        <form onSubmit={handleSubmission} method="POST">
          <div className="form-group">
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  name="firstName"
                  value={newEmployee.firstName || ''}
                  onChange={handleChnage}
                  className="form-control"
                  placeholder="First name"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  name="lastName"
                  value={newEmployee.lastName || ''}
                  onChange={handleChnage}
                  className="form-control"
                  placeholder="Last name"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              value={newEmployee.email || ''}
              onChange={handleChnage}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              name="phone"
              value={newEmployee.phone || ''}
              onChange={handleChnage}
              className="form-control"
              id="phone"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={newEmployee.dob || ''}
              onChange={handleChnage}
              className="form-control"
              id="dob"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="address"
              name="address"
              value={newEmployee.address || ''}
              onChange={handleChnage}
              className="form-control"
              id="address"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
