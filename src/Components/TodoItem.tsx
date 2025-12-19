import React from "react";
import type { ToDoItems } from "../types/index";

type TodoProps = ToDoItems & {
  toggleTodo: (id: number | string) => void;
  deleteTodo: (id: number | string) => void;
};

export default function TodoItem({
  id,
  text,
  completed,
  toggleTodo,
  deleteTodo,
}: TodoProps) {
  return (
    <div
      className="card"
      style={{
        display: "flex",
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "8px",
        marginBottom: "6px",
      }}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span
        style={{
          flex: 1,
          marginLeft: "12px",
          marginRight: "12px",
          textDecoration: completed ? "line-through" : "none",
          textAlign: "left",
        }}
      >
        {text}
      </span>
      <button
        style={{
          marginLeft: "10px",
          color: "red",
          border: "none",
          background: "none",
          cursor: "pointer",
        }}
        onClick={() => deleteTodo(id)}
        aria-label="Delete"
      >
        🗑️
      </button>
    </div>
  );
}
