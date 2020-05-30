import React from 'react';

function Input(props) {
  return (
    <div className="form-group">
      <label for="exampleInputEmail1">{props.label}</label>
      <input
        type={props.type}
        name={props.name}
        value={props.value}
        className="form-control"
        id={props.id}
      />
      {props.smallText && (
        <small id="emailHelp" className="form-text text-muted">
          {props.smallText}
        </small>
      )}
    </div>
  );
}

export default Input;
