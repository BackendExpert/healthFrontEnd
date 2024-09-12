import axios from 'axios';
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import DashSide from './DashSide';
import DashNav from './DashNav';
import secureLocalStorage from "react-secure-storage";

const Dashboard = () => {
  const navigate = useNavigate();

//   // Uncomment and use the authentication logic if needed
//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const token = localStorage.getItem('token');

//         if (!token) {
//           navigate('/PatientPortal');
//           window.location.reload(); // Corrected from window.localStorage.reload()
//         }

//         const response = await axios.get(import.meta.env.VITE_APP_API + '/dashboard/Auth', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.data.success) {
//           navigate('/PatientPortal');
//         }
//       } catch (err) {
//         console.log(err);
//         navigate('/PatientPortal');
//       }
//     };
//     checkAuth();
//   }, [navigate]);

  return (
    <div className="w-full min-h-screen">
      <div className="md:flex">
        <div className="w-1/5 fixed top-0 left-0 h-full">
          <DashSide />
        </div>
        <div className="md:w-full md:ml-[20%]"> 
          <DashNav />
          <div className="py-4 px-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
