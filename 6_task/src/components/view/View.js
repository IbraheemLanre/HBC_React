import React from "react";
import "./View.css";

const View = ({ firstname, lastname, phoneNumber, message, role }) => {
  return (
    <div className="view">
      <div className="content">
        <h2>You submitted the following:</h2>
        <div>
          <p>Firstname: {firstname}</p>
          <p>Lastname: {lastname}</p>
          <p>Phone Number: {phoneNumber}</p>
          <p>Message: {message}</p>
          <p>Role: {role}</p>
        </div>
      </div>
    </div>
  );
};

export default View;
