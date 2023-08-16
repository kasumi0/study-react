import { useRef, useState } from "react";
import { TodoList } from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import classes from "./App.module.css";

export const App = () => {
  const [todos, setTodos] = useState([]);

  const todoNameRef = useRef();
  
  const [error, setError] = useState(false);

  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    if (!name) {
      setError(true);
      return;
    }
    setError(false);
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }];
    });
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const tasksLen = todos.filter((todo) => !todo.completed).length;

  return (
    <div className={classes.card}>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <div className={classes.box}>
        <input type="text" ref={todoNameRef} className={classes.input} />
        <button onClick={handleAddTodo} className={classes.add_btn}>
          <span className="material-symbols-outlined">check_circle</span>
          <div className={classes.tooltip}>タスクの追加</div>
        </button>
        <div className={error ? classes.error : classes.hidden}>
          <span className="material-symbols-outlined">warning</span>
          タスクを入力して下さい
        </div>
      </div>
      <div className={classes.multi_column}>
        <button onClick={handleClear} className={classes.del_btn}>
          <span className="material-symbols-outlined">delete</span>
          <div className={classes.tooltip}>完了したタスクを削除</div>
        </button>
        <div className={classes.not_completed}>
          <span className={tasksLen ? classes.filled : classes.empty}>
            {tasksLen}
          </span>
          <p>残りのタスク</p>
        </div>
      </div>
    </div>
  );
};
