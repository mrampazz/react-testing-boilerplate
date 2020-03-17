import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentText: ""
    };
  }

  changeText = e => {
    this.setState({
      currentText: e.target.value
    });
  };
  
  render() {
    return (
      <>
        <input
          placeholder={this.props.placeholder}
          value={this.state.currentText}
          onChange={this.changeText}
        ></input>

        <button onClick={() => this.props.addTodo(this.state.currentText)}>
          Add todo
        </button>

        <button onClick={this.props.clearTodos}>Clear todos</button>
      </>
    );
  }
}
