import { useState } from "react";

export const useInputValue = (props) => {
  const [inputValue, setInputValue] = useState(props.initialValue);
  debugger;
  return {
    inputValue,
    changeInput: (event) => setInputValue(event.target.value),
    clearInput: () => setInputValue(""),
    keyInput: (event, callback) => {
      if (event.which === 13 || event.keyCode === 13) {
        callback(inputValue);
        return true;
      }

      return false;
    },
  };
};

export const useTodos = (initialValue = []) => {
  const [todos, setTodos] = useState(initialValue);

  return {
    todos,
    addTodo: (text) => {
      if (text !== "") {
        setTodos(
          todos.concat({
            text,
            checked: false,
          })
        );
      }
    },
    checkTodo: (idx) => {
      setTodos(
        todos.map((todo, index) => {
          if (idx === index) {
            todo.checked = !todo.checked;
          }

          return todo;
        })
      );
    },
    removeTodo: (idx) => {
      setTodos(todos.filter((todo, index) => idx !== index));
    },
  };
};
