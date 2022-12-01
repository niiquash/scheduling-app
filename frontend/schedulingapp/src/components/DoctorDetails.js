import React from 'react'

const DoctorDetails = ({ doctor, handleTimeChange }) => {
    return (
        <div>
            {doctor.AvailHours.map(hours => (
                <div
                    className='timeBtn'
                    key={hours}
                    onClick={handleTimeChange}
                >
                    {hours}
                </div>
            ))}

        </div>
    )
}

export default DoctorDetails
