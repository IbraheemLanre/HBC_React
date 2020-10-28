import { React, Component } from "react";
import Animal from "./component/Animal";
import "./App.css";
import lion from "./component/Animal/Lion.jpg";
import dog from "./component/Animal/dog.jpg";
import cat from "./component/Animal/cat.jpg";

class AnimalType extends Component {
  state = {
    animals: {
      animalOne: "Lion",
      animalTwo: "Dog",
      animalThree: "Cat",
    },
  };

  render() {
    return (
      <div className="App">
        <Animal name={this.state.animals.animalOne} image={lion} />
        <Animal name={this.state.animals.animalTwo} image={dog} />
        <Animal name={this.state.animals.animalThree} image={cat} />
      </div>
    );
  }
}

export default AnimalType;
