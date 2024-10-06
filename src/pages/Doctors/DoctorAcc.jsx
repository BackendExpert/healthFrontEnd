import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import secureLocalStorage from "react-secure-storage";
import DoctorImg from "../../assets/Doctor.png"
import CountUp from 'react-countup';
import { BsPlusSquareFill } from 'react-icons/bs';

const DoctorAcc = () => {
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");
    const navigate = useNavigate()

    if(RoleUser === "SuperAdmin"){
        return (
            <div>
                <h1 className="font-semibold uppercase text-xl">Doctor Accounts</h1>
                <div className="bg-white p-4 my-2 rounded-md shadow-md">
                    <div className="md:grid grid-cols-4 gap-4">
                        <div className="bg-[#00B0FF] w-auto rounded-md flex justify-between px-4 py-6">
                            <div className="flex">
                                <img src={DoctorImg} alt="" className="rounded-xl h-16 w-auto" />
                                <div className="">
                                    <p className="pl-2 text-white pt-2 uppercase font-semibold text-xl">Doctors</p>
                                    <p className="pl-2 text-white text-sm">Total Doctors</p>
                                </div>
                            </div>
                            <div className="">
                                <CountUp end={50} className='text-white text-2xl font-semibold pt-4 pr-4'/>
                            </div>
                        </div>
                        <div className="bg-[#00B0FF] w-auto rounded-md flex justify-between px-4 py-6">
                            <div className="flex">
                            <BsPlusSquareFill className="h-16 w-16 text-white fill-white" />
                                <div className="">
                                    <p className="pl-2 text-white pt-2 uppercase font-semibold text-xl">Add New</p>
                                    <p className="pl-2 text-white text-sm">Doctor</p>
                                </div>
                            </div>
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

export default DoctorAcc