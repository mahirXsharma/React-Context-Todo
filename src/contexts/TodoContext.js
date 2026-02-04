import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 2,
      todo: " Do this ",
      completed: false,
    },
  ],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleComplete: () => {},
});

// Context-Provider
export const TodoProvider = TodoContext.Provider;

// Custom Hook
export function useTodo() {
  return useContext(TodoContext);
}
