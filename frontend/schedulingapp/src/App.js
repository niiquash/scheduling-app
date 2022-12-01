import 'bootstrap/dist/css/bootstrap.min.css';
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
import UselessComponent from './components/UselessComponent';

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
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Matthew Allred",
      AvailHours: ["8:00AM", "9:00AM"]
    },
    {
      id: 2,
      name: "David Allred",
      AvailHours: ["8:30AM", "9:30AM"]
    },
  ]);
  const [selectedDoctor, setSelectedDoctor] = useState({});
  const [apptTime, setApptTime] = useState('');
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [appointmentTitle, setAppointmentTitle] = useState('');
  const [appointmentDetails, setAppointmentDetails] = useState('');
  const [startDate, setStartDate] = useState('');

  const redirect = useNavigate();

  useEffect(() => {
    const filteredResults = appointments.filter((appt) =>
      ((appt.apptDetails).toLowerCase()).includes(search.toLowerCase())
      || ((appt.apptTitle).toLowerCase()).includes(search.toLowerCase()))
    setSearchResults(filteredResults.reverse());
  }, [appointments, search])

  console.log(startDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = appointments.length ? appointments[appointments.length - 1].id + 1 : 1;
    const date = startDate.toString();
    const newAppointment = { id, apptTitle: appointmentTitle, apptDetails: appointmentDetails, apptDate: date };
    const allAppointments = [...appointments, newAppointment];
    setAppointments(allAppointments);
    setAppointmentTitle('');
    setAppointmentDetails('');
    setStartDate('');
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
    // console.log(key)
    // console.log(doctors)
    // console.log(doc)
    const doc = doctors.find(doc => doc.id === Number(key));
    setSelectedDoctor(doc);
  }

  // console.log("after", selectedDoctor);
  console.log(apptTime);

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
            doctors={doctors}
            handleDocChange={handleDocChange}
            handleTimeChange={handleTimeChange}
            selectedDoctor={selectedDoctor}
            apptTime={apptTime}
            startDate={startDate}
            setStartDate={setStartDate}
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
        <Route path="/useless" element={<UselessComponent />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
