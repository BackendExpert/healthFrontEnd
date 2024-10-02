import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import NavBar from "./components/HomePage/NavBar";
import './App.css';
import Footer from "./components/HomePage/Footer";
import Login from "./components/PortalAuth/Login";
import PrivateRoute from "./components/Dashboard/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import DashNav from "./components/Dashboard/DashNav";
import DashFooter from "./components/Dashboard/DashFooter";
import DashHome from "./components/Dashboard/DashHome";
import PatientAcc from "./components/Patients/PatientAcc";

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
          <Route path="/Dashboard/" element={<PrivateRoute element={<Dashboard />} />}>
            <Route path="Home" element={<DashHome />} />
            <Route path="PatientAccounts" element={<PatientAcc /> } />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
