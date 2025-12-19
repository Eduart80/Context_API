//An input field to add new todos.
import React, { useState } from 'react'

export const TodoInput = () => {
  const [input, setInput] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleAddTodo = () => {
    if (input.trim() === "") return
        setInput("")
    }

  return (
    <div>
      <input
        type="text"
        placeholder="What need to be done?"
        value={input}
        onChange={handleInputChange}
      />
      <button className="btn" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
}
