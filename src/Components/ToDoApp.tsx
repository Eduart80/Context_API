import React, { useState } from "react";
import { TodoInput } from "./TodoInput";
import type { ToDoItems } from "../types/index";
import { ClearCompletedContext } from "./ContextAction";
import TodoList from "./TodoList";
import Check from "./check";

export default function ToDaApp() {
  const [todoz, setTodoz] = useState<ToDoItems[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const clearCompleted = () => {
    setTodoz(todoz.filter((todo) => !todo.completed));
  };
  const addTodo = (text: string) => {
    setTodoz([...todoz, { id: Date.now(), text, completed: false }]);
  };
  const toggleTodo = (id: number | string) => {
    setTodoz((todoz) =>
      todoz.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  const deleteTodo = (id: number | string) => {
    setTodoz((todoz) => todoz.filter((todo) => todo.id !== id));
  };
  const filteredTodos = todoz.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <ClearCompletedContext.Provider
      value={{ clearCompleted, completed: todoz[0] }}
    >
      <div>
        <TodoInput addTodo={addTodo} />
        <div style={{ margin: "10px 0" }}>
          <button
            className="btn btn-outline-secondary"
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => setFilter("active")}
          >
            Not Completed
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </div>
        <TodoList
          todos={filteredTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
      <div className="flex align-items-end" style={{maxWidth:'777px'}}>

      <Check
        total={todoz.length}
        completed={todoz.filter((t) => t.completed).length}
        />
        </div>
    </ClearCompletedContext.Provider>
  );
}
