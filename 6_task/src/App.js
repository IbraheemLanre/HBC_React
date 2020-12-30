import { React, Component } from "react";
import "./App.css";
import FormContainer from "./components/form/Form";
import Form_useState from "./components/form/Form_useState";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Form_useState />
        
      </div>
    );
  }
}

export default App;
