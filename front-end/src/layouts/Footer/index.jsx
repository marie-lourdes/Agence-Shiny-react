

//IMPORT DU HOOK UuseTheme 
import { useTheme } from "../../utils/hooks-custom/useTheme.js"
//import du styled component
import { FooterContainer, NightModeButton } from "./Footer.js"


function Footer() {
    const { theme, toggleTheme } = useTheme()
    return (
        <FooterContainer>
            <NightModeButton onClick={() => toggleTheme()}> Changer de mode: {theme === "light" ? "☀️" : "🌙"}</NightModeButton>
        </FooterContainer>
    )
}

export default Footer