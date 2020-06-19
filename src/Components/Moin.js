import React, { Component, useState, useContext, useEffect } from "react";
import Context from "./Context";
import styled, { isStyledComponent } from "styled-components";

const Moin = () => {
  const { page, data } = useContext(Context);
  const [image, setimage] = useState([
    { profilepicture: "https://panorb", company: { name: "sss" } },
  ]);

  useEffect(() => {
    setimage(data);
  }, [data]);
  const Styleddiv = styled.div`
    grid-column: col-start / col-end 3;
    background-color: yellow;
    :first-child {
      background-color: red;
    }
    div {
      display: grid;
      justify-content: center;
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
    <div>
      <div>
        <img src={image[0].profilepicture} alt="profile"></img>
        <h2 className="center">{image[0].name}</h2>
      </div>
      <div style={{ borderBottom: "3px solid red" }}>
        <h2>
          Username: <span>{image[0].username}</span>
        </h2>
        <h2>
          email: <span>{image[0].email}</span>
        </h2>
        <h2>
          Phone <span>{image[0].phone}</span>
        </h2>
        <h2>
          Website: <span>{image[0].website}</span>
        </h2>
      </div>
      <div>
        <h2>COMPANY</h2>
      </div>
      <h2>
        Website: <span>{image[0].company.name}</span>
      </h2>
      <h2>
        catchphrase: <span>{image[0].company.catchPhrase}</span>
      </h2>
      <h2>
        bs: <span>{image[0].company.bs}</span>
      </h2>
    </div>
  );
};

export default Moin;
