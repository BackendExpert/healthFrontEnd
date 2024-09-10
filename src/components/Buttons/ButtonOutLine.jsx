import React from 'react'

const ButtonOutLine = ({ buttonTitle }) => {
  return (
    <button className='bg-none py-2 px-8 rounded-full duration-500 hover:text-white hover:bg-[#0ea5e9] border border-[#0ea5e9]'>
        {buttonTitle}
    </button>
  )
}

export default ButtonOutLine