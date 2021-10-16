import React from 'react';

class Counter extends React.Component {
  constructor() {
    super();
    console.log('Counter was instantiated');
  }

  // React to DOM node being placed in DOM tree (mounted)
  componentDidMount() {
    console.log('Counter was mounted into DOM');
  }

  // React to changes in the state or in the props of the component
  componentDidUpdate(previousProps, previousState) {
    console.log('Either props or state have been updated');
    console.log(previousProps.count, this.props.count);
    if (previousProps.count !== this.props.count) {
      console.log('Count has changed');
    } else {
      console.log('Something else has changed');
    }
  }

  // React prior to the component being unmounted from the DOM
  // and subsequentially destroyed
  componentWillUnmount() {
    console.log('Component will be unmounted from the DOM');
  }

  render() {
    console.log('Counter was rendered');
    return (
      <div>
        <span>{this.props.count}</span>
        <button onClick={this.props.onIncrement}>+</button>
      </div>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      displayCounter: true,
      count: 0
    };
    console.log('App was instantiated');
  }

  toggleCounter = () => {
    this.setState((currentState) => {
      return { displayCounter: !currentState.displayCounter };
    });
  };

  handleIncrement = () => {
    this.setState((currentState) => ({ count: currentState.count + 1 }));
  };

  render() {
    console.log('App was rendered');
    return (
      <div className="App">
        <button onClick={this.toggleCounter}>Toggle Counter</button>
        {this.state.displayCounter && (
          <Counter
            count={this.state.count}
            onIncrement={this.handleIncrement}
          />
        )}
      </div>
    );
  }
}

export default App;
