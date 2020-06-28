import React, { memo } from "react";
import { AppBar, Toolbar, Typography, Paper } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
const Layout = memo((props) => (
  <Paper
    elevation={0}
    style={{
      padding: 0,
      margin: 0,
      backgroundColor: "#fafafa",
      width: "45rem",
      height: "45rem",
      margin: "1rem",
    }}
  >
    <CardHeader
      gutterBottom
      variant="h5"
      margin="1rem"
      component="h4"
      align="center"
      title="ToDo"
      style={{
        background: "lightgray",
        justifyContent: "center",
        fontWeight: "600",
        MozBorderRadiusTopleft: "50%",
      }}
    >
      Lizard
    </CardHeader>
    {props.children}
  </Paper>
));

export default Layout;
