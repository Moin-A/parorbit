import React, { Component, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import styled, { isStyledComponent } from "styled-components";
import Chatdropup from "./Chatdropup";
import Header from "./Header";
import Content_screen_left from "./Content_screen_left";
import Content_screen_right from "./Content_screen_right";
import Context from "./Context";
import { Link, Router } from "@reach/router";
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
    grid-template-columns:
      [sidebar-start] 25rem [sidebar-end full-start] minmax(6rem, 1fr)
      [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end])
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
