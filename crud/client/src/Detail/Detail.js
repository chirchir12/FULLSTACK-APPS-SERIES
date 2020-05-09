import React from 'react';
import { Link } from 'react-router-dom';
function Detail(props) {
  return (
    <div className="row mt-3">
      <div className="col-12 col-md-6 mx-auto">
        <h1 className="h4">EMployee: </h1>
        <div class="card">
          <div className="card-body">
            <h5 className="card-title">Emmanuel Chirchir</h5>
            <h6 className="card-subtitle mb-2 text-muted">1994-05/01</h6>
            <h2 className="h6">Contact</h2>
            <ul className="list-group">
              <li className="list-group-item">chirchir7370@gmail.com</li>
              <li className="list-group-item">+254705814794</li>
            </ul>
            <Link
              exact={true}
              to="/"
              className="mt-3 card-link btn btn-success"
            >
              back
            </Link>
            <button className="mt-3 ml-2 card-link btn btn-danger">
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
