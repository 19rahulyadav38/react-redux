import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UseDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {todos?.map((todo) => (
          <li>{todo.text} <button onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button></li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
