import { createStore, combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const rootReducers = combineReducers({
  todos: todoReducer,
});

export const store = createStore(rootReducers, composeWithDevTools());
