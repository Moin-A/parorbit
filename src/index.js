import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const Index = () => {
  return (
    <React.Fragment>
      <App />
    </React.Fragment>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
