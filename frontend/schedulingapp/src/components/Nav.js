import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ search, setSearch }) => {
    return (
        <nav className='Nav'>
            <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="search">Search Appointments</label>
                <input
                    type="text"
                    id="search"
                    placeholder="Search Appointments"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/appointment">Appointment</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav
