import React, { useContext } from "react";
import Context from "./Context";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      position: "sticky",
      display: "grid",
      gridColumn: "center-start/center-end",
      top: 0,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: "black",

      fontSize: "2rem",
      fontWeight: "600",
    },
  })
);

export default function MenuAppBar() {
  const { page, data } = useContext(Context);
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          background: "transparent",
          boxShadow: "none",
          borderBottom: "1px solid #ccc",
        }}
      >
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {page}
          </Typography>
          {auth && (
            <div style={{ display: "flex" }}>
              <Avatar
                src={data[0].profilepicture}
                style={{ marginTop: "1rem", width: "5rem", height: "5rem" }}
              />
              <span
                style={{
                  color: "black",
                  fontSize: "2rem",
                  margin: "auto 2rem",
                }}
              >
                {data[0].name}
              </span>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
