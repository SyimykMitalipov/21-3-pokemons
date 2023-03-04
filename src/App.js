import { useEffect, useState } from "react";
import { fetchPokemons } from "./api/fetchPokemons";
const App = () =>  {
  const [ theme, setTheme ] = useState('dark');
  const [ list, setList ] = useState([]);

  const toogleTheme  = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

useEffect(() => {
  fetchPokemons(setList)
}, [])
console.log(list, 'list');
  return (
    <div className={`app ${theme}`}>
      App
      <button 
      onClick={toogleTheme}
      className="button">
        Change Theme
      </button>
    </div>
  );
}

export default App;
