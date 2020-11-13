import React from "react";
import "./PopUp.css";

const submitHandler = () => {
  window.location.reload();
};

const PopUp = (props) => {
  
  return (
    <div className="overlay">
      <div className="showPopUp">
        <h2>Please check if the information is correct!</h2>
        <p>Firstname: {props.firstname}</p>
        <p>Lastname: {props.lastname}</p>
        <p>Phone Number: {props.phoneNumber}</p>
        <p>Message: {props.message}</p>
        <p>Role: {props.role}</p>
        <button onClick={submitHandler}>Submit</button>
      </div>
    </div>
  );
};
export default PopUp;
