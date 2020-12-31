import { React, useState } from "react";
import axios from "axios";
import InputField from "../input/Input";
import Role from "../role/Role";
import TextArea from "../textarea/TextArea";
import View from "../view/View";
import PopUp from "../popup/PopUp";
import NoteList from "../notelist/NoteList";
import "./Form.css";

const Form_useState = () => {
  const [note, setNote] = useState({
    firstname: "",
    lastname: "",
    phoneNumber: "",
    message: "",
    role: "",
    // roleOptions: ["Product Owner", "Software Engineer", "Designer"],
  });

  const [showPopUp, setShowPopUp] = useState(false);

  const handleInputData = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handlePopUp = (e) => {
    setShowPopUp(true);
    e.preventDefault();
  };

  const handleSubmit = () => {
    axios.post("http://localhost:3001/notes", note);
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="form-area">
        <form onSubmit={handlePopUp}>
          <InputField
            type={"text"}
            title={"Firstname"}
            name={"firstname"}
            value={note.firstname}
            placeholder={"Enter Firstname"}
            handleChange={handleInputData}
          />
          <InputField
            type={"text"}
            title={"Lastname"}
            name={"lastname"}
            value={note.lastname}
            placeholder={"Enter Lastname"}
            handleChange={handleInputData}
          />
          <InputField
            type={"number"}
            title={"Phone Number"}
            name={"phoneNumber"}
            value={note.phoneNumber}
            placeholder={"Enter phone number"}
            handleChange={handleInputData}
          />
          <TextArea
            title={"Message"}
            col={"40"}
            row={"5"}
            value={note.message}
            name={"message"}
            placeholder={"Write your message here"}
            handleChange={handleInputData}
          />
          <Role
            title={"Role"}
            name={"role"}
            value={note.role}
            placeholder={"Select Role"}
            handleChange={handleInputData}
          />
          <div className="btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div className="resultArea">
        <View
          firstname={note.firstname}
          lastname={note.lastname}
          phoneNumber={note.phoneNumber}
          message={note.message}
          role={note.role}
        />
      </div>
      {showPopUp && (
        <PopUp
          firstname={note.firstname}
          lastname={note.lastname}
          phoneNumber={note.phoneNumber}
          message={note.message}
          role={note.role}
          submit={handleSubmit}
        />
      )}
      <NoteList />
    </div>
  );
};

export default Form_useState;
