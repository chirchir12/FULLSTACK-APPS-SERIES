import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../Context/DataContext';
function Item(props) {
  const { deleteEmployee } = useContext(DataContext);
  return (
    <>
      <tr>
        <th scope="row">{props.item.number}</th>
        <td>{props.item.firstName}</td>
        <td>{props.item.lastName}</td>
        <td>{props.item.email}</td>
        <td>{props.item.phone}</td>
        <td>{props.item.dob}</td>
        <td>{props.item.address}</td>
        <td>
          <Link
            className="ml-2 btn btn-outline-primary btn-sm"
            to={`/employee/${props.item.id}`}
          >
            View <i className="fas fa-eye"></i>
          </Link>
          <Link
            className="ml-2 btn btn-outline-success btn-sm"
            to={`/employee/${props.item.id}/edit`}
          >
            edit <i className="fas fa-edit"></i>
          </Link>
          <button
            onClick={() => deleteEmployee(props.item.id)}
            className="ml-2 btn btn-outline-danger btn-sm"
            href="view"
          >
            delete <i className="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    </>
  );
}

export default Item;
