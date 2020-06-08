import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import UserList from "./components/UserList/userList";
import TodoList from "./components/TodoList/todoList";

class App extends Component {
  render() {
    return (
      <div>
        <div className="content">
          <Switch>
            <Route path="/todos" component={TodoList} />
            <Route path="/" component={UserList} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
