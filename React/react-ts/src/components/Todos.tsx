import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import Todo from '../models/todo'
import { TodosContext } from '../store/todos-context';
import style from './Todos.module.css';

// const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id:string) => void }> = (props) => {
  const Todos: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={style.todos}>
      {
        todosCtx.items.map((item) => ( //props 대신 todosCtx
          <TodoItem
            key={item.id}
            text={item.text}
            onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          />
        ))
      }
    </ul>
  );
}

export default Todos;