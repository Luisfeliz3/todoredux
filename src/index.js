import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store';
import {updateCurrentTodo} from './reducers/todo'
// const state = {
//   todos : [
//     { id: 1, name:'Render Static UI', isComplete: true},
//     { id: 2, name:'Create Initial State', isComplete: true},
//     { id: 3, name:'Render Based on state', isComplete: true},
//   ]
// }
const todoChangeHandler = (val) => store.dispatch(updateCurrentTodo(val))

const render = () => {
  const state = store.getState();

  ReactDOM.render(
    <React.StrictMode>
        <App 
          todos = {state.todos} 
          currentTodo ={state.currentTodo}
          changeCurrent = {todoChangeHandler}
          />,
    </React.StrictMode>,
    document.getElementById('root')
  );
}
render();
store.subscribe(render)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
