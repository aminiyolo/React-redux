import { createAction, handleActions } from "redux-actions";

const CHANGE_INPUT = "todos/CHANGE_INPUT"; // change input value
const INSERT = "todos/INSERT"; // add a new todo
const TOGGLE = "todos/TOGGLE"; // toggle todo
const REMOVE = "todos/REMOVE"; // remove todo

export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3; // When insert is called, Plus 1
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));

export const toggle = createAction(TOGGLE, (id) => id);

export const remove = createAction(REMOVE, (id) => id);

const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "studying redux",
      done: true,
    },
    {
      id: 2,
      text: "use redux with react",
      done: false,
    },
  ],
};

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input: input }),
    [INSERT]: (state, { payload: todo }) => ({
      ...state,
      todos: state.todos.concat(todo),
    }),
    [TOGGLE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    }),
  },
  initialState
);
export default todos;
