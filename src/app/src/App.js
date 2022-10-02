import './App.css';
import React, {useState,useEffect} from 'react';
import apiClient from './services/api'
import Todo from './components/Todo'


export function App() {

  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    apiClient.get('/todos')
    .then((response) => {
      setTodos(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [todos]);

  const post_todo = (event) => {
    let val = {todo: todo}
    apiClient.post('/todos/', val)
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
            <input type="text" onChange={(e)=>setTodo(e.target.value)} />
          </div>
          <div style={{"marginTop": "5px"}}>
            <button type="submit">Add ToDo</button>
          </div>
        </form>
      </div>
      <div>
        <h1>TODOs</h1>
        {
          todos.map((todo) => {
            return <Todo value={todo.todo} />
          })
        }
      </div>
    </div>
  );
}

export default App;
