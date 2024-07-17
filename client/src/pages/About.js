import React from 'react'
import Navbar from '../components/Navbar'

function About() {
  return (
    <div>
      <Navbar/>
      <div className=''>
        <h2 className='text-center'>Welcome to Daniel Interior Designs</h2>
        <h3 className=''>Have you heard about us already?</h3>
        <p>Learn more about us today</p>
      </div>
      <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 justify-center items-center m-8'>
        <div className='bg-gradient-to-r from-yellow-200 via-blue-500 to-green-400 shadow-lg w-full text-center md:w-1/3 p-10 rounded-lg'>
          <h2 className='text-xl'>Mission</h2>
          <p>Design your lifestyle</p>
        </div>
        <div className='shadow-lg w-full text-center md:w-1/3 p-10 rounded-lg'>
          <h2 className='text-xl'>Vision</h2>
          <p>Turning dreams to reality</p>
        </div>
        <div className='shadow-lg w-full text-center md:w-1/3 p-10 rounded-lg'>
          <h2 className='text-xl'>Goals</h2>
          <p>To make our clients happy</p>
        </div>
      </div>
      <div className=''>
          <h2 className='text-center text-lg'>Testimonials</h2>
          <p>Read what our client say about us</p>
          <div className='border shadow-lg text-center rounded-md'>
            <h2 className='text-lg'>Erick</h2>
            <p className='text-md'>I have experienced the best solutions from Daniel Interior Design. Highly recommend</p>
          </div>
      </div>
    </div>
  )
}

export default About
