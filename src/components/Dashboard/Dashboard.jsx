import axios from 'axios';
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import DashSide from './DashSide';
import DashNav from './DashNav';
import secureLocalStorage from "react-secure-storage";
import DashFooter from './DashFooter';

const Dashboard = () => {
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    if(EmailUser !== null || RoleUser !== null){
      return (
        <div className="w-full min-h-screen bg-blue-100/50 ">
          <div className="md:flex">
            <div className="w-1/5 fixed top-0 left-0 h-full">
              <DashSide />
            </div>
            <div className="md:w-full md:ml-[17%]"> 
              <DashNav />
              <div className="py-4 px-2 md:mr-4  md:mx-0 ml-4 mr-4">
                <Outlet />
              </div>
              <DashFooter />
            </div>
          </div>
        </div>
      );
    }
    else{
      useEffect(() => {
        localStorage.clear()
        navigate('/PatientPortal')
      }, [])
    }

};

export default Dashboard;
