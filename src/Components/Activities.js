import React, { useContext, useState, useEffect } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Context from "./Context";
import ListSubheader from "@material-ui/core/ListSubheader";
import Divider from "@material-ui/core/Divider";
import { ListItemIcon } from "@material-ui/core";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import Avatar from "@material-ui/core/Avatar";
import { ListItemAvatar } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 270,
      boxShadow:
        "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
      width: 320,
      margin: "0 3rem",
      backgroundColor: theme.palette.background.paper,
      position: "relative",
      overflow: "auto",
      maxHeight: 300,
      height: "100%",
      border: "solid 3px #00000000",
      borderRadius: 20,
    },
    listSection: {
      backgroundColor: "inherit",
    },
    ul: {
      backgroundColor: "inherit",
      padding: 0,
    },
  })
);

export default function PinnedSubheaderList() {
  const classes = useStyles();
  const { page, data, image, id } = useContext(Context);
  const [Activitieslist, setdata] = useState([]);

  useEffect(() => {
    fetch("https://panorbit.in/api/activity.json")
      .then((response) => response.json())
      .then((data) =>
        setdata(Object.values(data)[0].filter((x) => x.userId == id))
      )
      .catch((error) => console.log(error.message));
  }, []);

  debugger;

  return (
    <List
      className={classes.root}
      subheader={<li />}
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          align="center"
          fontsize="2rem"
          style={{ color: "black", fontSize: "2rem", fontWeight: "600" }}
        >
          Recent Activities
        </ListSubheader>
      }
    >
      <li className={classes.listSection} style={{ fontSize: "2rem" }}>
        <ul className={classes.ul} style={{ fontSize: "2rem" }}>
          {Object.entries(Activitieslist).map((item) => (
            <ListItem button>
              <ListItemIcon>
                <Avatar src={item[1].profilePicture} />
              </ListItemIcon>
              <ListItemText
                primary={image[0].name + " " + item[1].activity}
                style={{ fontSize: "2rem" }}
              />
              <ListItemText
                primary={item[1].time.slice(11)}
                align={"end"}
                style={{ fontSize: "2rem" }}
              />
            </ListItem>
          ))}
        </ul>
      </li>
    </List>
  );
}
