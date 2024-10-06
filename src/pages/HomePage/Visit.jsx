import React from 'react'
import Button from '../../components/Buttons/Button'

const Visit = () => {
  return (
    <div data-aos="zoom-out-down">
        <h1 className="font-semibold text-2xl text-center">Schedule Your Visit</h1>

        <p className="text-gray-500 mt-8 text-center">
        "Ready to take the next step in your healthcare journey? Schedule your appointment with our expert team today! Simply use our online booking system or contact us directly to set up a time that works for you."
        </p>

        <center className='my-4'>
            <Button buttonTitle={"Book Now"}/>

            <p className="font-semibold text-gray-500">
                or
            </p>

            <p className="text-gray-500">Prefer to speak with someone? Call us at <span className='font-semibold'>+94 711758851</span> or email us at <span className='font-semibold'>health@example.com</span>.</p>
        </center>
    </div>
  )
}

export default Visit