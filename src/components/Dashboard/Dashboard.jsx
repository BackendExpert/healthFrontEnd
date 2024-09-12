import axios from 'axios';
import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import DashSide from './DashSide';
import DashNav from './DashNav';
import secureLocalStorage from "react-secure-storage";

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen bg-blue-100/50 ">
      <div className="md:flex">
        <div className="w-1/5 fixed top-0 left-0 h-full">
          <DashSide />
        </div>
        <div className="md:w-full md:ml-[20%]"> 
          <DashNav />
          <div className="py-4 px-2">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
