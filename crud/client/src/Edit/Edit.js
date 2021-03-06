import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from '../Context/DataContext';
import { useHistory } from 'react-router-dom';

function Edit(props) {
  const history = useHistory();
  const { updateEmployee } = useContext(DataContext);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/api/employees/${props.match.params.id}`)
      .then((respons) => respons.json())
      .then((results) => setData(results));
  }, [props.match.params.id]);
  // handle input changes
  const handleChnage = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  // handle form submission
  const handleUpdate = (event) => {
    event.preventDefault();
    updateEmployee(data);
    history.push('/');
  };
  console.log(data);
  return (
    <div className="row mt-4">
      <div className="col-12 col-md-6 mx-auto">
        <h1 className="h4">Update Employee</h1>
        <form onSubmit={handleUpdate} method="POST">
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

export default Edit;
