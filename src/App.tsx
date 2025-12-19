import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDoApp from "./Components/ToDoApp";
import { ThemeContext } from "./Components/ContextAction";
import ThemeSet from "./Components/ThemeSet";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-mode' : 'dark-mode'
  }, [theme])

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={theme === "light" ? "light-mode" : "dark-mode"}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div id="header">
          <div>
            <h3>Context API</h3>
            <h6>Add a Todo...</h6>
          </div>
          <ThemeSet />
        </div>
        <hr style={{margin: '20px'}}/>
        <ToDoApp />
      </ThemeContext.Provider>

    </div>
  );
}

export default App;
