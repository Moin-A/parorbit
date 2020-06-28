import React, { useState, useEffect } from "react";

import styled, { isStyledComponent } from "styled-components";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Link } from "@reach/router";

const Chatdropup = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://panorbit.in/api/users.json")
      .then((response) => response.json())
      .then((data) => setdata(Object.values(data.users)))
      .catch((error) => console.log(error.message));
  }, []);

  const Styleddiv = styled.div`
    position: fixed;
    bottom: 0rem;
    right: 30rem;
    z-index: 120;
    background: "red";
    button:focus ul {
      background: blue;
      color: white;
      visibility: visible; /* shows sub-menu */
      opacity: 1;
      z-index: 9;
      transform: translateY(-119%);
      transition-delay: 0s, 0s, 0.3s;
    }
  `;
  const Ul = styled.ul`
    position: absolute;
    top: 60%;
    left: 0;
    width: 100%;
    transform: translateY(-2em);
    z-index: -1;
    transition: all 0.4s ease-in-out 0s, visibility 0s linear 0.3s,
      z-index 0s linear 0.01s;

    :active {
      visibility: visible; /* shows sub-menu */
      opacity: 1;
      z-index: 1;
      transform: translateY(-100%);
      transition-delay: 0s, 0s, 0.3s;
    }

    li {
      list-style: none;
    }
  `;

  const Parentli = styled.button`
    position: relative;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    width: 23rem;
    color: inherit;
    border: none;
    padding: 0;
    height: 3rem;
    background: #2c65c8;
    font: inherit;

    & :active {
      visibility: visible; /* shows sub-menu */
      opacity: 1;
      z-index: 1;
      transform: translateY(0%);
      transition-delay: 0s, 0s, 0.3s;
    }
  `;

  return (
    <Styleddiv>
      <Parentli>
        <span>Chats</span>
        <Ul>
          <span
            style={{
              color: "gray",
              fontSize: "1.7rem",
              textAlign: "center",
            }}
          >
            Chats
          </span>
          {data.map((item) => (
            <li>
              <div>{item.name}</div>
            </li>
          ))}
        </Ul>
      </Parentli>
      <KeyboardArrowUpIcon
        style={{ position: "absolute", right: "6px", top: "8px" }}
      />
    </Styleddiv>
  );
};

export default Chatdropup;
