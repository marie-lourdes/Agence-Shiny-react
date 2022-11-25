import styled from 'styled-components'
import colors from '../../utils/color'

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 30px 0;
   
`

const NightModeButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${colors.secondary};
    font-weight: 600;
`

export { FooterContainer, NightModeButton }