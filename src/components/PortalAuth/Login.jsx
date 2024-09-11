import React, { useState } from 'react'
import LoginImg from '../../assets/LoginImg.png'
import axios from 'axios'
import  secureLocalStorage  from  "react-secure-storage";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()

    const [LoginData, SetLoginData] = useState({
        email: '',
        password: ''
    })

    const [SignUpData, SetSignUpData] = useState({
        username: '',
        nic: '',
        useremail: '',
        userPass: ''
    })
    

    const headleLogin = async (e) => {
        e.preventDefault();

        try{
            const res = await axios.post(import.meta.env.VITE_APP_API + '/Auth/Login', LoginData)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("Login Success")
                    localStorage.setItem('token', res.data.Token)
                    navigate('/Dashboard/Summary')
                    // login user Email 
                    secureLocalStorage.setItem('Login1', res.data.Result.email)
                    secureLocalStorage.setItem('Login2', res.data.Result.role)      
                    const CheckActive = res.data.Result.Status
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

    const headleRegister = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post(import.meta.env.VITE_APP_API + '/Auth/Register', SignUpData)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("Registation Success")
                    window.location.reload()
                }
                else{
                    alert(res.data.error)
                }
            })
        }
        catch(err){
            console.log(err)
        }
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
                    <form action="" onSubmit={headleLogin} method="post">
                        <input type="email" name="" id="" className="my-2 h-12 w-full bg-blue-100 rounded pl-2" required placeholder='Email Address' onChange={e => SetLoginData({ ...LoginData, email:e.target.value})}/>
                        <input type="password" name="" id="" className="my-2 h-12 w-full bg-blue-100 rounded pl-2" required placeholder='Password' onChange={e => SetLoginData({ ...LoginData, password:e.target.value})}/>
                    
                        <input type="submit" value="Login to Portal" className="bg-[#0ea5e9] text-white font-bold py-2 px-8 rounded-full mt-4 cursor-pointer" />
                    </form>
                </div>

                <div className="my-6">
                    <form action="" onSubmit={headleRegister} method="post">
                        <div className="md:grid grid-cols-2 gap-4">
                            <input type="text" name="" id="" className="my-2 h-12 w-full bg-blue-100 rounded pl-2" required placeholder='Username' onChange={e => SetSignUpData({ ...SignUpData, username:e.target.value})}/>
                            <input type="text" name="" id="" className="my-2 h-12 w-full bg-blue-100 rounded pl-2" required placeholder='NIC Number' onChange={e => SetSignUpData({ ...SignUpData, nic:e.target.value})}/>
                        </div>
                        <div className="md:grid grid-cols-2 gap-4">
                            <input type="email" name="" id="" className="my-2 h-12 w-full bg-blue-100 rounded pl-2" required placeholder='Email Address' onChange={e => SetSignUpData({ ...SignUpData, useremail:e.target.value})}/>
                            <input type="password" name="" id="" className="my-2 h-12 w-full bg-blue-100 rounded pl-2" required placeholder='Password' onChange={e => SetSignUpData({ ...SignUpData, userPass:e.target.value})}/>
                        </div>

                    
                        <input type="submit" value="Create New Account" className="bg-[#0ea5e9] text-white font-bold py-2 px-8 rounded-full mt-4 cursor-pointer" />
                    </form>
                </div>

            </div>
            <div className="w-full">
            <div className="w-full md:pl-8  md:mt-0">
                <h2 className="text-xl font-semibold ">Need Help?</h2>
                <p className="mb-4">If you are experiencing issues accessing your account, you can reach our support team for assistance.</p>

                <h2 className="text-xl font-semibold mb-4">Support</h2>
                <ul className="list-disc pl-4">
                    <li><a href="/forgot-password" className="text-blue-500">Forgot Password?</a></li>
                    <li><a href="/help" className="text-blue-500">Help and Support</a></li>
                </ul>

                <h2 className="text-xl font-semibold mt-8 mb-4">Announcements</h2>
                <p className="mb-4 text-gray-700">Our patient portal will be undergoing scheduled maintenance on Sept 30, 2024, from 12:00 AM to 6:00 AM. Please plan accordingly.</p>

                <h2 className="text-xl font-semibold mt-8 mb-4">COVID-19 Updates</h2>
                <p className="mb-4 text-gray-700">Due to the ongoing pandemic, we recommend patients to use telehealth services whenever possible. Stay safe and follow the latest health protocols.</p>

                <h2 className="text-xl font-semibold mt-8 mb-4">Security Tips</h2>
                <p className="text-gray-600">Ensure your password is secure and avoid sharing login details with anyone. Always log out after using shared devices.</p>

                <h2 className="text-xl font-semibold mt-8 mb-4">Terms & Privacy</h2>
                <p className="text-gray-600">By logging in, you agree to our <a href="/terms" className="text-blue-500">Terms of Service</a> and <a href="/privacy" className="text-blue-500">Privacy Policy</a>.</p>
                </div>
 
            </div>
        </div>
    </div>
  )
}

export default Login