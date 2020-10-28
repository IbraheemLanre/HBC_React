import React from "react";
import "./App.css";
import Animal from "./component/Animal";
import lion from "./component/Animal/Lion.jpg";
import dog from "./component/Animal/dog.jpg"
import cat from "./component/Animal/cat.jpg"

function Welcome() {
  return <h1>Hello World</h1>;
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <Animal name="Lion" image={lion} />
      <Animal name="Lion" image={dog}/>
      <Animal name="Lion" image={cat}/>
    </div>
  );
}

export default App;
