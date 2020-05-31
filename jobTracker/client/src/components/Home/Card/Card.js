import React from 'react';
import moment from 'moment';
import truncate from 'truncate';
import { Link } from 'react-router-dom';

function Card(props) {
  let { id, title, company, response, responsibility, createdAt } = props.job;
  createdAt = moment.utc(createdAt).local().format('DD-MM-YYYY');
  return (
    <div className="col-12 col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{company}</h6>
          <p className="card-text">{truncate(responsibility, 220)}</p>
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
          <span>
            applied on <b>{createdAt}</b>
          </span>
          <span>
            responded?{' '}
            {response ? (
              <i className="fas fa-check-double text-primary"></i>
            ) : (
              <i className="fas fa-times text-danger"></i>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
