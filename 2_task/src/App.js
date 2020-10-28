import React from "react";
import "./App.css";
import Animal from "./component/Animal";
import lion from "./component/Animal/Lion.jpg";
import dog from "./component/Animal/dog.jpg";
import cat from "./component/Animal/cat.jpg";

function Welcome() {
  return <h1>Welcome to The Animal Kingdom</h1>;
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <Animal name="Lion" image={lion} />
      <Animal name="Dog" image={dog} />
      <Animal name="Cat" image={cat} />
    </div>
  );
}

export default App;
