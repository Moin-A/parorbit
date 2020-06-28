import React, { memo, useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { useInputValue, useTodos } from "./custom-hooks";

import Layout from "./Layout";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const TodoApp = memo((props) => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { todos, addTodo, checkTodo, removeTodo } = useTodos();
  const [Data, setdata] = useState([]);

  const clearInputAndAddTodo = (_) => {
    clearInput();
    addTodo(inputValue);
  };

  useEffect(() => {
    const elements = document.querySelectorAll("div:not([class]):not([id])");
    Array.from(elements, (item) => item.classList.add("retroClass"));
  }, []);

  useEffect(() => {
    fetch("https://panorbit.in/api/todo.json")
      .then((response) => response.json())
      .then((data) =>
        setdata(Object.values(data.todo).filter((x) => x.userId === +props.id))
      )
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <React.Fragment>
      <Layout>
        <AddTodo
          inputValue={inputValue}
          onInputChange={changeInput}
          onButtonClick={clearInputAndAddTodo}
          onInputKeyPress={(event) => keyInput(event, clearInputAndAddTodo)}
        />
        <TodoList
          items={todos}
          onItemCheck={(idx) => checkTodo(idx)}
          onItemRemove={(idx) => removeTodo(idx)}
        />
      </Layout>
      <Layout></Layout>
    </React.Fragment>
  );
});

export default TodoApp;
