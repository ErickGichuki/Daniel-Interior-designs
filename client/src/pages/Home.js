import React from 'react'
import Navbar from '../components/Navbar'


function Home() {
  return (
    <div>
      <Navbar/>
      <div className='bg-blue-200 flex flex-col md:flex-row p-4'>
        <div className='flex flex-col md:w-1/2 p-4'>
          <h1 className='font-bold text-2xl mb-2'>Discover the best Interior Designs around you today</h1>
          <p className='mb-4'>Where quality is delivered to the maximum!</p>
          <div className='flex space-x-4'>
            <button
            className='bg-green-500 text-white py-2 px-4 rounded-lg'
            >
              Watch video
            </button>
            <button
            className='bg-blue-700 text-white py-2 px-4 rounded-lg'
            >
              Visit us
            </button>
          </div>
        </div>
        <div className='flex items-center justify-end p-2 md:w-1/2'>
          <img
          src='/Daniel.png'
          alt='daniel'
          className='w-40 rounded-xl'
          />
        </div>
      </div>
      <div>
        <div className='mb-4 justify-center items-center'>
          <h2 className='font-bold text-xl mb-2'>Featured on</h2>
          <div className='flex flex-row w-3/4 space-x-4 bg-dark-blue ml-4 text-white rounded text-center py-3 justify-center md:flex flex-row w-3/4'>
            <p>Gypsum</p>
            <p>Marble painting</p>
            <p>Project Management</p>
            <p>Furniture speciality</p>
          </div>
        </div>
        <div className='bg-gray-100'>
          <h2 className='text-center font-semibold pt-2'>What we do</h2>
          <p className='text-center font-bold'>We deliver the following solutions</p>
          <div className='flex flex-col md:flex-row gap-4 p-2'>
            <div className='shadow-2xl rounded-md p-4'>
              <h1 className='font-bold text-center'>Interior Lighting & Decor</h1>
              <p>Marble painting</p>
              <p>Gypsum lighting</p>
            </div>
            <div className='shadow-2xl rounded p-4'>
              <h1 className='text-center font-bold'>Kitchen and space optimization</h1>
              <p>Modern kitchen design</p>
              <p>space planning</p>
            </div>
            <div className='shadow-2xl rounded p-4'>
              <h1 className='text-center font-bold'>Painting and Flooring</h1>
              <p>Painting decos</p>
              <p>Flooring Epoxy Decos</p>
            </div>
            <div className='shadow-2xl rounded p-4'>
              <h1 className='text-center font-bold'>Project Execution</h1>
              <p>We do manage projects</p>
              <p>Furniture speciality</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home