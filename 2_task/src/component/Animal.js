import React from "react";
import "./Animal.css";

function Animal(props) {
  const popup = () => {
    alert(`Hello, I am a ${props.name}. It is nice to meet you!`);
  };

  return (
    <div className="card">
      <h1>{props.name}</h1>
      <div className="image">
        <img src={props.image} alt={props.name} />
      </div>
      <button onClick={popup}>Click</button>
    </div>
  );
}

export default Animal;
