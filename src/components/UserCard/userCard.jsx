import React, { Component, Fragment } from "react";
import "./styles.scss";

// type Props = {
//   user: any[],
// };

class Usercard extends Component {
  state = {};
  render() {
    const { username, name, company, phone, id } = this.props;
    return (
      <Fragment>
        <div className="card ">
          <div className="card-body">
            <h5 className="card-title">{username}</h5>
            <div className="card-details">
              <p className="card-text">{name}</p>
              <p className="card-text">{company}</p>
              <p className="card-text">{phone}</p>
            </div>
            <a href={`/todos/${id}`} className="btn btn-primary">
              View Todo
            </a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Usercard;
