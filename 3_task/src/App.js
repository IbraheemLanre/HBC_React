import { React, Component } from "react";
import "./App.css";
import Button from "./components/buttons/Button";
import LikeDisplay from "./components/likeDisplay/LikeDisplay";
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

  removeLikes = () => {
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
        <LikeDisplay likes={this.state.likes} />
        <Button
          addLike={this.addLikes}
          removeLike={this.removeLikes}
          resetLike={this.resetLikes}
        />
      </div>
    );
  }
}

export default App;
