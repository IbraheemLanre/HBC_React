import React from "react";
import './Role.css'

const Role = (props) => {
  return (
    <div className="role-item">
      <label htmlFor="{props.name}">{props.title}</label>
      <select
        className="select-opt"
        name={props.name}
        id={props.title}
        value={props.value}
        onChange={props.handleChange}
      >
        <option value="" disabled>
          {props.placeholder}
        </option>
        {props.options.map((option) => {
          return (
            <option value={option} key={option} label={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Role;
