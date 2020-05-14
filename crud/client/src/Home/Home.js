import React, { useContext } from 'react';
import Item from './Item';
import { DataContext } from '../Context/DataContext';
function Home(props) {
  const { employees } = useContext(DataContext);

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
          {employees.length > 0 ? employees.map((item, index) => {
            item.number = index + 1;
            return <Item item={item} key={item.id} />;
          }) : (<p className="h3 text-center mt-3"> No employees added Yet</p>)}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
