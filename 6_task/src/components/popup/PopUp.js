import React from "react";
import "./PopUp.css";

const closeHandler = () => {
  window.location.reload();
};

const PopUp = ({ firstname, lastname, phoneNumber, message, role, submit }) => {
  return (
    <div className="overlay">
      <div className="showPopUp">
        <h2>Please check if the information is correct!</h2>
        <p>Firstname: {firstname}</p>
        <p>Lastname: {lastname}</p>
        <p>Phone Number: {phoneNumber}</p>
        <p>Message: {message}</p>
        <p>Role: {role}</p>
        <input type="button" id="btn-yes" onClick={submit} value="Yes, I am sure"/>
        <button id="btn-no" onClick={closeHandler}>
          No, I don't want to post it
        </button>
      </div>
    </div>
  );
};
export default PopUp;
