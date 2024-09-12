import React, { useEffect, useState } from 'react';
import UserImg from '../../assets/User.png';
import axios from 'axios';
import secureLocalStorage from "react-secure-storage";
import { useNavigate } from 'react-router-dom';
import { BsPersonFill, BsPower } from 'react-icons/bs';

const DashNav = () => {
  const navigate = useNavigate();
  const EmailUser = secureLocalStorage.getItem("Login1");
  const RoleUser = secureLocalStorage.getItem("Login2");

  const [DashData, SetDashData] = useState([]);
  const [isProfileOpen, setisProfileOpen] = useState(false);

  useEffect(() => {
    axios.get(import.meta.env.VITE_APP_API + `/Dashboard/DashData/${EmailUser}`)
      .then(res => SetDashData(res.data.Result))
      .catch(err => console.log(err));
  }, []);

  const handleContent = () => {
    setisProfileOpen(!isProfileOpen); // Toggle profile visibility
  };

  const headleLogout = () => {
    localStorage.clear()
    navigate('/')
    window.location.reload()
  }

  return (
    <div className='py-4 mr-2 px-4 relative'>
      <div className="flex justify-between">
        <div className="">
          <h1 className="uppercase text-2xl font-semibold mt-2 hidden">hi</h1>
        </div>
        <div className="flex cursor-pointer" onClick={handleContent}>
          <div className="">
            <h1 className="text-sm pr-2">{DashData.username}</h1>
            <h1 className="text-sm pr-2 uppercase text-right text-gray-500 font-bold">{DashData.role}</h1>
          </div>
          <img src={UserImg} alt="" className='h-10 w-auto rounded-full' />
        </div>
      </div>

      {/* Profile Content that slides down */}
      <div
        className={`rounded-xl absolute top-0 right-4 bg-white shadow-md transition-transform duration-300 ease-in-out transform ${
          isProfileOpen ? 'translate-y-16' : '-translate-y-40'
        } z-50`}
      >
        <div className="p-4 mx-4">
          <div className="flex my-2">
            <BsPersonFill className='h-6 w-auto pr-2'/>
            <p className="">Profile</p>
          </div>

          <div className="flex my-4 cursor-pointer" onClick={headleLogout}>
            <BsPower className='h-6 w-auto pr-2'/>
            <p className="">LogOut</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashNav;
