import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='p-4 bg-dark-blue text-white'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between'>
          <div>
            <Link to='/home'>
              <img src='/tony.png' alt='logo' className='w-12 rounded-3xl'/>
            </Link>
          </div>
          <p className='ml-3'>Daniel Interior Designs</p>
          <div className='flex ml-auto'>
            <NavLink to='/home' className='mr-6 hover:text-green-500'>Home</NavLink>
            <NavLink to='/about' className='mr-6 hover:text-green-500'>About</NavLink>
            <NavLink to='/services' className='mr-6 hover:text-green-500'>Services</NavLink>
            <NavLink to='/contact' className='mr-6 hover:text-green-500'>Contact us</NavLink>
            <NavLink to='/' className='mr-6 hover:text-green-500'>Logout</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
