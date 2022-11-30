import React from 'react'
import TimeSelect from './TimeSelect'

const DoctorSelect = ({ doctorList, currentDoctor, handleChange, appointmentTime, handleTimeChange, currentDoctorObj }) => {
    return (
        <div>
            <label htmlFor="doctors">Who would you like to consult with: </label>
            <select value={currentDoctor} onChange={handleChange} >
                <option>--------</option>
                {doctorList.length &&
                    doctorList.map(doctor => (
                        <option
                            key={doctor.id}
                            value={doctor.name}
                        >
                            {doctor.name}
                        </option>
                    ))
                }
            </select>
            {currentDoctorObj &&
                <TimeSelect
                    hours={currentDoctorObj.availHours}
                    appointmentTime={appointmentTime}
                    handleTimeChange={handleTimeChange}
                />
            }
        </div>
    )
}

export default DoctorSelect
