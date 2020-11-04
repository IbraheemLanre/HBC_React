import { React, Component } from "react";
import Animal from "./component/Animal";
import "./App.css";
import lion from "./component/Animal/Lion.jpg";
import dog from "./component/Animal/dog.jpg";
import cat from "./component/Animal/cat.jpg";

class AnimalType extends Component {
  state = {
    animals: [
      {
        name: "Lion",
        image: lion,
      },
      { name: "Dog", image: dog },
      { name: "Cat", image: cat },
    ],
  };

  render() {
    const animalList = this.state.animals.map((animal) => {
      return (
        <Animal key={animal.name} name={animal.name} image={animal.image} />
      );
    });
    return <div className="App">{animalList}</div>;
  }
}

export default AnimalType;
