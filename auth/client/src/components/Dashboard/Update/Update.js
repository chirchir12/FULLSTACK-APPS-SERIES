import React, { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';
import { Redirect } from 'react-router-dom';
function Update(props) {
  const {
    userProfile,
    setUserProfile,
    updateProfile,
    isAuthicated,
  } = useContext(UserContext);
  const { Profile } = userProfile;

  const handleChange = (e) => {
    setUserProfile({
      ...userProfile,
      [e.target.name]: e.target.value,
      Profile: { ...Profile, [e.target.name]: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(userProfile);
  };
  if (!isAuthicated) {
    return <Redirect to="/user/login" />;
  }
  return (
    <div className="container">
      <div className="row register-row  py-3">
        <div className="col-12 col-md-7 mx-auto">
          <form
            onSubmit={handleSubmit}
            className="shadow-lg p-3 rounded bg-light"
          >
            <span className="h3 d-block text-center mb-3">Update Profile</span>
            <div className="form-row">
              <div className="col-12 col-md-6">
                <div className="form-group">
                  <label htmlFor="firstname">Firstname</label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={userProfile.firstName || ''}
                    onChange={handleChange}
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
                    name="lastName"
                    value={userProfile.lastName || ''}
                    onChange={handleChange}
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
                className="form-control"
                id="exampleInputEmail1"
                name="email"
                value={userProfile.email || ''}
                onChange={handleChange}
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                value={userProfile.Profile.address || ''}
                onChange={handleChange}
                className="form-control"
                id="address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Residence</label>
              <input
                type="text"
                name="residence"
                value={userProfile.Profile.residence || ''}
                onChange={handleChange}
                className="form-control"
                id="residence"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone"> Phone</label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                value={userProfile.Profile.phone || ''}
                onChange={handleChange}
                id="phone"
              />
            </div>
            <div className="form-group">
              <label htmlFor="date"> Date of Birth</label>
              <input
                type="date"
                value={Profile.dob || ''}
                onChange={handleChange}
                name="dob"
                className="form-control"
                id="date"
              />
            </div>

            <button type="submit" className="btn btn-style">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update;
