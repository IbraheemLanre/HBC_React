import React from "react";
import "./App.css";
import Box from "./components/Box/Box";

function App() {
  return (
    <div className="App">
      <Box name="Maria" title="CEO" age="25" />
      <Box name="Kati" title="Developer" age="35" />
      <Box name="Karin" title="Designer" age="45" />
    </div>
  );
}

export default App;
