import React from "react";
import "./App.css";
import Comment from "./Components/Comment";
import Homepage from "./Components/Homepage";
import { Link, Router, Root } from "@reach/router";
import Details from "./Components/Details";
import Post from "./Components/Post";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

import Chatdropup from "./Components/Chatdropup";

import Content_screen_left from "./Components/Content_screen_left";
import Content_screen_right from "./Components/Content_screen_right";

function App() {
  return (
    <div>
      <Router>
        <Homepage path="/" />
        <Details path="details/:id">
          <Content_screen_left path="/" />
          <Content_screen_right path="/" />
          <Comment path="post" wrapperProps={{ className: "my-class" }} />
        </Details>
      </Router>
    </div>
  );
}

export default App;
