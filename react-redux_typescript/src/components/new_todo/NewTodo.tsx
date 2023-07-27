import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";

import "./NewTodo.css";
import { add } from "../slice/TodoSlice";

const NewTodo: React.FC = (props) => {
  const dispatch = useDispatch<AppDispatch>();
  
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textInputRef.current!.value;
    
    dispatch(add(enteredText));
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className="form-control">
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
