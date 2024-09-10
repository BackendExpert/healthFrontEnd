import React from 'react'
import HealthImg from '../../assets/health1.png'
import BtnDefault from '../Buttons/Button'

const HomePage = () => {
  return (
    <div>
        <div className="md:mx-16 mx-8 my-16">
            <div className="md:flex">
                <div className="w-full">
                    <h1 className="font-semibold text-3xl mt-32">Expert Care, ,<br /> When You Need It Most</h1>
                    <p className="mt-6">Providing Comprehensive Medical Services with a Personal Touch</p>

                    <div className="mt-12">
                        <div className="flex">
                            <BtnDefault btnTitle={"Book an Appointment"}/>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <img src={HealthImg} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage