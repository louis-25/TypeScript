import React from 'react';

const TodoItem: React.FC<{todo: string}> = (props) => {
  return (
    <li>
      {props.todo}
    </li>
  );
};

export default TodoItem;