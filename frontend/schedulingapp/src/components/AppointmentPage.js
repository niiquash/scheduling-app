import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const AppointmentPage = () => {

    const { appointments, handleDelete } = useContext(DataContext);
    const { id } = useParams();
    const appt = appointments?.find(appt => (appt._id).toString() === id);

    return (
        <main className='PostPage'>
            <article className='post'>
                {appt &&
                    <>
                        <h2>{appt.apptTitle}</h2>
                        <p className="postBody">Date: {format(new Date(appt.date), 'MMMM dd, yyyy')}</p>
                        <p className="postBody">Doctor: {appt.doctor}</p>
                        <p className="postBody">Time: {appt.time}</p>
                        <p className='postBody'>Details: {appt.details}</p>
                        <Link to={`/edit/${appt._id}`}>
                            <button
                                className="editButton"
                            >Edit Appointment</button>
                        </Link>
                        <button onClick={() => handleDelete(appt._id)}>
                            Cancel Appointment
                        </button>
                    </>
                }
                {!appt &&
                    <>
                        <h2>Appointment Not Found</h2>
                        <p>Well, that's disappointing.</p>
                        <p>
                            <Link to='/'>Visit Our Homepage</Link>
                        </p>
                    </>

                }
            </article>
        </main>
    )
}

export default AppointmentPage
