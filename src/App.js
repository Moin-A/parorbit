import React from "react";
import "./App.css";
import Homepage from "./Components/Homepage";
import styled from "styled-components";

function App() {
  const Styleddiv = styled.div`
    background: url("bg.jpg");
  `;

  return (
    <div className="container">
      <div>
        <Homepage />
      </div>
    </div>
  );
}

export default App;
