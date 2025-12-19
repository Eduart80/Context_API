import React from 'react'
import  ToDoItem  from './TodoItem'
import type { ToDoItems } from '../types'


type TodoListProps = {
  todos: ToDoItems[]
  toggleTodo: (id: number | string) => void
}

export default function TodoList({ todos, toggleTodo }: TodoListProps) {
  return (
    <div>
        <div>
      {todos.map(td => (
        <ToDoItem key={td.id} {...td} toggleTodo={toggleTodo}/>
      ))}
    </div>
    </div>
  )
}