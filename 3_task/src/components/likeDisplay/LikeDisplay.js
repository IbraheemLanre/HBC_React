import { React, Component } from "react";
import "./LikeDisplay.css";

class LikeDisplay extends Component {
  render() {
    const likes = this.props.likes;
    let bgColor = "";
    if (likes % 2 === 0) {
      bgColor += "even";
    } else {
      bgColor += "odd";
    }

    return (
      <div className={bgColor}>
        <h1>Total Likes: {likes}</h1>
      </div>
    );
  }
}

export default LikeDisplay;
