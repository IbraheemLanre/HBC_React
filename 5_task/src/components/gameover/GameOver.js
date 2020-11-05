import React from "react";
import "./GameOver.css";

const closeHandler = () => {
  window.location.reload();
};

const GameOver = (props) => {
  return (
    <div className="overlay">
      <div className="gameover-popup">
        <h2>Game Over</h2>
  <p>Your score was: {props.score}</p>
        <button onClick={closeHandler}>Close</button>
      </div>
    </div>
  );
};

export default GameOver;
