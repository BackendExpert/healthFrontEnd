import React from 'react'
import LoginImg from '../../assets/LoginImg.png'

const Login = () => {
    const headleSubmit = (e) => {

    }
  return (
    <div className='md:px-16 px-8 my-16'>
        <h1 className="pt-6 text-xl">
            Patient Portal
        </h1>

        <div className="md:p-8 p-4 md:flex">
            <div className="w-full">
                <center><img src={LoginImg} alt="" className='h-40 w-auto'/></center>
                <h1 className="text-center font-semibold text-xl uppercase">Login</h1>

                <div className="">
                    <form action="" onSubmit={headleSubmit} method="post">
                        <input type="email" name="" id="" className="my-2 h-12 w-full bg-blue-100 rounded pl-2" required placeholder='Email Address'/>
                        <input type="password" name="" id="" className="my-2 h-12 w-full bg-blue-100 rounded pl-2" required placeholder='Password'/>
                    
                        <input type="submit" value="Login to Portal" className="bg-[#0ea5e9] text-white font-bold py-2 px-8 rounded-full mt-4 cursor-pointer" />
                    </form>
                </div>
            </div>
            <div className="w-full"></div>
        </div>
    </div>
  )
}

export default Login