import React, { useEffect } from "react";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import Activities from "./Components/Activities";
import Comment from "./Components/Comment";
import Homepage from "./Components/Homepage";
import { Link, Router, Root } from "@reach/router";
import Details from "./Components/Details";
import Post from "./Components/Post";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Gallery from "./Components/Gallery";
import { createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Chatdropup from "./Components/Chatdropup";
import Album from "./Components/Album";
import ToDo from "./Components/Todo";

import Content_screen_left from "./Components/Content_screen_left";
import Content_screen_right from "./Components/Content_screen_right";

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*::-webkit-scrollbar": {
          width: "0.4em",
          left: "-100px",
          Color: "",
          background: "#5980b01f",
          margin: "2rem 2rem",
        },
        typography: {
          // In Chinese and Japanese the characters are usually larger,
          // so a smaller fontsize may be appropriate.
          fontSize: 16,
        },
        html: {},
        body: {
          position: "fixed",
          width: "100%",
        },

        "*::-webkit-scrollbar-track": {
          boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
          margin: "1rem",
          padding: "2rem",
        },

        "*::-webkit-scrollbar-thumb": {
          backgroundColor: "#1754feb5",
          outline: "1px solid slategrey",
          // Margin: "10px",
          // padding: "10px",
          // marginRight: "10px",
          boxShadow: "inset 0 0 10px 10px red",
          border: "solid 3px transparent",
        },
      },
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="container">
        <Router>
          <Homepage path="/" />
          <Details path="profile/:id">
            <Content_screen_left path="/" />

            <Post path="/post/:id" wrapperProps={{ className: "my-class" }} />
            <Album path="/Album/:id" />

            <Gallery path="/gallery" />
            <Post path="/post/:id" />
            <ToDo path="/todo/:id" />
          </Details>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
