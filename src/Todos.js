import React, { useState } from "react";

const Todos = ({ todo, ...props }) => {
  const [check, setCheck] = useState(false);
  const todoClass = "todos " + (check ? "todos-true" : "");
  return (
    <div>
      <div className="todo" key={todo.id}>
        <p className={todoClass}>{todo.name}</p>
        <div onClick={() => props.removeTodo(todo)}>🗑️</div>
        <input
          type="checkbox"
          value={check}
          onChange={() => {
            props.changeState(todo);
            setCheck(!check);
          }}
        ></input>
      </div>
    </div>
  );
};

export default Todos;
