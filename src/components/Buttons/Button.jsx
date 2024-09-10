import React from 'react'
import './BtnStyle.css'

const Button = ({ buttonTitle }) => {
  return (
    <button className='btn'>
        {buttonTitle}
    </button>
  )
}

export default Button