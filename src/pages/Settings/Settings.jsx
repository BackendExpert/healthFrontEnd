import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import secureLocalStorage from "react-secure-storage";

const Settings = () => {
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    const [PassReset, SetPassReset] = useState({
       currentpass: '',
       newpass: ''
    })

    const HeadleUpdatePassword = async (e) => {
        e.preventDefault()

        try{
          // console.log(PassReset)
          
          const res = await axios.post(import.meta.env.VITE_APP_API + `/Auth/PassReset/${EmailUser}`, PassReset)
          .then(res => {
            if(res.data.Status === "Success"){
              alert("Password has been Reset Successfull, Logging Out...!")
              localStorage.clear()
              navigate('/PatientPortal')              
            }
          })
        }
        catch(err){
          console.log(err)
        }
    }
  return (
    <div>
        <h1 className="font-semibold uppercase text-xl">Settings</h1>
        <div className="md:flex">
          <div className="bg-white p-4 my-2 rounded-md shadow-md w-full md:mr-2">
              <h1 className="font-semibold text-xl">Password Reset</h1>

              <form onSubmit={HeadleUpdatePassword} method="post" className='mt-4'>
                  <div className="">
                    <p className="mt-2">Current Password : </p>
                    <input type="password" name="" className="w-full h-12 pl-2 rounded bg-blue-100 mt-2" placeholder='Current Password' onChange={e => SetPassReset({ ...PassReset, currentpass:e.target.value})} required/>
                  </div>

                  <div className="">
                    <p className="mt-2">Current Password : </p>
                    <input type="password" name="" className="w-full h-12 pl-2 rounded bg-blue-100 mt-2" placeholder='New Password' onChange={e => SetPassReset({ ...PassReset, newpass:e.target.value})} required/>
                  </div>

                  <button type="submit" className='bg-[#00B0FF] text-white py-2 px-4 rounded mt-2'>Reset Password</button>
              </form>
          </div>
          <div className="bg-white p-4 my-2 rounded-md shadow-md w-full md:ml-2">
          </div>
        </div>
    </div>
  )
}

export default Settings