import React from 'react';

function Update(props) {
  return (
    <div className="row register-row  py-3">
      <div className="col-12 col-md-7 mx-auto">
        <form className="shadow-lg p-3 rounded bg-light">
          <span className="h3 d-block text-center mb-3">Update Profile</span>
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
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              className="form-control"
              id="address"
            />
          </div>
          <div class="form-group">
            <label htmlFor="phone"> Phone</label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              id="phone"
            />
          </div>
          <div class="form-group">
            <label htmlFor="date"> Date of Birth</label>
            <input type="date" name="date" className="form-control" id="date" />
          </div>

          <button type="submit" className="btn btn-style">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Update;
