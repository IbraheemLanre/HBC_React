import React from "react";

const TextArea = (props) => {
  return (
    <div>
      <label htmlFor={props.name}>{props.title}</label>
      <textarea
        name={props.name}
        id={props.name}
        cols={props.col}
        rows={props.row}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
      ></textarea>
    </div>
  );
};

export default TextArea;
