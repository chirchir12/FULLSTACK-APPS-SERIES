import React, { useContext } from 'react';
import Card from '../Card/Card';
import { JobContext } from '../../../context/JobContext';
function List(props) {
  const { Searchjobs } = props;

  return (
    <>
      {Searchjobs.map((job) => (
        <Card key={job.id} job={job} />
      ))}
    </>
  );
}

export default List;
