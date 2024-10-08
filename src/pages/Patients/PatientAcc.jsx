import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import secureLocalStorage from "react-secure-storage";
import PatientImg from "../../assets/PatientImg.png"
import CountUp from 'react-countup';

const PatientAcc = () => {
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");
    const navigate = useNavigate()

    const PatientData = [
        {
            id: 1,
            pemail: 'patient@123.com',
            pnic: '200105101033',
            pname: 'Kamal',
            Status: 'Active',
        },
        {
            id: 2,
            pemail: 'patient@123.com',
            pnic: '200105101033',
            pname: 'Kamal',
            Status: 'Active',
        },
        {
            id: 3,
            pemail: 'patient@123.com',
            pnic: '200105101033',
            pname: 'Kamal',
            Status: 'Active',
        },
        {
            id: 4,
            pemail: 'patient@123.com',
            pnic: '200105101033',
            pname: 'Kamal',
            Status: 'Active',
        },
    ]

    if(RoleUser === "SuperAdmin" || RoleUser === "Staff"){
        return (
            <div>
                <h1 className="font-semibold uppercase text-xl">Patient Accounts</h1>
                <div className="bg-white p-4 my-2 rounded-md shadow-md">
                    <div className="md:grid grid-cols-3 gap-4">
                        <div className="bg-[#00B0FF] w-auto rounded-md flex justify-between px-4 py-6">
                            <div className="flex">
                                <img src={PatientImg} alt="" className="rounded-xl h-16 w-auto" />
                                <div className="">
                                    <p className="pl-2 text-white pt-2 uppercase font-semibold text-xl">Patients</p>
                                    <p className="pl-2 text-white text-sm">Total Patients</p>
                                </div>
                            </div>
                            <div className="">
                                <CountUp end={50} className='text-white text-2xl font-semibold pt-4'/>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="bg-white p-4 my-4 rounded-md shadow-md">
                    <table className='w-full'>
                        <thead className='bg-[#00B0FF]'>
                            <tr className='h-12'>
                                <th className='text-white font-semibold'>
                                    Patient ID
                                </th>
                                <th className='text-white font-semibold'>
                                    Patient Email
                                </th>
                                <th className='text-white font-semibold'>
                                    Patient NIC
                                </th>
                                <th className='text-white font-semibold'>
                                    Patient Name
                                </th>
                                <th className='text-white font-semibold'>
                                    Patient Status
                                </th>
                                <th className='text-white font-semibold'>                                    
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                PatientData.map((patient, index) => {
                                    return (
                                        <tr className="h-12 border-b border-[#00B0FF]/20" key={index}>
                                            <td className='font-semibold'>{patient.id}</td>
                                            <td>{patient.pemail}</td>
                                            <td>{patient.pnic}</td>
                                            <td>{patient.pname}</td>
                                            <td className='font-semibold text-green-500'>{patient.Status}</td>  
                                            <td>
                                                <a href="">
                                                    <button className='bg-[#00B0FF] px-4 py-2 text-white rounded'>View</button>
                                                </a>
                                            </td>                                            
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
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

export default PatientAcc