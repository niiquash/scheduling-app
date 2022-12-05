import React from 'react';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import DoctorSelect from './DoctorSelect'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const EditAppointment = () => {

    const {
        appointments,
        handleEdit,
        editDetails,
        setEditDetails,
        editTitle,
        setEditTitle,
        startDate,
        setStartDate,
        doctors,
        handleDocChange,
        handleTimeChange,
        selectedDoctor,
        apptTime,
        appointmentTitle,
        ailments,
        handleSelect
    } = useContext(DataContext);

    const { id } = useParams();
    const appointment = appointments.find(appt => (appt._id).toString() === id);

    useEffect(() => {
        if (appointment) {
            setEditTitle(appointment.overview);
            setEditDetails(appointment.details)
        }

    }, [appointment, setEditTitle, setEditDetails])

    return (
        <main>
            {editTitle &&
                <>
                    <h2>Edit Appointment</h2>
                    <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>

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
                        <label htmlFor="general">General Ailment: </label>
                        <input type="text"
                            value={appointmentTitle}
                            id="apptTime"
                            readOnly
                        />

                        <DropdownButton
                            id="dropdown-basic-button"
                            title="General ailments"
                            onSelect={handleSelect}
                        >
                            {ailments.length &&
                                ailments.map(item => (
                                    <Dropdown.Item key={item} eventKey={item}>{item}</Dropdown.Item>
                                ))
                            }
                        </DropdownButton>

                        <label htmlFor="appointmentDetails">Details: </label>
                        <textarea
                            id="appointmentDetails"
                            required
                            value={editDetails}
                            onChange={(e) => setEditDetails(e.target.value)}
                        />
                        <button type="submit" onClick={() => handleEdit(appointment._id)}>Make Appointment</button>
                    </form>
                </>
            }
            {!editTitle &&
                <>
                    <h2>Appointment Not Found</h2>
                    <p>Well, that's disappointing.</p>
                    <p>
                        <Link to='/'>Visit Our Homepage</Link>
                    </p>
                </>
            }
        </main>
    )
}

export default EditAppointment
