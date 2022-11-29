import React from 'react';
import { Link } from 'react-router-dom';

const Appointment = ({ appt }) => {
    return (
        <article className="post">
            <Link to={`/appointment/${appt.id}`}>
                <h2>{appt.apptTitle}</h2>
                <p className='postDate'>{appt.apptDate}</p>
            </Link>
            <p className="postBody">
                {(appt.apptDetails).length <= 25
                    ? appt.apptDetails
                    : `${(appt.apptDetails).slice(0, 25)}...`}
            </p>
        </article>
    )
}

export default Appointment
