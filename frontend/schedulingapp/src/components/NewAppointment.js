import DoctorSelect from './DoctorSelect'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const NewAppointment = () => {

    const {
        handleSubmit,
        appointmentTitle,
        appointmentDetails,
        setAppointmentDetails,
        doctors,
        handleDocChange,
        handleTimeChange,
        selectedDoctor,
        apptTime,
        startDate,
        setStartDate,
        ailments,
        handleSelect
    } = useContext(DataContext);

    return (
        <main className='NewPost'>
            <h2>New Appointment</h2>
            <form className='newPostForm' onSubmit={handleSubmit}>
                <label htmlFor="datepicker">Select date:</label>
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
                    id="apptOverview"
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
                    value={appointmentDetails}
                    onChange={(e) => setAppointmentDetails(e.target.value)}
                />
                <button type="submit">Make Appointment</button>
            </form>
        </main>
    )
}

export default NewAppointment
