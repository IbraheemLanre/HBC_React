import { React, Component } from "react";
import InputField from "../input/Input";
import Role from "../role/Role";
import TextArea from "../textarea/TextArea";

class FormContainer extends Component {
  state = {
    firstname: "",
    lastname: "",
    phoneNumber: "",
    message: "",
    role: "",
    submitting: false,
    roleOptions: ["Product Owner", "Software Engineer", "Designer"],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
      });
    }, 3000);
  };

  handleInputData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleReset() {}

  render() {
    return (
      <div className="container">
        {this.state.submitting && <div>Submitting Form..</div>}
        <form onSubmit={this.handleSubmit}>
          <InputField
            type={"text"}
            title={"Firstname"}
            name={"firstname"}
            value={this.state.firstname}
            placeholder={"Enter Firstname"}
            required
            handleChange={this.handleInputData}
          />
          <InputField
            type={"text"}
            title={"Lastname"}
            name={"lastname"}
            value={this.state.lastname}
            placeholder={"Enter Lastname"}
            required
            handleChange={this.handleInputData}
          />
          <InputField
            type={"number"}
            title={"Phone Number"}
            name={"phoneNumber"}
            value={this.state.phoneNumber}
            placeholder={"Enter phone number"}
            required
            handleChange={this.handleInputData}
          />
          <TextArea
            title={"Message"}
            cols={10}
            row={5}
            value={this.state.message}
            name={"message"}
            placeholder={"Write your message here"}
          />
          <Role
            title={"Role"}
            name={"role"}
            value={this.state.role}
            options={this.state.roleOptions}
            placeholder={"Select Role"}
            handleChange={this.handleInputData}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormContainer;
