import { React, Component } from "react";
import "./App.css";
import FormContainer from "./components/form/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome Here</h1>
        <FormContainer/>
      </div>
    );
  }
}

export default App
