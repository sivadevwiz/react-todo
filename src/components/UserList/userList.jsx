import React, { Component, Fragment } from "react";
import axios from "axios";

import Usercard from "../UserCard/userCard";
import "./styles.scss";

class UserList extends Component {
  state = {
    userData: [],
  };

  componentDidMount = () => {
    axios.get("http://localhost:3000/users").then((res) => {
      this.setState({ userData: res.data });
    });
  };

  render() {
    const { userData } = this.state;

    return (
      <Fragment>
        <div className="container main">
          <div className="row">
            {userData.map((user) => {
              return (
                <div className="col-4" key={user.id}>
                  <Usercard
                    username={user.username}
                    name={user.name}
                    company={user.company.name}
                    phone={user.phone}
                    id={user.id}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default UserList;
