import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBinoculars, faBullseye,faCrosshairs} from '@fortawesome/free-solid-svg-icons'

function About() {
  return (
    <div>
      <Navbar/>
      <div className='relative py-10 bg-gray-100'>
        <h2 className='text-center text-3xl mb-2 font-bold text-gray-800'>About Daniel Interior Designs</h2>
        <h3 className='font-bold text-2xl text-center mb-4 text-gray-700'>Who We Are</h3>
        <p className='text-center text-lg mb-4 text-gray-600'>Daniel interior designs is a provider of bespoke design solutions</p>
        <p className='text-center text-lg mb-6 text-gray-600'>We believe that your home or office should reflect your personal style and preferences. </p>
      </div>

      <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 justify-center items-center py-8 px-4 md:px-20'>
        <div className='bg-indigo-50 hover:bg-indigo-100 shadow-lg w-full text-center md:w-1/3 p-8 rounded-lg transition-transform duration-300 ease-in-out transform:hover-translate-y-1 hover:scale-105'>
         <p>
          <FontAwesomeIcon icon={faCrosshairs} className='w-12 h-12 mb-4 text-green-700'/>
         </p>
          <h3 className='text-xl font-semibold mb-2 text-gray-800'>Mission</h3>
          <p className='text-gray-600'>Design lifesytles that comfort and style, enhancing every aspect of your living or working environment.</p>
        </div>
        <div className='bg-purple-50 hover:bg-purple-100 shadow-lg w-full text-center md:w-1/3 p-8 rounded-lg transition-transform duration-300 ease-in-out transform:hover-translate-y-1 hover:scale-105'>
         <p>
          <FontAwesomeIcon icon={faBinoculars} className='w-12 h-12 mb-4 text-purple-600'/>
         </p>
          <h3 className='text-xl font-semibold mb-2 text-gray-800'>Vision</h3>
          <p className='text-gray-600'>To turn your design dreams into reality, creating spaces that are not only beautiful but also functional and practical.</p>
        </div>
        <div className='bg-green-50 hover:bg-green-100 shadow-lg w-full text-center md:w-1/3 p-10 rounded-lg transition duration-300 ease-in-out transform:hover-translate-y-1 hover:scale-105'>
         <p>
          <FontAwesomeIcon icon={faBullseye} className='w-12 h-12 mb-4 text-blue-600'/>
         </p>
          <h3 className='text-xl font-semibold mb-2 text-gray-800'>Goals</h3>
          <p className='text-gray-600'>We aim to connect people with their unique sense of style, creating spaces that resonate with their personal tastes & preferences.</p>
        </div>
      </div>

      <div className='mx-4 md:mx-20 py-8'>
          <h2 className='text-center text-2xl mb-4 font-bold text-gray-800'>Why choose us?</h2>
          <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0'>
            <div className='bg-white shadow-xl w-full p-8 hover:bg-blue-600 hover:text-white transition-colors duration-300 ease-in-out'>
              <h3 className='font-semibold text-xl mb-2'>Professional Expertise</h3>
              <p>Our team brings extensive knowledge and experience across a wide spectrum of interior design services.</p>
            </div>

            <div className='bg-white shadow-2xl w-full p-8 hover:bg-blue-600 hover:text-white transition-colors duration-300 ease-in-out'>
              <h3 className='font-semibold text-xl mb-2'>Top-Notch Design Solutions</h3>
              <p>We offer personalized design solution that transform your space into a distinctive and inspiring setting, tailored specifically to your needs.</p>
            </div>        
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default About
