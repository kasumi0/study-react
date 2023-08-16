import React from 'react'
import {Todo} from './Todo';
import classes from './TodoList.module.css';

export const TodoList = ({todos, toggleTodo}) => {
  return (
    <>
      <h1 className={classes.title}>TODO APP<br/>TASK<br/>MANAGER</h1>
      <ul className={classes.tasks}>
        <li>
          {todos.map((todo) => (
            <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />
          ))}
        </li>
      </ul>
    </>
  );
}

