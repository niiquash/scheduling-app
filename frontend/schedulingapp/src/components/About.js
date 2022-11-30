import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <main className='About'>
            <h2>About</h2>
            <p style={{ marginTop: "1rem" }}>
                This is an appointment scheduling app for individuals who need timely healthcare needs met. Contact the creator of this app via email at <Link to="#">atquarsh@outlook.com</Link>
            </p>
        </main>
    )
}

export default About
