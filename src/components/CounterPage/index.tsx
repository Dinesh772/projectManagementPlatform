import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

import stores from '../../stores'
const counterStore = stores.counterStore

type Props = {
  initialCount: number
}

@observer
class CounterPage extends Component<Props> {
  functionCalling

  handleIncrement = () => {
    counterStore.incrementCounter()
  }

  handleDecrement = () => {
    if (counterStore.count !== 0) {
      counterStore.decrementCounter()
    }
  }

  render() {
    return (
      <div>
        <h1>{counterStore.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    )
  }
}

export default CounterPage
