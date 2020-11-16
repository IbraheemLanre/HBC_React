import React from "react";
import Article from "../article/Article";
import Form from "../form/Form";
import "./Main.css";

const Main = () => {
  return (
    <div className="article">
      <Form />
      <Article />
    </div>
  );
};

export default Main;
