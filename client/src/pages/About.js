import React from 'react'
import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBinoculars, faFlag,faCrosshairs} from '@fortawesome/free-solid-svg-icons'

function About() {
  return (
    <div>
      <Navbar/>
      <div className='relative'>
        <h2 className='text-center text-lg font-bold'>About Daniel Interior Designs</h2>
        <h3 className='font-bold text-lg'>Who we are</h3>
        <p>Daniel interior designs is a provider of design solutions</p>
        <p>We believe that your home or office should reflect your personal style and preferences. </p>
      </div>

      <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 justify-center items-center py-8 mx-20'>
        <div className='bg-indigo-100 hover:bg-purple-200 shadow-lg w-full text-center md:w-1/3 p-10 rounded-lg transition duration-300 ease-in-out transform:hover-translate-y-1 hover:scale-105'>
         <p>
          <FontAwesomeIcon icon={faCrosshairs} className='w-12 h-12 mb-4 text-green-800'/>
         </p>
          <h2 className='text-xl'>Mission</h2>
          <p>Design lifesytles that comfort and style, enhancing every aspect of your living or working environment.</p>
        </div>
        <div className='bg-violet-300 hover:bg-purple-200 shadow-lg w-full text-center md:w-1/3 p-10 rounded-lg transition duration-300 ease-in-out transform:hover-translate-y-1 hover:scale-105'>
         <p>
          <FontAwesomeIcon icon={faBinoculars} className='w-12 h-12 mb-4 text-violet-600'/>
         </p>
          <h2 className='text-xl'>Vision</h2>
          <p>To turn your design dreams into reality , creating spaces that are not only beautiful but also functional and practical.</p>
        </div>
        <div className='bg-green-100 hover:bg-purple-200 shadow-lg w-full text-center md:w-1/3 p-10 rounded-lg transition duration-300 ease-in-out transform:hover-translate-y-1 hover:scale-105'>
         <p>
          <FontAwesomeIcon icon={faFlag} className='w-12 h-12 mb-4 text-blue-600'/>
         </p>
          <h2 className='text-xl'>Goals</h2>
          <p>We aim to connect people with their unique sense of style, creating spaces that resonate with their personal tastes and preferences.</p>
        </div>
      </div>
      <div className='mx-20'>
          <h2 className='text-center font-bold py-2'>Why choose us?</h2>
          <div className='flex flex-cols-1 md:flex-cols-4 mx-20 p-4 '>
            <div className='shadow-xl w-full mr-3 p-8 hover:bg-blue-600 hover:text-white'>
              <h2 className='font-semibold'>Professional expertise</h2>
              <p>Our team brings extensive knowledge and experience across a wide spectrum of interior design services.</p>
            </div>

            <div className='shadow-2xl w-full p-8 hover:bg-blue-600 hover:text-white'>
              <h2 className='font-semibold'>Top-notch design solutions</h2>
              <p>We offer personalized design solution that transform your space into a distinctive and inspiring setting, tailored specifically to your needs.</p>
            </div>        
          </div>
        </div>
      <div className='bg-gradient-to-r from-gray-400 via-indigo to-gray-100 text-gray-800 text-center p-4 font-bold text-lg'>
          <p>We operate from Kisumu, Kenya, we proudly serve clients locally and beyond, bringing ur passion for design to homes and businesses alike.</p>
      </div>
    </div>
  )
}

export default About
