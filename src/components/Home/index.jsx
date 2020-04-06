import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

@observer
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <Link to="/counter">
          <p>Counter</p>
        </Link>
      </div>
    );
  }
}

export default Home;
