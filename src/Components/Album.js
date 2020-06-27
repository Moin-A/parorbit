import React, { Component, useEffect, useState } from "react";

const Album = (props) => {
  const [data, setdata] = useState([]);
  debugger;

  useEffect(() => {
    const elements = document.querySelectorAll("div:not([class]):not([id])");
    Array.from(elements, (item) => item.classList.add("retroClass"));
  }, []);

  useEffect(() => {
    fetch("https://panorbit.in/api/photos.json")
      .then((response) => response.json())
      .then((data) =>
        setdata(
          Object.values(data.albums).filter((x) => x.albumId === +props.id)
        )
      )
      .catch((error) => console.log(error.message));
  }, []);
  return <div>hello</div>;
};

export default Album;
