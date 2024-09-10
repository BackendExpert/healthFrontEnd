import React from 'react'
import Patient from '../../assets/Patient.png'

const Testimonials = () => {
  return (
    <div data-aos="zoom-in">
        <h1 className="font-semibold text-2xl text-center">What Our Patients Say</h1>

        <div  className="text-gray-500 text-center my-4">
            "Don’t just take our word for it—hear from our patients about their experiences at  <span className="font-bold text-[#0ea5e9]">HealthCare PVT</span>. We’re proud of the positive impact we’ve had on our patients’ lives and are committed to providing exceptional care."
        </div>

        <div className="">
            <div className="bg-blue-300 p-8 rounded-2xl my-4">
                <p className="text-white">
                    "The care I received was outstanding. The staff was incredibly supportive and attentive throughout my treatment." — <span className='font-semibold'>Kamal Perera</span>
                </p>
            </div>

            <div className="bg-blue-300 p-8 rounded-2xl my-4">
                <p className="text-white">
                    <span className="font-semibold">John </span>  —  "I felt truly cared for and valued. The team made sure all my concerns were addressed with compassion and professionalism."
                </p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials