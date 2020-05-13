import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Detail(props) {
  console.log(props.match.params.id);
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/api/employees/${props.match.params.id}`)
      .then((respons) => respons.json())
      .then((results) => setEmployee(results));
  }, [props.match.params.id]);

  return (
    <div className="row mt-3">
      <div className="col-12 col-md-6 mx-auto">
        <h1 className="h4">EMployee: </h1>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{`${employee.firstName} ${employee.lastName}`}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{employee.dob}</h6>
            <h2 className="h6">Contact</h2>
            <ul className="list-group">
              <li className="list-group-item">Email: {employee.email}</li>
              <li className="list-group-item">Address: {employee.address}</li>
              <li className="list-group-item">Phone: {employee.phone}</li>
            </ul>
            <Link to="/" className="mt-3 card-link btn btn-success">
              back
            </Link>
            <button className="mt-3 ml-2 card-link btn btn-danger">
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
