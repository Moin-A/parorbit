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
    height: 100,
    width: 200,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  const handleExpandClick = () => {
    navigate(`Album/${props.data.id}`);
  };

  return (
    <Button size="small" color="primary" onClick={handleExpandClick}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://panorbit.in/wp-content/uploads/2019/hotlink-ok/1004.jpeg"
            title="Contemplative Reptile"
          />

          <CardContent>
            <Typography variant="h5" component="h2">
              {props.data.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Button>
  );
}
