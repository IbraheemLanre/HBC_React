import React from "react";
import "./View.css";

const View = (props) => {
  return (
    <div className="view">
      <div className="content">
        <h2>You submitted the following:</h2>
        <p>Firstname: {props.firstname} </p>
        <p>Lastname: {props.lastname}</p>
        <p>Phone Number: {props.phoneNumber}</p>
        <p>Message: {props.message}</p>
        <p>Role: {props.role}</p>
      </div>
    </div>
  );
};

export default View;
