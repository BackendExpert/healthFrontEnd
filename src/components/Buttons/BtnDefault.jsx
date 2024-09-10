import React from 'react'
import './BtnStyle.css'

const BtnDefault = ({ btnTitle }) => {
  return (
    <button className='btn'>
        {btnTitle}
    </button>
  )
}

export default BtnDefault