import React, { Component, useState, useEffect, useContext } from "react";
import TodoItem from "./TodoItem";
import Context from "./Context";
import Checkbox from "./Checkbox";
const TodoList = (props) => {
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

  return (
    <div>
      <Checkbox Data={Data} />
      {props.items.map((item) => (
        <TodoItem
          id={item.id}
          status={item.status}
          task={item.task}
          deleteItem={props.deleteItem}
          markItemComplete={props.markItemComplete}
        />
      ))}
    </div>
  );
};

export default TodoList;
