import { React, Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    const addLike = this.props.addLike;
    const removeLike = this.props.removeLike;
    const resetLike = this.props.resetLike;
    return (
      <div className="all-btn">
        <button onClick={addLike}>Add Like</button>
        <button onClick={removeLike}>Remove Like </button>
        <button onClick={resetLike}>Reset</button>
      </div>
    );
  }
}

export default Button;
