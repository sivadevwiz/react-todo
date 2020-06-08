import React, { Component, Fragment } from "react";
import axios from "axios";
import "./styles.scss";

// type Props = {
//   todo: any[],
// };

class TodoRow extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      todoData: [],
    };
  }

  state = {
    todo: [],
  };

  toggleTodoState = () => {
    const { todo } = this.props;
    console.log("toggle TODO state", todo.id);
    // this.setState({ checked: !this.state.checked });
    axios
      .patch(
        `http://localhost:3000/todos/${todo.id}`,
        {
          completed: !this.state.checked,
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        console.log(res.data);
        this.setState({ checked: !this.state.checked });
      });
  };

  deleteTodo = () => {
      const { todo } = this.props;
    console.log("toggle TODO state", todo.id);
    axios
      .delete(
        `http://localhost:3000/todos/${todo.id}`,
       
        {
          "Content-Type": "application/json",
        }
      )
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      });

  }

  render() {
    const { todo } = this.props;
    return (
      <Fragment>
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id={todo.id}
            checked={todo.completed ? !this.state.checked : this.state.checked}
            onChange={this.toggleTodoState}
          />
          <label className="custom-control-label" htmlFor={todo.id}>
            {todo.title}
          </label>
          <button type="button" className="close" onClick={this.deleteTodo}>
  <span className="close" aria-hidden="true" title="delete todo">&times;</span>
</button>
        </div>
        
      </Fragment>
    );
  }
}

export default TodoRow;
