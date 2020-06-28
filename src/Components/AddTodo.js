import React, { memo } from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

const AddTodo = memo((props) => (
  <Paper style={{ margin: 16, padding: 16 }}>
    <Grid container>
      <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
        <TextField
          placeholder="Add Todo here"
          value={props.inputValue}
          onChange={props.onInputChange}
          onKeyPress={props.onInputKeyPress}
          fullWidth
        />
      </Grid>
      <Grid xs={2} md={1} item></Grid>
    </Grid>
  </Paper>
));

export default AddTodo;
