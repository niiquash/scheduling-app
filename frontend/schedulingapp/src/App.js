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
      apptStart: "9:00 AM",
      apptEnd: "10:00 AM"
    },
    {
      id: 2,
      apptTitle: "Fever",
      apptDetails: "I experience severly high temperatures at night and I think I might die",
      apptStart: "9:00 AM",
      apptEnd: "10:00 AM"
    },
    {
      id: 3,
      apptTitle: "Diarrhea",
      apptDetails: "I'm shitting too often, and it is water water.'",
      apptStart: "9:00 AM",
      apptEnd: "10:00 AM"
    },
  ])
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <Header title={"Appointment Scheduler"} />
      <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home appointments={appointments} />} />
        <Route path="/appointment" element={<NewAppointment />} />
        <Route path="/appointment/:id" element={<AppointmentPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
