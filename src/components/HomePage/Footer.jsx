import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import { BsDot, BsEnvelope, BsFacebook, BsGeoAltFill, BsInstagram, BsLinkedin, BsPhoneFill, BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='bg-[#0ea5e9] p-8 px-16'>
        <div className="py-8 md:flex justify-between">
          <h1 className="uppercase text-white text-xl font-bold w-full md:text-left text-center">HealthCare PVT</h1>

          <div className=" md:mt-0 mt-6">
            <div className="flex md:mt-[-20px]">
              <div className="bg-white p-4 rounded-full mx-2">
                  <BsFacebook className='md:h-6 w-auto'/>
              </div>
              <div className="bg-white p-4 rounded-full mx-2">
                  <BsLinkedin className='md:h-6 w-auto'/>
              </div>
              <div className="bg-white p-4 rounded-full mx-2">
                  <BsInstagram className='md:h-6 w-auto'/>
              </div>
              <div className="bg-white p-4 rounded-full mx-2">
                  <BsYoutube className='md:h-6 w-auto'/>
              </div>
            </div>
          </div>
        </div>
        <hr />

        <div className="md:grid grid-cols-4 gap-4 mt-12">
            <div className="">
                <h1 className="text-white font-bold uppercase text-2xl">Company</h1>

                <ul className='pl-8 py-8'> 
                  <li className='py-3'><a href="" className='text-white'>About Us</a></li>
                  <li className='py-3'><a href="" className='text-white'>Services</a></li>
                  <li className='py-3'><a href="" className='text-white'>Find Doctor</a></li>
                  <li className='py-3'><a href="" className='text-white'>About Us</a></li>
                </ul>

            </div>
            <div className="">
                <h1 className="text-white font-bold uppercase text-2xl">Quick Links</h1>
                <ul className='pl-8 py-8'> 
                  <li className='py-3'><a href="" className='text-white'>Doctors</a></li>
                  <li className='py-3'><a href="" className='text-white'>Book Appointment</a></li>
                  <li className='py-3'><a href="" className='text-white'>Patient Portal</a></li>
                </ul>

            </div>
            <div className="">
                <h1 className="text-white font-bold uppercase text-2xl">Contact Us</h1>
                <ul className='pl-8 py-8'> 
                  <li className='py-3 text-white flex'>
                    <BsGeoAltFill className='bg-white h-6 rounded-full w-auto p-1'/>
                    <p className="text-white pl-2">ABC Street, XYZ</p>
                  </li>
                  <li className='py-3 text-white flex'>
                    <BsPhoneFill className='bg-white h-6 rounded-full w-auto p-1'/>
                    <p className="text-white pl-2">+94 711758851</p>
                  </li>
                  <li className='py-3 text-white flex'>
                    <BsEnvelope className='bg-white h-6 rounded-full w-auto p-1'/>
                    <p className="text-white pl-2">health@example.com</p>
                  </li>
                </ul>

            </div>
        </div>

        <hr />

        <div className="pt-3 md:flex justify-between">
            <div className="">
                <p className="text-white">Copyright &copy; 2024  All rights reserved | Developed and Maintained by <a href="" className='text-blue-800 font-bold'>BlackAlphaLabs</a></p>
            </div>
            <div className="flex text-white">
              All Rights Reserved | Terms & Use | Privacy Policy
            </div>
        </div>
    </footer>
  );
}

export default Footer;
