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
      <span>{page}</span>
      <div>
        <img src={image[0].profilepicture} alt="profile"></img>
        <span>{image[0].name}</span>
      </div>
    </Styledheader>
  );
};

export default Header;
