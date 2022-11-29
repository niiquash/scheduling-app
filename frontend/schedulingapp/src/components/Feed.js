import React from 'react';
import Appointment from './Appointment';

const Feed = ({ appointments }) => {
    return (
        <>
            {appointments.map(appt => (
                <Appointment key={appt.id} appt={appt} />
            ))}
        </>
    )
}

export default Feed
