import { React, Component } from "react";
import InputField from "../input/Input";
import Role from "../role/Role";
import TextArea from "../textarea/TextArea";
import View from "../view/View";
import PopUp from "../popup/PopUp";

import "./Form.css";

class FormContainer extends Component {
  state = {
    firstname: "",
    lastname: "",
    phoneNumber: "",
    message: "",
    role: "",
    roleOptions: ["Product Owner", "Software Engineer", "Designer"],
    items: [],
    showPopUp: false,
  };

  handleInputData = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    let items = [...this.state.items];

    items.push({
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phoneNumber: this.state.phoneNumber,
      message: this.state.message,
      role: this.state.role,
    });

    this.setState({
      items,
      showPopUp: true,
    });
    e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <h1>Welcome Here</h1>
        <div className="form-area">
          <form onSubmit={this.handleSubmit}>
            <InputField
              type={"text"}
              title={"Firstname"}
              name={"firstname"}
              value={this.state.firstname}
              placeholder={"Enter Firstname"}
              handleChange={this.handleInputData}
            />
            <InputField
              type={"text"}
              title={"Lastname"}
              name={"lastname"}
              value={this.state.lastname}
              placeholder={"Enter Lastname"}
              handleChange={this.handleInputData}
            />
            <InputField
              type={"number"}
              title={"Phone Number"}
              name={"phoneNumber"}
              value={this.state.phoneNumber}
              placeholder={"Enter phone number"}
              handleChange={this.handleInputData}
            />
            <TextArea
              title={"Message"}
              col={"40"}
              row={"5"}
              value={this.state.message}
              name={"message"}
              placeholder={"Write your message here"}
              handleChange={this.handleInputData}
            />
            <Role
              title={"Role"}
              name={"role"}
              value={this.state.role}
              options={this.state.roleOptions}
              placeholder={"Select Role"}
              handleChange={this.handleInputData}
            />
            <div className="btn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="resultArea">
          {this.state.showPopUp && (
            <PopUp
              firstname={this.state.firstname}
              lastname={this.state.lastname}
              phoneNumber={this.state.phoneNumber}
              message={this.state.message}
              role={this.state.role}
            />
          )}

          <View items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default FormContainer;
