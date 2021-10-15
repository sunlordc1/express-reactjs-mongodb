import React from 'react'
import {Link} from 'react-router-dom'
const Navigation = ()=>{
    return (<div className="container">
        <h3>Logo</h3>
        <ul className="nav-link">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/todo">
                List todo
                </Link>
               </li>
        </ul>
        </div>)

}

export default Navigation