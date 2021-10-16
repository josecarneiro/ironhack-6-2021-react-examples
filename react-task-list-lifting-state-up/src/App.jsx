import React from 'react';
import './App.scss';

const TaskList = (props) => {
  return (
    <ul>
      {props.tasks.map((task) => {
        return (
          <li key={task.id}>
            {task.content}
            <button onClick={() => props.onTaskDelete(task.id)}>X</button>
          </li>
        );
      })}
    </ul>
  );
};

class TaskInput extends React.Component {
  constructor() {
    super();
    this.state = {
      newTask: ''
    };
  }

  handleNewTaskChange = (event) => {
    const inputElement = event.target;
    const value = inputElement.value;
    this.setState({
      newTask: value
    });
  };

  handleTaskAddition = (event) => {
    event.preventDefault();
    const content = this.state.newTask;
    if (content) {
      this.props.onTaskAddition(content);
      this.setState({ newTask: '' });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleTaskAddition}>
        <input
          type="text"
          placeholder="Write anything..."
          value={this.state.newTask}
          onChange={this.handleNewTaskChange}
        />
        <button>+</button>
      </form>
    );
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 'abc', content: 'Shop for groceries' },
        { id: 'def', content: 'Pay electricity bill' }
      ]
    };
  }

  handleTaskAddition = (content) => {
    const task = {
      id: String(Math.random()),
      content
    };
    this.setState((currentState) => {
      return {
        tasks: [...currentState.tasks, task]
      };
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
        <TaskList
          tasks={this.state.tasks}
          onTaskDelete={this.handleTaskRemoval}
        />
        <TaskInput onTaskAddition={this.handleTaskAddition} />
      </main>
    );
  }
}

export default App;
