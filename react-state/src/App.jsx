import React from 'react';
import ClickablePicture from './ClickablePicture';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      message: 'Hello world'
    };
    console.log('Component is instantiated');
  }

  // Public class field syntax
  // Will ensure that the value of this inside of the method
  // refers to the instance of the App component
  handleIncrement = (event) => {
    console.log('Incrementing count', event);
    // The setState method can take either an object
    // with properties that should be updated in the component state
    // or a function that returns said object and gets called
    // with a reference to the current state object
    this.setState({
      count: this.state.count + 1
    });
    // this.setState((currentState) => {
    //   return {
    //     count: currentState.count + 1
    //   };
    // });
  };

  render() {
    console.log('Rendering component');
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <h3>{this.state.count}</h3>
        <button onClick={this.handleIncrement}>Increment Count</button>
        <ClickablePicture
          img="/img/persons/maxence.png"
          imgClicked="/img/persons/maxence-glasses.png"
        />
      </div>
    );
  }
}

export default App;
