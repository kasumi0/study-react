import { useRef, useState } from "react";
import "./App.css";
import {TodoList} from "./TodoList";
import {v4 as uuidv4} from 'uuid';

export const App = () => {
  const [todos, setTodos] = useState([
    {id: 1, name: "Todo1", completed: false},
  ]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false}]
    });
    todoNameRef.current.value = null;
  };

  return (
    <div>
      <TodoList todos={todos} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button>完了したタスクの削除</button>
      <div>残りのタスク:0</div>
    </div>
  );
}
