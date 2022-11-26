// import de useContext 
import { useContext } from "react"

// import du state et setstate du provider
import { ThemeContext } from "../../utils/Context"
//import du styled component
import { FooterContainer, NightModeButton } from "./Footer.js"


function Footer() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <FooterContainer>
            <NightModeButton onClick={() => toggleTheme()}> Changer de mode: {theme === "light" ? "☀️" : "🌙"}</NightModeButton>
        </FooterContainer>
    )
}

export default Footer