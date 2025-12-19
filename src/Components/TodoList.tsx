import React from "react";
import ToDoItem from "./TodoItem";
import type { ToDoItems } from "../types";

type TodoListProps = {
  todos: ToDoItems[];
  toggleTodo: (id: number | string) => void;
  deleteTodo: (id: number | string) => void;
};

export default function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
  return (
    <div>
      <div>
        {todos.map((td) => (
          <ToDoItem
            key={td.id}
            {...td}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}
