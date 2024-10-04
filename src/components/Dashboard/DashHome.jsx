import React, { useEffect, useState } from 'react'
import axios from 'axios'
import  secureLocalStorage  from  "react-secure-storage"
import { useNavigate } from 'react-router-dom'
import DoctorImg from '../../assets/Doctor.png'
import PatentImg from '../../assets/PatientImg.png'
import AdminImg from '../../assets/Admin.png'
import NurseImg from '../../assets/Nurse.png'
import SuperAdminImg from '../../assets/Admin.png'

const DashHome = () => {
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    const [DashData, SetDashData] = useState([])

    useEffect(() => {
      axios.get(import.meta.env.VITE_APP_API + `/Dashboard/DashData/${EmailUser}`)
      .then(res => SetDashData(res.data.Result))
      .catch(err => console.log(err))
    }, [])

    if(EmailUser !== null || RoleUser !== null){
        return (
            <div>
                <h1 className="font-semibold uppercase text-xl">Dashboard</h1>
        
                <div className="bg-white p-4 my-2 rounded-md shadow-md">
                    <div className="md:flex">
                        <div className="w-full">
                            <p className="text-xl">Welcome {DashData.role}, <span className='font-semibold'>{DashData.username}</span></p>
                            <p className="text-gray-500 mt-2">Have a nice Day</p>
                        </div>
                        <div className="w-full">
                            {
                                (() => {
                                    if(DashData.role === "Doctor"){
                                        return (
                                            <center><img src={DoctorImg} alt="" className='h-40 w-auto'/></center>
                                        )
                                    }
                                    else if(DashData.role === "Patient"){
                                        return (
                                            <center><img src={PatentImg} alt="" className='h-40 w-auto'/></center>
                                        )
                                    }
                                    else if(DashData.role === "SuperAdmin"){
                                      return (
                                        <center><img src={SuperAdminImg} alt="" className='h-40 w-auto'/></center>
                                      )
                                    }
                                    else if(DashData.role === "Nurse"){
                                      return (
                                          <center><img src={NurseImg} alt="" className='h-40 w-auto'/></center>
                                      )
                                    }
                                })()
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
          )
    }
    else{
        useEffect(() => {
            localStorage.clear()
            navigate('/PatientPortal')
        }, [])
    }
}

export default DashHome