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
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <h3>Context API</h3>
      <h6>Add a Todo...</h6>
      <div className={theme === 'light' ? 'light-mode' : 'dark-mode'}>
        <ThemeSet />
        <ToDaApp />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
