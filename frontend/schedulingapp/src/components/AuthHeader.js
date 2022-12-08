import LoginButton from './authentication/LoginButton';
import LogoutButton from './authentication/LogoutButton';
import UserProfile from './authentication/UserProfile';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const AuthHeader = () => {
    const { search, setSearch } = useContext(DataContext);
    return (
        <div className='search-and-auth'>
            <div className='authBar'>
                <Link to="/profile"><UserProfile /></Link>
                <LoginButton />
                <LogoutButton />
            </div>
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
        </div>
    )
}

export default AuthHeader
