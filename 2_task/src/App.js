import React from "react";
import "./App.css";
import Animal from "./component/Animal";

function Welcome() {
  return <h1>Hello World</h1>;
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <Animal name="Lion" />
      <Animal name="Lion" />
      <Animal name="Lion" />
    </div>
  );
}

export default App;
