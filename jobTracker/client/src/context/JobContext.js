import React, { createContext, useState, useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
export const JobContext = createContext();

function JobContextProvider(props) {
  const { addToast } = useToasts();
  const [jobs, setjobs] = useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/jobs');
      if (!res.ok) {
        throw new Error('Network is unstable');
      }
      const json = await res.json();
      setjobs(json);
      setIsLoading(false);
    } catch (error) {
      setError({
        ...error,
        message: 'We are experiencing trouble reaching server',
      });
    }
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
    <JobContext.Provider value={{ jobs, error, isLoading, deleteEntry }}>
      {props.children}
    </JobContext.Provider>
  );
}
export default JobContextProvider;
