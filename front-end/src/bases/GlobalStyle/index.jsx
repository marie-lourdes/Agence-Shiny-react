import GlobalStyled from "./GlobalStyled.js"

import { useContext } from "react"
import { ThemeContext } from "../../utils/Context"

//transformation du styled component GlobalStyled  en composant react
function GlobalStyle() {
    //Destructuration, recupere la valeur ( de l objet prop Value)  de themeContexte qui est un objet contenant deux propriété theme et toggletheme
    const { theme } = useContext(ThemeContext)
    // on applique une prop au styled component pour le Dark Mode avec une valeur booleenne pour appliquer le style darkMode du GlobalStyled activé le button du footer
    return <GlobalStyled isDarkMode={theme === "dark"} />
}

export default GlobalStyle