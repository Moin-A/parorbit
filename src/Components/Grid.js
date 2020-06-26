import React, { useEffect, useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Card from "./Gallery_card";
import List from "@material-ui/core/List";
import Context from "./Context";
import { useContext } from "react";
import ListItem from "@material-ui/core/ListItem";

const Grid = () => {
  <Grid container className={classes.root} spacing={2}>
    <Grid item xs={12}>
      <Grid container justify="center">
        {Object.values(galleryData).map((currElement, index) => (
          <Grid key={currElement.id} item>
            <List className={classes.root} subheader={<li />}>
              <ListItem key={currElement.id}>
                <Card data={currElement} />
              </ListItem>
            </List>
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>;
};
export default Grid;
