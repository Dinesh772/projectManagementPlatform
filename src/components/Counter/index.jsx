import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";

@inject("counterStore")
@observer
class Counter extends Component {
  handleIncrement = () => {
    const { counterStore } = this.props;
    counterStore.incrementCounter();
  };

  handleDecrement = () => {
    const { counterStore } = this.props;
    if (counterStore.count !== 0) {
      counterStore.decrementCounter();
    }
  };

  render() {
    const { counterStore } = this.props;
    return (
      <div>
        <h1>{counterStore.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>

        <Link to="/">
          <p>Home</p>
        </Link>
      </div>
    );
  }
}

export default Counter;
