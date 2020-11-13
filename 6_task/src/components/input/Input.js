import React from "react";
import "./Input.css";

const InputField = (props) => {
  return (
    <div className="input-item">
      <label htmlFor={props.name} className="input-label">
        {props.title}
      </label>
      <input
        name={props.name}
        id={props.name}
        type={props.type}
        value={props.value}
        required
        onChange={props.handleChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputField;
