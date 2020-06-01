import React, { useContext } from 'react';
import moment from 'moment';
import truncate from 'truncate';
import { Link } from 'react-router-dom';
import { JobContext } from '../../../context/JobContext';

function Card(props) {
  const { deleteEntry } = useContext(JobContext);
  let {
    id,
    title,
    company,
    response,
    link,
    responsibility,
    createdAt,
  } = props.job;
  createdAt = moment.utc(createdAt).local().format('DD-MM-YYYY');
  return (
    <div className="col-12 col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{truncate(title, 30)}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {truncate(company, 30)}
          </h6>
          <p className="card-text">{truncate(responsibility, 220)}</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            className="btn btn-sm btn-outline-primary card-link"
          >
            Visit Site
          </a>
          <Link
            to={`/job/update/${+id}`}
            className="btn btn-sm btn-outline-secondary card-link"
          >
            Update
          </Link>
          <button
            onClick={() => deleteEntry(id)}
            className="btn btn-sm btn-outline-danger card-link"
          >
            Delete Entry
          </button>
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
