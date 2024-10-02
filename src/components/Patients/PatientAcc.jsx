import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import secureLocalStorage from "react-secure-storage";

const PatientAcc = () => {
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");
    const navigate = useNavigate()
    
    if(RoleUser === "SuperAdmin"){
        return (
            <div>
                <h1 className="font-semibold uppercase text-xl">Patient Accounts</h1>
                <div className="bg-white p-4 my-2 rounded-md shadow-md">
        
                </div>
            </div>
        )
    }
    else{
        useEffect(() => {
            localStorage.clear()
            navigate('/PatientPortal')
        }, [])
    }
}

export default PatientAcc