import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import NewAppointment from './components/NewAppointment';
import AppointmentPage from './components/AppointmentPage';
import About from './components/About';
import Missing from './components/Missing';
import { Route, Routes, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

function App() {

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      apptTitle: "Head cold",
      apptDetails: "I need to see a doctor about my cold",
      apptDate: "July 4, 2022",
      apptTime: "10:00 AM"
    },
    {
      id: 2,
      apptTitle: "Fever",
      apptDetails: "I experience severly high temperatures at night and I think I might die",
      apptDate: "May 4, 2022",
      apptTime: "10:00 AM"
    },
    {
      id: 3,
      apptTitle: "Diarrhea",
      apptDetails: "I'm shitting too often, and it is water water.'",
      apptDate: "April 4, 2022",
      apptTime: "10:00 AM"
    },
  ])
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [appointmentTitle, setAppointmentTitle] = useState('');
  const [appointmentDetails, setAppointmentDetails] = useState('');
  const redirect = useNavigate();

  useEffect(() => {
    const filteredResults = appointments.filter((appt) =>
      ((appt.apptDetails).toLowerCase()).includes(search.toLowerCase())
      || ((appt.apptTitle).toLowerCase()).includes(search.toLowerCase()))
    setSearchResults(filteredResults.reverse());
  }, [appointments, search])

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = appointments.length ? appointments[appointments.length - 1].id + 1 : 1;
    const newAppointment = { id, apptTitle: appointmentTitle, apptDetails: appointmentDetails };
    const allAppointments = [...appointments, newAppointment];
    setAppointments(allAppointments);
    setAppointmentTitle('');
    setAppointmentDetails('');
    redirect('/');

  }

  const handleDelete = (id) => {
    const apptList = appointments.filter(appt => appt.id !== id);
    setAppointments(apptList);
    redirect('/');
  }

  return (
    <div className="App">
      <Header title={"Appointment Scheduler"} />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home appointments={searchResults} />} />
        <Route path="/appointment"
          element={<NewAppointment
            handleSubmit={handleSubmit}
            appointmentTitle={appointmentTitle}
            setAppointmentTitle={setAppointmentTitle}
            appointmentDetails={appointmentDetails}
            setAppointmentDetails={setAppointmentDetails}
          />} />
        <Route path="/appointment/:id" element={<AppointmentPage appointments={appointments} handleDelete={handleDelete} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
