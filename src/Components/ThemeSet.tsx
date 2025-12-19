import React, { useContext } from 'react'
import { ThemeContext } from './ContextAction'

export default function ThemeSet() {
    const { theme, toggleTheme }=useContext(ThemeContext)

    
  return (
       <button type='button' onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'}
        </button>
  )
}
