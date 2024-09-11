import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const checkAuth = async (e) => {
            try{
                const token = localStorage.getItem('token')

                if(!token){
                    navigate('/PatientPortal')
                    window.localStorage.reload()
                }

                const response = await axios.get(import.meta.env.VITE_APP_API + '/dashboard/Auth', {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                });
            }
            catch(err) {
                console.log(err)
            }
        }
        checkAuth()
    }, [navigate])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard