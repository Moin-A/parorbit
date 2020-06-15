import React, { Component } from "react";
import styled, { isStyledComponent } from "styled-components";
import Api from "../API/Accounts";
import { Link } from "@reach/router";

const Homepage = () => {
  const [State] = Api("https://panorbit.in/api/users.json");
  const Styleddiv = styled.div`
   box-shadow: 5px 5px rgba(0, 98, 90, 0.4),
              10px 10px rgba(0, 98, 90, 0.3),
              15px 15px rgba(0, 98, 90, 0.2),
              20px 20px rgba(0, 98, 90, 0.1),
              25px 25px rgba(0, 98, 90, 0.05);
  border-radius:1rem;
  & img{
    display:flex;
    border-radius: 50%;
    width:5rem;
    height:5rem;
  }
span {
  flex-grow:2;
  display:flex;
  align-items: center;
  justify-content: center;
}

  h2 {
    z-index:2;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  height: 7rem;
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
  a {

  flex:1;
  display:flex;  
  cursor:pointer;
  margin:0;
  background-color: #eee;
  color: black;
  padding: 12px;
  text-decoration: none;
  &:after { 
    content: '';
    border-bottom: 1px solid lightblue;
    width:90%;
    position:absolute;
    margin:-1rem;

  }

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
        <div style={{ padding: 0 }}>
          {State.map((item) => (
            <Link to={"/details"}>
              {}
              <img src={item.profilepicture} alt="Girl in a jacket"></img>
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </Styleddiv>
    </React.Fragment>
  );
};

export default Homepage;
