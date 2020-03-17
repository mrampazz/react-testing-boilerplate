import React from "react";
import Input from "./Input";
import "./App.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  addTodo = text => {
    let array = this.state.todos;
    array.push({ text: text });
    this.setState({
      todos: array
    });
  };

  clearTodos = () => {
    this.setState({
      todos: []
    });
  };

  deleteTodo = indx => {
    let array = this.state.todos.filter((item, index) => index != indx);
    this.setState({
      todos: array
    });
  };

  render() {
    let array = this.state.todos.map((item, index) => (
      <li key={index} onClick={() => this.deleteTodo(index)}>
        {item.text}
      </li>
    ));
    return (
      <div className="App">
        <header className="App-header">
          <Input
            placeholder="Add a todo"
            addTodo={this.addTodo}
            clearTodos={this.clearTodos}
          />
          <ul>{array}</ul>
        </header>
      </div>
    );
  }
}
