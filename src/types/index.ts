
export interface ToDoItems {
    id:string | number
    text:string
    completed: boolean
}
export interface AddToDo {
    text:ToDoItems
}
export interface ThemeContextType {
  theme: string
  toggleTheme: () => void
}

export interface ClearCompletedContextType {
  clearCompleted: () => void
  completed: ToDoItems
}

