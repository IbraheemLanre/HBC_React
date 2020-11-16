import { React, Component } from "react";

class Form extends Component {
  state = {
    firstname: "",
    lastname: "",
  };

  changeValueHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitHandler = (e) => {
    alert(`${this.state.firstname} ${this.state.lastname} was inserted`);
  };

  render() {
    return (
      <>
        <form onSubmit={this.submitHandler}>
          <div>
            <label htmlFor="firstname">First name</label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.changeValueHandler}
              name="firstname"
            />
          </div>
          <div>
            <label htmlFor="lastname">Last name</label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.changeValueHandler}
              name="lastname"
            />
          </div>

          <input type="submit" value="Send" />
        </form>
        <p>First Name: {this.state.firstname} </p>
        <p>Last Name: {this.state.lastname} </p>
      </>
    );
  }
}

export default Form;
