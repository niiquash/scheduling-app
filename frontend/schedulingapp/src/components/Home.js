import React from 'react'
import Feed from './Feed'

const Home = ({ appointments, fetchError, isLoading }) => {
    return (
        <main className='Home'>
            {/* {appointments.length ? (
                <Feed appointments={appointments} />
            ) : (
                <p sytle={{ marginTop: "2rem" }}>
                    No appointments to display
                </p>
            )} */}
            {isLoading && <p className="statusMsg">Loading appointments...</p>}
            {fetchError && <p classname="statusMsg" style={{ color: "red" }}>{fetchError}</p>}
            {!isLoading && !fetchError && (appointments.length ? <Feed appointments={appointments} /> : <p className="statusMsg">No appointments to display.</p>)}
        </main>
    )
}

export default Home
