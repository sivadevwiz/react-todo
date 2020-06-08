import React, { Component, Fragment } from "react";
import axios from "axios";
import "./styles.scss";

import TodoRow from "../TodoRow/todoRow";

class TodoList extends Component {
  state = {
    todoData: [],
    todoField: "",
  };

  componentDidMount = () => {
    console.log(
      "URL path",
      this.props.location.pathname.replace("/todos/", "")
    );
    let URL =
      "http://localhost:3000/todos?userId=" +
      this.props.location.pathname.replace("/todos/", "");
    axios.get(URL).then((res) => {
      this.setState({ todoData: res.data });
      console.log(res.data);
    });
  };

  addTodo = () => {
    const { todoField } = this.state;
    console.log("todo field..........", todoField);
    axios
      .post(
        `http://localhost:3000/todos/`,
        {
          userId: this.props.location.pathname.replace("/todos/", ""),
          title: todoField,
          completed: false,
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ checked: !this.state.checked });
        this.componentDidMount();
      });
  };

  handleChange = (e) => {
    this.setState({ todoField: e.target.value });
  };

  render() {
    const { todoData } = this.state;

    return (
      <Fragment>
        <div className="container todo">
          <div className="row">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Type you new todo"
                onChange={this.handleChange}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={this.addTodo}
                >
                  Add Todo
                </button>
              </div>
            </div>
          </div>

          {todoData.map((todo) => {
            return <TodoRow todo={todo} key={todo.id} />;
          })}
        </div>
      </Fragment>
    );
  }
}

export default TodoList;
