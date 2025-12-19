import React from 'react'
import  ToDoItem  from './TodoItem'
import type { ToDoItems } from '../types'


type TodoListProps = {
  todos: ToDoItems[]
}

export default function TodoList({ todos }: TodoListProps) {
  return (
    <div>
        <div>
      {todos.map(td => (
        <ToDoItem key={td.id} {...td} />
      ))}
    </div>
    </div>
  )
}