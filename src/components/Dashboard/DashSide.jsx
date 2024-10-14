import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BsChevronUp, BsChevronDown, BsGearFill, BsList, BsSpeedometer2, BsX, BsPersonFill, BsPeople, BsCalendarCheckFill, BsLungsFill } from "react-icons/bs";
import secureLocalStorage from "react-secure-storage";

const DashSide = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});

  const RoleUser = secureLocalStorage.getItem("Login2");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (id) => {
    setSubmenuOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Filtered menu based on roles
  const SideMenu = [
    { id: 1, name: "Dashboard", link: '/Dashboard/Home', icon: <BsSpeedometer2 className='h-5 w-auto fill-[#00B0FF] hover:fill-white' /> },
    {
      id: 2, name: "Accounts", icon: <BsPeople className='h-5 w-auto fill-[#00B0FF]' />, submenu: [
        { id: 1, name: "Patient Accounts", link: '/Dashboard/PatientAccounts' },
        { id: 2, name: "Doctors Accounts", link: '/Dashboard/DoctorAccounts' },
        { id: 3, name: "Nurse Accounts", link: '/Dashboard/NurseAccounts' },
        { id: 4, name: "Staff Accounts", link: '/Dashboard/StaffAccounts' },
      ]
    },
    {
      id: 3, name: "Appointments", icon: <BsCalendarCheckFill className='h-5 w-auto fill-[#00B0FF]' />, submenu: [
        { id: 1, name: "New Appointments", link: '/Dashboard/NewAppointments' },
        { id: 2, name: "Today's Appointments", link: '/Dashboard/TodayAppointments' },
        { id: 3, name: "All Appointments", link: '/Dashboard/Appointments' },
        { id: 4, name: "Add Appointment", link: '/Dashboard/AddAppointment' },
      ]
    },
    { id: 4, name: "My Appointments", link: '', icon: <BsCalendarCheckFill className='h-5 w-auto fill-[#00B0FF]' />, submenu: [
      { id: 1, name: "PEO TV", link: '/Dashboard/peoTV' },
      { id: 2, name: "Voice", link: '/Dashboard/voice' }
    ] },
    { id: 5, name: "My Appointments", link: '', icon: <BsCalendarCheckFill className='h-5 w-auto fill-[#00B0FF]' />, submenu: [
      { id: 1, name: "PEO TV", link: '/Dashboard/peoTV' },
      { id: 2, name: "Voice", link: '/Dashboard/voice' }
    ] },
    { id: 6, name: "Profile", link: '/Dashboard/Profile', icon: <BsPersonFill className='h-5 w-auto fill-[#00B0FF]' /> },
    { id: 7, name: "Settings", link: '/Dashboard/Settings', icon: <BsGearFill className='h-5 w-auto fill-[#00B0FF]' /> }
  ];

  // Menu filtering based on RoleUser
  const filteredMenu = SideMenu.filter((menu) => {
    if (RoleUser === "Doctor" && (menu.id === 2 || menu.id === 4 || menu.id === 5)) return false; // Doctor should not access 'Accounts'
    if ((RoleUser === "Doctor" || RoleUser === "Nurse") && menu.id === 3) {
      menu.submenu = menu.submenu.filter((submenu) => submenu.name !== "Add Appointment");
    }
    if (RoleUser === "Patient" && (menu.id === 2 || menu.id === 3 || menu.id === 5)) return false; // Patient should not access 'Accounts' and 'Appointments'
    if (RoleUser === "SuperAdmin" && menu.id === 4) return false; // SuperAdmin should not access 'My Appointments'
    if (RoleUser === "Staff" && menu.id === 4) return false;
    if (RoleUser === "Nurse" && (menu.id === 2 || menu.id === 4 || menu.id === 5)) return false; // Staff should not access 'My Appointments'
    return true;
  });

  return (
    <div>
      <button className="md:hidden fixed top-20 right-4 z-50 bg-blue-600 text-white p-2 rounded font-semibold" onClick={toggleSidebar}>
        {!isOpen ? <BsList /> : <BsX />}
      </button>
      <div className={`backdrop-blur-md bg-white/30 md:min-w-74 md:max-w-64 w-full md:w-auto h-screen md:relative fixed top-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
        <div className="bg-blue-100/50 py-2 h-full">
          <h1 className="mx-5 py-4 flex items-center">
            <BsLungsFill className='h-8 w-auto' />
            <span className="pt-1 text-2xl font-semibold pl-2 uppercase">Health Care</span>
          </h1>
          <div className="h-full hide-scrollbar overflow-auto">
            {filteredMenu.map((menu) => (
              <MenuComponent
                key={menu.id}
                menu={menu}
                isActive={location.pathname === menu.link}
                submenuOpen={submenuOpen}
                toggleSubmenu={toggleSubmenu}
                navigate={navigate}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuComponent = ({ menu, isActive, submenuOpen, toggleSubmenu, navigate }) => (
  <div>
    <div
      className={`my-2 duration-300 py-1 pl-6 px-4 pb-2 flex items-center justify-between cursor-pointer mx-2 rounded-xl ${isActive ? 'bg-white' : 'hover:bg-white hover:shadow-md'}`}
      onClick={() => menu.submenu ? toggleSubmenu(menu.id) : navigate(menu.link)}
    >
      <div className="flex">
        <div className="pt-1 pr-2">{menu.icon}</div>
        <div className="pt-1">{menu.name}</div>
      </div>
      {menu.submenu && (
        <div className="text-blue-500">
          {submenuOpen[menu.id] ? <BsChevronUp /> : <BsChevronDown />}
        </div>
      )}
    </div>
    {menu.submenu && submenuOpen[menu.id] && (
      <div className="my-4">
        <div className="bg-white mx-4 rounded-md shadow-md">
          {menu.submenu.map((submenu) => (
            <Link to={submenu.link} key={submenu.id}>
              <div className={`my-1 duration-300 hover:bg-blue-200 rounded-md py-1 px-2 text-sm ${isActive ? 'bg-white' : ''}`}>
                <p className="pl-6">{submenu.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )}
  </div>
);

export default DashSide;
