import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "@reach/router";
import { navigate } from "@reach/router";

const useStyles = makeStyles({
  root: {
    maxWidth: 270,
    maxHeight: 220,
    margin: "1rem",
  },
  media: {
    height: 140,
    width: 200,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  const handleExpandClick = (e) => {};

  return (
    <a size="small" color="primary" href={props.data.url}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.data.url}
            title="Contemplative Reptile"
          />
        </CardActionArea>
      </Card>
    </a>
  );
}
