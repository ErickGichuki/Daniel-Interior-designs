import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp, faXTwitter, faLinkedin, famail} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <div className='bg-dark-blue'>
     <div className='container mx-auto px-6 py-12'>
     <div className='flex flex-col md:flex-row justify-between'>
      <div className='text-white mb-8 md:mb-0 md:w-1/3'>
        <h2 className='text-xl font-semibold mb-4'>Talk with us today</h2>
        <p className='mb-6'>
          Let's connect on social media platforms for insights, latest news and engaging discussions.
        </p>
        <div className='flex space-x-4'>
          <a href='' className='hover:opacity-75'>
            <FontAwesomeIcon icon={faFacebook} className='rounded-full bg-blue-500 p-3 text-white'/>
          </a>
          <a href='' className='hover:opacity-75'>
            <FontAwesomeIcon icon={faXTwitter} className='rounded-full bg-black p-3 text-white'/>
          </a>
          <a href=' https://www.instagram.com/danielinteriors254?igsh=YzljYTk1ODg3Zg==' className='hover:opacity-75'>
            <FontAwesomeIcon icon={faInstagram} className='rounded-full bg-pink-600 p-3 text-white'/>
          </a>
          <a href='https://wa.me/message/5ASRCZOLWA2NP1' className='hover:opacity-75'>
            <FontAwesomeIcon icon={faWhatsapp} className='rounded-full bg-green-600 p-3 text-white'/>
          </a>
          <a href='mailto:danielinteriordesigns@gmail.com' className='hover:opacity-75'>
            <FontAwesomeIcon icon={faEnvelope} className='rounded-full bg-gray-600 p-3 text-white'/>
          </a>
        </div>
      </div>
      <div className='text-white mb-8 md:mb-0'>
        <h2 className='font-bold text-lg mb-4'>Useful Links</h2>
         <ul className='list-none space-y-3'>
            <li><a href='/home' className='hover:text-green-500'>Home</a></li>
            <li><a href='/services' className='hover:text-green-500'>Services</a></li>
            <li><a href='/about' className='hover:text-green-500'>About</a></li>
            <li><a href='/contact' className='hover:text-green-500'>Contact Us</a></li>
         </ul>
      </div>
     
      <div className='text-white'>
        <h2 className='text-lg font-bold mb-2'>Solutions</h2>
        <ul className='list-none space-y-3'>
            <li><a href='#' className='hover:text-underline'>Interior lighting</a></li>
            <li><a href='#' className='hover:text-underline'>Space optimization</a></li>
            <li><a href='#' className='hover:text-underline'>Painting & Flooring</a></li>
            <li><a href='#' className='hover:text-underline'>Project Execution</a></li>
        </ul>
      </div>

    </div>
    </div>
    
     <div className='border-t border-gray-600 text-white text-center py-6'>
      <p>&copy; {new Date().getFullYear()} Daniel Interior Designs</p>
     </div>
     </div>
  )
}

export default Footer
