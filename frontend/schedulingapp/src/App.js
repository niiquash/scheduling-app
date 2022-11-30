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
import { format } from 'date-fns';
import { MongoCursorInUseError } from 'mongodb';

function App() {

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      apptTitle: "Head cold",
      apptDoctor: "John Doe",
      apptDetails: "I need to see a doctor about my cold",
      apptDate: "July 4, 2022",
      apptTime: "10:00 AM"
    },
    {
      id: 2,
      apptTitle: "Fever",
      apptDoctor: "John Doe",
      apptDetails: "I experience severly high temperatures at night and I think I might die",
      apptDate: "May 4, 2022",
      apptTime: "10:00 AM"
    },
    {
      id: 3,
      apptTitle: "Diarrhea",
      apptDoctor: "John Doe",
      apptDetails: "I'm shitting too often, and it is water water.'",
      apptDate: "April 4, 2022",
      apptTime: "10:00 AM"
    },
  ])
  const [doctorList, setDoctorList] = useState([
    {
      id: 1,
      name: "Miles Morales",
      availHours: ["8:00AM", "9:00AM", "10:00AM"]
    },
    {
      id: 2,
      name: "Matthew Woolery",
      availHours: ["8:30AM", "9:30AM", "10:30AM"]
    },
    {
      id: 3,
      name: "Kenny Bement",
      availHours: ["8:45AM", "9:45AM", "10:45AM"]
    },
  ]);
  const [currentDoctor, setCurrentDoctor] = useState('');
  const [currentDoctorObj, setCurrentDoctorObj] = useState([]);
  const redirect = useNavigate();
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [appointmentTitle, setAppointmentTitle] = useState('');
  const [appointmentDetails, setAppointmentDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = appointments.length ? appointments[appointments.length - 1].id + 1 : 1;
    const newAppointment = { id, apptTitle: appointmentTitle, apptDoctor: currentDoctor, apptDetails: appointmentDetails };
    const allAppointments = [...appointments, newAppointment];
    setAppointments(allAppointments);
    setAppointmentTitle('');
    setAppointmentDetails('');
    setCurrentDoctor('')
    redirect('/');
  }

  const handleDelete = (id) => {
    const apptList = appointments.filter(appt => appt.id !== id);
    setAppointments(apptList);
    redirect('/');
  }


  const handleChange = (e) => {
    setCurrentDoctor(e.target.value);
    const selectedDoctor = doctorList.filter(doc => doc.name === currentDoctor);
    setCurrentDoctorObj(selectedDoctor);
  }

  return (
    <div className="App">
      <Header title={"Appointment Scheduler"} />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home appointments={appointments} />} />
        <Route path="/appointment" element={<NewAppointment
          handleSubmit={handleSubmit}
          appointmentTitle={appointmentTitle}
          setAppointmentTitle={setAppointmentTitle}
          appointmentDetails={appointmentDetails}
          setAppointmentDetails={setAppointmentDetails}
          doctorList={doctorList}
          currentDoctor={currentDoctor}
          setCurrentDoctor={setCurrentDoctor}
          handleChange={handleChange}
          currentDoctorObj={currentDoctorObj}
        />}
        />
        <Route path="/appointment/:id" element={<AppointmentPage appointments={appointments} handleDelete={handleDelete} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
