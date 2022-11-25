//import contexte natif de React
import { createContext } from "react";

// initialisation du composant Contexte
export const ThemeContext = createContext()

//creation du composant Provider qui partage les données du composant contexte avec lobjet Provider connecté au contexte
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }
    // retourne le composant ThemeContext avec l objet Provider qui permet de partager les données de ThemeContext
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children} {/* tous les enfants englobé dans le  composant ThemeProvider auront acces à la prop "value" de ThemeContext*/}
        </ThemeContext.Provider>
    )
}
