import React from 'react'
import DoctorSelect from './DoctorSelect'


const NewAppointment = ({
    handleSubmit,
    appointmentTitle,
    setAppointmentTitle,
    appointmentDetails,
    setAppointmentDetails,
    doctors,
    selectedDoctor,
    handleDocChange
}) => {
    return (
        <main className='NewPost'>
            <h2>New Appointment</h2>
            <DoctorSelect doctors={doctors} selectedDoctor={selectedDoctor} handleDocChange={handleDocChange} />
            <form className='newPostForm' onSubmit={handleSubmit}>
                <label htmlFor="appointmentTitle">Title: </label>
                <input
                    id="appointmentTitle"
                    type="text"
                    required
                    value={appointmentTitle}
                    onChange={(e) => setAppointmentTitle(e.target.value)}
                />
                <label htmlFor="appointmentDetails">Details: </label>
                <textarea
                    id="appointmentDetails"
                    required
                    value={appointmentDetails}
                    onChange={(e) => setAppointmentDetails(e.target.value)}
                />
                <button type="submit">Make Appointment</button>
            </form>
        </main>
    )
}

export default NewAppointment
