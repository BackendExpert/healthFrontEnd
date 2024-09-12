import React, { useEffect, useState } from 'react'
import UserImg from '../../assets/User.png'
import axios from 'axios'

const DashNav = () => {
    const [DashData, SetDashData] = useState([])

    useEffect(() => {
      axios.get(import.meta.env.VITE_APP_API + '/Dashboard/DashData')
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
                <h1 className="text-sm pr-2">JehanKandy</h1>
                <h1 className="text-sm pr-2 uppercase text-right text-gray-500 font-bold">Admin</h1>
              </div>
              <img src={UserImg} alt="" className='h-10 w-auto rounded-full'/>
            </div>
        </div>
    </div>
  )
}

export default DashNav