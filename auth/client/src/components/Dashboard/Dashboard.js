import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

function Dashboard(props) {
  const { userProfile, isAuthicated } = useContext(UserContext);
  console.log(isAuthicated, 'is the user status');
  const { Profile } = userProfile;
  if (!isAuthicated) {
    return <Redirect to="/user/login" />;
  } else {
    return (
      <div className="row register-row pt-5">
        <div className="col-12 col-md-8 mx-auto">
          <div className="card bg-light shadow-lg  rounded">
            <div className="card-header d-flex justify-content-between">
              <span>Profile</span>
              <Link to="/profile/update">edit</Link>
            </div>
            <div className="card-body">
              <div className="card-text ">
                <ul className="remove-list-style">
                  <li>
                    <span className="bold-text d-block">Name</span>{' '}
                    <span>{`${userProfile.firstName} ${userProfile.lastName}`}</span>
                  </li>
                  <li className="mt-2">
                    <span className="bold-text d-block">Email</span>{' '}
                    <span>{userProfile.email}</span>
                  </li>
                  <li className="mt-2">
                    <span className="bold-text d-block">Age</span>{' '}
                    <span>23</span>
                  </li>
                  <li className="mt-2">
                    <span className="bold-text d-block">Address</span>{' '}
                    <span>{Profile.address || 'Empty'}</span>
                  </li>
                  <li className="mt-2">
                    <span className="bold-text d-block">Residence</span>{' '}
                    <span>{Profile.residence || 'Empty'}</span>
                  </li>
                  <li className="mt-2">
                    <span className="bold-text d-block">Phone</span>{' '}
                    <span>{Profile.phone || 'Empty'}</span>
                  </li>
                  <code>
                    {console.log('I should be redirect', isAuthicated)}
                  </code>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
