import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ToDaApp from './Components/ToDoApp'
import { ThemeContext } from './Components/ContextAction'
import ThemeSet from './Components/ThemeSet'

function App() {
 const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
      <div className={theme === 'light' ? 'light-mode' : 'dark-mode'}>
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <h3>Context API</h3>
      <h6>Add a Todo...</h6>
        <ThemeSet />
        <ToDaApp />
    </ThemeContext.Provider>
      </div>
  )
}

export default App
