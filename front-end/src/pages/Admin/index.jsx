import React from 'react'
import { BrowserRouter, Route, Routes, Link, useResolvedPath } from 'react-router-dom'
import Users from "./component/User"
function Admin() {
    // useRouteMach hook qui n est plus accessible dans react-router dom v6, ni switch
    // renvoit le path actuel du composant Home
    const path = useResolvedPath(``).pathname
    console.log("path actuel admin", path)
    return <React.Fragment>

        <section>
            <h1>Administrateur</h1>
            <ul>
                <li><Link to={`${path}/users`}>Utilisateurs</Link></li>

            </ul>

            <Routes>
                <Route path="/users" element={<Users />} />
            </Routes>

        </section>

    </React.Fragment >
}

export default Admin