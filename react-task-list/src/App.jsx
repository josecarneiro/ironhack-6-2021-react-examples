import React from 'react';
import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 'abc', content: 'Shop for groceries' },
        { id: 'def', content: 'Pay electricity bill' }
      ],
      newTask: 'Walk the do'
    };
  }

  handleTaskAddition = (event) => {
    // Ensure that form does not get submitted
    event.preventDefault();
    const content = this.state.newTask;
    if (content) {
      const task = {
        id: String(Math.random()),
        content
      };
      // We shouldn't mutate the state
      // this.state.tasks.push(task);
      this.setState((currentState) => {
        return {
          tasks: [...currentState.tasks, task],
          newTask: ''
        };
      });
    }
  };

  handleNewTaskChange = (event) => {
    const inputElement = event.target;
    const value = inputElement.value;
    this.setState({
      newTask: value
    });
  };

  handleTaskRemoval = (id) => {
    this.setState((currentState) => {
      return {
        tasks: currentState.tasks.filter((task) => task.id !== id)
      };
    });
  };

  render() {
    return (
      <main>
        <ul>
          {this.state.tasks.map((task) => {
            return (
              <li key={task.id}>
                {task.content}
                <button onClick={() => this.handleTaskRemoval(task.id)}>
                  X
                </button>
              </li>
            );
          })}
        </ul>
        <form onSubmit={this.handleTaskAddition}>
          <input
            type="text"
            placeholder="Write anything..."
            value={this.state.newTask}
            onChange={this.handleNewTaskChange}
          />
          <button>+</button>
        </form>
      </main>
    );
  }
}

export default App;
