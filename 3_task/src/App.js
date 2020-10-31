import { React, Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    likes: 0,
  };

  addLikes = () => {
    console.log("Added like");
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  removeLikes = (like) => {
    console.log("Removed like");
    if (this.state.likes > 0) {
      this.setState({
        likes: this.state.likes - 1,
      });
    }
  };

  resetLikes = () => {
    console.log("Reset like");
    this.setState({
      likes: 0,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Total like: {this.state.likes}</h1>
        <button onClick={this.addLikes}>Add like</button>
        <button onClick={this.removeLikes}>Remove like</button>
        <button onClick={this.resetLikes}>Reset like</button>
      </div>
    );
  }
}

export default App;
