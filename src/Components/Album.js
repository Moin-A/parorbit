import React, { Component, useEffect, useState } from "react";
import Card from "./ImageCard";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      display: "grid",
      gridColumn: "center-start/center-end",
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  })
);

const Album = (props) => {
  const [data, setdata] = useState([]);
  const classes = useStyles();
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
  return (
    <Grid
      container
      className={classes.root}
      spacing={2}
      style={{ overflow: "auto", position: "relative", maxHeight: "480px" }}
    >
      <Grid item xs={26}>
        <Grid container justify="center">
          {Object.values(data).map((currElement, index) => (
            <Grid key={currElement.id} item>
              <Card data={currElement} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Album;
