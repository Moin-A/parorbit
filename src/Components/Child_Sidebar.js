import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "@reach/router";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      maxWidth: "50%",
      maxHeight: "12rem",
      alignItems: "center",
      alignItems: "center",
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      margin: "auto 0",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 2,
      padding: "1rem",
      margin: "auto 0",
    },
    drawerPaper: {
      minWidth: "22rem",
      margin: "3rem",
      borderRadius: "2rem",
      borderRadius: "2rem",
      maxHeight: "90%",
      backgroundColor: "#4054c9",
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  })
);

export default function PermanentDrawerLeft({ data }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          <React.Fragment>
            <Link to={`/profile/${Object.values(data)[0].name}`}>
              <ListItem button key={1}>
                <ListItemText primary={"Profile"}></ListItemText>
              </ListItem>
            </Link>

            <Divider />

            <Link to={`post/${data[0].id}`}>
              <ListItem button key={1}>
                <ListItemText primary={"Post"}></ListItemText>
              </ListItem>
            </Link>
            <Divider />
            <Link to={`gallery/`}>
              <ListItem button key={3}>
                <ListItemText primary={"Gallery"} />
              </ListItem>
            </Link>
            <Divider />
            <ListItem button key={4}>
              <ListItemText primary={"ToDo"} />
            </ListItem>
            <Divider />
          </React.Fragment>
        </List>
      </Drawer>
    </div>
  );
}
