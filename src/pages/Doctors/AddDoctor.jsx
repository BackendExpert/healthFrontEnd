import React, { useState } from 'react'

const AddDoctor = () => {
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

    const headleDoctorCreate = (e) => {
        e.preventDefault()

        try{
            console.log(DoctorData)
        }
        catch(err){
            console.log(err)
        }
    }
  return (
    <div>AddDoctor</div>
  )
}

export default AddDoctor