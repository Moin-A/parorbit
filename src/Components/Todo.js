import React, { Component, useEffect } from "react";
import Context from "./Context";
import TodoList from "./Todolist";
import TodoItem from "./TodoItem";
import CardHeader from "@material-ui/core/CardHeader";
import styled, { isStyledComponent } from "styled-components";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

// or

class Todo extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
      items: [],
    };

    const Stylediv = styled.div``;

    this.componentDidMount = () => {
      const elements = document.querySelectorAll("div:not([class]):not([id])");
      Array.from(elements, (item) => item.classList.add("retroClass"));
      Array.from(elements, (item) => item.classList.add("retroClas-flex"));
    };

    this.handleInput = (event, id = this.props.id) => {
      this.setState({
        value: event.target.value,
      });
    };

    this.handleAddItem = (event, id = this.props.id) => {
      event.preventDefault();

      if (this.state.value === "") return;

      const newItem = {
        task: this.state.value,
        id: Date.now(),
        status: false,
      };

      this.setState((prevState) => ({
        items: prevState.items.concat(newItem),
        value: "",
      }));
    };

    this.handleMarkItemComplete = (itemId) => {
      const updatedItems = this.state.items.map((item) => {
        if (itemId === item.id) item.status = !item.status;

        return item;
      });

      this.setState({
        items: [].concat(updatedItems),
      });
    };

    this.handleDeleteItem = (itemId) => {
      const updatedItems = this.state.items.filter((item) => {
        return item.id !== itemId;
      });

      this.setState({
        items: [].concat(updatedItems),
      });
    };
  }

  render() {
    const btn_style = {
      marginLeft: "10px",
      marginBottom: "5px",
    };

    const input_style = {
      width: "250px",
      padding: "5px",
    };

    const containerfluid = {
      maxHeight: "100%",
    };

    return (
      <Context.Provider id={this.props.id}>
        <div className="row" style={{ margin: "0 1rem" }}>
          <div className="body">
            <Card>
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

              <TodoList
                items={this.state.items}
                deleteItem={this.handleDeleteItem}
                markItemComplete={this.handleMarkItemComplete}
                id={+this.props.id}
              ></TodoList>
              <input
                style={input_style}
                placeHolder="Add New Todo"
                type="input"
                onChange={this.handleInput}
                value={this.state.value}
              />
              <button
                style={btn_style}
                type="button"
                className="btn btn-primary btn-md"
                onClick={this.handleAddItem}
              >
                AddAdd
              </button>
            </Card>
          </div>

          <div className="col-md-4"></div>
        </div>

        <div className="row" style={{ margin: "0 1rem" }}>
          <div className="body">
            <Card>
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

              <input
                style={input_style}
                placeHolder="Add New Todo"
                type="input"
                onChange={this.handleInput}
                value={this.state.value}
              />
              <button
                style={btn_style}
                type="button"
                className="btn btn-primary btn-md"
                onClick={this.handleAddItem}
              >
                Add
              </button>
              <TodoList
                items={this.state.items}
                deleteItem={this.handleDeleteItem}
                markItemComplete={this.handleMarkItemComplete}
                id={+this.props.id}
              />
            </Card>
          </div>

          <div className="col-md-4"></div>
        </div>
      </Context.Provider>
    );
  }
}

export default Todo;
