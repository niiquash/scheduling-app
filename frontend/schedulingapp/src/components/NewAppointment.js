import React from 'react'
import DoctorSelect from './DoctorSelect'


const NewAppointment = ({
    handleSubmit,
    appointmentTitle,
    setAppointmentTitle,
    appointmentDetails,
    setAppointmentDetails,
    doctorList,
    currentDoctor,
    handleChange
}) => {
    return (
        <main className='NewPost'>
            <h2>New Appointment</h2>
            <DoctorSelect
                doctorList={doctorList}
                currentDoctor={currentDoctor}
                handleChange={handleChange}
            />
            <form className='newPostForm' onSubmit={handleSubmit}>

                <label htmlFor="appointmentTitle">Title:</label>
                <input
                    type="text"
                    id="appointmentTitle"
                    required
                    value={appointmentTitle}
                    onChange={(e) => setAppointmentTitle(e.target.value)}
                />
                <label htmlFor="appointmentDetails">Details:</label>
                <textarea
                    id="appointmentDetails"
                    required
                    value={appointmentDetails}
                    onChange={(e) => setAppointmentDetails(e.target.value)}
                />
                <button type="submit">Set Appointment</button>
            </form>
        </main>
    )
}

export default NewAppointment
