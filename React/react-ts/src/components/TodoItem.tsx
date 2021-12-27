import React from 'react';
import style from './TodoItem.module.css'

const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void}> = (props) => {
  return (
    <li className={style.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  )
};

export default TodoItem;