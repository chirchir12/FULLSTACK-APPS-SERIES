import React from 'react';

function Dashboard(props) {
  return (
    <div className="row register-row pt-5">
      <div className="col-12 col-md-8 mx-auto">
        <div className="card bg-light shadow-lg  rounded">
          <div class="card-header d-flex justify-content-between">
            <span>Profile</span>
            <a href="ghg">edit</a>
          </div>
          <div class="card-body">
            <p class="card-text ">
              <ul className="remove-list-style">
                <li>
                  <span className="bold-text d-block">Name</span>{' '}
                  <span>Emmanuel Chirchir</span>
                </li>
                <li className="mt-2">
                  <span className="bold-text d-block">Email</span>{' '}
                  <span>chirchir@gmail.com</span>
                </li>
                <li className="mt-2">
                  <span className="bold-text d-block">Age</span> <span>23</span>
                </li>
                <li className="mt-2">
                  <span className="bold-text d-block">Address</span>{' '}
                  <span>12 Kisumu</span>
                </li>
                <li className="mt-2">
                  <span className="bold-text d-block">Residence</span>{' '}
                  <span>Rongai</span>
                </li>
                <li className="mt-2">
                  <span className="bold-text d-block">Phone</span>{' '}
                  <span>+254705814794</span>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
