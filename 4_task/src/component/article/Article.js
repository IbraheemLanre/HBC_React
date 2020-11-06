import { React, Component } from "react";
import Button from "../button/Button";
import ict from "../img/ict.jpg";
import "./Article.css";

class Article extends Component {
  state = {
    likes: 0,
    img: ict,
  };

  giveVote = () => {
    this.setState({
      likes: this.state.likes + 1,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="container-img">
          <img src={this.state.img} alt={this.state.img} />
        </div>
        <div className="content">
          <h2>Full Stack Web Developer Porgram</h2>
          <p>
            Full Stack Web Developer program is designed for adults who want to
            work as software developers. Studying in the program is very
            practical in comparison to academic studying. The studies focus 100%
            on getting the core skills neede as a software developer.
          </p>
        </div>

        <p>{this.state.likes} people like this article</p>
        <Button click={this.giveVote} />
      </div>
    );
  }
}

export default Article;
