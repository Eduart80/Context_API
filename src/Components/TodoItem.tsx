import React from 'react'
import type {ToDoItems} from '../types/index'

export default function TodoItem({ id, text, completed }: ToDoItems) {
  return (
    <div>
      <input type="checkbox" checked={completed} readOnly />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {text}
      </span>
    </div>
  )
}

