import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      displayMessage: true,
      messageLanguage: 'de',
      names: ['Caroline', 'Nahuel', 'Pedro', 'Gregor']
    };
  }

  handleToggle = () => {
    this.setState((currentState) => {
      return {
        displayMessage: !currentState.displayMessage
      };
    });
  };

  handleLanguageChange = (event) => {
    this.setState({
      messageLanguage: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <span>Possible message:</span>
        {/* 
          // Short circuiting
          // Perform ternary logic using && or || operators
        */}
        <button onClick={this.handleToggle}>Toggle Message</button>
        {this.state.displayMessage && <h1>Hello world</h1>}
        <select
          value={this.state.messageLanguage}
          onChange={this.handleLanguageChange}
        >
          <option value="pt">Portuguese</option>
          <option value="es">Spanish</option>
          <option value="de">German</option>
        </select>
        {(this.state.messageLanguage === 'pt' && <h1>Olá Mundo</h1>) ||
          (this.state.messageLanguage === 'es' && <h1>Hola Mundo</h1>) || (
            <h1>I don't know that language</h1>
          )}
        <h4>Names of students:</h4>
        <ul>
          {this.state.names.map((name) => {
            return <li key={name}>{name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
