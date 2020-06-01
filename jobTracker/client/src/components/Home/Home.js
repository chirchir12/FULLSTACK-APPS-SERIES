import React, { useContext, useEffect, useState } from 'react';
import List from './List/List';
import { JobContext } from '../../context/JobContext';
import Error from '../shared/Error/Error';

function Home(props) {
  let [searchTerm, setSearchTerm] = useState('');
  const { error, jobs, isLoading } = useContext(JobContext);
  const handleChange = (e) => {
    setSearchTerm((searchTerm = e.target.value));
  };

  let Searchjobs;
  if (jobs && jobs.length > 0) {
    Searchjobs = jobs.filter((item) => {
      let title = item.title.toLowerCase();
      let filtered = searchTerm.toLowerCase();
      return title.includes(filtered);
    });
  }
  let avaialableJobs;
  if (isLoading) {
    avaialableJobs = <h5>loading...</h5>;
  } else {
    if (Searchjobs && Searchjobs.length > 0) {
      avaialableJobs = <List Searchjobs={Searchjobs} isLoading={isLoading} />;
    } else {
      avaialableJobs = <h5>No jobs Found</h5>;
    }
  }

  return (
    <div className="container">
      <div className="row my-4">
        <div className="col-12">
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control w-50 mr-sm-2"
              type="search"
              name="search"
              value={searchTerm}
              placeholder="Search"
              onChange={handleChange}
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
        {error ? <Error error={error.error} /> : avaialableJobs}
      </div>
    </div>
  );
}

export default Home;
