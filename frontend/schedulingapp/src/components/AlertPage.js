import { Link } from "react-router-dom"

const AlertPage = () => {
    return (
        <main className='Home'>
            <h2>Please Sign In</h2>
            <p>Hello new user! To create or update an appointmentment, please sign in first.</p>
            <p>
                Click the link at the top to sign in or <Link to='/'>go to the homepage</Link> if you are already signed in to view your appointments
            </p>
        </main>
    )
}

export default AlertPage
