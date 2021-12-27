import React, { useState } from 'react';
import './App.css';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo'


function App() {
  //Todo배열로 이루어진 state
  const [todos, setTodos] = useState<Todo[]>([]);
    
  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos)=>{
      return prevTodos.concat(newTodo)
    })
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler}></NewTodo>
      <Todos items={todos}></Todos>
    </div>
  );
}

export default App;
