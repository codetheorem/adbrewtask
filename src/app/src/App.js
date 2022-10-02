import './App.css';
import React, {useState,useEffect} from 'react';
import TodoList from './components/TodoList'
import {addTodo,getTodos} from './services/todo';


export function App() {

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos().then((todos) => {
      setTodos(todos);
    });
  }, [todo]);

  const post_todo = (event) => {
      addTodo(todo)
  }

  const insert_todo = (event) => {
    setTodo(event.target.value);
  }


  return (
    <div className="App">
      <div>
        <h1>List of TODOs</h1>
        <li>Learn Docker</li>
        <li>Learn React</li>
      </div>
      <div>
        <h1>Create a ToDo</h1>
        <form onSubmit={post_todo}>
          <div>
            <label for="todo">ToDo: </label>
            <input type="text" onChange={insert_todo} />
          </div>
          <div style={{"marginTop": "5px"}}>
            <button type="submit">Add ToDo</button>
          </div>
        </form>
      </div>
      <div>
        <h1>TODOs</h1>
           <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
