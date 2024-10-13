import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
    const { token } = useParams()
    const navigate = useNavigate()
    const [newPass, SetNewPass] = useState('')

    const headlePassReset = async (e) => {
        e.preventDefault();

        try{
            const res = await axios.post(import.meta.env.VITE_APP_API + `/Auth/PasswordReset/${token}`, {newPass})
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("Password Has been Reset Successful")
                    navigate('/PatientPortal')
                }
                else{
                    alert(res.data.Error)
                }
            })
        }
        catch(err){
            console.log(err)
        }
    }

  return (
    <div className=''>
        <div className='md:px-16 px-8 my-16'>
            <div className="">
                <h1 className="font-semibold text-2xl">Reset The Password</h1>
                <div className="">
                    <form onSubmit={headlePassReset} method="post">
                        <div className="md:w-1/2 mt-8">
                            <h1 className="">Enter New Password</h1>
                            <input type="password" value={newPass} onChange={(e) => SetNewPass(e.target.value)} name="" id="" className='my-2 h-12 w-full bg-blue-100 rounded pl-2' required placeholder='New Password'/>
                        </div>

                        <div className="">
                            <button type="submit" className='bg-[#0ea5e9] text-white font-bold py-2 px-8 rounded-full mt-4 cursor-pointer'>Reset Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResetPassword