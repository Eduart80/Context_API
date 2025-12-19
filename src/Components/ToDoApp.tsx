import React,{useState} from 'react'
import {TodoInput} from './TodoInput'



export default function ToDaApp() {
  return(
    <ClearCompletedContext.Provider value={{ clearCompleted }}>


     <div>
        
        <TodoInput />
    </div>
    </ClearCompletedContext.Provider>
  )
}
