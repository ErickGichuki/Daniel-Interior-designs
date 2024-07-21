import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
  return (
    <div>
      <Navbar/>
      <div className='relative'>
        <img
        src=''
        alt=''
        className='w-full h-64 object-cover'
        />
        <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-whitefont-bold text-3xl'>Contact Us</h1>
      </div>
      <div className='bg-green-500 flex flex-col p-12 md:flex-row justify-between items-center'>
        <div className='md:w-1/2 mb-8 md:mb-0'>
          <h2 className='text-2xl font-bold mb-4'>Do you have an interior task that needs to be done? Here we are!</h2>
          <p className='text-xl mb-6'>Visit us at our office and have a demo</p>
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
      <div className='bg-gradient-to-r from-indigo-100 via-green-400 to-yellow-100'>
        <p className='text-lg font-bold'>follow us on our social platforms:</p>
        <ul>
          <li>Linkedin</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>Email</li>
        </ul>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact
