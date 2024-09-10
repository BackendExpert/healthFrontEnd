import React from 'react'
import AboutImge from '../../assets/health2.png'

const AboutUs = () => {
  return (
    <div>
        <h1 className="font-semibold text-2xl text-center">About Us</h1>

        <div className="md:flex my-4">
            <div data-aos="fade-up" className="w-full md:block hidden">
                <center>
                    <img src={AboutImge} alt="" className='h-40 w-auto '/>
                    <h1 className="font-semibold text-2xl">Who We Are</h1>
                </center>
            </div>
            <div data-aos="fade-down" className="w-full text-gray-500 mt-8">
                "Welcome to , <span className="font-bold text-[#0ea5e9]">HealthCare PVT</span> where our mission is to provide compassionate and high-quality healthcare services to our community. Our dedicated team of healthcare professionals is committed to ensuring your health and well-being. Learn more about our history, values, and the experts behind our care."
            </div>
        </div>
    </div>
  )
}

export default AboutUs