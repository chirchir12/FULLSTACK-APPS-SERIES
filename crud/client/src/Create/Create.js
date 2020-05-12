import React, { useContext, useState } from 'react';
import { DataContext } from '../Context/DataContext';

function Create(props) {
  const { saveEmployee } = useContext(DataContext);
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    email: '',
    dob: '',
  });
  // handle input changes
  const handleChnage = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  // handle form submission
  const handleSubmission = (event) => {
    event.preventDefault();
    saveEmployee(data);
    setData({
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      email: '',
      dob: '',
    });
    props.history.push('/');
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
                  value={data.firstName || ''}
                  onChange={handleChnage}
                  className="form-control"
                  placeholder="First name"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  name="lastName"
                  value={data.lastName || ''}
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
              value={data.email || ''}
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
              value={data.phone || ''}
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
              value={data.dob || ''}
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
              value={data.address || ''}
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
