import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-8 py-3 items-center bg-rose-600'>
        <h1 className='text-xl font-bold text-white'>ProCertify</h1>
        <h1 className='text-2xl font-bold text-white'>Examination Portal</h1>
        <h1 className='text-lg font-semibold text-white'>Time Remaining: 02:00:00</h1>
    </div>
  )
}

export default Navbar