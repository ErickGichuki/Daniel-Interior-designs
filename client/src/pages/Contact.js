import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div>
      <Navbar/>
      <div className='relative'>
        <img
        src='Daniel.png'
        alt=''
        className='w-full h-64 object-cover'
        />
      </div>
      <div className='bg-green-500 flex flex-col p-12 md:flex-row justify-between items-center'>
        <div className='md:w-1/2 mb-8 md:mb-0'>
          <h2 className='text-2xl font-bold mb-4'>Ready to transform your interiors? Contact us today to schedule consultation nd let us illuminate your space with our expert design services.</h2>
          <p className='text-xl mb-6'>Get in touch</p>
        </div>

      <form className='p-6 bg-dark-blue rounded-lg shadow-md md:w-1/2'>
        <div className='mb-4'>
          <textarea
          className='w-full px-3 py-2 text-gray-800 border rounded-lg focus:outline-none focus:shadow-outline'
          rows='4'
          id='message'
          placeholder='Message'
          ></textarea>
        </div>
        <div className='mb-4'>
          <input 
          name='name'
          placeholder='Enter your name'
          className='w-full px-3 py-2 text-gray-800 border rounded-lg focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <input 
          name='email'
          placeholder='Enter your email'
          className='w-full px-3 py-2 text-gray-800 border rounded-lg focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <input 
          name='phone'
          placeholder='Enter your phone'
          className='w-full px-3 py-2 text-gray-800 border rounded-lg focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='mb-4'>
          <input 
          name='text'
          placeholder='Enter your project'
          className='w-full px-3 py-2 text-gray-800 border rounded-lg focus:outline-none focus:shadow-outline'
          />
        </div>
        <div className='flex items-center justify-center'>
          <button
          type='submit'
          className='bg-white text-teal-600 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-gray-200'>
            SUBMIT
          </button>
        </div>
      </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
