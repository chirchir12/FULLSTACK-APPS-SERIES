import React from 'react';

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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>mark@gmail.com</td>
            <td>0705814794</td>
            <td>2020-05-06</td>
            <td>
              <a className="pl-2" href="view">
                View
              </a>
              <a className="pl-2" href="view">
                edit
              </a>
              <a className="pl-2" href="view">
                delete
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;
