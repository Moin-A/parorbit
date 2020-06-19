import React, { useContext, useState, useEffect } from "react";
import styled, { isStyledComponent } from "styled-components";
import Maps from "./Maps";

import Context from "./Context";

const Content_screen_left = () => {
  const { page, data } = useContext(Context);
  const [image, setimage] = useState([
    {
      profilepicture: "https://panorb",
      company: { name: "sss" },
      address: { street: "xyz" },
    },
  ]);

  useEffect(() => {
    setimage(data);
  }, [data]);
  const Styleddiv = styled.div`
    padding: 2rem;
    grid-column: col-start 4 / col-end 8;
    background-color: yellow;

    .grid {
      display: grid;
      grid-column-gap: 1rem;
      grid-template-columns: 1fr 3fr;
      margin: 2rem 5rem;
    }
    .Maps {
      div {
        div {
          max-width: 36%;
          max-height: 41%;
        }
      }
    }
  `;

  return (
    <Styleddiv>
      <div>
        <h2>
          Address : <h2></h2>
        </h2>
      </div>

      <div className={"grid"}>
        <h2 style={{ textAlign: "right" }}> Address : </h2>
        <h2> {image[0].address.street}</h2>
        <h2 style={{ textAlign: "right" }}>Suite :</h2>
        <h2> {image[0].address.suite}</h2>
        <h2 style={{ textAlign: "right" }}>City :</h2>
        <h2> {image[0].address.city}</h2>
        <h2 style={{ textAlign: "right" }}>Zipcode :</h2>
        <h2> {image[0].address.zipcode}</h2>
      </div>
      <div className={"Maps"}>
        <Maps />
      </div>
    </Styleddiv>
  );
};

export default Content_screen_left;
