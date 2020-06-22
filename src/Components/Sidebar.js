import React, { useContext } from "react";
import styled, { isStyledComponent } from "styled-components";
import NavLink from "./NavLink";
import { Link, Router, Root } from "@reach/router";
import Context from "./Context";
import Post from "./Post";
import Child_Sidebar from "./Child_Sidebar";

const Sidebar = () => {
  const { data, page } = useContext(Context);
  const Styleddiv = styled.div`
    display: flex;
    max-height: 70%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: 2rem 1rem;
    border-radius: 4rem;

    .MuiList-root {
      margin: auto 3rem;
      justify-content: center;
      align-items: center;
      div {
        span {
          font-size: 1.5rem;
          color: #a4a6e4;
          :hover {
            color: white;
          }
        }
      }
    }

    /* display: flex;
    justify-content: center; */

    @media only screen and (max-width: 700px) {
      grid-column: 1 / -1;
      grid-row: 1 / 2;
      justify-content: flex-end;
      align-items: center;
    }
    /* label {
      :checked {
        font-size: 2rem;
      }
      width: 80%;
      display: inline-block;

      text-decoration: none;
      background: inherit;
    }
    a {
      text-decoration: none;
      padding: 4px 4px 12px 12px;
      font-size: 2rem;
      text-align: left;
      font-family: "FiraSans";
      display: block;
      border-bottom: 2px solid white;

      &:hover {
        color: white;
      }
      &:after {
        cursor: pointer;
      }
    } */
  `;
  return (
    <Styleddiv>
      <Child_Sidebar data={data} />
    </Styleddiv>
  );
};

export default Sidebar;
