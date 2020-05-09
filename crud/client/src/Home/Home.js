import React from 'react';
import Item from './Item';

function Home(props) {
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
          {[1, 2, 3, 4, 5, 6, 7].map(item => {
            if (!item) {
              return "No Employee yet"
            }
            return <Item item={item} key={item.id} />
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
