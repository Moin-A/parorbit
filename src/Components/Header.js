import React, { useContext, useEffect, useState } from "react";
import styled, { isStyledComponent } from "styled-components";
import Context from "./Context";

const Header = () => {
  const { page, data } = useContext(Context);
  const [image, setimage] = useState([
    {
      profilepicture: "https://panorb",
      company: { name: "xyz" },
      adress: { street: "xyz" },
    },
  ]);

  useEffect(() => {
    setimage(data);
  }, [data]);

  const Styledheader = styled.header`
    display: flex;
    grid-column: center-start/center-end;
    /* background-color: green; */
    border-bottom: 1px solid #cccccc;
    justify-content: space-between;
    align-items: center;
    font-size: "1.7rem";
    flex-grow: 1;
    span {
      box-sizing: border-box;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-weight: 500;
    }
    img {
      margin-right: 1rem;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      image-rendering: auto;
      image-rendering: crisp-edges;
      image-rendering: pixelated;
    }
  `;

  return (
    <Styledheader>
      <span style={{ fontSize: "1.5rem" }}>{page}</span>
      <div className={"header"}>
        <img src={image[0].profilepicture} alt="profile"></img>
        <span style={{ fontSize: "1.5rem" }}>{image[0].name}</span>
      </div>
    </Styledheader>
  );
};

export default Header;
