import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDecrement, onIncrement } = this.props;
    return (
      <div>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
