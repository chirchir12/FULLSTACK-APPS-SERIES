import React from 'react';

function Input(props) {
  return (
    <div className="form-group">
      <label for="exampleInputEmail1">{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        className="form-control"
        id={props.id}
      />
      <small id="emailHelp" className="form-text text-muted">
        {props.smallText}
      </small>
    </div>
  );
}

export default Input;
