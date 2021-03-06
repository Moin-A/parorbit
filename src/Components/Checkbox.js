import React, { useState, useEffect, useContext } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";
import Context from "./Context";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 360,
    },
  })
);

export default function CheckboxList(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);
  const context1 = useContext(Context);
  const [Data, setdata] = useState([1]);
  useEffect(() => {
    fetch("https://panorbit.in/api/todo.json")
      .then((response) => response.json())
      .then((data) =>
        setdata(Object.values(data.todo).filter((x) => x.userId === props.id))
      )
      .catch((error) => console.log(error.message));
  }, []);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List className={classes.root}>
      {Data.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value}
            role={undefined}
            dense
            button
            onClick={handleToggle(value)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value.id) !== -1}
                tabIndex={-1}
                disableRipple
                color="default"
                inputProps={{ "aria-label": "checkbox with default color" }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={`Line item ${value.id + 1}`} />
            <ListItemSecondaryAction></ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
