import React, { useContext } from 'react';
import Item from './Item';
import { DataContext } from '../Context/DataContext';
function Home(props) {
  const { employees, error, isLoading } = useContext(DataContext);
  console.log(employees);

  if (error) {
    console.log(error.message);
    return error && <h1>{error.statusText || error.message}</h1>;
  } else if (isLoading) {
    return <h1>loading...</h1>;
  }
  return (
    <div>
      <h1>All Employees</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Date of Birth</th>
            <th colSpan="3" scope="col">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.map((item, index) => {
            let x = 0;
            if (!item) {
              return 'No Employee yet';
            }
            item.number = index + 1;
            return <Item item={item} key={item.id} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
