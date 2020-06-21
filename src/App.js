import React, { useEffect } from "react";
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

const App = () => {
  return (
    <div className="container">
      <Router>
        <Homepage path="/" />
        <Details path="profile/:id">
          <Content_screen_left path="/" />

          <Post path="/post/:id" wrapperProps={{ className: "my-class" }} />
        </Details>
      </Router>
    </div>
  );
};

export default App;
