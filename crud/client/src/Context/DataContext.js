import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();
function DataContextProvider(props) {
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setnewEmployee] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    email: '',
    dob: '',
  });

  // fetching data once
  useEffect(() => {
    (async () => {
      const results = await fetch('http://localhost:5000/api/employees');
      const data = await results.json();
      setEmployees(data);
    })();
  }, [newEmployee, employees.length]);
  // save data

  const saveEmployee = (employee) => {
    fetch('http://localhost:5000/api/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employee),
    })
      .then(() => {
        return setnewEmployee({})
      })
      .catch((error) => ({ error: error }));
  };


  // delete data ok
  const deleteEmployee = (id) => {
    fetch(`http://localhost:5000/api/employees/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(() => setEmployees(employees.filter(employee => employee.id !== id)))
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
      .then(() => {
        (async () => {
          const results = await fetch('http://localhost:5000/api/employees');
          const data = await results.json();
          setEmployees(data);
        })();
      })
      .catch((error) => ({ error: error }));
  };

  return (
    <DataContext.Provider
      value={{ employees, newEmployee, setnewEmployee, saveEmployee, updateEmployee, deleteEmployee }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;
