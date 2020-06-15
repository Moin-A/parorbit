import React, { Component } from "react";
import styled, { isStyledComponent } from "styled-components";
import Api from "../API/Accounts";

const Homepage = () => {
  const [State] = Api("https://panorbit.in/api/users.json");
  const Styleddiv = styled.div`
   box-shadow: 5px 5px rgba(0, 98, 90, 0.4),
              10px 10px rgba(0, 98, 90, 0.3),
              15px 15px rgba(0, 98, 90, 0.2),
              20px 20px rgba(0, 98, 90, 0.1),
              25px 25px rgba(0, 98, 90, 0.05);
  border-radius:1rem;
    h2 {
  display: flex;
  align-items: center;
  justify-content: center;
    position: sticky;
    top: 0;
    height: 6rem;
    background-color: antiquewhite;
    margin:0
}
  position:fixed;
    text-align:center;
    min-width: 30vw;
    max-height: 500px;
    overflow: scroll;
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
}
    & a {
      background-color: #eee;
      color: black;
      display: block;
      padding: 12px;
      text-decoration: none;
      &:hover {
        background-color: #ccc;
      }
      &:active {
        background-color: #4caf50;
        color: white;
      }
  `;

  return (
    <React.Fragment>
      <Styleddiv>
        <h2>Select an Account</h2>
        <div>
          {State.map((item) => (
            <a href="#">{item.name}</a>
          ))}
        </div>
      </Styleddiv>
    </React.Fragment>
  );
};

export default Homepage;
