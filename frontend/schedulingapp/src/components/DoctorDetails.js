import React from 'react'

const DoctorDetails = ({ doctor, handleTimeChange }) => {
    return (
        <div>
            {doctor?.availHours?.map(hours => (
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
