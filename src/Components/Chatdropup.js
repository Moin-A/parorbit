import React from "react";

import styled, { isStyledComponent } from "styled-components";
import { Link } from "@reach/router";

const chatdropup = () => {
  const Styleddiv = styled.div`
    position: fixed;
    bottom: 0rem;
    right: 30rem;
    button:focus ul {
      visibility: visible; /* shows sub-menu */
      opacity: 1;
      z-index: 1;
      transform: translateY(-120%);
      transition-delay: 0s, 0s, 0.3s;
    }
  `;
  const Ul = styled.ul`
    position: absolute;
    top: 100%;
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
    width: 24rem;
    color: inherit;
    border: none;
    padding: 0;
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
          <span>Chats</span>
          <li>
            <a href="#">Sub Item 1</a>
          </li>
          <li>
            <a href="#">Sub Item 2</a>
          </li>
          <li>
            <a href="#">Sub Item 3</a>
          </li>
          <li>
            <a href="#">Sub Item 4</a>
          </li>
        </Ul>
      </Parentli>
    </Styleddiv>
  );
};

export default chatdropup;
