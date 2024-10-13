import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./pages/HomePage/NavBar";
import './App.css';
import Footer from "./pages/HomePage/Footer";
import Login from "./pages/PortalAuth/Login";
import PrivateRoute from "./components/Dashboard/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import DashNav from "./components/Dashboard/DashNav";
import DashFooter from "./components/Dashboard/DashFooter";
import DashHome from "./components/Dashboard/DashHome";
import PatientAcc from "./pages/Patients/PatientAcc";
import DoctorAcc from "./pages/Doctors/DoctorAcc";
import NurseAcc from "./pages/Nurse/NurseAcc";
import StaffAcc from "./pages/Staff/StaffAcc";
import Appointments from "./pages/Appointments/Appointments";
import NewAppointments from "./pages/Appointments/NewAppointments";
import TodayAppointments from "./pages/Appointments/TodayAppointments";
import AddAppointment from "./pages/Appointments/AddAppointment";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";
import AddDoctor from "./pages/Doctors/AddDoctor";
import ForgetPass from "./pages/PortalAuth/ForgetPass";

function Layout({ children }) {
  const [showNavBar, setShowNavBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation(); // Now it's within the Router

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // If scrolling down and past a certain threshold, hide the NavBar
      setShowNavBar(false);
    } else {
      // If scrolling up, show the NavBar
      setShowNavBar(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const isDashboard = location.pathname.startsWith('/Dashboard');

  return (
    <div>
      { !isDashboard && showNavBar ? <NavBar /> : null }
      {children}
      { !isDashboard && <Footer />  }
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/PatientPortal" element={<Login />} />
          <Route path="/ForgetPassword" element={<ForgetPass /> } />
          <Route path="/Dashboard/" element={<PrivateRoute element={<Dashboard />} />}>
            <Route path="Home" element={<DashHome />} />
            <Route path="PatientAccounts" element={<PatientAcc /> } />
            <Route path="DoctorAccounts" element={<DoctorAcc /> } /> 
            <Route path="NurseAccounts" element={<NurseAcc /> } />
            <Route path="StaffAccounts" element={<StaffAcc /> } />
            <Route path="Appointments" element={<Appointments /> } /> 
            <Route path="NewAppointments" element={<NewAppointments /> } />
            <Route path="TodayAppointments" element={<TodayAppointments /> } />
            <Route path="AddAppointment" element={<AddAppointment /> } />
            <Route path="Profile" element={<Profile />} />
            <Route path="Settings" element={<Settings /> } />
            <Route path="CreateDoctor" element={<AddDoctor /> } /> 
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
