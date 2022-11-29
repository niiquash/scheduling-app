import React from 'react'
import Feed from './Feed'

const Home = ({ appointments }) => {
    return (
        <main className='Home'>
            {appointments.lenth ? (
                <Feed appointments={appointments} />
            ) : (
                <p sytle={{ marginTop: "2rem" }}>
                    No appointments to display
                </p>
            )}
        </main>
    )
}

export default Home
