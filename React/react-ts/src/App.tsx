// import React, { useState } from 'react';
import './App.css';

import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import TodosContextProvider from './store/todos-context';
// import Todo from './models/todo'


function App() {
  
  return (    
    <TodosContextProvider>
      <NewTodo/>
      <Todos/>
      {/* <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} removeTodo={removeTodoHandler}/> */}
    </TodosContextProvider>    
  );
}

export default App;
