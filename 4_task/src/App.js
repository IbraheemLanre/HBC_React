import React from "react";
import Main from "./component/main/Main";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
