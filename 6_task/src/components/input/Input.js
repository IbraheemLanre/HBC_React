import React from "react";

const InputField = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name} className="form-lable">
        {props.title}
      </label>
      <input
        name={props.name}
        type={props.type}
        value={props.value}
        oncChange={props.handleChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default InputField;
