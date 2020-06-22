import React, { useContext, useEffect, useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Context from "./Context";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import styled, { isStyledComponent } from "styled-components";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "block",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      padding: "1rem",
      borderRadius: "2rem ",
      fontSize: "4rem",
      paddingBlock: "2rem",
      width: "100%",
      maxWidth: "36ch",
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: "inline",
    },
    media: {
      height: 0,
      paddingTop: "43.25%", // 16:9
      fontsize: "3rem",
      borderRadius: "1rem",
      margin: "1rem",
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: "all 1s",
    },
    expandOpen: {
      transform: "rotate(180deg)",
      transition: "all 1s",
    },
    avatar: {
      backgroundColor: red[500],
    },
  })
);

export default function RecipeReviewCard({
  postdata,
  comment = { profilePicture: "xyz", body: "xyz" },
}) {
  const { page, data, image } = useContext(Context);

  const [Data, setdata] = useState([
    {
      profilepicture: "https://panorb",
      company: { name: "xyz" },
      address: { street: "xyz" },
    },
  ]);

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const Styleddiv = styled.div`
    grid-column: col-start / col-end 3;

    transition: all 0.5s;

    margin-bottom: 1rem;

    .MuiTypography-body2 {
      font-size: 1.59rem;
    }
    .MuiTypography-h6 {
      display: none;
    }
  `;

  useEffect(() => {
    const elements = document.querySelectorAll("div:not([class]):not([id])");
    Array.from(elements, (item) => item.classList.add("retroClass"));
  }, []);
  debugger;
  return (
    <Styleddiv>
      <Card className={classes.root}>
        <CardHeader
          avatar={<Avatar alt="Remy Sharp" src={image[0].profilepicture} />}
          action={<IconButton aria-label="settings"></IconButton>}
          title={image[0].name}
          subheader={postdata.time}
        />
        <CardMedia
          className={classes.media}
          image={postdata.image}
          title="Paella dish"
          classes="media_img"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {postdata.body}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <ListItem>
              <ListItemAvatar>
                <Avatar src={comment.profilePicture} />
              </ListItemAvatar>
              <ListItemText
                secondary={
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    display="inline"
                    gutterBottom={true}
                  >
                    {image[0].email}
                  </Typography>
                }
                primary={
                  <React.Fragment>
                    <Typography
                      variant="button"
                      display="inline-block"
                      gutterBottom={false}
                    >
                      {image[0].name}
                    </Typography>

                    <Typography
                      variant="caption"
                      color="textSecondary"
                      display="inline"
                      gutterBottom={false}
                    >
                      &nbsp;&nbsp; {comment.time}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Typography gutterBottom variant="h5" component="h6">
              {comment.body}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Styleddiv>
  );
}
