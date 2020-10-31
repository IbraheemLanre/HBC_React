import { React, Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    likes: 0,
  };

  render() {
    return (
      <div className="App">
        <h1>Total like: {this.state.likes}</h1>
      </div>
    );
  }
}

export default App;
