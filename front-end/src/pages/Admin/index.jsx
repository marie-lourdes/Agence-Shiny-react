import React from 'react'
import { Route, Routes, Link, useResolvedPath } from 'react-router-dom'
import Users from "./component/User"
import Error from "../../components/Error"
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
                <Route exact path="/users" element={<Users />} />
                <Route path="*" element={<Error />} />
            </Routes>

        </section>
    </React.Fragment >
}

export default Admin