import React from 'react'
import ServiceImg from '../../assets/healthService.png'
import { BsDot } from 'react-icons/bs'

const Services = () => {
  return (
    <div>
        <h1 className="font-semibold text-2xl text-center">Services</h1>

        <div className="md:flex my-4">
            <div data-aos="fade-right" className="w-full text-gray-500 mt-8">
                At <span className="font-bold text-[#0ea5e9]">HealthCare PVT</span>, we offer a comprehensive range of medical services to meet your needs. Our expert team provides everything from routine check-ups to specialized treatments. Explore our services below to see how we can assist you on your health journey.
            
                <div className="mt-8">
                    <div className="flex my-2">
                        <BsDot className='h-8 w-auto'/> <p className="mt-1 text-gray-500"><span className="font-semibold">Primary Care : </span> General health check-ups and ongoing care.</p>
                    </div>
                    <div className="flex my-2">
                        <BsDot className='h-8 w-auto'/> <p className="mt-1 text-gray-500"><span className="font-semibold">Pediatrics : </span> Specialized care for children and adolescents.</p>
                    </div>
                    <div className="flex my-2">
                        <BsDot className='h-8 w-auto'/> <p className="mt-1 text-gray-500"><span className="font-semibold">Orthopedics : </span> Treatment for musculoskeletal issues.</p>
                    </div>
                    <div className="flex my-2">
                        <BsDot className='h-8 w-auto'/> <p className="mt-1 text-gray-500"><span className="font-semibold">Cardiology : </span> Heart health assessments and treatments.</p>
                    </div>
                    <div className="flex my-2">
                        <BsDot className='h-8 w-auto'/> <p className="mt-1 text-gray-500"><span className="font-semibold">Urgent Care : </span> Immediate care for non-life-threatening conditions.</p>
                    </div>
                </div>

            </div>
            <div data-aos="fade-left" className="w-full md:block hidden">
                <center>
                    <img src={ServiceImg} alt="" className='h-40 w-auto mt-16'/>
                    <h1 className="font-semibold text-2xl">What We Offer</h1>
                </center>
            </div>
        </div>
    </div>
  )
}

export default Services