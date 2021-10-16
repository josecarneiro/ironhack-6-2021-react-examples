import React from 'react';
import Counter from './Counter';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    this.setState((currentState) => {
      return {
        count: currentState.count + 1
      };
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
        <Counter count={this.state.count} onIncrement={this.handleIncrement} />
      </div>
    );
  }
}

export default App;
