import React from 'react'
import * as ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from "./App.js"

import Home from './pages/Home'
import Survey from './pages/Survey'
import Admin from './pages/Admin'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Error from "./components/Error"
import reportWebVitals from './reportWebVitals'

// IMPORT DU STYLE DE BASE SUR TOUTES LES ROUTES ET CONTENU DES PAGES ET COMPOSANTS
import GlobalStyle from './bases-styled/GlobalStyle'

//ReactDOM v18 ne supporte plus ReactDOM.render, il faut createRoot et root.render
//const root = ReactDOM.createRoot(document.getElementById('root'))
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App >
      {/* children*/}
      <Router>
        <GlobalStyle /> {/*style globale appliqué a toutes les routes et a toutes le contenu des pages et composants*/}
        <Header />
        <main>
          {/*Ajouter la prop exact pour que home s affiche sur ce path exactement et non sur un path contenant "/" , 
c'est a dire que home ne doit pas s afficher dans le path du composant Survey qui commence par "/"*/}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/survey/:questionNumber" element={<Survey />} />
            <Route path="/admin/*" element={<Admin />} />{ /* permet d acceder a la sous route/*" */}
            <Route path="/results" element={<Results />} />
            <Route path="/freelances" element={<Freelances />} />
            <Route element={<Error />} />
          </Routes >
        </main>
        <Footer />
      </Router>
    </App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();