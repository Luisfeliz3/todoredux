import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div clasName="Todo-App">
            <TodoForm 
              currentTodo ={this.props.currentTodo}
              changeCurrent = {this.props.changeCurrent}
              />

            <TodoList todos={this.props.todos} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
