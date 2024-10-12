import React, { useState } from 'react'

const Settings = () => {
    const [PassReset, SetPassReset] = useState({
       currentpass: '',
       newpass: ''
    })

    const HeadleUpdatePassword = (e) => {
        e.preventDefault()

        try{

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
                    <input type="text" name="" className="w-full h-12 pl-2 rounded bg-blue-100 mt-2" placeholder='Current Password' onChange={e => SetPassReset({ ...PassReset, currentpass:e.target.value})} required/>
                  </div>

                  <div className="">
                    <p className="mt-2">Current Password : </p>
                    <input type="text" name="" className="w-full h-12 pl-2 rounded bg-blue-100 mt-2" placeholder='New Password' required/>
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