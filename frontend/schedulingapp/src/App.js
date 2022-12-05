import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import NewAppointment from './components/NewAppointment';
import AppointmentPage from './components/AppointmentPage';
import About from './components/About';
import Missing from './components/Missing';
import EditAppointment from './components/EditAppointment';
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import api from './api/appointments';

function App() {

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

  // Fetch the doctors list
  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await api.get("/doctors");
        setDoctors(response.data);
      } catch (err) {
        if (err.response) {
          // Not in the 200! response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`)
        }
      }
    }
    fetchDoctors();
  }, []);

  // Fetch the ailments list
  useEffect(() => {
    const fetchAilments = async () => {
      try {
        const response = await api.get("/ailments");
        setIllness(response.data);
      } catch (err) {
        if (err.response) {
          // Not in the 200! response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`)
        }
      }
    }
    fetchAilments();
  }, []);

  const ailments = illness.map(item => item.name)

  // Fetch appointments object
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await api.get("/appointments");
        setAppointments(response.data);
      } catch (err) {
        if (err.response) {
          // Not in the 200! response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`)
        }
      }
    }
    fetchAppointments();
  }, []);

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
    console.log(e);
    setAppointmentTitle(e);
  }

  return (
    <div className="App">
      <Header title={"Appointment Scheduler"} />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home appointments={searchResults} />} />
        <Route path="/edit/:id"
          element={<EditAppointment
            appointments={appointments}
            handleEdit={handleEdit}
            editDetails={editDetails}
            setEditDetails={setEditDetails}
            editTitle={editTitle}
            setEditTitle={setEditTitle}
            startDate={startDate}
            setStartDate={setStartDate}
            doctors={doctors}
            handleDocChange={handleDocChange}
            handleTimeChange={handleTimeChange}
            selectedDoctor={selectedDoctor}
            apptTime={apptTime}
            appointmentTitle={appointmentTitle}
            ailments={ailments}
            handleSelect={handleSelect}
          />} />
        <Route path="/appointment"
          element={<NewAppointment
            handleSubmit={handleSubmit}
            appointmentTitle={appointmentTitle}
            setAppointmentTitle={setAppointmentTitle}
            appointmentDetails={appointmentDetails}
            setAppointmentDetails={setAppointmentDetails}
            doctors={doctors}
            handleDocChange={handleDocChange}
            handleTimeChange={handleTimeChange}
            selectedDoctor={selectedDoctor}
            apptTime={apptTime}
            startDate={startDate}
            setStartDate={setStartDate}
            ailments={ailments}
            handleSelect={handleSelect}
          />} />
        <Route path="/appointment/:id"
          element={<AppointmentPage
            appointments={appointments}
            handleDelete={handleDelete}
            selectedDoctor={selectedDoctor}
            apptTime={apptTime}
            startDate={startDate}
          />}
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
