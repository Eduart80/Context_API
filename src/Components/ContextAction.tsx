// Actions (exposed via context):
// addTodo(text: string): Adds a new todo item to the list.
// toggleTodo(id: string | number): Toggles the completed status of a todo item.
// deleteTodo(id: string | number): Removes a todo item from the list.
// editTodo(id: string | number, newText: string): Edits the text of an existing todo item.
// clearCompleted(): Removes all completed todos.

import React from 'react'
import type {
    ToDoItems,
    ThemeContextType,
    ClearCompletedContextType
} from '../types/index' 


export const addToDoCard = React.createContext<ToDoItems>({id: 0, text: '', completed: false})

export const toggleTodo = React.createContext<ToDoItems>({id: 0, text: '', completed: false})

export const deleteTodo = React.createContext<ToDoItems>({id: 0, text: '', completed: false})

export const editTodo = React.createContext<ToDoItems>({id: 0, text: '', completed: false})

export const ClearCompletedContext = React.createContext<ClearCompletedContextType>({
  clearCompleted: () => {},
})

export const ThemeContext = React.createContext<ThemeContextType>({ 
    theme: 'light',
    toggleTheme : ()=>{}
})