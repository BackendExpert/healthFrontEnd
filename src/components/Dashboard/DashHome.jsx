import React from 'react'
import DoctorImg from '../../assets/Doctor.png'

const DashHome = () => {
  return (
    <div>
        <h1 className="font-semibold uppercase text-xl">Dashboard</h1>

        <div className="bg-white p-4 my-2 rounded-md shadow-md">
            <div className="md:flex">
                <div className="w-full">
                    <p className="text-xl">Welcome Doctor, <span className='font-semibold'>Kamal Perera</span></p>
                    <p className="text-gray-500 mt-2">Have a nice Day</p>
                </div>
                <div className="w-full">
                    <center><img src={DoctorImg} alt="" className='h-40 w-auto'/></center>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashHome