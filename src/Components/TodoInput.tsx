//An input field to add new todos.
import React, { useState } from 'react'


type TodoInputProps = {
  addTodo: (text: string) => void
}

export const TodoInput = ({ addTodo }: TodoInputProps) => {
  const [input, setInput] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleAddTodo = () => {
    if (input.trim() === "") return
      addTodo(input)
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
      <button className="btn btn-primary btn-sm" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
}
