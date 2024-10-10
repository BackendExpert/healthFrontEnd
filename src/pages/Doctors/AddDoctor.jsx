import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const navigate = useNavigate()
    const [DoctorData, SetDoctorData] = useState({
        doc_name: '',
        doc_email: '',
        doc_address: '',
        doc_nic: '',
        doc_hospital: '',
        is_work: '',
        doc_area: '',
    })

    const handleChange = (e) => {
       const { name, value } = e.target;
       SetDoctorData((prevFormData) => ({
         ...prevFormData,
         [name]: value,
       }));
    };

    const headleDoctorCreate = async (e) => {
        e.preventDefault()

        try{
            const res = await axios.post(import.meta.env.VITE_APP_API + '/Doctor/CreateDoctor' + DoctorData)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("Doctor Added Successful")
                    navigate('/Dashboard/DoctorAccounts')
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
    <div>
        <h1 className="font-semibold text-xl">Add New Doctor</h1>
        <div className="bg-white my-2 p-4 rounded-xl shadow">
            <div className="py-4">
                <form onSubmit={headleDoctorCreate} method="post">
                    <div className="md:grid grid-cols-2 gap-4">
                        <div className="md:my-0 my-2">
                            <p className="">Doctor Name:</p>
                            <input value={DoctorData.doc_name} type="text" name="doc_name" className="w-full h-12 pl-2 rounded bg-blue-100 mt-2" placeholder='Doctor Name' onChange={handleChange} required/>
                        </div>
                        <div className="md:my-0 my-2">
                            <p className="">Doctor Email:</p>
                            <input value={DoctorData.doc_email} type="email" name="doc_email" className="w-full h-12 pl-2 rounded bg-blue-100 mt-2" placeholder='Doctor Email' onChange={handleChange} required/>
                        </div>
                    </div>
                    <div className="my-4">
                        <p className="">Address:</p>
                        <input value={DoctorData.doc_address} type="text" name="doc_address" className="w-full h-12 pl-2 rounded bg-blue-100 mt-2" placeholder='Address' onChange={handleChange} required/>
                    </div>
                    <div className="md:grid grid-cols-2 gap-4">
                        <div className="md:my-0 my-2">
                            <p className="">Doctor NIC:</p>
                            <input value={DoctorData.doc_nic} type="text" name="doc_nic" className="w-full h-12 pl-2 rounded bg-blue-100 mt-2" placeholder='Doctor NIC' onChange={handleChange} required/>
                        </div>
                        <div className="md:my-0 my-2">
                            <p className="">Doctor Hospital:</p>
                            <input value={DoctorData.doc_hospital} type="text" name="doc_hospital" className="w-full h-12 pl-2 rounded bg-blue-100 mt-2" placeholder='Doctor Hospital' onChange={handleChange} required/>
                        </div>
                        <div className="md:my-0 my-2">
                            <p className="">Still working :</p>
                            <select name="is_work" required value={DoctorData.is_work} className="w-full h-12 pl-2 rounded bg-blue-100 mt-2" onChange={handleChange}>
                                <option value="">Select One</option>
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                        <div className="md:my-0 my-2">
                            <p className="">Channeling Area: (ex: For Eye)</p>
                            <input value={DoctorData.doc_area} type="text" name="doc_area" className="w-full h-12 pl-2 rounded bg-blue-100 mt-2" placeholder='Channeling Area' onChange={handleChange} required/>
                        </div>
                    </div>

                    <div className="my-4">
                        <button type="submit" className='bg-[#00B0FF] text-white py-2 px-4 rounded'>Create Doctor</button>
                    </div>
                </form>
            </div>            
        </div>
    </div>
  )
}

export default AddDoctor