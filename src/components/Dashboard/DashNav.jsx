import React, { useEffect, useState } from 'react'
import UserImg from '../../assets/User.png'
import axios from 'axios'
import  secureLocalStorage  from  "react-secure-storage"
import { useNavigate } from 'react-router-dom'

const DashNav = () => {
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    const [DashData, SetDashData] = useState([])

    useEffect(() => {
      axios.get(import.meta.env.VITE_APP_API + `/Dashboard/DashData/${EmailUser}`)
      .then(res => SetDashData(res.data.Result))
      .catch(err => console.log(err))
    }, [])
    
  return (
    <div className='py-4 mr-2 px-4 '>
        <div className="flex justify-between">
            <div className="">
              <h1 className="uppercase text-2xl font-semibold mt-2 hidden">hi</h1>
            </div>
            <div className="flex">
              <div className="">
                <h1 className="text-sm pr-2">{DashData.username}</h1>
                <h1 className="text-sm pr-2 uppercase text-right text-gray-500 font-bold">{DashData.role}</h1>
              </div>
              <img src={UserImg} alt="" className='h-10 w-auto rounded-full'/>
            </div>
        </div>
    </div>
  )
}

export default DashNav