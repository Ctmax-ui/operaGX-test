import { useContext, useState, useEffect, createContext } from "react"
import { json } from "react-router-dom"

const ThemeContext = createContext()

if (localStorage.getItem('isDarkMode') === 'true') {
  document.body.className = 'dark bg-black';
  localStorage.setItem('isDarkMode', true)
} else {
  localStorage.setItem('isDarkMode', 'false');
}

const SiteThemeContext = ({children}) => {

  const [themeContext, setThemeContext] = useState('dark bg-black');

  const [darkMode, setSetDarkMode] = useState(()=>{
    const storedValue = localStorage.getItem('isDarkMode');
    return storedValue === 'true' ? true : false;
  });

  useEffect(() => {
    darkMode ? document.body.className = themeContext : document.body.className = '';
    localStorage.setItem('isDarkMode', JSON.stringify(darkMode)); 
  }, [darkMode]);

  const toggleTheme = ()=>{
    darkMode == true ? setSetDarkMode(false) : setSetDarkMode(true)
  }

    
  return (
   <ThemeContext.Provider value={{themeContext, setThemeContext, darkMode, toggleTheme}}>
    {children}
   </ThemeContext.Provider>
  )
}

export {ThemeContext, SiteThemeContext}
