import React from 'react'

const TimeSelect = ({ hours, appointmentTime, handleTimeChange }) => {
    return (
        <div>
            <label htmlFor="time">List of selected doctor's available hours: </label>
            <select id="time" value={appointmentTime} onChange={handleTimeChange}>
                <option>--------</option>
                {hours.length &&
                    hours.map(hour => (
                        <option
                            key={hour}
                            value={hour}
                        >
                            {hour}
                        </option>
                    ))
                }
            </select>
        </div>
    )
}

export default TimeSelect
