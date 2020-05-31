import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <div className="col-12 col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-sm btn-outline-primary card-link">
            Visit Site
          </a>
          <Link
            to="/job/update"
            className="btn btn-sm btn-outline-secondary card-link"
          >
            Update
          </Link>
          <a href="#" className="btn btn-sm btn-outline-danger card-link">
            Delete Entry
          </a>
        </div>
        <div className="card-footer text-muted d-flex justify-content-between">
          <span>23/05/2020</span>
          <span>
            responsed? <i className="fas fa-check-double text-primary"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
