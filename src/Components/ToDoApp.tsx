import React,{useState} from 'react'
import {TodoInput} from './TodoInput'
import type { ToDoItems} from '../types/index'
import {ClearCompletedContext} from './ContextAction'
import TodoList from './TodoList'



export default function ToDaApp() {
   const [todoz, setTodoz] = useState<ToDoItems[]>([]);
      
      const clearCompleted = () => {
           setTodoz(todoz.filter(todo => !todo.completed))
      }
      const addTodo = (text: string) => {
    setTodoz([...todoz, { id: Date.now(), text, completed: false }])
  }

  return(
    <ClearCompletedContext.Provider value={{ clearCompleted, completed: todoz[0] }}>
     <div>
        <TodoInput addTodo={addTodo} />
        <TodoList todos={todoz} />
    </div>
    </ClearCompletedContext.Provider>
  )
}
