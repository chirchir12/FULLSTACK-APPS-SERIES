import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();
function DataContextProvider(props) {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // fetching employees
  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:5000/api/employees')
      .then((res) => {
        // when response faile
        if (!res.ok) {
          console.log(res);
          return Promise.reject({
            status: res.status,
            statusText: res.statusText,
          });
        }
        console.log(res);
        return res;
      })
      .then((res) => res.json())
      .then((results) => {
        setEmployees(results);
        setIsLoading(false);
      })
      .catch((error) => setError(error));
  }, []);

  // save data

  const saveEmployee = (employee) => {
    fetch('http://localhost:5000/api/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employee),
    })
      .then(() => ({ message: 'data has been saved' }))
      .catch((error) => ({ error: error }));
  };

  // find single data
  // in detail page

  // delete data
  const deleteEmployee = (id) => {
    fetch(`http://localhost:5000/api/employees/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => window.location.reload())
      .catch((error) => ({ error: error }));
  };

  // update data
  const updateEmployee = (employee) => {
    fetch(`http://localhost:5000/api/employees/${employee.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employee),
    })
      .then(() => ({ message: 'data has been updated' }))
      .catch((error) => ({ error: error }));
  };

  return (
    <DataContext.Provider
      value={{
        employees,
        saveEmployee,
        error,
        isLoading,
        updateEmployee,
        deleteEmployee,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
