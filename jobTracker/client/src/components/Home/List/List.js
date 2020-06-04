import React from 'react';
import Card from '../Card/Card';

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
