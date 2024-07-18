import React from 'react'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='flex-grow bg-gray-100'>
        <div className='text-center pt-10 max-w-2xl mx-auto'>
          <h1 className='text-4xl font-bold mb-4'>Transform Your Space with Daniel Interior Designs</h1>
          <p className='text-md mb-6'>We believe in creating spaces that inspire and elevate your everyday life. We work closely with you to bring your vision to life, combining functionality with aesthetic appeal.</p>
          <div className='flex flex-col md:flex-row justify-center mt-8 space-y-4 md:space-y-0 md:space-x-4'>
              <button
              className='bg-black text-white p-3 rounded-2xl'
              >
                <a href='/about'>
                <span>Who we are</span>
                <span className='text-yellow-400 mx-2 text-xl'>→</span>
                </a>
              </button>
              <button
              className='border border-yellow-400 text-black p-3 rounded-2xl'>
                <span>Watch video</span>
                <span className='text-black-400 mx-2 text-xl'>→</span>
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
