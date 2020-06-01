import React, { createContext, useState, useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
export const JobContext = createContext();

function JobContextProvider(props) {
  const { addToast } = useToasts();
  const [jobs, setjobs] = useState(null);
  const [Searchjobs, setSearchjobs] = useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);
    fetch('http://localhost:5000/api/jobs')
      .then((res) => {
        console.log('hello', res);
        if (!res.ok) {
          throw new Error('no data has been added');
        }
        return res;
      })
      .then((res) => {
        if (!res) {
          return res;
        }
        console.log(res);
        return res.json();
      })
      .then((results) => {
        setjobs(results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.error, 'is the error');
        setError({
          error,
        });
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  // delete job entry
  const deleteEntry = (id) => {
    console.log('id is', id);
    fetch(`http://localhost:5000/api/jobs/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (!res) throw new Error('could not delete');
      })
      .then((res) => {
        fetchData();
        addToast('Job Entry has been updated', {
          appearance: 'warning',
          autoDismiss: true,
        });
      })
      .catch((error) => console.log('delete error', error));
  };
  return (
    <JobContext.Provider
      value={{
        jobs,
        error,
        isLoading,
        setjobs,
        Searchjobs,
        setSearchjobs,
        fetchData,
        deleteEntry,
      }}
    >
      {props.children}
    </JobContext.Provider>
  );
}
export default JobContextProvider;
