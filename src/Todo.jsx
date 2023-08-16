import React from "react";
import classes from "./Todo.module.css";

export const Todo = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <label className={classes.task}>
      <input
        type="checkbox"
        checked={todo.completed}
        readOnly
        onChange={handleTodoClick}
        className={classes.box}
      />
      <div className={classes.marker}></div>
      <div className={classes.task_name}>{todo.name}</div>
    </label>
  );
};
