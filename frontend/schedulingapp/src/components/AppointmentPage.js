import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';

const AppointmentPage = ({ appointments, handleDelete, selectedDoctor, apptTime, startDate }) => {

    const { id } = useParams();
    const appt = appointments.find(appt => (appt.id).toString() === id);

    return (
        <main className='PostPage'>
            <article className='post'>
                {appt &&
                    <p>
                        <h2>{appt.apptTitle}</h2>
                        <p className="postBody">Date: {format(new Date(appt.apptDate), 'MMMM dd, yyyy')}</p>
                        <p className="postBody">Doctor: {selectedDoctor.name}</p>
                        <p className="postBody">Time: {apptTime}</p>
                        <p className='postBody'>Details: {appt.apptDetails}</p>
                        <button onClick={() => handleDelete(appt.id)}>
                            Cancel Appointment
                        </button>
                    </p>
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
