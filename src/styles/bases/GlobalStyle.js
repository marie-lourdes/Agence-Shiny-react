import { createGlobalStyle } from "styled-components"
import img from "../../assets/fond.jpg"


const GlobalStyle = createGlobalStyle`
      * {
        box-sizing: border-box;
      }
     body {
        margin: 0;
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
       
       
      }
      main {
        background: url(${img}); 
        min-height: 100vh;
      
        width:100%;
        display: flex;
        flex-direction: column; 

    }
    div.error {
      font-weight: bold;
      margin: 20% auto 0;
      font-size: 24px;
    }
    h1 {
      font-size: 32px;
     text-align: center;
     margin-bottom: 10px;
     font-weight: 900;
     color: #5843e4;
    }
      
   
`
//les string d interpolation dans le template css de styled component pour importé l url de l img

export default GlobalStyle