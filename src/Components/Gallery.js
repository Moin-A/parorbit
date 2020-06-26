import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Card from "./Gallery_card";
import List from "@material-ui/core/List";
import Context from "./Context";
import { useContext } from "react";
import ListItem from "@material-ui/core/ListItem";
import { Link, Router, Root } from "@reach/router";

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

export default function SpacingGrid() {
  const [galleryData, setgalleryData] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const elements = document.querySelectorAll("div:not([class]):not([id])");
    Array.from(elements, (item) => item.classList.add("retroClass"));
  }, []);

  useEffect(() => {
    fetch("https://panorbit.in/api/albums.json")
      .then((response) => response.json())
      .then((data) => setgalleryData(data.album))
      .catch((error) => console.log(error.message));
  }, []);
  debugger;
  return (
    <div className="parentdiv">
      <Grid
        container
        className={classes.root}
        spacing={2}
        style={{ overflow: "auto", position: "relative", maxHeight: "480px" }}
      >
        <Grid item xs={26}>
          <Grid container justify="center">
            {Object.values(galleryData).map((currElement, index) => (
              <Grid key={currElement.id} item>
                <Card data={currElement} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
