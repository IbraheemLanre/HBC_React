import React from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <div className="all-btn">
      <button>Read more</button>
      <button onClick={props.click}>Give a vote</button>
    </div>
  );
};

export default Button;
