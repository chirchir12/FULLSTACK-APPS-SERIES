import React from 'react';

function Error(props) {
  const { error } = props;
  if (error) {
    console.log('this is the error', error);
  }
  return (
    <>
      <div className="alert alert-warning" role="alert">
        {error.message}
      </div>
    </>
  );
}

export default Error;
