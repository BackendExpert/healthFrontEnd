import React from 'react'
import './BtnStyle.css'

const Button = ({ buttonTitle }) => {
  return (
    <button className='bg-[#0ea5e9] py-2 px-8 rounded-full text-white duration-500 hover:bg-white hover:text-[#0ea5e9] hover:border-1 hover:border-[#0ea5e9]'>
        {buttonTitle}
    </button>
  )
}

export default Button