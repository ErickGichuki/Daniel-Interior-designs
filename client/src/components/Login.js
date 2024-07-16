import React from 'react'
import { Link } from 'react-router-dom'

function Login() {

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-green-600 via-yellow-600 to-red-600'>
      <div className='flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden'>
        <div className='md:w-2/3 bg-black p-8'>
            <h2 className='text-white text-4xl font-bold mb-4'>Transform your space with us</h2>
            <p className='text-white mb-6'>Wondering where to find a company that designs your dream interior solutions?</p>
            <p className='text-white mb-4'>Worry no more we are here to deliver the best solution</p>
            <div className='flex justify-end'>
              <img src='/tony.png' alt='tony' className='w-40 border rounded-2xl pulse'/>
            </div>
        </div>
        <div className='md:w-1/3 p-8 border'>
            <h3 className='text-2xl font-bold mb-4'>Welcome to Daniel Interior Designs</h3>
            <form>
              <div className='mb-4'>
                <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none fcous:shadow-outline' type='email' placeholder='Enter your email'/>
                <input className='mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none fcous:shadow-outline' type='password'placeholder='Enter your password'/>
              </div>
              <button className='bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline'>
                Sign In
              </button>
              <p className='text-center text-gray-500 text-sm mt-4'>Don't have an account? <Link to='/signup' className='text-green-600 hover:text-green-700'>Signup here</Link></p>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
