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
    return (
      <div className="App">
        <Animal
          name={this.state.animals[0].name}
          image={this.state.animals[0].image}
        />
        <Animal
          name={this.state.animals[1].name}
          image={this.state.animals[1].image}
        />
        <Animal
          name={this.state.animals[2].name}
          image={this.state.animals[2].image}
        />
      </div>
    );
  }
}

export default AnimalType;
