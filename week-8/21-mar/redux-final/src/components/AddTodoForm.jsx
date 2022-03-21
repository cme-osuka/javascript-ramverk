import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

function AddTodoForm() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  function onSubmit(event) {
    event.preventDefault();
    if (value) {
      // Kalla på Dispatch
      dispatch(
        addTodo({
          title: value,
        })
      );

      setValue("");
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Lägg till Todo"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default AddTodoForm;
