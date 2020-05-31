import React, { createContext, useState, useEffect } from 'react';
export const JobContext = createContext();

function JobContextProvider(props) {
  const [jobs, setjobs] = useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
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
    fetchData();
  }, []);

  // delete job entry

  return (
    <JobContext.Provider value={{ jobs, error, isLoading }}>
      {props.children}
    </JobContext.Provider>
  );
}

export default JobContextProvider;
