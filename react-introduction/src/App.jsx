// JSX: A mix of JavaScript and HTML
import React from 'react';
import './App.scss';
import logoFoo from './logo192.png';
import Logo from './Logo';

// Reserved keyword
// class function let var const for if else while catch try do

let subtitle = "It's me, José.";

// Functional react component
function App() {
  return (
    <div className="App">
      <Logo />
      <h1>Hello world</h1>
      <Logo></Logo>
      <h3>{subtitle}</h3>
      <Logo>
        <span>Hola Mundo!</span>
      </Logo>
    </div>
  );
}

// Class based component
// Must extends the base React.Component class
// and have a render method
// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello world</h1>
//         <h3>{subtitle}</h3>
//       </div>
//     );
//   }
// }

export default App;
