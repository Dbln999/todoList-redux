import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodoAction,
  removeTodoAction,
  editTodoAction,
} from "./store/todoReducer";
import { useState } from "react";
import Todos from "./Todos";
function App() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos.todos);
  const [value, setValue] = useState("");
  const addTodo = (e) => {
    const todo = {
      name: value,
      id: Date.now(),
      completed: false,
    };
    dispatch(addTodoAction(todo));
    if (value.trim()) {
      e.preventDefault();
      setValue("");
    }
  };

  const removeTodo = (name) => {
    dispatch(removeTodoAction(name.id));
  };

  const changeState = (todo) => {
    dispatch(editTodoAction(!todo.completed));
    console.log(todo);
  };

  return (
    <div className="App">
      <div className="todoContainer">
        <div className="valueAddition">
          <input
            onChange={(e) => setValue(e.target.value)}
            value={value}
          ></input>
          <button onClick={addTodo}>ADD TODO</button>
        </div>
        {todos.length > 0 ? (
          <div>
            {todos.map((todo) => (
              <Todos
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                changeState={changeState}
              ></Todos>
            ))}
          </div>
        ) : (
          <div>Empty todos</div>
        )}
      </div>
    </div>
  );
}

export default App;
