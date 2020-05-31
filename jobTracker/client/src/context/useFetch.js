import React, { useState, useEffect } from 'react';

function useFetch(url, options, param = null) {
  const [response, setResponse] = useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(url, options);
        if (!res.ok) {
          throw new Error('Network is unstable');
        }
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [options, param, url]);
  return { response, error, isLoading };
}

export default useFetch;
