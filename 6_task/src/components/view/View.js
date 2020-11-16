import React from "react";
import "./View.css";

const View = (props) => {
  return (
    <div className="view">
      <div className="content">
        <h2>You submitted the following:</h2>
        {props.items.map((item) => {
          return (
            <div>
              <p>Firstname: {item.firstname}</p>
              <p>Lastname: {item.lastname}</p>
              <p>Phone Number: {item.phoneNumber}</p>
              <p>Message: {item.message}</p>
              <p>Role: {item.role}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default View;
