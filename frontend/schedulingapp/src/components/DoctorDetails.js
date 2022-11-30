import React from 'react'

const DoctorDetails = ({ doctor }) => {
    return (
        <div>
            {doctor.AvailHours.map(hours => (
                <p key={hours}>{hours}</p>
            ))}

        </div>
    )
}

export default DoctorDetails
