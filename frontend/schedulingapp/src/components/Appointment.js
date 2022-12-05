import React from 'react';
import { Link } from 'react-router-dom';

const Appointment = ({ appt }) => {
    return (
        <article className="post">
            <Link to={`/appointment/${appt._id}`}>
                <h2>{appt.overview}</h2>
                <p className='postDate#'>Appointment with: {appt.doctor}</p>
            </Link>
            <p className="postBody">
                Details: {(appt.details).length <= 25
                    ? appt.details
                    : `${(appt.details).slice(0, 25)}...`}
            </p>
        </article>
    )
}

export default Appointment
