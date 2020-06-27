import React, { Component, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import styled, { isStyledComponent } from "styled-components";

import Chatdropup from "./Chatdropup";
import Header from "./Header";
import Content_screen_left from "./Content_screen_left";
import Content_screen_right from "./Content_screen_right";
import Context from "./Context";
import { Link, Router } from "@reach/router";
import Activities from "./Activities";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1,
//       display: "grid",
//       gridColumn: "center-start/center-end",
//     },
//     paper: {
//       height: 140,
//       width: 100,
//     },
//     control: {
//       padding: theme.spacing(2),
//     },
//   })
// );

const Details = (props) => {
  const [data, setdata] = useState([
    {
      profilepicture: "https://panorb",
      company: { name: "xyz" },
      address: { street: "xyz" },
    },
  ]);
  const [page, setpage] = useState("Profile");

  const Styleddiv = styled.div`
    background-color: #ffffff;
    display: grid;
    grid-template-rows: 13vh 120vh 10vh;
    grid-gap: 2rem;
    position: relative;
    grid-template-columns:
      [sidebar-start] 22rem [sidebar-end full-start] minmax(6rem, 1fr)
      [center-start] repeat(8, [col-start] minmax(min-content, 19rem) [col-end])
      [center-end] minmax(6rem, 1fr) [full-end];
  `;

  useEffect(() => {
    fetch("https://panorbit.in/api/users.json")
      .then((response) => response.json())
      .then((data) =>
        setdata(Object.values(data.users).filter((x) => x.name == props.id))
      )
      .catch((error) => console.log(error.message));
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll("div:not([class]):not([id])");
    Array.from(elements, (item) => item.classList.add("retroClass"));
  }, []);

  useEffect(() => {
    setpage(props.location.pathname);
  }, [props.location.href]);

  return (
    <Context.Provider value={{ page, data, props }}>
      <Styleddiv>
        <Header />
        <Sidebar />

        <Chatdropup />

        {props.children}
      </Styleddiv>
    </Context.Provider>
  );
};

export default Details;
