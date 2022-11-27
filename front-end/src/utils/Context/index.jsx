//import de useState 
//import contexte natif de React
import { createContext, useState } from 'react'

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

// SurveyContext
export const SurveyContext = createContext()
// on ne modifie pas directement le State on utilise le spread operator
export const SurveyProvider = ({ children }) => {
    const [answers, setAnswers] = useState({})
    const saveAnswers = (newAnswers) => {
        {/*}  si la propriété de new answer est la meme que answer dans les objet le spread operator fera la mise a jour de la proriété d avant avec la nouvelle
  mais ici le numero de reponse change en tant que propriété*/}
        setAnswers({ ...answers, ...newAnswers })
    }

    return (
        <SurveyContext.Provider value={{ answers, saveAnswers }}>
            {children}
        </SurveyContext.Provider>
    )
}
