import React from "react";
import './TextArea.css'

const TextArea = (props) => {
  return (
    <div className="textarea-item">
      <label htmlFor={props.name} className="textarea-label">{props.title}</label>
      <textarea
        name={props.name}
        id={props.name}
        cols={props.col}
        rows={props.row}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />
     
    </div>
  );
};

export default TextArea;
