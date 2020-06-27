import React, { Component, useEffect, useState } from "react";
import Activities from "./Activities";
import styled, { isStyledComponent } from "styled-components";
import Comment from "./Comment";
import Context from "./Context";
import { Link, Router } from "@reach/router";
const Post = (props) => {
  const [data, setdata] = useState([
    {
      profilepicture: "https://panorb",
      company: { name: "xyz" },
      address: { street: "xyz" },
    },
  ]);

  const [page, setpage] = useState("Profile");
  const [image, setimage] = useState("Profile");
  const [comment, setcomment] = useState([
    {
      profilePicture: "https://panorb",
      company: { name: "xyz" },
      address: { street: "xyz" },
    },
  ]);

  useEffect(() => {
    fetch("https://panorbit.in/api/posts.json")
      .then((response) => response.json())
      .then((data) =>
        setdata(Object.values(data)[0].filter((x) => x.userId == props.id))
      )
      .catch((error) => console.log(error.message));
  }, []);

  useEffect(() => {
    fetch("https://panorbit.in/api/users.json")
      .then((response) => response.json())
      .then((data) =>
        setimage(Object.values(data.users).filter((x) => x.id == props.id))
      )
      .catch((error) => console.log(error.message));
  }, []);

  useEffect(() => {
    fetch("https://panorbit.in/api/comments.json")
      .then((response) => response.json())
      .then((data) => setcomment(Object.values(data)))
      .catch((error) => console.log(error.message));
  }, []);

  const Styleddiv = styled.div`
    background-color: blue;
    /* display: grid;
    grid-template-rows: 13vh min-content 10vh; */
    grid-gap: 2rem;
    grid-template-columns:
      [sidebar-start] 25rem [sidebar-end full-start] minmax(6rem, 1fr)
      [center-start] repeat(8, [col-start] minmax(min-content, 14rem) [col-end])
      [center-end] minmax(6rem, 1fr) [full-end];
  `;

  return (
    <Context.Provider value={{ page, data, image, id: props.id }}>
      <div className="div" style={{ overflow: "auto" }}>
        {Object.values(data).map((item) => (
          <Comment
            className="comment"
            postdata={item}
            comment={Object.values(comment)[0][item.id - 1]}
          />
        ))}
      </div>
      <div>
        <Activities />
      </div>
    </Context.Provider>
  );
};

export default Post;
