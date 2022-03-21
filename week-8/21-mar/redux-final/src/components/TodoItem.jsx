import React from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../redux/todoSlice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  function handleChecked() {
    dispatch(toggleComplete({ id: todo.id }));
  }

  function handleDelete() {
    dispatch(deleteTodo({ id: todo.id }))
  }

  return (
    <li>
      <input
        checked={todo.completed}
        onChange={handleChecked}
        type="checkbox"
      />
      {todo.title}
      <button onClick={handleDelete}>delete</button>
    </li>
  );
}

export default TodoItem;
