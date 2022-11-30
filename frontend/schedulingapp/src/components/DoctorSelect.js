import React from 'react'
import TimeSelect from './TimeSelect'

const DoctorSelect = ({ doctors, selectedDoctor, handleDocChange }) => {
    return (
        <div style={{ marginTop: "1rem" }}>
            <label htmlFor="doctors">Who would you like to consult with: </label>
            <select value={selectedDoctor} onChange={handleDocChange} >
                <option value={"select Doctor"}>Select Doctor</option>
                {doctors.length &&
                    doctors.map(doctor => (
                        <option
                            key={doctor.id}
                            value={doctor.name}
                        >
                            {doctor.name}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default DoctorSelect
