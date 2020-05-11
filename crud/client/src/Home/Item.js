import React from 'react';
import { Link } from 'react-router-dom';
function Item(props) {
  return (
    <>
      <tr>
        <th scope="row">{props.item.number}</th>
        <td>{props.item.firstName}</td>
        <td>{props.item.lastName}</td>
        <td>{props.item.email}</td>
        <td>{props.item.phone}</td>
        <td>{props.item.dob}</td>
        <td>
          <Link
            className="ml-2 btn btn-outline-primary btn-sm"
            to={`/employee/${props.item.id}`}
          >
            View <i class="fas fa-eye"></i>
          </Link>
          <Link
            className="ml-2 btn btn-outline-success btn-sm"
            to={`/employee/${props.item.id}/edit`}
          >
            edit <i class="fas fa-edit"></i>
          </Link>
          <button className="ml-2 btn btn-outline-danger btn-sm" href="view">
            delete <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      </tr>
    </>
  );
}

export default Item;
