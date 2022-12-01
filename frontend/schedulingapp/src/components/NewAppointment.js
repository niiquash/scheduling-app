import React, { useState } from 'react'
import DoctorSelect from './DoctorSelect'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";



const NewAppointment = ({
    handleSubmit,
    appointmentTitle,
    setAppointmentTitle,
    appointmentDetails,
    setAppointmentDetails,
    doctors,
    handleDocChange,
    handleTimeChange,
    selectedDoctor,
    apptTime,
    startDate,
    setStartDate
}) => {
    return (
        <main className='NewPost'>
            <h2>New Appointment</h2>
            <form className='newPostForm' onSubmit={handleSubmit}>

                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                <input type="text" value={startDate} hidden />

                <DoctorSelect
                    doctors={doctors}
                    handleDocChange={handleDocChange}
                    handleTimeChange={handleTimeChange}
                />
                <hr />
                <label htmlFor="startDate">Appointment Date: </label>
                <input type="text"
                    value={startDate}
                    id="startDate"
                    readOnly
                />
                <label htmlFor="docName">Your Doctor: </label>
                <input type="text"
                    value={selectedDoctor.name}
                    id="docName"
                    readOnly
                />
                <label htmlFor="apptTime">Appointment Time: </label>
                <input type="text"
                    value={apptTime}
                    id="apptTime"
                    readOnly
                />
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
