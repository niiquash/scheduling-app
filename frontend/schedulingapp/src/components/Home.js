import React from 'react';
import Feed from './Feed';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const Home = () => {

    const { searchResults, fetchError, isLoading } = useContext(DataContext);

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
            {!isLoading && !fetchError && (searchResults.length ? <Feed appointments={searchResults} /> : <p className="statusMsg">No appointments to display.</p>)}
        </main>
    )
}

export default Home
