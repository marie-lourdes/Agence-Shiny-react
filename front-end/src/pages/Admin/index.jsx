import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Users from "./component/User"
function Admin() {
    // useRouteMach hook qui n est plus accessible dans react-router dom v6, ni switch
    const { path } = useLocation() // renvoit le path actuel du composant Home
    console.log("path actuel admin", path)
    return <React.Fragment>
        <section>
            <h1>Administrateur</h1>
            <ul>
                <li><Link to={`${path}/users`}>Utilisateurs</Link></li>

            </ul>
            <Routes>
                <Route exact path={`${path}/users`} element={<Users />}></Route>
            </Routes>
        </section>
    </React.Fragment >
}

export default Admin