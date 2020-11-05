import { React, Component } from "react";
import Circle from "./components/circle/Circle";
import GameOver from "./components/gameover/GameOver";

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

class App extends Component {
  state = {
    score: 0,
    current: 0,
    showGameOver: false,
    rounds: 0,
    circles: [
      { id: 1, color: "green" },
      { id: 2, color: "blue" },
      { id: 3, color: "red" },
      { id: 4, color: "yellow" },
    ],
  };

  pace = 1500;
  timer = undefined;

  clickHandler = (id) => {
    console.log(`WOW! you clicked number ${id}`);
    if (this.state.current !== id) {
      this.stopHandler();
      return;
    }

    this.setState({
      score: this.state.score + 1,
      rounds: 0,
    });
  };
  h;

  nextCircle = () => {
    if (this.state.rounds >= 5) {
      this.stopHandler();
      return;
    }

    let nextActive = undefined;
    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
      rounds: this.state.rounds + 1,
    });

    this.pace *= 0.95;

    this.timer = setTimeout(this.nextCircle, this.pace);

    console.log(`Active circle is: ${this.state.current}`);
  };

  startHandler = () => {
    this.nextCircle();
  };

  stopHandler = () => {
    clearTimeout(this.timer);
    this.setState({
      showGameOver: true,
    });
  };

  render() {
    const circleList = this.state.circles.map((circle) => {
      return (
        <Circle
          key={circle.id}
          color={circle.color}
          click={() => this.clickHandler(circle.id)}
          active={this.state.current === circle.id}
        />
      );
    });

    return (
      <div className="App">
        <h1>Speedgame</h1>
        <p>Your Score is: {this.state.score}</p>
        <div>{circleList}</div>
        <button onClick={this.startHandler}>Start</button>
        <button onClick={this.stopHandler}>Stop</button>
        {this.state.showGameOver && <GameOver score={this.state.score} />}
      </div>
    );
  }
}

export default App;
