import React from 'react';
import { useParams, Link } from 'react-router-dom';

const AppointmentPage = ({ appointments, handleDelete }) => {

    const { id } = useParams();
    const appt = appointments.find(appt => (appt.id).toString() === id);

    return (
        <main className='PostPage'>
            <article className='post'>
                {appt &&
                    <>
                        <h2>{appt.apptTitle}</h2>
                        <p className='postDate'>{appt.apptDate}</p>
                        <p className="postBody">{'Seeing Doctor: '}{appt.apptDoctor}</p>
                        <p className='postBody'>{appt.apptDetails}</p>
                        <button onClick={() => handleDelete(appt.id)}>
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
