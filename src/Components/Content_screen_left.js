import React, { useContext, useEffect, useState } from "react";
import Comment from "./Comment";
import { Link, Router } from "@reach/router";
import styled, { isStyledComponent } from "styled-components";
import Context from "./Context";
import Moin from "./Content_screen_right";

import Child_leftContent from "./Child_leftContentCard";

const Content_screen_right = (props) => {
  const { page, data } = useContext(Context);
  const [image, setimage] = useState([
    { profilepicture: "https://panorb", company: { name: "sss" } },
  ]);

  useEffect(() => {
    const elements = document.querySelectorAll("div:not([class]):not([id])");
    Array.from(elements, (item) => item.classList.add("retroClass_Details"));
  }, []);
  useEffect(() => {
    setimage(data);
  }, [data]);
  const Styleddiv = styled.div`
    grid-column: col-start / col-end 3;
    background-color: yellow;
    :first-child {
      border-right: 1px solid #cccccc;
    }
    div {
      justify-content: center;
      box-shadow: none;
      padding: 0;
    }
    img {
      margin: 2rem auto;
      width: 18rem;
      height: 18rem;
      border-radius: 50%;
      image-rendering: auto;
      image-rendering: crisp-edges;
      image-rendering: pixelated;
    }
    .center {
      text-align: center;
    }
  `;

  return (
    <React.Fragment>
      <Child_leftContent data={data} />
      <Moin />
    </React.Fragment>
  );
};

export default Content_screen_right;
