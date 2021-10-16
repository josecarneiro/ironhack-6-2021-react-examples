import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      age: 0,
      city: ''
    };
  }

  handleChange = (event) => {
    const name = event.target.name;
    const type = event.target.type;
    let value =
      type === 'number' ? event.target.valueAsNumber : event.target.value;
    // if (Number.isNaN(value)) value = 0;
    if (Number.isNaN(value)) value = '';
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="App">
        <form>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="First Name"
          />
          <input type="text" pattern="\d*" />
          <input
            type="number"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            placeholder="Age"
          />
          <input
            type="text"
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
            placeholder="City"
          />
          <button>Submit</button>
        </form>
        <p>
          Hello {this.state.firstName}, happy {this.state.age}th birthday, hope
          you're enjoying your time in {this.state.city}.
        </p>
      </div>
    );
  }
}

export default App;
