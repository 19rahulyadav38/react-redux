import React, { useState } from "react";
import { addTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

function AddTodo() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const addTodoHandler = () => {
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <>
      <div>AddTodo</div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        name=""
        id=""
      />
      <button onClick={() => addTodoHandler()}>Add</button>
    </>
  );
}

export default AddTodo;
