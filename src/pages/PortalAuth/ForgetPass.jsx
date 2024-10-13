import axios from 'axios'
import React, { useState } from 'react'

const ForgetPass = () => {
    const [email, setEmail] = useState('')

    const headleForgetPass = async (e) => {
        e.preventDefault()

        try{
            const res = await axios.post(import.meta.env.VITE_APP_API + '/Auth/ForgetPassword', email)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("Password Reset Email has been sent to given Email, Check your Email")
                    window.location.reload()
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
                <h1 className="font-semibold text-2xl">Forget Password</h1>
                <div className="">
                    <form onSubmit={headleForgetPass} method="post">
                        <div className="w-1/2 mt-8">
                            <h1 className="">Enter Email Addres</h1>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="" id="" className='my-2 h-12 w-full bg-blue-100 rounded pl-2' required placeholder='Email Address'/>
                        </div>

                        <div className="">
                            <button type="submit" className='bg-[#0ea5e9] text-white font-bold py-2 px-8 rounded-full mt-4 cursor-pointer'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForgetPass