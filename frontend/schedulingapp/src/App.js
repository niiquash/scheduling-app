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
import AuthHeader from './components/AuthHeader';
import { Route, Routes } from 'react-router-dom'
import { DataProvider } from './context/DataContext';
import ProfilePage from './components/ProfilePage';
import AlertPage from './components/AlertPage';


function App() {

  return (
    <div className="App">
      <DataProvider>
        <Header title={"Appointment Scheduler"} />
        <AuthHeader />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/edit/:id" element={<EditAppointment />} />
          <Route path="/appointment" element={<NewAppointment />} />
          <Route path="/appointment/:id" element={<AppointmentPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/alert" element={<AlertPage />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
