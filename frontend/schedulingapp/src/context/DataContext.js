import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import api from '../api/appointments';
import useWindowSize from '../hooks/useWindowSize';
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {

    const [appointments, setAppointments] = useState([])
    const [doctors, setDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState({});
    const [apptTime, setApptTime] = useState('');
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [appointmentTitle, setAppointmentTitle] = useState('');
    const [appointmentDetails, setAppointmentDetails] = useState('');
    const [editTitle, setEditTitle] = useState('');
    const [editDetails, setEditDetails] = useState('');
    const [startDate, setStartDate] = useState('');
    const [illness, setIllness] = useState([]);
    const redirect = useNavigate();
    const { width } = useWindowSize();

    // Fetch appointments object
    const { appts, fetchError, isLoading } = useAxiosFetch("http://localhost:8080/appointments");
    useEffect(() => {
        setAppointments(appts);
    }, [appts])

    // Fetch doctors list
    const { dcs } = useAxiosFetch("http://localhost:8080/doctors");
    useEffect(() => {
        setDoctors(dcs);
    }, [dcs])

    // Fetch list of ailments
    const { ills } = useAxiosFetch("http://localhost:8080/ailments");
    useEffect(() => {
        setIllness(ills);
    }, [ills])

    const ailments = illness.map(item => item.name)

    // Functionality for search button in home page
    useEffect(() => {
        const filteredResults = appointments.filter((appt) =>
            ((appt.details).toLowerCase()).includes(search.toLowerCase())
            || ((appt.overview).toLowerCase()).includes(search.toLowerCase()))
        setSearchResults(filteredResults.reverse());
    }, [appointments, search])

    // Create appointment
    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = appointments.length ? appointments[appointments.length - 1].id + 1 : 1;
        const date = startDate.toString();
        const newAppointment = { id, overview: appointmentTitle, details: appointmentDetails, date, time: apptTime, doctor: selectedDoctor.name };
        try {
            const response = await api.post('appointments', newAppointment);
            const allAppointments = [...appointments, response.data];
            setAppointments(allAppointments);
            setAppointmentTitle('');
            setAppointmentDetails('');
            setStartDate('');
            setSelectedDoctor({})
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
        redirect('/');
    }

    // Delete appointment
    const handleDelete = async (id) => {
        try {
            await api.delete(`/appointments/${id}`)
            const apptList = appointments.filter(appt => appt._id !== id);
            setAppointments(apptList);
            redirect('/');
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    }

    // Update appointment
    const handleEdit = async (_id) => {
        const date = startDate.toString();
        const updatedAppointment = { _id, overview: editTitle, details: editDetails, date, time: apptTime, doctor: selectedDoctor.name };
        try {
            const response = await api.put(`/appointments/${_id}`, updatedAppointment);
            setAppointments(appointments.map(appt => appt._id === _id ? { ...response.data } : appt))
            setEditTitle('');
            setEditDetails('');
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
        redirect('/');
    }

    const handleTimeChange = (e) => {
        if (e.target.classList.contains('timeBtn')) {
            e.target.classList.add('selected')
            e.target.classList.remove('timeBtn')
        } else {
            e.target.classList.add('timeBtn')
            e.target.classList.remove('selected')
        }
        setApptTime(e.target.innerHTML);
    }

    const handleDocChange = (key) => {
        const doc = doctors.find(doc => doc._id.toString() === key);
        // console.log(doc)
        setSelectedDoctor(doc);
    }

    const handleSelect = (e) => {
        // console.log(e);
        setAppointmentTitle(e);
    }

    return (
        <DataContext.Provider value={{
            width, search, setSearch,
            searchResults, fetchError, isLoading,
            appointments, handleEdit, editDetails,
            setEditDetails, editTitle, setEditTitle,
            startDate, setStartDate, doctors,
            handleDocChange, handleTimeChange, selectedDoctor,
            apptTime, appointmentTitle,
            ailments, handleSelect, handleSubmit,
            appointmentDetails, setAppointmentDetails, handleDelete,
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext