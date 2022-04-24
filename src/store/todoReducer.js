const defaultState = {
  todos: [],
};

const ADD_TODOS = "ADD_TODOS";
const REMOVE_TODOS = "REMOVE_TODOS";
const EDIT_STATE = "EDIT_STATE";
export const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODOS:
      return { ...state, todos: [...state.todos, action.payload] };
    case REMOVE_TODOS:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case EDIT_STATE:
      return {
        ...state,
        completed: state.todos.map((todo) => (todo.completed = action.payload)),
      };
    default:
      return state;
  }
};
export const addTodoAction = (payload) => ({ type: ADD_TODOS, payload });
export const removeTodoAction = (payload) => ({
  type: REMOVE_TODOS,
  payload,
});
export const editTodoAction = (payload) => ({ type: EDIT_STATE, payload });
