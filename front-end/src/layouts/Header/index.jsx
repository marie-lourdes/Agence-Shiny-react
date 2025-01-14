import { Link } from "react-router-dom"

import DarkLogo from '../../assets/dark-logo.png'

//import du styled component
import { StyledHeader, HomeLogo } from "./Header.js"
import { StyledLink } from "../../bases/atoms/Link.js"

function Header() {

    return (
        <StyledHeader>
            <Link to="/">
                <HomeLogo src={DarkLogo} />
            </Link>
            <nav >
                <ul>
                    <li><StyledLink to="/admin"> Admin</StyledLink></li>
                    <li><StyledLink to="/"> Accueil</StyledLink></li>
                    <li><StyledLink to="/freelances"> Profils</StyledLink></li>
                    {/* ajput d une prop isFullLink pour le style*/}
                    <li><StyledLink to="/survey/1" $isFullLink > Questionnaire</StyledLink></li>

                </ul>
            </nav>
        </StyledHeader>
    )
}

export default Header