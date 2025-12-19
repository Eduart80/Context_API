import React from 'react'
import { ClearCompletedContext } from './ContextAction'

export default function TodoList() {
    const clearCompleted = () => {
  setTodos(todos.filter(todo => !todo.completed))
}
  return (
   <ClearCompletedContext.Provider value={{ clearCompleted }}>
    {/* ...your app... */}
  </ClearCompletedContext.Provider>
  )
}
