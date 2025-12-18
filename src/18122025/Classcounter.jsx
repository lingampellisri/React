import React from "react";

class Classcounter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 10,count1:10
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 2 });
  };
  decrement = () => {
    this.setState({ count: this.state.count-1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>
          Counter
        </button>
        {/* <p>Count: {this.state.count1}</p> */}
        <button onClick={this.decrement}>
          Counterdec
        </button>
      </div>
    );
  }
}

export default Classcounter;
