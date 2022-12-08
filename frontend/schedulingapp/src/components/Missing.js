import React from 'react'
import { Link } from 'react-router-dom'

const Missing = () => {
    return (
        <main className='Missing'>
            <h1>Look like the page you're looking for was not found.</h1>
            <p>Well, that's disappointing.</p>
            <p>
                <Link to='/'>Visit Our Homepage</Link>
            </p>
        </main>
    )
}

export default Missing
