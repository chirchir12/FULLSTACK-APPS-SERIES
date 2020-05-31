import React from 'react';

function TextArea(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <textarea
        value={props.value}
        class="form-control"
        id={props.id}
        name={props.name}
        rows={props.rows}
      ></textarea>
    </div>
  );
}

export default TextArea;
