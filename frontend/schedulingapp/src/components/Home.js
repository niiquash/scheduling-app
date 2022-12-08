import React from 'react';
import Feed from './Feed';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import { useAuth0 } from "@auth0/auth0-react";


const Home = () => {

    const { searchResults, fetchError, isLoading } = useContext(DataContext);
    const { isAuthenticated } = useAuth0();

    return (
        <main className='Home'>
            {isLoading && <p className="statusMsg">Loading appointments...</p>}
            {!isAuthenticated && <p className="statusMsg">No appointments to display.</p>}
            {fetchError && <p classname="statusMsg" style={{ color: "red" }}>{fetchError}</p>}
            {!isLoading && !fetchError && isAuthenticated && (searchResults.length ?
                <Feed appointments={searchResults} />
                :
                <p className="statusMsg">No appointments to display.</p>)}
        </main>
    )
}

export default Home
