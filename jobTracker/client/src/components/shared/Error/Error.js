import React from 'react';

function Error(props) {
  const { error } = props;
  return (
    <>
      <div className="alert alert-warning" role="alert">
        {error.message}
      </div>
    </>
  );
}

export default Error;
