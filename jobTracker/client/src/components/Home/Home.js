import React, { useContext } from 'react';
import List from './List/List';
import { JobContext } from '../../context/JobContext';

function Home(props) {
  const { error } = useContext(JobContext);
  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-12">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-primary my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        {!error ? (
          <List />
        ) : (
          <div className="alert alert-warning" role="alert">
            {error.message}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
