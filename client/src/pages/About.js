import React from 'react'
import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBinoculars, faFlag,faCrosshairs} from '@fortawesome/free-solid-svg-icons'

function About() {
  return (
    <div>
      <Navbar/>
      <div className=''>
        <h2 className='text-center'>Welcome to Daniel Interior Designs</h2>
        <h3 className=''>Who we are</h3>
      </div>
      <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 justify-center items-center m-8'>
        <div className='bg-indigo-100 hover:bg-purple-200 shadow-lg w-full text-center md:w-1/3 p-10 rounded-lg transition duration-300 ease-in-out transform:hover-translate-y-1 hover:scale-105'>
         <p>
          <FontAwesomeIcon icon={faCrosshairs} className='w-12 h-12 mb-4 text-green-800'/>
         </p>
          <h2 className='text-xl'>Mission</h2>
          <p>Design your lifestyle to the max</p>
        </div>
        <div className='bg-violet-300 hover:bg-purple-200 shadow-lg w-full text-center md:w-1/3 p-10 rounded-lg transition duration-300 ease-in-out transform:hover-translate-y-1 hover:scale-105'>
         <p>
          <FontAwesomeIcon icon={faBinoculars} className='w-12 h-12 mb-4 text-violet-600'/>
         </p>
          <h2 className='text-xl'>Vision</h2>
          <p>Turning dreams to reality</p>
        </div>
        <div className='bg-green-100 hover:bg-purple-200 shadow-lg w-full text-center md:w-1/3 p-10 rounded-lg transition duration-300 ease-in-out transform:hover-translate-y-1 hover:scale-105'>
         <p>
          <FontAwesomeIcon icon={faFlag} className='w-12 h-12 mb-4 text-blue-600'/>
         </p>
          <h2 className='text-xl'>Goals</h2>
          <p>To make our clients happy</p>
        </div>
      </div>
      <div>
          <h2 className='text-center text-lg font-bold'>Area of operation</h2>
          <p>We are located in Kisumu Kenya</p>
        </div>
    </div>
  )
}

export default About
