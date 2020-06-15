import React from "react";
import "./App.css";
import Homepage from "./Components/Homepage";
import { Link, Router } from "@reach/router";
import Details from "./Components/Details";

function App() {
  return (
    <div>
      <Router>
        <Homepage path="/" />
        <Details path="/details" />
      </Router>
    </div>
  );
}

export default App;
