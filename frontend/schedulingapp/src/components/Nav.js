import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";


const Nav = () => {
    const { isAuthenticated } = useAuth0();
    return (
        <nav className='Nav'>

            <ul>
                <li><Link to="/">Home</Link></li>
                {isAuthenticated ?
                    <li><Link to="/appointment">New Appointment</Link></li>
                    :
                    <li><Link to="/alert">New Appointment</Link></li>
                }
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav
