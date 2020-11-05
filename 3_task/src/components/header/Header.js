import { React, Component } from "react";
import "./Header.css";

class Header extends Component {
  date = Date.now();

  render() {
    return (
      <div className="header">
        <p className="title">Counter</p>
        <p className="date">
          {new Intl.DateTimeFormat("en-GB", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "2-digit",
          }).format(this.date)}
        </p>
      </div>
    );
  }
}

export default Header;
