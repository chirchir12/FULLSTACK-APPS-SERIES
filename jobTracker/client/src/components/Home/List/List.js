import React, { useContext } from 'react';
import Card from '../Card/Card';
import { JobContext } from '../../../context/JobContext';
function List(props) {
  const { jobs, isLoading } = useContext(JobContext);

  if (isLoading) {
    return <h5>Loading data...</h5>;
  }
  return (
    <>
      {jobs && jobs.length > 0 ? (
        jobs.map((item, idx) => <Card key={idx} item={item} />)
      ) : (
        <h5>no job entry made</h5>
      )}
    </>
  );
}

export default List;
